(function() {

var Z2J_VERSION = 1;

Dagaz.Model.deferredStrike  = false;
Dagaz.Model.discardCascades = false;
Dagaz.Model.forkMode        = false;
Dagaz.Model.passPartial     = false;
Dagaz.Model.passTurn        = 0;
Dagaz.Model.sharedPieces    = false;
Dagaz.Model.recycleCaptures = false;
Dagaz.Model.smartFrom       = false;
Dagaz.Model.smartTo         = false;

Dagaz.Model.checkVersion = function(design, name, value) {  
  if (name == "z2j") {
     if (value > Z2J_VERSION) {
         design.failed = true;
     }
  } else {
     if ((name != "zrf")                && 
         (name != "pass-turn")          &&
         (name != "pass-partial")       &&
         (name != "moves-limit")        &&
         (name != "discard-cascades")   &&
         (name != "animate-captures")   &&
         (name != "animate-drops")      &&
         (name != "highlight-goals")    &&
         (name != "prevent-flipping")   &&
         (name != "progressive-levels") &&
         (name != "selection-screen")   &&
         (name != "show-moves-list")    &&
         (name != "smart-moves")        &&
         (name != "recycle-captures")   &&
         (name != "silent-?-moves")) {
         design.failed = true;
     }
     if (name == "smart-moves") {
         if ((value == "from") || (value == "true")) {
            Dagaz.Model.smartFrom = true;
         }
         if ((value == "to") || (value == "true")) {
            Dagaz.Model.smartTo = true;
         }
     }
     if ((name == "recycle-captures") && (value == "true")) {
         Dagaz.Model.recycleCaptures = true;
     }
     if ((name == "discard-cascades") && (value == "true")) {
         Dagaz.Model.discardCascades = true;
     }
     if ((name == "pass-partial") && (value == "true")) {
         Dagaz.Model.passPartial = true;
     }
     if ((name == "pass-turn") && (value == "true")) {
         Dagaz.Model.passTurn = 1;
     }
     if ((name == "pass-turn") && (value == "forced")) {
         Dagaz.Model.passTurn = 2;
     }
     if (name == "moves-limit") {
         Dagaz.Model.movesLimit = value;
     }
  }
}

Dagaz.Model.checkOption = function(design, name, value) {
  if (design.options[name] == value) {
      return true;
  }
}

Dagaz.Model.ZRF_JUMP      = 0;
Dagaz.Model.ZRF_IF        = 1;
Dagaz.Model.ZRF_FORK      = 2;
Dagaz.Model.ZRF_FUNCTION  = 3;
Dagaz.Model.ZRF_IN_ZONE   = 4;
Dagaz.Model.ZRF_GET_FLAG  = 5;
Dagaz.Model.ZRF_SET_FLAG  = 6;
Dagaz.Model.ZRF_GET_PFLAG = 7;
Dagaz.Model.ZRF_SET_PFLAG = 8;
Dagaz.Model.ZRF_GET_ATTR  = 9;
Dagaz.Model.ZRF_SET_ATTR  = 10;
Dagaz.Model.ZRF_PROMOTE   = 11;
Dagaz.Model.ZRF_MODE      = 12;
Dagaz.Model.ZRF_ON_BOARDD = 13;
Dagaz.Model.ZRF_ON_BOARDP = 14;
Dagaz.Model.ZRF_PARAM     = 15;
Dagaz.Model.ZRF_LITERAL   = 16;
Dagaz.Model.ZRF_VERIFY    = 20;
Dagaz.Model.ZRF_SET_POS   = 21;
Dagaz.Model.ZRF_NAVIGATE  = 22;
Dagaz.Model.ZRF_OPPOSITE  = 23;
Dagaz.Model.ZRF_FROM      = 24;
Dagaz.Model.ZRF_TO        = 25;
Dagaz.Model.ZRF_CAPTURE   = 26;
Dagaz.Model.ZRF_FLIP      = 27;
Dagaz.Model.ZRF_END       = 28;

Dagaz.Model.ZRF_NOT       = 0;
Dagaz.Model.ZRF_IS_EMPTY  = 1;
Dagaz.Model.ZRF_IS_ENEMY  = 2;
Dagaz.Model.ZRF_IS_FRIEND = 3;
Dagaz.Model.ZRF_IS_LASTF  = 4;
Dagaz.Model.ZRF_IS_LASTT  = 5;
Dagaz.Model.ZRF_MARK      = 6;
Dagaz.Model.ZRF_BACK      = 7;
Dagaz.Model.ZRF_PUSH      = 8;
Dagaz.Model.ZRF_POP       = 9;

Dagaz.Model.commands = {};

Dagaz.Model.commands[Dagaz.Model.ZRF_JUMP] = function(gen, param) {
   return param - 1;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_IF] = function(gen, param) {
   if (gen.stack.length == 0) {
       return null;
   }
   var f = gen.stack.pop();
   if (f) {
      return param - 1;
   } else {
      return 0;
   }
}

Dagaz.Model.commands[Dagaz.Model.ZRF_FORK] = function(gen, param) {
   var g = gen.clone();
   g.cmd += param - 1;
   gen.board.addFork(g);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_FUNCTION] = function(gen, param) {
  var game = gen.board.game;
  if (!_.isUndefined(game.functions[param])) {
     return (game.functions[param])(gen);
  }
  return null;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_IN_ZONE] = function(gen, param) {
   var player = gen.board.player;
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.design.inZone(param, player, gen.pos));
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_GET_FLAG] = function(gen, param) {
   gen.stack.push(gen.getValue(param, -1));
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_SET_FLAG] = function(gen, param) {
   if (gen.stack.length == 0) {
       return null;
   }
   value = gen.stack.pop();
   gen.setValue(param, -1, value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_GET_PFLAG] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.getValue(param, gen.pos));
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_SET_PFLAG] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.stack.length == 0) {
       return null;
   }
   value = gen.stack.pop();
   gen.setValue(param, gen.pos, value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_GET_ATTR] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   var value = gen.getAttr(param, gen.pos);
   if (value === null) {
       return null;
   }
   gen.stack.push(value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_SET_ATTR] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.stack.length == 0) {
       return null;
   }
   var value = gen.stack.pop();
   gen.setAttr(param, gen.pos, value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_PROMOTE] = function(gen, param) {
   if (_.isUndefined(gen.piece)) {
       return null;
   }
   gen.piece = gen.piece.promote(param);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_MODE] = function(gen, param) {
   gen.mode = param;
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_ON_BOARDD] = function(gen, param) {
   var player = gen.board.player;
   var pos = gen.pos;
   if (pos === null) {
       return null;
   }
   pos = gen.design.navigate(player, pos, param);
   if (pos !== null) {
       gen.stack.push(true);
   } else {
       gen.stack.push(false);
   }
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_ON_BOARDP] = function(gen, param) {
   if ((param >= 0) && (param < gen.design.positions.length)) {
       gen.stack.push(true);
   } else {
       gen.stack.push(false);
   }
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_PARAM] = function(gen, param) {
   var value = gen.params[param];
   gen.stack.push(value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_LITERAL] = function(gen, param) {
   gen.stack.push(param);
   return 0;
}

Dagaz.Model.functions = {};

Dagaz.Model.functions[Dagaz.Model.ZRF_VERIFY] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var f = gen.stack.pop();
   if (f) {
       return 0;
   } else {
       return null;
   }
}

