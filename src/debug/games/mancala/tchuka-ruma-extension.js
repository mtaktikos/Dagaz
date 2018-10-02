(function() {

Dagaz.Model.WIN_CNT = 24;

Dagaz.View.DX       = 0;
Dagaz.View.DY       = 0;
Dagaz.View.MX       = 25;

var cache = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tchuka-ruma-extension") {
      checkVersion(design, name, value);
  }
}

var createPiece = function(design, player, value) {
  if (value > 0) {
      if (!_.isUndefined(cache[player]) && !_.isUndefined(cache[player][value])) {
          return cache[player][value];
      }
      var r = Dagaz.Model.createPiece(0, player).setValue(0, value);
      if (_.isUndefined(cache[player])) {
          cache[player] = [];
      }
      cache[player][value] = r;
      return r;
  } else {
      return null;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          var cnt = piece.getValue(0);
          if (_.isUndefined(cache[piece.player])) {
              cache[piece.player] = [];
              cache[piece.player][cnt] = piece;
          }
          var result = [];
          result.push(0);
          for (var ix = 1; cnt > 0; cnt--, ix++) {
               pos = design.navigate(board.player, pos, 0);
               if (pos === null) {
                   move.failed = true;
                   return;
               }
               if (ix >= 12) {
                   ix = 0;
               }
               piece = board.getPiece(pos);
               if (ix < result.length) {
                   result[ix]++;
               } else {
                   if (piece === null) {
                       result.push(1);
                   } else {
                       result.push(piece.getValue(0) + 1);
                   }
               }
          }
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               var player = board.player;
               var piece = createPiece(design, player, result[ix]);
               if (result[ix] == 0) {
                   if (ix > 0) {
                       move.capturePiece(pos);
                       if (ix == 1) {
                           move.actions[0][2] = [ Dagaz.Model.createPiece(1, board.player) ];
                       }
                   }
               } else {
                   if (piece !== null) {
                       if (ix == 1) {
                           move.actions[0][2] = [ piece ];
                       } else {
                           if (board.getPiece(pos) !== null) {
                               move.movePiece(pos, pos, piece);
                           } else {
                               move.dropPiece(pos, piece);
                           }
                       }
                   }
               }
               pos = design.navigate(board.player, pos, 0);
          }
      }
  });
  CheckInvariants(board);
}

})();
