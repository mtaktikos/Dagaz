(function() {

var getPos = function() {
  var url = window.location.search.toString();
  var result = url.match(/[?&]pos=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return null;
  }
}

var showBoard = Dagaz.View.showBoard;

Dagaz.View.showBoard = function(board, ctx) {
  var design = Dagaz.Controller.app.design;
  var view = Dagaz.Controller.app.view;
  var pos = getPos();
  if (pos !== null) {
      if (Dagaz.Model.stringToPos(pos, design) !== null) {
          pos = Dagaz.Model.stringToPos(pos, design);
      }
  }
  ctx.save();
  ctx.strokeStyle = "#00FF00";
  _.each(board.moves, function(m) {
      if (m.actions == 0) return;
      if (pos !== null) {
          if (m.actions[0][0] !== null) {
              if (m.actions[0][0][0] != pos) return;
          } else {
              if ((m.actions[0][1] !== null) && (m.actions[0][1][0] != pos)) return;
          }
      }
      _.each(m.actions, function(a) {
          if (a[0] !== null) {
              var r = view.pos[ a[0][0] ];
              if (!_.isUndefined(r)) {
                  if (a[1] !== null) {
                      var t = view.pos[ a[1][0] ];
                      if (!_.isUndefined(t)) {
                          ctx.beginPath();
                          ctx.moveTo(r.x + r.dx / 2, r.y + r.dy / 2);
                          ctx.lineTo(t.x + t.dx / 2, t.y + t.dy / 2);
                          ctx.arc(t.x + t.dx / 2, t.y + t.dy / 2, 2, 0, 2 * Math.PI);
                          ctx.fill();
                          ctx.stroke();
                      }
                  } else {
                      ctx.beginPath();
                      ctx.moveTo(r.x, r.y);
                      ctx.lineTo(r.x + r.dx, r.y + r.dy);
                      ctx.moveTo(r.x, r.y + r.dy);
                      ctx.lineTo(r.x + r.dx, r.y);
                      ctx.stroke();
                  }
              }
          } else {
              if (a[1] !== null) {
                  var t = view.pos[ a[1][0] ];
                  if (!_.isUndefined(t)) {
                      ctx.beginPath();
                      ctx.arc(t.x + t.dx / 2, t.y + t.dy / 2, Math.min(t.dx, t.dy) / 2, 0, 2 * Math.PI);
                      ctx.stroke();
                  }
              }
          }
      });
  });
  ctx.restore();
  if (!_.isUndefined(showBoard)) {
      showBoard(board, ctx);
  }
}

})();