Dagaz.Model.functions[Dagaz.Model.ZRF_SET_POS] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var pos = gen.stack.pop();
   if (pos < gen.design.positions.length) {
      gen.pos = pos;
      return 0;
   } else {
      return null;
   }
}

Dagaz.Model.functions[Dagaz.Model.ZRF_NAVIGATE] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var dir = gen.stack.pop();
   var player = gen.board.player;
   var pos = gen.pos;
   if (pos === null) {
       return null;
   }
   pos = gen.design.navigate(player, pos, dir);
   if (pos === null) {
       return null;
   }
   if (pos < gen.design.positions.length) {
      gen.pos = pos;
      return 0;
   } else {
      return null;
   }
}

Dagaz.Model.functions[Dagaz.Model.ZRF_OPPOSITE] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var dir = gen.stack.pop();
   if (_.isUndefined(gen.design.players[0])) {
       return null;
   }
   if (_.isUndefined(gen.design.players[0][dir])) {
       return null;
   }
   dir = gen.design.players[0][dir];
   gen.stack.push(dir);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_FROM] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.getPiece(gen.pos) === null) {
       return null;
   }
   gen.from  = gen.pos;
   gen.piece = gen.getPiece(gen.pos);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_TO] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (_.isUndefined(gen.piece)) {
       return null;
   }
   gen.movePiece(gen.from, gen.pos, gen.piece);
   delete gen.from;
   delete gen.piece;
   gen.generated = true;
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_CAPTURE] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.getPiece(gen.pos) === null) {
       return 0;
   }
   gen.capturePiece(gen.pos);
   gen.generated = true;
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_FLIP] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.getPiece(gen.pos) === null) {
       return null;
   }
   var piece = gen.getPiece(gen.pos).flip();
   gen.movePiece(gen.pos, gen.pos, piece);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_END] = function(gen) {
   var board = gen.board;
   if (gen.generated) {
       if (gen.moveType == 2) {
           board.changeMove(gen.move);
       }
       if (gen.moveType == 1) {
           board.addMove(gen.move);
       }
   }
   gen.moveType = 0;
   return null;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_NOT] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var f = gen.stack.pop();
   gen.stack.push(!f);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_EMPTY] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   var piece = gen.getPiece(gen.pos);
   gen.stack.push(piece === null);
   return 0;
}

Dagaz.Model.isFriend = function(piece, player) {
   return (piece.player == player);
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_ENEMY] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   var piece  = gen.getPiece(gen.pos);
   if (piece === null) {
       gen.stack.push(false);
       return 0;
   }
   var player = gen.board.player;
   gen.stack.push(!Dagaz.Model.isFriend(piece, player));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_FRIEND] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   var piece  = gen.getPiece(gen.pos);
   if (piece === null) {
       gen.stack.push(false);
       return 0;
   }
   var player = gen.board.player;
   gen.stack.push(Dagaz.Model.isFriend(piece, player));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_LASTF] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.isLastFrom(gen.pos));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_LASTT] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.isLastTo(gen.pos));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_MARK] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   gen.setMark();
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_BACK] = function(gen) {
   var pos = gen.getMark();
   if (pos !== null) {
      gen.pos = pos;
   } else {
      return null;
   }
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_PUSH] = function(gen) {
   gen.marks.push(gen.pos);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_POP] = function(gen) {
   if (gen.marks.length == 0) {
       return null;
   }
   gen.pos = gen.marks.pop();
   return 0;
}

Dagaz.getRandom = function(moves, restrict, cnt) {
  if (moves.length == 1) return 0;
  if (moves.length > 0) {
      var r = _.random(0, moves.length - 1);
      if (moves.length == restrict.length) return r;
      var c = 0;
      if (!_.isUndefined(cnt)) {
          c = cnt;
      }
      while (Dagaz.find(this.restrict, r) >= 0) {
          if (c > 0) {
              c--;
              if (c == 0) return r;
          }
          r = _.random(0, moves.length - 1);       
      }
      restrict.push(r);
      return r;
  }
}

