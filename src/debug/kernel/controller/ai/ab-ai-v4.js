(function() {

var MAXVALUE          = 1000000;

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.NOISE_FACTOR = 10;
Dagaz.AI.NO_MOVE_GOAL = -1;

function AbAi(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "ab") || (type == "common") || (type == "1") || (type == "2") || (type == "3") || (type == "4")) {
      return new AbAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

AbAi.prototype.expand = function(node, ctx) {
  if (_.isUndefined(node.cache)) {
      node.board.moves = Dagaz.AI.generate(ctx, node.board);
      node.cache = _.chain(node.board.moves)
       .map(function(m) {
           move:   m,
           board:  node.board.apply(m),
           weight: Dagaz.AI.heuristic(this, ctx.design, node.board, m) * Dagaz.AI.NOISE_FACTOR +
                   _.random(0, Dagaz.AI.NOISE_FACTOR - 1)
        }, this)
       .sortBy(function(n) {
           return -n.weight;
        }).value();
  }
}

var goalVector = function(design, goal, player) {
  var r = _.range(design.getPlayersCount());
  if (player - 1 <= r.length) {
      r[player - 1] = goal * MAXVALUE;
  }
  return r;
}

var eval = function(values, player) {
  var r = 0;
  for (var p = 0; p < values.length; p++) {
      if (p == player - 1) {
          r += values[p];
      } else {
          r -= values[p];
      }
  }
  return r;
}

AbAi.prototype.ab = function(node, ctx, level) {
  if (level >= Dagaz.AI.discardVector.length) {
      return Dagaz.AI.getEval(ctx.design, node.board);
  }
  var g = Dagaz.Model.checkGoals(ctx.design, node.board, ctx.board.player);
  if (g !== null) {
      return goalVector(ctx.design, g, ctx.board.player);
  }
  this.expand(node, ctx);
  if (node.cache.length == 0) {
      if (node.board.player == ctx.board.player) {
          return goalVector(ctx.design, Dagaz.AI.NO_MOVE_GOAL, mode.board.player);
      } else {
          return goalVector(ctx.design, -Dagaz.AI.NO_MOVE_GOAL, mode.board.player);
      }
  }
  var cnt = Dagaz.AI.discardVector[level];
  if (cnt == 0) {
      cnt = node.cache.length;
  }
  node.best = null;
  var eval  = null;
  for (var i = 0; i < cnt; i++) {
       var v = this.ab(node.cache[i], ctx, level + 1);
       var e = eval(v, node.board.player);
       if ((eval === null) || (eval < e)) {
           node.best = i;
           eval = v;
       }
  }
  return eval;
}

AbAi.prototype.setCache = function(ctx, node) {
  ctx.board = node.board;
  Dagaz.AI.cache = node;
}

AbAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  if (!_.isUndefined(Dagaz.AI.cache) && (board.zSign != 0)) {
      for (var i = 0; i < Dagaz.AI.cache.length - 1; i++) {
          if (Dagaz.AI.cache[i].board.zSign == board.zSign) {
              if (!_.isUndefined(board.move)) {
                  if (board.move.toString() != Dagaz.AI.cache[i].move.toString()) continue;
              }
              if (!_.isUndefined(Dagaz.AI.cache[i].cache)) {
                  ctx.board = Dagaz.AI.cache[i].board;
                  Dagaz.AI.cache = Dagaz.AI.cache[i].cache;
                  return;
              }
          }
      }
  }
  ctx.board = board;
  delete Dagaz.AI.cache;
}

AbAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (_.isUndefined(Dagaz.AI.cache)) {
      this.expand(ctx, ctx);
      Dagaz.AI.cache = ctx.cache;
  } else {
      ctx.cache = Dagaz.AI.cache;
  }
  this.ab(ctx, ctx, 0);
  if (ctx.best !== null) {
      var r = {
           done: true,
           move: Dagaz.AI.cache[ctx.best].move,
           time: Date.now() - ctx.timestamp,
           ai:  "ab"
      };
      this.setCache(ctx, Dagaz.AI.cache[ctx.best]);
      return r;
  } else {
      delete Dagaz.AI.cache;
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
