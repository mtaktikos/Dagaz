(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "filler-setup") {
      checkVersion(design, name, value);
  }
}

var getSetup = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "";
  }
}

var getSeed = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]seed=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "" + _.random(0, 10000);
  }
}

var setupPlayer = function(design, board, player, pos, start) {
  var piece = board.getPiece(pos);
  if (piece === null) return;
  board.setPiece(+piece.type + start, Dagaz.Model.createPiece(7, player));
  var group = [pos];
  for (var i = 0; i < group.length; i++) {
      _.each(design.allDirections(), function(dir) {
           var p = design.navigate(player, group[i], dir);
           if ((p === null) || (_.indexOf(group, p) >= 0)) return;
           var target = board.getPiece(p);
           if (target === null) return;
           if (target.type != piece.type) return;
           group.push(p);
      });
  }
  piece = piece.changeOwner(player);
  _.each(group, function(pos) {
      board.setPiece(pos, piece);
  });
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board) {
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  if (getSetup()) {
      setup(board);
      return;
  }
  var design = Dagaz.Model.design;
  var pieces = [];
  for (var i = 0; i < 7; i++) {
      pieces.push(Dagaz.Model.createPiece(i, 3));
  }
  _.each(design.allPositions(), function(pos) {
      if (pos < 14) return;
      board.setPiece(pos, pieces[_.random(6)]);
  });
  setupPlayer(design, board, 1, 53, 0);
  setupPlayer(design, board, 2, 3174, 7);
}

})();