if (!_.isUndefined(Array.indexOf)) {
   Dagaz.find = function(array, value) {
      return Array.prototype.indexOf.call(array, value);
   }
} else {
   Dagaz.find = function(array, value) {
      return _.indexOf(array, value);
   }
}

if (!_.isUndefined(Int32Array)) {
   Dagaz.int32Array = function(array) {
      var a = new Int32Array(array.length);
      a.set(array);
      return a;
   }
} else {
   Dagaz.int32Array = function(array) {
      return array;
   }
}

Dagaz.Model.posToString = function(pos, design) {
   if (_.isUndefined(design)) {
       design = Dagaz.Model.getDesign();
   }
   if (pos < design.positionNames.length) {
       return design.positionNames[pos];
   } else {
       return "?";
   }
}

Dagaz.Model.stringToPos = function(name, design) {
   if (_.isUndefined(design)) {
       design = Dagaz.Model.getDesign();
   }
   var pos = Dagaz.find(design.positionNames, name);
   if (pos >= 0) {
       return pos;
   } else {
       return null;
   }
}

Dagaz.Model.zupdate = function(value, piece, pos) {
  return 0;
}

function ZrfDesign() {
  this.playerNames    = [];
  this.players        = [];
  this.positionNames  = [];
  this.positions      = [];
  this.zoneNames      = [];
  this.zones          = [];
  this.pieceNames     = [];
  this.pieces         = [];
  this.attrs          = [];
  this.dirs           = [];
  this.templates      = [];
  this.options        = [];
  this.modes          = [];
  this.failed         = false;
}

Dagaz.Model.getDesign = function() {
  if (_.isUndefined(Dagaz.Model.design)) {
      Dagaz.Model.design = new ZrfDesign();
  }
  return Dagaz.Model.design;
}

ZrfDesign.prototype.reserve = function(player, piece, cnt) {
  var o = Dagaz.find(this.playerNames, player);
  var t = Dagaz.find(this.pieceNames, piece);
  if ((o < 0) || (t < 0)) {
      this.failed = true;
  } else {
      if (_.isUndefined(this.reserve[t])) {
          this.reserve[t] = [];
      }
      this.reserve[t][o] = cnt;
  }
}

ZrfDesign.prototype.setup = function(player, piece, pos) {
  var o = Dagaz.find(this.playerNames, player);
  var t = Dagaz.find(this.pieceNames, piece);
  if ((o < 0) || (t < 0)) {
      this.failed = true;
  } else {
      var board = Dagaz.Model.getInitBoard();
      board.setPiece(pos, Dagaz.Model.createPiece(t, o));
  }
}

ZrfDesign.prototype.getTemplate = function(ix) {
  if (_.isUndefined(this.templates[ix])) {
      this.templates[ix] = Dagaz.Model.createTemplate();
  }
  return this.templates[ix];
}

ZrfDesign.prototype.addCommand = function(ix, name, param) {
  var template = this.getTemplate(ix);
  template.addCommand(name, param);
}

ZrfDesign.prototype.addPriority = function(mode) {
  this.modes.push(mode);
}

ZrfDesign.prototype.addAttribute = function(type, name, val) {
  if (_.isUndefined(this.attrs[name])) {
      this.attrs[name] = [];
  }
  this.attrs[name][type] = val;
}

ZrfDesign.prototype.getAttribute = function(type, name) {
  if (_.isUndefined(this.attrs[name])) {
      return null;
  }
  if (_.isUndefined(this.attrs[name][type])) {
      return null;
  }
  return this.attrs[name][type];
}

ZrfDesign.prototype.addPiece = function(name, type) {
  this.pieceNames[type] = name;
}

ZrfDesign.prototype.addMove = function(type, template, params, mode) {
  if (_.isUndefined(this.pieces[type])) {
      this.pieces[type] = [];
  }
  if (!_.isUndefined(this.templates[template])) {
      this.pieces[type].push({
         type: 0,
         template: this.templates[template],
         params: params,
         mode: mode
      });
  }
}

ZrfDesign.prototype.addDrop = function(type, template, params, mode) {
  if (_.isUndefined(this.pieces[type])) {
      this.pieces[type] = [];
  }
  if (!_.isUndefined(this.templates[template])) {
      this.pieces[type].push({
         type: 1,
         template: this.templates[template],
         params: params,
         mode: mode
      });
  }
}

ZrfDesign.prototype.checkVersion = function(name, value) {
  this.options[name] = value;
  Dagaz.Model.checkVersion(this, name, value);
}

ZrfDesign.prototype.checkOption = function(name, value) {
  return Dagaz.Model.checkOption(this, name, value);
}

ZrfDesign.prototype.getPieceType = function(name) {
  var r = Dagaz.find(this.pieceNames, name);
  if (r < 0) {
      return null;
  }
  return r;
}

ZrfDesign.prototype.getDirection = function(name) {
  var r = Dagaz.find(this.dirs, name);
  if (r < 0) {
      return null;
  }
  return r;
}

ZrfDesign.prototype.addDirection = function(name) {
  this.dirs.push(name);
}

ZrfDesign.prototype.addPlayer = function(player, symmetries) {
  var ix = this.playerNames.length;
  if (this.playerNames.length == 0) {
      ix = 0;
      this.playerNames.push("opposite");
  }
  this.players[ix] = Dagaz.int32Array(symmetries);
  this.playerNames.push(player);
}

ZrfDesign.prototype.nextPlayer = function(player) {
  if (player + 1 >= this.playerNames.length) {
      return 1;
  } else {
      return player + 1;
  }
}

