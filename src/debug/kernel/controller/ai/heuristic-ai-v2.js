(function() {

Dagaz.AI.NOISE_FACTOR = 10;
Dagaz.AI.AI_FRAME     = 1000;

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "heuristic") || (type == "common") || (type == "1") || (type == "2") || (type == "3") || (type == "4")) {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var moves = _.chain(ctx.board.moves)
 .map(function(m) {
      return {
         move:   m,
         weight: Dagaz.AI.heuristic(this, ctx.design, ctx.board, m)
      };
  }, this)
 .filter(function(n) {
      return n.weight >= 0;
  })
 .sortBy(function(n) {
      return -n.weight;
  })
 .map(function(n) {
      return n.move;
  }).value();
  var r  = null;
  var mx = null;
  ctx.timestamp = Date.now();
  for (var i = 0; i < moves.length; i++) {
       if ((r !== null) && (Date.now() - ctx.timestamp >= Dagaz.AI.AI_FRAME)) break;
       var b = Dagaz.Model.apply(ctx.design, ctx.board, moves[i]);
       var w = Dagaz.AI.eval(this, ctx.design, b, ctx.board.player);
       if (Dagaz.AI.NOISE_FACTOR > 1) {
           w *= Dagaz.AI.NOISE_FACTOR;
           w += _.random(0, Dagaz.AI.NOISE_FACTOR - 1);
       }
       if ((r === null) || (w > mx)) {
            console.log("Move: " + moves[i].toString() + ", weight = " + w);
            r  = moves[i];
            mx = w;
       }
  }
  if (r !== null) {
      return {
           done: true,
           move: r,
           time: Date.now() - ctx.timestamp,
           ai:  "heuristic"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();