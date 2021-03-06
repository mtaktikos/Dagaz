ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("swap-chess-restrictions", "step");

    if (!_.isUndefined(Dagaz.Controller.addSound)) {
        Dagaz.Controller.addSound(0, "../sounds/clack.wav");
    }

    design.addDirection("wwn");
    design.addDirection("ssw");
    design.addDirection("nne");
    design.addDirection("nnw");
    design.addDirection("sse");
    design.addDirection("een");
    design.addDirection("ees");
    design.addDirection("wws");

    design.addPlayer("White", [6, 2, 1, 4, 3, 7, 0, 5]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("You", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addTurn(3);

    design.addPosition("a5", [0, 0, 0, 0, 9, 0, 6, 0]);
    design.addPosition("b5", [0, 7, 0, 0, 9, 0, 6, 0]);
    design.addPosition("c5", [0, 7, 0, 0, 9, 0, 0, 2]);
    design.addPosition("d5", [0, 7, 0, 0, 0, 0, 0, 2]);
    design.addPosition("a4", [0, 0, 0, 0, 9, -2, 6, 0]);
    design.addPosition("b4", [0, 7, 0, 0, 9, -2, 6, 0]);
    design.addPosition("c4", [-6, 7, 0, 0, 9, 0, 0, 2]);
    design.addPosition("d4", [-6, 7, 0, 0, 0, 0, 0, 2]);
    design.addPosition("a3", [0, 0, -7, 0, 9, -2, 6, 0]);
    design.addPosition("b3", [0, 7, -7, -9, 9, -2, 6, 0]);
    design.addPosition("c3", [-6, 7, -7, -9, 9, 0, 0, 2]);
    design.addPosition("d3", [-6, 7, 0, -9, 0, 0, 0, 2]);
    design.addPosition("a2", [0, 0, -7, 0, 0, -2, 6, 0]);
    design.addPosition("b2", [0, 0, -7, -9, 0, -2, 6, 0]);
    design.addPosition("c2", [-6, 0, -7, -9, 0, 0, 0, 2]);
    design.addPosition("d2", [-6, 0, 0, -9, 0, 0, 0, 2]);
    design.addPosition("a1", [0, 0, -7, 0, 0, -2, 0, 0]);
    design.addPosition("b1", [0, 0, -7, -9, 0, -2, 0, 0]);
    design.addPosition("c1", [-6, 0, -7, -9, 0, 0, 0, 0]);
    design.addPosition("d1", [-6, 0, 0, -9, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3]);
    design.addZone("last-rank", 2, [16, 17, 18, 19]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Knight", 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [7], 0);

    design.setup("White", "Knight", 16);
    design.setup("White", "Knight", 17);
    design.setup("White", "Knight", 18);
    design.setup("White", "Knight", 19);
    design.setup("Black", "Knight", 0);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 2);
    design.setup("Black", "Knight", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
 
    view.defPosition("a5", 2, 2, 68, 68);
    view.defPosition("b5", 70, 2, 68, 68);
    view.defPosition("c5", 138, 2, 68, 68);
    view.defPosition("d5", 206, 2, 68, 68);
    view.defPosition("a4", 2, 70, 68, 68);
    view.defPosition("b4", 70, 70, 68, 68);
    view.defPosition("c4", 138, 70, 68, 68);
    view.defPosition("d4", 206, 70, 68, 68);
    view.defPosition("a3", 2, 138, 68, 68);
    view.defPosition("b3", 70, 138, 68, 68);
    view.defPosition("c3", 138, 138, 68, 68);
    view.defPosition("d3", 206, 138, 68, 68);
    view.defPosition("a2", 2, 206, 68, 68);
    view.defPosition("b2", 70, 206, 68, 68);
    view.defPosition("c2", 138, 206, 68, 68);
    view.defPosition("d2", 206, 206, 68, 68);
    view.defPosition("a1", 2, 274, 68, 68);
    view.defPosition("b1", 70, 274, 68, 68);
    view.defPosition("c1", 138, 274, 68, 68);
    view.defPosition("d1", 206, 274, 68, 68);
}