ZrfDesign.prototype.prevPlayer = function(player) {
  if (player == 1) {
      return this.playerNames.length;
  } else {
      return player - 1;
  }
}

ZrfDesign.prototype.addPosition = function(name, links) {
  this.positionNames.push(name);
  this.positions.push(Dagaz.int32Array(links));
}

ZrfDesign.prototype.navigate = function(player, pos, dir) {
  if (!_.isUndefined(this.players[player])) {
      dir = this.players[player][dir];
  }
  if (this.positions[pos][dir] != 0) {
      return + pos + this.positions[pos][dir];
  } else {
      return null;
  }
}

ZrfDesign.prototype.addZone = function(name, player, positions) {
  var zone = Dagaz.find(this.zoneNames, name);
  if (zone < 0) {
      zone = this.zoneNames.length;
      this.zoneNames.push(name);
  }
  if (_.isUndefined(this.zones[zone])) {
      this.zones[zone] = [];
  }
  this.zones[zone][player] = Dagaz.int32Array(positions);
}

ZrfDesign.prototype.inZone = function(zone, player, pos) {
  if (!_.isUndefined(this.zones[zone])) {
      if (!_.isUndefined(this.zones[zone][player])) {
          return Dagaz.find(this.zones[zone][player], pos) >= 0;
      }
  }
  return false;
}

function ZrfMoveTemplate() {
  this.commands = [];
}

Dagaz.Model.createTemplate = function() {
  return new ZrfMoveTemplate();
}

ZrfMoveTemplate.prototype.addCommand = function(name, param) {
  if (!_.isUndefined(Dagaz.Model.commands[name])) {
      if (_.isUndefined(Dagaz.Model.cache)) {
          Dagaz.Model.cache = [];
      }
      if (_.isUndefined(Dagaz.Model.cache[name])) {
          Dagaz.Model.cache[name] = [];
      }
      var offset = param;
      if (_.isUndefined(Dagaz.Model.cache[name][offset])) {
          Dagaz.Model.cache[name][offset] = function(x) {
              return (Dagaz.Model.commands[name])(x, offset);
          }
      }
      this.commands.push(Dagaz.Model.cache[name][offset]);
  }
}

function ZrfMoveGenerator(design) {
  this.move     = new ZrfMove();
  this.moveType = 1;
  this.template = null;
  this.params   = null;
  this.mode     = null;
  this.board    = null;
  this.pos      = null;
  this.parent   = null;
  this.pieces   = [];
  this.values   = [];
  this.attrs    = [];
  this.stack    = [];
  this.marks	= [];
  this.cmd      = 0;
  this.level    = 1;
  this.design   = design;
}

Dagaz.Model.createGen = function(template, params, design) {
  if (_.isUndefined(design)) {
      design = Dagaz.Model.getDesign();
  }
  var r = new ZrfMoveGenerator(design);
  r.template = template;
  r.params   = Dagaz.int32Array(params);
  return r;
}

ZrfMoveGenerator.prototype.init = function(board, pos) {
  this.board    = board;
  this.pos      = pos;
}

ZrfMoveGenerator.prototype.clone = function() {
  var r = new ZrfMoveGenerator(this.design);
  r.template = this.template;
  r.params   = this.params;  
  r.level    = this.level;
  r.parent   = this.parent;
  r.cmd      = this.cmd;
  r.mode     = this.mode;
  r.board    = this.board;
  r.pos      = this.pos;
  _.each(this.marks, function(it) { r.marks.push(it); });
  _.each(this.stack, function(it) { r.stack.push(it); });
  _.each(_.keys(this.pieces), function(pos) {
      r.pieces[pos] = this.pieces[pos];
  }, this);
  _.each(_.keys(this.values), function(name) {
      r.values[name] = [];
      _.each(_.keys(this.values[name]), function(pos) {
           r.values[name][pos] = this.values[name][pos];
      }, this);
  }, this);
  _.each(_.keys(this.attrs), function(pos) {
      r.attrs[pos] = [];
      _.each(_.keys(this.attrs[pos]), function(name) {
           r.attrs[pos][name] = this.attrs[pos][name];
      }, this);
  }, this);
  if (!_.isUndefined(this.from)) {
      r.from = this.from;
  }
  if (!_.isUndefined(this.piece)) {
      r.piece = this.piece;
  }
  r.move = this.move.clone(r.level);
  return r;
}

ZrfMoveGenerator.prototype.copy = function(template, params) {
  var r = Dagaz.Model.createGen(template, params, this.design);
  r.level    = this.level + 1;
  r.parent   = this;
  r.board    = this.board;
  r.pos      = this.pos;
  r.move     = this.move.copy();
  return r;
}

ZrfMoveGenerator.prototype.getPos = function() {
  return this.pos;
}

ZrfMoveGenerator.prototype.movePiece = function(from, to, piece) {
  if (_.isUndefined(this.attrs[to])) {
      for (var name in this.attrs[to]) {
           piece = piece.setValue(name, this.attrs[to][name]);
      }
  }
  this.move.movePiece(from, to, piece, this.level);
  this.lastf = from;
  this.lastt = to;
  if (from != to) {
      this.setPiece(from, null);
  }
  this.setPiece(to, piece);
}

ZrfMoveGenerator.prototype.dropPiece = function(pos, piece) {
  this.move.dropPiece(pos, piece, this.level);
  this.setPiece(pos, piece);
}

ZrfMoveGenerator.prototype.capturePiece = function(pos) {
  this.move.capturePiece(pos, this.level);
  if (!Dagaz.Model.deferredStrike) {
      this.setPiece(pos, null);
  }
}

Dagaz.Model.getMark = function(gen) {
  if (gen.marks.length == 0) {
      return null;
  } else {
      var pos = gen.marks.pop();
      gen.marks.push(pos);
      return pos;
  }
}

