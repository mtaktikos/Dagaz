(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "magyar-tiles") {
     checkVersion(design, name, value);
  }
}

var notValid = function(design, board, pos, dirs, empty) {
  var pattern = "";
  _.each(dirs, function(dir) {
      var p = design.navigate(board.player, pos, dir);
      if ((p !== null) && (_.isUndefined(empty) || (p != empty))) {
          var piece = board.getPiece(p);
          if (piece !== null) {
              pattern = pattern + "*";
          } else {
              pattern = pattern + ".";
          }
      } else {
          pattern = pattern + ".";
      }
  });
  if ((pattern == "**....") || (pattern == ".**...") || (pattern == "..**..") ||
      (pattern == "...**.") || (pattern == "....**") || (pattern == "*....*") || 
      (pattern == "***...") || (pattern == ".***..") || (pattern == "..***.") || 
      (pattern == "...***") || (pattern == "*...**") || (pattern == "**...*") ||
      (pattern == "****..") || (pattern == ".****.") || (pattern == "..****") ||
      (pattern == "*..***") || (pattern == "**..**") || (pattern == "***..*")) return false;
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dirs = [];
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se")); dirs.push(design.getDirection("sw"));
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == 0)) {
              if (board.getPiece(pos + Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) !== null) {
                  move.failed = true;
                  return;
              }
              if (notValid(design, board, pos, dirs) || notValid(design, board, move.actions[0][1][0], dirs, pos)) {
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();