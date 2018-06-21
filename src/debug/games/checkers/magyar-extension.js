(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "magyar-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var value = null;
  if (model) {
      value = +model.getValue(0);
  }
  if (value !== null) {
      var stack = [];
      while (value > 0) {
          stack.push(value % 10);
          value = (value / 10) | 0;
      }
      var s = stack.length * 5;
      if (s > 25) s = 25;
      y += s;
      while (stack.length > 0) {
          var player = stack.pop();
          var p = view.piece["White Stone"];
          if (player == 1) {
              p = view.piece["Red Stone"];
          }
          ctx.drawImage(p.h, x, y, piece.dx, piece.dy);
          y -= 10;
      }
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
}

var nextPlayer = function(player) {
  if (player == 1) {
      return 2;
  } else {
      return 1;
  }
}

var pushToBottom = function(piece) {
  var value  = +piece.getValue(0);
  var player = nextPlayer(piece.player);
  if (value === null) {
      value = player;
  } else {
      while (player <= value) {
          player *= 10;
      }
      value += player;
  }
  return piece.setValue(0, value);
}

var popFromTop = function(piece) {
  var value = +piece.getValue(0);
  if ((value === null) || (value == 0)) return null;
  var player = value % 10;
  value = (value / 10) | 0;
  var r = Dagaz.Model.createPiece(1, player);
  if (value > 0) {
      r = r.setValue(0, value);
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (_.isUndefined(move.failed)) {
          var actions   = [];
          var capturing = null;
          var piece     = null;
          _.each(move.actions, function(a) {
              if (a[0] !== null) {
                  if (a[1] !== null) {
                      if (piece === null) {
                          piece = board.getPiece(a[0][0]);
                      }
                      if (capturing !== null) {
                          var enemy = board.getPiece(capturing[0][0]);
                          if (enemy !== null) {
                              piece = pushToBottom(piece);
                              a[2]  = [ piece ];
                              enemy = popFromTop(enemy);
                              if (enemy !== null) {
                                  capturing[1] = capturing[0];
                                  capturing[2] = [ enemy ];
                              }
                          }
                          actions.push(a);
                          actions.push(capturing);
                          capturing = null;                          
                      } else {
                          actions.push(a);
                      }
                  } else {
                      capturing = a;
                  }
              }
          });
          move.actions = actions;
      }
  });
  CheckInvariants(board);
}

})();