ZrfMoveGenerator.prototype.getMark = function() {
  return Dagaz.Model.getMark(this);
}

Dagaz.Model.setMark = function(gen) {
  if (gen.marks.length > 0) {
      gen.marks.pop();
  }
  if (gen.pos !== null) {
      gen.marks.push(gen.pos);
  }
}

ZrfMoveGenerator.prototype.setMark = function() {
  Dagaz.Model.setMark(this);
}

ZrfMoveGenerator.prototype.getPieceInternal = function(pos) {
  if (!_.isUndefined(this.pieces[pos])) {
      return this.pieces[pos];
  }
  if (this.parent !== null) {
      return this.parent.getPieceInternal(pos);
  }
  return this.board.getPiece(pos);
}

Dagaz.Model.getPiece = function(gen, pos) {
  if (gen.parent !== null) {
      return gen.parent.getPieceInternal(pos);
  }
  return gen.board.getPiece(pos);
}

ZrfMoveGenerator.prototype.getPiece = function(pos) {
  return Dagaz.Model.getPiece(this, pos);
}

ZrfMoveGenerator.prototype.setPiece = function(pos, piece) {
  this.pieces[pos] = piece;
}

Dagaz.Model.isLastFrom = function(pos, board) {
  if (!_.isUndefined(board.lastf)) {
      return (board.lastf == pos)
  } else {
      return false;
  }
}

ZrfMoveGenerator.prototype.isLastFrom = function(pos) {
  if (this.parent !== null) {
      if (!_.isUndefined(this.parent.lastf)) {
          return (this.parent.lastf == pos);
      } else {
          return false;
      }
  }
  return Dagaz.Model.isLastFrom(pos, this.board);
}

Dagaz.Model.isLastTo = function(pos, board) {
  if (!_.isUndefined(board.lastt)) {
      return (board.lastt == pos)
  } else {
      return false;
  }
}

ZrfMoveGenerator.prototype.isLastTo = function(pos) {
  if (this.parent !== null) {
      if (!_.isUndefined(this.parent.lastt)) {
          return (this.parent.lastt == pos);
      } else {
          return false;
      }
  }
  return Dagaz.Model.isLastTo(pos, this.board);
}

Dagaz.Model.getValueInternal = function(aThis, name, pos) {
  return null;
}

ZrfMoveGenerator.prototype.getValue = function(name, pos) {
  if (!_.isUndefined(this.values[name])) {
      if (!_.isUndefined(this.values[name][pos])) {
          return this.values[name][pos];
      }
  }
  return Dagaz.Model.getValueInternal(this, name, pos);
}

ZrfMoveGenerator.prototype.setValue = function(name, pos, value) {
  if (_.isUndefined(this.values[name])) {
      this.values[name] = [];
  }
  this.values[name][pos] = value;
}

Dagaz.Model.getAttrInternal = function(gen, name, pos) {
  return null;
}

ZrfMoveGenerator.prototype.getAttr = function(name, pos) {
  var piece = this.getPiece(pos);
  if (piece !== null) {
      var value = piece.getValue(name);
      if (value === null) {
          value = this.design.getAttribute(piece.type, name);
      }
      return value;
  }
  return Dagaz.Model.getAttrInternal(this, name, pos);
}

ZrfMoveGenerator.prototype.setAttr = function(name, pos, value) {
  if (_.isUndefined(this.attrs[pos])) {
      this.attrs[pos] = [];
  }
  this.attrs[pos][name] = value;
  var piece = this.getPieceInternal(pos);
  if (piece !== null) {
      piece = piece.setValue(name, value);
      this.move.movePiece(pos, pos, piece, this.level);
      this.setPiece(pos, piece);
  }
}

ZrfMoveGenerator.prototype.generate = function() {
  while (this.cmd < this.template.commands.length) {
     var r = (this.template.commands[this.cmd++])(this);
     if (r === null) break;
     this.cmd += r;
     if (this.cmd < 0) break;
  }
  this.cmd = 0;
}

function ZrfPiece(type, player) {
  this.type   = type;
  this.player = player;
}

Dagaz.Model.createPiece = function(type, player) {
  if (_.isUndefined(Dagaz.Model.cachePiece)) {
      Dagaz.Model.cachePiece = [];
  }
  if (_.isUndefined(Dagaz.Model.cachePiece[player])) {
      Dagaz.Model.cachePiece[player] = [];
  }
  if (_.isUndefined(Dagaz.Model.cachePiece[player][type])) {
      Dagaz.Model.cachePiece[player][type] = new ZrfPiece(type, player);
  }
  return Dagaz.Model.cachePiece[player][type];
}

ZrfPiece.prototype.isEquals = function(piece) {
  if (piece === null) return false;
  if ((piece.type == this.type) && (piece.player == this.player)) {
      return true;
  } else {
      return false;
  }
}

Dagaz.Model.pieceToString = function(piece) {
  return piece.getOwner() + " " + piece.getType();
}

ZrfPiece.prototype.toString = function() {
  return Dagaz.Model.pieceToString(this);
}

ZrfPiece.prototype.getType = function() {
  var design = Dagaz.Model.getDesign();
  return design.pieceNames[this.type];
}

ZrfPiece.prototype.getOwner = function() {
  var design = Dagaz.Model.getDesign();
  return design.playerNames[this.player];
}

ZrfPiece.prototype.getValue = function(name) {
  if (!_.isUndefined(this.values)) {
     if (!_.isUndefined(this.values[name])) {
         return this.values[name];
     }
  }
  return null;
}

