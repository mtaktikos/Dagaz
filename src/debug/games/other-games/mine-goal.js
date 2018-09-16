(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mine-goal") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.play)) {
    Dagaz.Controller.addSound(0, "../sounds/on.wav");
    Dagaz.Controller.addSound(1, "../sounds/shoot.wav");
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      if (r == 0) {
          piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.type == 10) {
                  r = -1;
              } else {
                  r++;
              }
          }
      }
  });
  if (r < 0) return -1;
  if (r == 0) return 1;
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      if (board.getPiece(pos) === null) cnt++;
  });
  if (cnt == 1) {
      _.each(board.moves, function(move) {
          _.each(design.allPositions(), function(pos) {
               piece = board.getPiece(pos);
               if ((piece !== null) && (piece == 9)) {
                   piece = piece.promote(11);
                   move.dropPiece(pos, piece);
               }
          });
      });
  }
  CheckInvariants(board);
}

})();