ZrfPiece.prototype.setValue = function(name, value) {
  if (this.getValue(name) == value) {
      return this;
  }
  var piece = new ZrfPiece(this.type, this.player);
  if (_.isUndefined(piece.values)) {
     piece.values = [];
  }
  piece.values[name] = value;
  return piece;
}

ZrfPiece.prototype.promote = function(type) {
  return Dagaz.Model.createPiece(type, this.player);
}

ZrfPiece.prototype.changeOwner = function(player) {
  if (this.player == player) {
      return this;
  } else {
      return Dagaz.Model.createPiece(this.type, player);
  }
}

ZrfPiece.prototype.flip = function() {
  var design = Dagaz.Model.getDesign();
  return Dagaz.Model.createPiece(this.type, design.nextPlayer(this.player));
}

Dagaz.Model.BuildDesign = function(design) {}

Dagaz.Model.InitGame = function() {
  var design = Dagaz.Model.getDesign();
  this.BuildDesign(design);
}

function ZrfBoard(game) {
  this.game     = game;
  this.zSign    = 0;
  this.pieces   = [];
  this.forks    = [];
  this.moves    = [];
  this.player   = 1;
}

ZrfBoard.prototype.setup = function(view) {
  _.each(_.keys(this.pieces), function(pos) {
     var piece = this.pieces[pos];
     view.addPiece(piece.toString(), pos);
  }, this);
}

ZrfBoard.prototype.copy = function() {
  var r = new ZrfBoard(this.game);
  r.parent = this;
  r.player = this.player;
  r.zSign  = this.zSign;
  _.each(_.keys(this.pieces), function(pos) {
      r.pieces[pos] = this.pieces[pos];
  }, this);
  return r;
}

ZrfBoard.prototype.isEquals = function(board) {
  if (board.zSign != this.zSign) return false;
  var a = _.keys(this.pieces);
  var b = _.keys(board.pieces);
  if (a.length != b.length) return false;
  if (_.difference(a, b).length != 0) return false;
  if (_.difference(b, a).length != 0) return false;
  var f = function(pos) { this.getPiece(pos); };
  a = _.map(a, f, this);
  b = _.map(b, f, board);
  while ((a.length > 0) && (b.length > 0)) {
     var x = a.pop();
     var y = b.pop();
     if (x === null) return false;
     if (!x.isEquals(y)) return false;
  }
  return true;
}

Dagaz.Model.getInitBoard = function() {
  if (_.isUndefined(Dagaz.Model.board)) {
      var design = Dagaz.Model.getDesign();
      Dagaz.Model.board = new ZrfBoard(Dagaz.Model);
      Dagaz.Model.board.reserve = design.reserve;
  }
  return Dagaz.Model.board;
}

ZrfBoard.prototype.clear = function() {
  this.zSign    = 0;
  this.pieces   = [];
}

ZrfBoard.prototype.addFork = function(gen) {
  if (!_.isUndefined(Dagaz.Model.movesLimit)) {
      if (this.forks.length >= Dagaz.Model.movesLimit) {
          this.failed = true;
          return;
      }
  }
  this.forks.push(gen);
}

ZrfBoard.prototype.getPiece = function(pos) {
  if (_.isUndefined(this.pieces[pos])) {
      return null;
  } else {
      return this.pieces[pos];
  }
}

ZrfBoard.prototype.setPiece = function(pos, piece) {
  if (!_.isUndefined(this.pieces[pos])) {
      var op = this.pieces[pos];
      this.zSign = Dagaz.Model.zupdate(this.zSign, op, pos);
  }
  if (piece === null) {
     delete this.pieces[pos];
  } else {
     this.pieces[pos] = piece;
     this.zSign = Dagaz.Model.zupdate(this.zSign, piece, pos);
  }
}

ZrfBoard.prototype.addMove = function(move) {
  this.moves.push(move);
}

ZrfBoard.prototype.changeMove = function(move) {
  if (this.moves.length > 0) {
      this.moves.pop();
  }
  this.moves.push(move);
}

ZrfBoard.prototype.getSignature = function() {
  return this.zSign;
}

Dagaz.Model.PostActions = function(board) {
  board.moves = _.filter(board.moves, function(m) { 
       return (_.isUndefined(m.failed));
  });
}

Dagaz.Model.CheckInvariants = function(board) {}

Dagaz.Model.getPartList = function(board, gen) {
  return [ gen.lastt ];
}

var addPrior = function(priors, mode, gen) {
  var ix = 0;
  if (gen.design.modes.length > 0) {
      ix = Dagaz.find(gen.design.modes, mode);
  }
  if (ix >= 0) {
      if (_.isUndefined(priors[ix])) {
          priors[ix] = [];
      }
      priors[ix].push(gen);
  }
}

var CompleteMove = function(board, gen) {
  var positions = Dagaz.Model.getPartList(board, gen);
  if (!Dagaz.Model.passPartial) { var t = 2; } 
      else { var t = 1; }
  while (positions.length > 0) {
       pos = positions.pop();
       var piece = gen.getPieceInternal(pos);
       if (Dagaz.Model.isFriend(piece, board.player) || Dagaz.Model.sharedPieces) {
           _.each(board.game.design.pieces[piece.type], function(move) {
                if ((move.type == 0) && (move.mode == gen.mode)) {
                    var g = gen.copy(move.template, move.params);
                    g.moveType = t;
                    g.generate();
                    if (g.generated && (g.moveType == 0)) {
                        CompleteMove(board, g);
                        t = 1;
                    }
                }
           }, this);
       }
  }
}

ZrfBoard.prototype.generateInternal = function(callback, cont) {
  var design = this.game.design;
  if ((this.moves.length == 0) && !design.failed && (this.player > 0)) {
      var priors = [];
      _.chain(_.keys(this.pieces))
       .filter(function(pos)  
          { return Dagaz.Model.sharedPieces || 
                   Dagaz.Model.isFriend(this.pieces[pos], this.player); 
          }, this)
       .each(function(pos) {
           var piece = this.pieces[pos];
           _.chain(design.pieces[piece.type])
            .filter(function(move) { return (move.type == 0); })
            .each(function(move) {
                var g = Dagaz.Model.createGen(move.template, move.params, this.game.design);
                g.init(this, pos);
                addPrior(priors, move.mode, g);
            }, this);
        }, this);
      _.each(design.positions, function(pos) {
        _.chain(design.pieces)
         .filter(function(tp) { return !Dagaz.Model.noReserve(this, tp); }, this)
         .each(function(tp) {
               _.chain(design.pieces[tp])
                .filter(function(move) { return (move.type == 1); })
                .each(function(move) {
                    var g = Dagaz.Model.createGen(move.template, move.params, this.game.design);
                    g.init(this, pos);
                    g.piece = new ZrfPiece(tp, this.player);
                    addPrior(priors, move.mode, g);
                }, this);
           }, this);
      }, this);
      this.forks = [];
      if (callback.checkContinue()) {
          for (var i = 0; i <= design.modes.length; i++) {
               var f = false;
               if (!_.isUndefined(priors[i])) {
                   while (priors[i].length > 0) {
                      var g = priors[i].pop();
                      g.generate();
                      if (g.generated) {
                          if (cont && (g.moveType == 0)) {
                              CompleteMove(this, g);
                          }
                          f = true;
                      }
                   }
               }
               if (f) break;
               if (i >= design.modes.length) break;
          }
          while (this.forks.length > 0) {
               var g = this.forks.pop();
               g.generate();
               if (g.generated) {
                   if (cont && (g.moveType == 0)) {
                        CompleteMove(this, g);
                   }
               }
          }
      }
      if (cont) {
          Dagaz.Model.CheckInvariants(this);
          Dagaz.Model.PostActions(this);
          if (Dagaz.Model.passTurn == 1) {
              this.moves.push(new ZrfMove());
          }
          if (Dagaz.Model.passTurn == 2) {
              if (this.moves.length == 0) {
                  this.moves.push(new ZrfMove());
              }
          }
      }
  }
  if (this.moves.length == 0) {
      this.player = 0;
  }
}

ZrfBoard.prototype.generate = function(design) {
  this.generateInternal(this, true);
}

ZrfBoard.prototype.checkContinue = function() {
  return true;
}

Dagaz.Model.decReserve = function(board, piece) {
  if (!_.isUndefined(board.reserve[piece.type])) {
      if (!_.isUndefined(board.reserve[piece.type][piece.player])) {
          board.reserve[piece.type][piece.player]--;
      }
  }
}

Dagaz.Model.incReserve = function(board, piece) {
  if (!_.isUndefined(board.reserve[piece.type])) {
      if (!_.isUndefined(board.reserve[piece.type][piece.player])) {
          board.reserve[piece.type][piece.player]++;
      }
  }
}

Dagaz.Model.noReserve = function(board, piece) {
  if (!_.isUndefined(board.reserve[piece])) {
      if (!_.isUndefined(board.reserve[piece][board.player])) {
          return (board.reserve[piece][board.player] <= 0);
      }
  }
  return false;
}

ZrfBoard.prototype.movePiece = function(from, to, piece) {
  this.lastf = from;
  this.lastt = to;
  this.setPiece(from, null);
  this.setPiece(to, (piece === null) ? this.getPiece(from) : piece);
}

ZrfBoard.prototype.dropPiece = function(pos, piece) {
  Dagaz.Model.decReserve(this, piece);
  this.setPiece(pos, piece);
}

ZrfBoard.prototype.capturePiece = function(pos) {
  if (Dagaz.Model.recycleCaptures) {
      var piece = this.getPiece(pos);
          if (piece != null) {
              Dagaz.Model.incReserve(this, piece);
          }
  }
  this.setPiece(pos, null);
}

ZrfBoard.prototype.commit = function() {}

ZrfBoard.prototype.apply = function(move) {
  var r = this.copy();
  delete r.lastf;
  delete r.lastt;
  var mx = _.reduce(move.actions, function (mx, action) {
      if (action[3] > mx) {
          mx = action[3];
      }
      return mx;
  }, 1);
  _.chain(_.range(1, mx + 1))
   .push(-1)
   .each(function (part) {
      move.applyTo(r, part);
   }, this);
  r.player = this.game.design.nextPlayer(this.player);
  r.move = move;
  return r;
}

ZrfBoard.prototype.applyAll = function(move) {
  return _.chain(move.determinate())
  .map(function (move) {
     return this.apply(move);
   }, this)
  .value();
}

function ZrfMove() {
  this.actions = [];
}

Dagaz.Model.createMove = function() {
  return new ZrfMove();
}

Dagaz.Model.compareMove = function(move, notation, design, board) {
  return (move.toString() == notation);
}

var cartesian = function(r, prefix, arr) {
   if (arr.length > 0) {
       _.each(_.first(arr), function (n) {
          var x = _.clone(prefix);
          x.push(n);
          cartesian(r, x, _.rest(arr));
       });
   } else {
       r.push(prefix);
   }
}

_.mixin({
  cartesian: function(x) {
     var r = [];
     cartesian(r, [], x);
     return r;
  }
});

ZrfMove.prototype.getControlList = function() {
  return _.chain(this.actions)
   .map(function (action) {
        return _.chain(_.range(3))
         .map(function (ix) {
              if (action[ix] === null) {
                  return 0;
              } else {
                  return action[ix].length;
              }
          })
         .filter(function (n) { return n > 1; })
         .value();
    })
   .flatten()
   .map(function (n) { return _.range(n); })
   .cartesian()
   .value();
}

var pushItem = function(r, list, control, ix) {
   if ((list === null) || (list.length < 1) || 
       (list.length == 1) || (ix >= control.length)) {
       r.push(list);
       return ix;
   }
   if (list[control[ix]] === null) {
       r.push(null);
   } else {
       r.push([list[control[ix]]]);
   }
   return ix + 1;
}

var isValidAction = function(action) {
   return (action[0] !== null) || (action[1] !== null);
}

var isValidMove = function(move) {
   return 1 >= _.chain(move.actions)
    .filter(function (action) {
        return (action[1] === null);
     })
    .map(function (action) {
        return action[0][0];
     })
    .countBy()
    .values()
    .max()
    .value();
}

ZrfMove.prototype.determinate = function() {
  var c = this.getControlList();
  if (c.length > 1) {
      return _.chain(c)
       .map(function (l) {
           var r = new ZrfMove();
           var pos = 0;
           _.each(this.actions, function (action) {
              var x = [];
              _.each(_.range(3), function (ix) {
                 pos = pushItem(this, action[ix], l, pos);
              }, x);
              x.push(action[3]);
              if (isValidAction(x)) {
                  this.actions.push(x);
              }
           }, r);
           return r;
        }, this)
       .filter(isValidMove)
       .value();
  } else {
      return [ this ];
  }
}

ZrfMove.prototype.copy = function() {
  var r = new ZrfMove();
  r.actions = _.filter(this.actions);
  return r;
}

ZrfMove.prototype.clone = function(level) {
  var r = new ZrfMove();
  var o = true;
  r.actions = _.chain(this.actions)
   .filter(function(action) {
        if ((action[0] !== null) && (action[1] !== null) && o) {
            if (Dagaz.Model.discardCascades) {
                o = false;
            }
            return true;
        }
        if (Dagaz.Model.forkMode || (Math.abs(action[3]) < level)) {
            return true;
        }
        return false;
    })
   .value();
  return r;
}

Dagaz.Model.moveToString = function(move, part) {
  if (move.actions.length == 0) {
      return "Pass";
  }
  var r = "";
  var l = "";
  var n = function(action) {
        var p = action[3];
        if (p < 0) {
            p = -p;
        }
        if (part == 0) {
            p = 0;
        }
        return (p == part);
  };
  _.chain(move.actions)
   .filter(n)
   .filter(function(action) {
       return (action[0] !== null) && (action[1] !== null) && 
              (action[0] != action[1]) && (action[0][0] != action[1][0]);
    })
   .each(function(action) {
       if (l !== action[0][0]) {
           if (r.length > 0) {
               r = r + " ";
           }
           r = r + Dagaz.Model.posToString(action[0][0]);
       }
       r = r + " - ";
       r = r + Dagaz.Model.posToString(action[1][0]);
       l = action[1][0];
    });
  _.chain(move.actions)
   .filter(n)
   .filter(function(action) {
       return (action[1] === null);
    })
   .each(function(action) {
       if (r.length > 0) {
           r = r + " ";
       }
       r = r + "x ";
       r = r + Dagaz.Model.posToString(action[0][0]);
       l = action[0][0];
    });
  return r;
}

ZrfMove.prototype.toString = function(part) {
  return Dagaz.Model.moveToString(this, part ? part : 0 );
}

ZrfMove.prototype.isAttacked = function(pos) {
  return _.chain(this.actions)
   .filter(function(action) {
       var fp = action[0];
       var tp = action[1];
       if ((fp !== null) && (fp[0] == pos) && (tp === null)) {
          return true;
       }
       if ((tp !== null) && (tp[0] == pos) && (fp !== null) && (fp[0] != tp[0])) {
          return true;
       }
       return false;
    })
   .size()
   .value() > 0;
}

ZrfMove.prototype.applyTo = function(obj, part) {
  if (!part) part = 1;
  var r = false;
  var n = function (action) {
      var p = action[3];
      if ((p < 0) && (part < 0)) {
          p = part;
      }
      return (p == part);
    };
  _.chain(this.actions)
   .filter(n)
   .filter(function (action) {
      return (action[0] !== null) && (action[1] !== null);
    })
   .each(function (action) {
      obj.movePiece(action[0][0], action[1][0], (action[2] === null) ? null : action[2][0]);
      r = true;
    }, this);
  _.chain(this.actions)
   .filter(n)
   .filter(function (action) {
      return (action[0] === null) && (action[1] !== null) && (action[2] !== null);
    })
   .each(function (action) {
      obj.dropPiece(action[1][0], action[2][0]);
      r = true;
    }, this);
  _.chain(this.actions)
   .filter(n)
   .filter(function (action) {
      return (action[0] !== null) && (action[1] === null);
    })
   .each(function (action) {
      obj.capturePiece(action[0][0]);
      r = true;
    }, this);
  if (r) {
      obj.commit();
  }
  return r;
}

ZrfMove.prototype.movePiece = function(from, to, piece, part) {
  if (!part) part = 1;
  if (piece === null) {
      this.actions.push([ [from], [to], null, part]);
  } else {
      this.actions.push([ [from], [to], [piece], part]);
  }
}

ZrfMove.prototype.dropPiece = function(pos, piece, part) {
  if (!part) part = 1;
  this.actions.push([null, [pos], [piece], part]);
}

ZrfMove.prototype.capturePiece = function(pos, part) {
  if (!part) part = 1;
  if (Dagaz.Model.deferredStrike) {
      part = -part;
  }
  this.actions.push([ [pos], null, null, part]);
}

})();
