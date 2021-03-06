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
    design.checkVersion("show-blink", "false");
    design.checkVersion("smart-moves", "to");
    design.checkVersion("sokoban-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [1, 0, 3, 2]);

    design.addPosition("a1", [0, 1, 25, 0]);
    design.addPosition("b1", [-1, 1, 25, 0]);
    design.addPosition("c1", [-1, 1, 25, 0]);
    design.addPosition("d1", [-1, 1, 25, 0]);
    design.addPosition("e1", [-1, 1, 25, 0]);
    design.addPosition("f1", [-1, 1, 25, 0]);
    design.addPosition("g1", [-1, 1, 25, 0]);
    design.addPosition("h1", [-1, 1, 25, 0]);
    design.addPosition("i1", [-1, 1, 25, 0]);
    design.addPosition("j1", [-1, 1, 25, 0]);
    design.addPosition("k1", [-1, 1, 25, 0]);
    design.addPosition("l1", [-1, 1, 25, 0]);
    design.addPosition("m1", [-1, 1, 25, 0]);
    design.addPosition("n1", [-1, 1, 25, 0]);
    design.addPosition("o1", [-1, 1, 25, 0]);
    design.addPosition("p1", [-1, 1, 25, 0]);
    design.addPosition("q1", [-1, 1, 25, 0]);
    design.addPosition("r1", [-1, 1, 25, 0]);
    design.addPosition("s1", [-1, 1, 25, 0]);
    design.addPosition("t1", [-1, 1, 25, 0]);
    design.addPosition("u1", [-1, 1, 25, 0]);
    design.addPosition("v1", [-1, 1, 25, 0]);
    design.addPosition("w1", [-1, 1, 25, 0]);
    design.addPosition("x1", [-1, 1, 25, 0]);
    design.addPosition("y1", [-1, 0, 25, 0]);
    design.addPosition("a2", [0, 1, 25, -25]);
    design.addPosition("b2", [-1, 1, 25, -25]);
    design.addPosition("c2", [-1, 1, 25, -25]);
    design.addPosition("d2", [-1, 1, 25, -25]);
    design.addPosition("e2", [-1, 1, 25, -25]);
    design.addPosition("f2", [-1, 1, 25, -25]);
    design.addPosition("g2", [-1, 1, 25, -25]);
    design.addPosition("h2", [-1, 1, 25, -25]);
    design.addPosition("i2", [-1, 1, 25, -25]);
    design.addPosition("j2", [-1, 1, 25, -25]);
    design.addPosition("k2", [-1, 1, 25, -25]);
    design.addPosition("l2", [-1, 1, 25, -25]);
    design.addPosition("m2", [-1, 1, 25, -25]);
    design.addPosition("n2", [-1, 1, 25, -25]);
    design.addPosition("o2", [-1, 1, 25, -25]);
    design.addPosition("p2", [-1, 1, 25, -25]);
    design.addPosition("q2", [-1, 1, 25, -25]);
    design.addPosition("r2", [-1, 1, 25, -25]);
    design.addPosition("s2", [-1, 1, 25, -25]);
    design.addPosition("t2", [-1, 1, 25, -25]);
    design.addPosition("u2", [-1, 1, 25, -25]);
    design.addPosition("v2", [-1, 1, 25, -25]);
    design.addPosition("w2", [-1, 1, 25, -25]);
    design.addPosition("x2", [-1, 1, 25, -25]);
    design.addPosition("y2", [-1, 0, 25, -25]);
    design.addPosition("a3", [0, 1, 25, -25]);
    design.addPosition("b3", [-1, 1, 25, -25]);
    design.addPosition("c3", [-1, 1, 25, -25]);
    design.addPosition("d3", [-1, 1, 25, -25]);
    design.addPosition("e3", [-1, 1, 25, -25]);
    design.addPosition("f3", [-1, 1, 25, -25]);
    design.addPosition("g3", [-1, 1, 25, -25]);
    design.addPosition("h3", [-1, 1, 25, -25]);
    design.addPosition("i3", [-1, 1, 25, -25]);
    design.addPosition("j3", [-1, 1, 25, -25]);
    design.addPosition("k3", [-1, 1, 25, -25]);
    design.addPosition("l3", [-1, 1, 25, -25]);
    design.addPosition("m3", [-1, 1, 25, -25]);
    design.addPosition("n3", [-1, 1, 25, -25]);
    design.addPosition("o3", [-1, 1, 25, -25]);
    design.addPosition("p3", [-1, 1, 25, -25]);
    design.addPosition("q3", [-1, 1, 25, -25]);
    design.addPosition("r3", [-1, 1, 25, -25]);
    design.addPosition("s3", [-1, 1, 25, -25]);
    design.addPosition("t3", [-1, 1, 25, -25]);
    design.addPosition("u3", [-1, 1, 25, -25]);
    design.addPosition("v3", [-1, 1, 25, -25]);
    design.addPosition("w3", [-1, 1, 25, -25]);
    design.addPosition("x3", [-1, 1, 25, -25]);
    design.addPosition("y3", [-1, 0, 25, -25]);
    design.addPosition("a4", [0, 1, 25, -25]);
    design.addPosition("b4", [-1, 1, 25, -25]);
    design.addPosition("c4", [-1, 1, 25, -25]);
    design.addPosition("d4", [-1, 1, 25, -25]);
    design.addPosition("e4", [-1, 1, 25, -25]);
    design.addPosition("f4", [-1, 1, 25, -25]);
    design.addPosition("g4", [-1, 1, 25, -25]);
    design.addPosition("h4", [-1, 1, 25, -25]);
    design.addPosition("i4", [-1, 1, 25, -25]);
    design.addPosition("j4", [-1, 1, 25, -25]);
    design.addPosition("k4", [-1, 1, 25, -25]);
    design.addPosition("l4", [-1, 1, 25, -25]);
    design.addPosition("m4", [-1, 1, 25, -25]);
    design.addPosition("n4", [-1, 1, 25, -25]);
    design.addPosition("o4", [-1, 1, 25, -25]);
    design.addPosition("p4", [-1, 1, 25, -25]);
    design.addPosition("q4", [-1, 1, 25, -25]);
    design.addPosition("r4", [-1, 1, 25, -25]);
    design.addPosition("s4", [-1, 1, 25, -25]);
    design.addPosition("t4", [-1, 1, 25, -25]);
    design.addPosition("u4", [-1, 1, 25, -25]);
    design.addPosition("v4", [-1, 1, 25, -25]);
    design.addPosition("w4", [-1, 1, 25, -25]);
    design.addPosition("x4", [-1, 1, 25, -25]);
    design.addPosition("y4", [-1, 0, 25, -25]);
    design.addPosition("a5", [0, 1, 25, -25]);
    design.addPosition("b5", [-1, 1, 25, -25]);
    design.addPosition("c5", [-1, 1, 25, -25]);
    design.addPosition("d5", [-1, 1, 25, -25]);
    design.addPosition("e5", [-1, 1, 25, -25]);
    design.addPosition("f5", [-1, 1, 25, -25]);
    design.addPosition("g5", [-1, 1, 25, -25]);
    design.addPosition("h5", [-1, 1, 25, -25]);
    design.addPosition("i5", [-1, 1, 25, -25]);
    design.addPosition("j5", [-1, 1, 25, -25]);
    design.addPosition("k5", [-1, 1, 25, -25]);
    design.addPosition("l5", [-1, 1, 25, -25]);
    design.addPosition("m5", [-1, 1, 25, -25]);
    design.addPosition("n5", [-1, 1, 25, -25]);
    design.addPosition("o5", [-1, 1, 25, -25]);
    design.addPosition("p5", [-1, 1, 25, -25]);
    design.addPosition("q5", [-1, 1, 25, -25]);
    design.addPosition("r5", [-1, 1, 25, -25]);
    design.addPosition("s5", [-1, 1, 25, -25]);
    design.addPosition("t5", [-1, 1, 25, -25]);
    design.addPosition("u5", [-1, 1, 25, -25]);
    design.addPosition("v5", [-1, 1, 25, -25]);
    design.addPosition("w5", [-1, 1, 25, -25]);
    design.addPosition("x5", [-1, 1, 25, -25]);
    design.addPosition("y5", [-1, 0, 25, -25]);
    design.addPosition("a6", [0, 1, 25, -25]);
    design.addPosition("b6", [-1, 1, 25, -25]);
    design.addPosition("c6", [-1, 1, 25, -25]);
    design.addPosition("d6", [-1, 1, 25, -25]);
    design.addPosition("e6", [-1, 1, 25, -25]);
    design.addPosition("f6", [-1, 1, 25, -25]);
    design.addPosition("g6", [-1, 1, 25, -25]);
    design.addPosition("h6", [-1, 1, 25, -25]);
    design.addPosition("i6", [-1, 1, 25, -25]);
    design.addPosition("j6", [-1, 1, 25, -25]);
    design.addPosition("k6", [-1, 1, 25, -25]);
    design.addPosition("l6", [-1, 1, 25, -25]);
    design.addPosition("m6", [-1, 1, 25, -25]);
    design.addPosition("n6", [-1, 1, 25, -25]);
    design.addPosition("o6", [-1, 1, 25, -25]);
    design.addPosition("p6", [-1, 1, 25, -25]);
    design.addPosition("q6", [-1, 1, 25, -25]);
    design.addPosition("r6", [-1, 1, 25, -25]);
    design.addPosition("s6", [-1, 1, 25, -25]);
    design.addPosition("t6", [-1, 1, 25, -25]);
    design.addPosition("u6", [-1, 1, 25, -25]);
    design.addPosition("v6", [-1, 1, 25, -25]);
    design.addPosition("w6", [-1, 1, 25, -25]);
    design.addPosition("x6", [-1, 1, 25, -25]);
    design.addPosition("y6", [-1, 0, 25, -25]);
    design.addPosition("a7", [0, 1, 25, -25]);
    design.addPosition("b7", [-1, 1, 25, -25]);
    design.addPosition("c7", [-1, 1, 25, -25]);
    design.addPosition("d7", [-1, 1, 25, -25]);
    design.addPosition("e7", [-1, 1, 25, -25]);
    design.addPosition("f7", [-1, 1, 25, -25]);
    design.addPosition("g7", [-1, 1, 25, -25]);
    design.addPosition("h7", [-1, 1, 25, -25]);
    design.addPosition("i7", [-1, 1, 25, -25]);
    design.addPosition("j7", [-1, 1, 25, -25]);
    design.addPosition("k7", [-1, 1, 25, -25]);
    design.addPosition("l7", [-1, 1, 25, -25]);
    design.addPosition("m7", [-1, 1, 25, -25]);
    design.addPosition("n7", [-1, 1, 25, -25]);
    design.addPosition("o7", [-1, 1, 25, -25]);
    design.addPosition("p7", [-1, 1, 25, -25]);
    design.addPosition("q7", [-1, 1, 25, -25]);
    design.addPosition("r7", [-1, 1, 25, -25]);
    design.addPosition("s7", [-1, 1, 25, -25]);
    design.addPosition("t7", [-1, 1, 25, -25]);
    design.addPosition("u7", [-1, 1, 25, -25]);
    design.addPosition("v7", [-1, 1, 25, -25]);
    design.addPosition("w7", [-1, 1, 25, -25]);
    design.addPosition("x7", [-1, 1, 25, -25]);
    design.addPosition("y7", [-1, 0, 25, -25]);
    design.addPosition("a8", [0, 1, 25, -25]);
    design.addPosition("b8", [-1, 1, 25, -25]);
    design.addPosition("c8", [-1, 1, 25, -25]);
    design.addPosition("d8", [-1, 1, 25, -25]);
    design.addPosition("e8", [-1, 1, 25, -25]);
    design.addPosition("f8", [-1, 1, 25, -25]);
    design.addPosition("g8", [-1, 1, 25, -25]);
    design.addPosition("h8", [-1, 1, 25, -25]);
    design.addPosition("i8", [-1, 1, 25, -25]);
    design.addPosition("j8", [-1, 1, 25, -25]);
    design.addPosition("k8", [-1, 1, 25, -25]);
    design.addPosition("l8", [-1, 1, 25, -25]);
    design.addPosition("m8", [-1, 1, 25, -25]);
    design.addPosition("n8", [-1, 1, 25, -25]);
    design.addPosition("o8", [-1, 1, 25, -25]);
    design.addPosition("p8", [-1, 1, 25, -25]);
    design.addPosition("q8", [-1, 1, 25, -25]);
    design.addPosition("r8", [-1, 1, 25, -25]);
    design.addPosition("s8", [-1, 1, 25, -25]);
    design.addPosition("t8", [-1, 1, 25, -25]);
    design.addPosition("u8", [-1, 1, 25, -25]);
    design.addPosition("v8", [-1, 1, 25, -25]);
    design.addPosition("w8", [-1, 1, 25, -25]);
    design.addPosition("x8", [-1, 1, 25, -25]);
    design.addPosition("y8", [-1, 0, 25, -25]);
    design.addPosition("a9", [0, 1, 25, -25]);
    design.addPosition("b9", [-1, 1, 25, -25]);
    design.addPosition("c9", [-1, 1, 25, -25]);
    design.addPosition("d9", [-1, 1, 25, -25]);
    design.addPosition("e9", [-1, 1, 25, -25]);
    design.addPosition("f9", [-1, 1, 25, -25]);
    design.addPosition("g9", [-1, 1, 25, -25]);
    design.addPosition("h9", [-1, 1, 25, -25]);
    design.addPosition("i9", [-1, 1, 25, -25]);
    design.addPosition("j9", [-1, 1, 25, -25]);
    design.addPosition("k9", [-1, 1, 25, -25]);
    design.addPosition("l9", [-1, 1, 25, -25]);
    design.addPosition("m9", [-1, 1, 25, -25]);
    design.addPosition("n9", [-1, 1, 25, -25]);
    design.addPosition("o9", [-1, 1, 25, -25]);
    design.addPosition("p9", [-1, 1, 25, -25]);
    design.addPosition("q9", [-1, 1, 25, -25]);
    design.addPosition("r9", [-1, 1, 25, -25]);
    design.addPosition("s9", [-1, 1, 25, -25]);
    design.addPosition("t9", [-1, 1, 25, -25]);
    design.addPosition("u9", [-1, 1, 25, -25]);
    design.addPosition("v9", [-1, 1, 25, -25]);
    design.addPosition("w9", [-1, 1, 25, -25]);
    design.addPosition("x9", [-1, 1, 25, -25]);
    design.addPosition("y9", [-1, 0, 25, -25]);
    design.addPosition("a10", [0, 1, 25, -25]);
    design.addPosition("b10", [-1, 1, 25, -25]);
    design.addPosition("c10", [-1, 1, 25, -25]);
    design.addPosition("d10", [-1, 1, 25, -25]);
    design.addPosition("e10", [-1, 1, 25, -25]);
    design.addPosition("f10", [-1, 1, 25, -25]);
    design.addPosition("g10", [-1, 1, 25, -25]);
    design.addPosition("h10", [-1, 1, 25, -25]);
    design.addPosition("i10", [-1, 1, 25, -25]);
    design.addPosition("j10", [-1, 1, 25, -25]);
    design.addPosition("k10", [-1, 1, 25, -25]);
    design.addPosition("l10", [-1, 1, 25, -25]);
    design.addPosition("m10", [-1, 1, 25, -25]);
    design.addPosition("n10", [-1, 1, 25, -25]);
    design.addPosition("o10", [-1, 1, 25, -25]);
    design.addPosition("p10", [-1, 1, 25, -25]);
    design.addPosition("q10", [-1, 1, 25, -25]);
    design.addPosition("r10", [-1, 1, 25, -25]);
    design.addPosition("s10", [-1, 1, 25, -25]);
    design.addPosition("t10", [-1, 1, 25, -25]);
    design.addPosition("u10", [-1, 1, 25, -25]);
    design.addPosition("v10", [-1, 1, 25, -25]);
    design.addPosition("w10", [-1, 1, 25, -25]);
    design.addPosition("x10", [-1, 1, 25, -25]);
    design.addPosition("y10", [-1, 0, 25, -25]);
    design.addPosition("a11", [0, 1, 25, -25]);
    design.addPosition("b11", [-1, 1, 25, -25]);
    design.addPosition("c11", [-1, 1, 25, -25]);
    design.addPosition("d11", [-1, 1, 25, -25]);
    design.addPosition("e11", [-1, 1, 25, -25]);
    design.addPosition("f11", [-1, 1, 25, -25]);
    design.addPosition("g11", [-1, 1, 25, -25]);
    design.addPosition("h11", [-1, 1, 25, -25]);
    design.addPosition("i11", [-1, 1, 25, -25]);
    design.addPosition("j11", [-1, 1, 25, -25]);
    design.addPosition("k11", [-1, 1, 25, -25]);
    design.addPosition("l11", [-1, 1, 25, -25]);
    design.addPosition("m11", [-1, 1, 25, -25]);
    design.addPosition("n11", [-1, 1, 25, -25]);
    design.addPosition("o11", [-1, 1, 25, -25]);
    design.addPosition("p11", [-1, 1, 25, -25]);
    design.addPosition("q11", [-1, 1, 25, -25]);
    design.addPosition("r11", [-1, 1, 25, -25]);
    design.addPosition("s11", [-1, 1, 25, -25]);
    design.addPosition("t11", [-1, 1, 25, -25]);
    design.addPosition("u11", [-1, 1, 25, -25]);
    design.addPosition("v11", [-1, 1, 25, -25]);
    design.addPosition("w11", [-1, 1, 25, -25]);
    design.addPosition("x11", [-1, 1, 25, -25]);
    design.addPosition("y11", [-1, 0, 25, -25]);
    design.addPosition("a12", [0, 1, 25, -25]);
    design.addPosition("b12", [-1, 1, 25, -25]);
    design.addPosition("c12", [-1, 1, 25, -25]);
    design.addPosition("d12", [-1, 1, 25, -25]);
    design.addPosition("e12", [-1, 1, 25, -25]);
    design.addPosition("f12", [-1, 1, 25, -25]);
    design.addPosition("g12", [-1, 1, 25, -25]);
    design.addPosition("h12", [-1, 1, 25, -25]);
    design.addPosition("i12", [-1, 1, 25, -25]);
    design.addPosition("j12", [-1, 1, 25, -25]);
    design.addPosition("k12", [-1, 1, 25, -25]);
    design.addPosition("l12", [-1, 1, 25, -25]);
    design.addPosition("m12", [-1, 1, 25, -25]);
    design.addPosition("n12", [-1, 1, 25, -25]);
    design.addPosition("o12", [-1, 1, 25, -25]);
    design.addPosition("p12", [-1, 1, 25, -25]);
    design.addPosition("q12", [-1, 1, 25, -25]);
    design.addPosition("r12", [-1, 1, 25, -25]);
    design.addPosition("s12", [-1, 1, 25, -25]);
    design.addPosition("t12", [-1, 1, 25, -25]);
    design.addPosition("u12", [-1, 1, 25, -25]);
    design.addPosition("v12", [-1, 1, 25, -25]);
    design.addPosition("w12", [-1, 1, 25, -25]);
    design.addPosition("x12", [-1, 1, 25, -25]);
    design.addPosition("y12", [-1, 0, 25, -25]);
    design.addPosition("a13", [0, 1, 25, -25]);
    design.addPosition("b13", [-1, 1, 25, -25]);
    design.addPosition("c13", [-1, 1, 25, -25]);
    design.addPosition("d13", [-1, 1, 25, -25]);
    design.addPosition("e13", [-1, 1, 25, -25]);
    design.addPosition("f13", [-1, 1, 25, -25]);
    design.addPosition("g13", [-1, 1, 25, -25]);
    design.addPosition("h13", [-1, 1, 25, -25]);
    design.addPosition("i13", [-1, 1, 25, -25]);
    design.addPosition("j13", [-1, 1, 25, -25]);
    design.addPosition("k13", [-1, 1, 25, -25]);
    design.addPosition("l13", [-1, 1, 25, -25]);
    design.addPosition("m13", [-1, 1, 25, -25]);
    design.addPosition("n13", [-1, 1, 25, -25]);
    design.addPosition("o13", [-1, 1, 25, -25]);
    design.addPosition("p13", [-1, 1, 25, -25]);
    design.addPosition("q13", [-1, 1, 25, -25]);
    design.addPosition("r13", [-1, 1, 25, -25]);
    design.addPosition("s13", [-1, 1, 25, -25]);
    design.addPosition("t13", [-1, 1, 25, -25]);
    design.addPosition("u13", [-1, 1, 25, -25]);
    design.addPosition("v13", [-1, 1, 25, -25]);
    design.addPosition("w13", [-1, 1, 25, -25]);
    design.addPosition("x13", [-1, 1, 25, -25]);
    design.addPosition("y13", [-1, 0, 25, -25]);
    design.addPosition("a14", [0, 1, 25, -25]);
    design.addPosition("b14", [-1, 1, 25, -25]);
    design.addPosition("c14", [-1, 1, 25, -25]);
    design.addPosition("d14", [-1, 1, 25, -25]);
    design.addPosition("e14", [-1, 1, 25, -25]);
    design.addPosition("f14", [-1, 1, 25, -25]);
    design.addPosition("g14", [-1, 1, 25, -25]);
    design.addPosition("h14", [-1, 1, 25, -25]);
    design.addPosition("i14", [-1, 1, 25, -25]);
    design.addPosition("j14", [-1, 1, 25, -25]);
    design.addPosition("k14", [-1, 1, 25, -25]);
    design.addPosition("l14", [-1, 1, 25, -25]);
    design.addPosition("m14", [-1, 1, 25, -25]);
    design.addPosition("n14", [-1, 1, 25, -25]);
    design.addPosition("o14", [-1, 1, 25, -25]);
    design.addPosition("p14", [-1, 1, 25, -25]);
    design.addPosition("q14", [-1, 1, 25, -25]);
    design.addPosition("r14", [-1, 1, 25, -25]);
    design.addPosition("s14", [-1, 1, 25, -25]);
    design.addPosition("t14", [-1, 1, 25, -25]);
    design.addPosition("u14", [-1, 1, 25, -25]);
    design.addPosition("v14", [-1, 1, 25, -25]);
    design.addPosition("w14", [-1, 1, 25, -25]);
    design.addPosition("x14", [-1, 1, 25, -25]);
    design.addPosition("y14", [-1, 0, 25, -25]);
    design.addPosition("a15", [0, 1, 25, -25]);
    design.addPosition("b15", [-1, 1, 25, -25]);
    design.addPosition("c15", [-1, 1, 25, -25]);
    design.addPosition("d15", [-1, 1, 25, -25]);
    design.addPosition("e15", [-1, 1, 25, -25]);
    design.addPosition("f15", [-1, 1, 25, -25]);
    design.addPosition("g15", [-1, 1, 25, -25]);
    design.addPosition("h15", [-1, 1, 25, -25]);
    design.addPosition("i15", [-1, 1, 25, -25]);
    design.addPosition("j15", [-1, 1, 25, -25]);
    design.addPosition("k15", [-1, 1, 25, -25]);
    design.addPosition("l15", [-1, 1, 25, -25]);
    design.addPosition("m15", [-1, 1, 25, -25]);
    design.addPosition("n15", [-1, 1, 25, -25]);
    design.addPosition("o15", [-1, 1, 25, -25]);
    design.addPosition("p15", [-1, 1, 25, -25]);
    design.addPosition("q15", [-1, 1, 25, -25]);
    design.addPosition("r15", [-1, 1, 25, -25]);
    design.addPosition("s15", [-1, 1, 25, -25]);
    design.addPosition("t15", [-1, 1, 25, -25]);
    design.addPosition("u15", [-1, 1, 25, -25]);
    design.addPosition("v15", [-1, 1, 25, -25]);
    design.addPosition("w15", [-1, 1, 25, -25]);
    design.addPosition("x15", [-1, 1, 25, -25]);
    design.addPosition("y15", [-1, 0, 25, -25]);
    design.addPosition("a16", [0, 1, 25, -25]);
    design.addPosition("b16", [-1, 1, 25, -25]);
    design.addPosition("c16", [-1, 1, 25, -25]);
    design.addPosition("d16", [-1, 1, 25, -25]);
    design.addPosition("e16", [-1, 1, 25, -25]);
    design.addPosition("f16", [-1, 1, 25, -25]);
    design.addPosition("g16", [-1, 1, 25, -25]);
    design.addPosition("h16", [-1, 1, 25, -25]);
    design.addPosition("i16", [-1, 1, 25, -25]);
    design.addPosition("j16", [-1, 1, 25, -25]);
    design.addPosition("k16", [-1, 1, 25, -25]);
    design.addPosition("l16", [-1, 1, 25, -25]);
    design.addPosition("m16", [-1, 1, 25, -25]);
    design.addPosition("n16", [-1, 1, 25, -25]);
    design.addPosition("o16", [-1, 1, 25, -25]);
    design.addPosition("p16", [-1, 1, 25, -25]);
    design.addPosition("q16", [-1, 1, 25, -25]);
    design.addPosition("r16", [-1, 1, 25, -25]);
    design.addPosition("s16", [-1, 1, 25, -25]);
    design.addPosition("t16", [-1, 1, 25, -25]);
    design.addPosition("u16", [-1, 1, 25, -25]);
    design.addPosition("v16", [-1, 1, 25, -25]);
    design.addPosition("w16", [-1, 1, 25, -25]);
    design.addPosition("x16", [-1, 1, 25, -25]);
    design.addPosition("y16", [-1, 0, 25, -25]);
    design.addPosition("a17", [0, 1, 25, -25]);
    design.addPosition("b17", [-1, 1, 25, -25]);
    design.addPosition("c17", [-1, 1, 25, -25]);
    design.addPosition("d17", [-1, 1, 25, -25]);
    design.addPosition("e17", [-1, 1, 25, -25]);
    design.addPosition("f17", [-1, 1, 25, -25]);
    design.addPosition("g17", [-1, 1, 25, -25]);
    design.addPosition("h17", [-1, 1, 25, -25]);
    design.addPosition("i17", [-1, 1, 25, -25]);
    design.addPosition("j17", [-1, 1, 25, -25]);
    design.addPosition("k17", [-1, 1, 25, -25]);
    design.addPosition("l17", [-1, 1, 25, -25]);
    design.addPosition("m17", [-1, 1, 25, -25]);
    design.addPosition("n17", [-1, 1, 25, -25]);
    design.addPosition("o17", [-1, 1, 25, -25]);
    design.addPosition("p17", [-1, 1, 25, -25]);
    design.addPosition("q17", [-1, 1, 25, -25]);
    design.addPosition("r17", [-1, 1, 25, -25]);
    design.addPosition("s17", [-1, 1, 25, -25]);
    design.addPosition("t17", [-1, 1, 25, -25]);
    design.addPosition("u17", [-1, 1, 25, -25]);
    design.addPosition("v17", [-1, 1, 25, -25]);
    design.addPosition("w17", [-1, 1, 25, -25]);
    design.addPosition("x17", [-1, 1, 25, -25]);
    design.addPosition("y17", [-1, 0, 25, -25]);
    design.addPosition("a18", [0, 1, 25, -25]);
    design.addPosition("b18", [-1, 1, 25, -25]);
    design.addPosition("c18", [-1, 1, 25, -25]);
    design.addPosition("d18", [-1, 1, 25, -25]);
    design.addPosition("e18", [-1, 1, 25, -25]);
    design.addPosition("f18", [-1, 1, 25, -25]);
    design.addPosition("g18", [-1, 1, 25, -25]);
    design.addPosition("h18", [-1, 1, 25, -25]);
    design.addPosition("i18", [-1, 1, 25, -25]);
    design.addPosition("j18", [-1, 1, 25, -25]);
    design.addPosition("k18", [-1, 1, 25, -25]);
    design.addPosition("l18", [-1, 1, 25, -25]);
    design.addPosition("m18", [-1, 1, 25, -25]);
    design.addPosition("n18", [-1, 1, 25, -25]);
    design.addPosition("o18", [-1, 1, 25, -25]);
    design.addPosition("p18", [-1, 1, 25, -25]);
    design.addPosition("q18", [-1, 1, 25, -25]);
    design.addPosition("r18", [-1, 1, 25, -25]);
    design.addPosition("s18", [-1, 1, 25, -25]);
    design.addPosition("t18", [-1, 1, 25, -25]);
    design.addPosition("u18", [-1, 1, 25, -25]);
    design.addPosition("v18", [-1, 1, 25, -25]);
    design.addPosition("w18", [-1, 1, 25, -25]);
    design.addPosition("x18", [-1, 1, 25, -25]);
    design.addPosition("y18", [-1, 0, 25, -25]);
    design.addPosition("a19", [0, 1, 0, -25]);
    design.addPosition("b19", [-1, 1, 0, -25]);
    design.addPosition("c19", [-1, 1, 0, -25]);
    design.addPosition("d19", [-1, 1, 0, -25]);
    design.addPosition("e19", [-1, 1, 0, -25]);
    design.addPosition("f19", [-1, 1, 0, -25]);
    design.addPosition("g19", [-1, 1, 0, -25]);
    design.addPosition("h19", [-1, 1, 0, -25]);
    design.addPosition("i19", [-1, 1, 0, -25]);
    design.addPosition("j19", [-1, 1, 0, -25]);
    design.addPosition("k19", [-1, 1, 0, -25]);
    design.addPosition("l19", [-1, 1, 0, -25]);
    design.addPosition("m19", [-1, 1, 0, -25]);
    design.addPosition("n19", [-1, 1, 0, -25]);
    design.addPosition("o19", [-1, 1, 0, -25]);
    design.addPosition("p19", [-1, 1, 0, -25]);
    design.addPosition("q19", [-1, 1, 0, -25]);
    design.addPosition("r19", [-1, 1, 0, -25]);
    design.addPosition("s19", [-1, 1, 0, -25]);
    design.addPosition("t19", [-1, 1, 0, -25]);
    design.addPosition("u19", [-1, 1, 0, -25]);
    design.addPosition("v19", [-1, 1, 0, -25]);
    design.addPosition("w19", [-1, 1, 0, -25]);
    design.addPosition("x19", [-1, 1, 0, -25]);
    design.addPosition("y19", [-1, 0, 0, -25]);

    design.addZone("goal", 1, [314, 240, 339, 389, 315, 289, 414, 415, 365, 290, 239, 340, 364, 264, 390, 265]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	0);	// Box
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	0);	// Box
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.LITERAL,	0);	// Box
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.LITERAL,	0);	// Box
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	6);	// $7
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	7);	// $8
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.LITERAL,	0);	// Box
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	7);	// $8
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	8);	// $9
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	9);	// $10
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.LITERAL,	0);	// Box
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	5);	// $6
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	6);	// $7
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	7);	// $8
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	8);	// $9
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	9);	// $10
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	10);	// $11
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	11);	// $12
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.LITERAL,	0);	// Box
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	5);	// $6
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	6);	// $7
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	7);	// $8
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	8);	// $9
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	9);	// $10
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	10);	// $11
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	11);	// $12
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	12);	// $13
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	13);	// $14
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.LITERAL,	0);	// Box
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	6);	// $7
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	7);	// $8
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	8);	// $9
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	9);	// $10
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	10);	// $11
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	11);	// $12
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	12);	// $13
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	13);	// $14
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	14);	// $15
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	15);	// $16
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Box", 0);

    design.addPiece("Wall", 1);

    design.addPiece("Ball", 2);
    design.addMove(2, 0, [3, 3], 0);
    design.addMove(2, 1, [3, 3], 0);
    design.addMove(2, 2, [3, 3, 3, 3], 0);
    design.addMove(2, 3, [3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 4, [3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 5, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 6, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 7, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 8, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 0, [2, 2], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 2, [2, 2, 2, 2], 0);
    design.addMove(2, 3, [2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 4, [2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 5, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 6, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 7, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 8, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 0, [0, 0], 0);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 2, [0, 0, 0, 0], 0);
    design.addMove(2, 3, [0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 4, [0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 0, [1, 1], 0);
    design.addMove(2, 1, [1, 1], 0);
    design.addMove(2, 2, [1, 1, 1, 1], 0);
    design.addMove(2, 3, [1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 4, [1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 6, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 7, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 8, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);

    design.setup("You", "Wall", 29);
    design.setup("You", "Wall", 148);
    design.setup("You", "Wall", 362);
    design.setup("You", "Wall", 108);
    design.setup("You", "Wall", 324);
    design.setup("You", "Wall", 92);
    design.setup("You", "Wall", 438);
    design.setup("You", "Wall", 366);
    design.setup("You", "Wall", 6);
    design.setup("You", "Wall", 140);
    design.setup("You", "Wall", 361);
    design.setup("You", "Wall", 343);
    design.setup("You", "Wall", 388);
    design.setup("You", "Wall", 194);
    design.setup("You", "Wall", 294);
    design.setup("You", "Wall", 234);
    design.setup("You", "Wall", 82);
    design.setup("You", "Wall", 61);
    design.setup("You", "Wall", 372);
    design.setup("You", "Wall", 467);
    design.setup("You", "Wall", 373);
    design.setup("You", "Wall", 233);
    design.setup("You", "Wall", 126);
    design.setup("You", "Wall", 338);
    design.setup("You", "Wall", 299);
    design.setup("You", "Wall", 145);
    design.setup("You", "Wall", 182);
    design.setup("You", "Wall", 358);
    design.setup("You", "Wall", 301);
    design.setup("You", "Wall", 224);
    design.setup("You", "Wall", 279);
    design.setup("You", "Wall", 359);
    design.setup("You", "Wall", 295);
    design.setup("You", "Wall", 179);
    design.setup("You", "Wall", 203);
    design.setup("You", "Wall", 308);
    design.setup("You", "Wall", 78);
    design.setup("You", "Wall", 263);
    design.setup("You", "Wall", 464);
    design.setup("You", "Wall", 174);
    design.setup("You", "Wall", 332);
    design.setup("You", "Wall", 249);
    design.setup("You", "Wall", 469);
    design.setup("You", "Wall", 291);
    design.setup("You", "Wall", 215);
    design.setup("You", "Wall", 276);
    design.setup("You", "Wall", 230);
    design.setup("You", "Wall", 10);
    design.setup("You", "Wall", 470);
    design.setup("You", "Wall", 149);
    design.setup("You", "Wall", 260);
    design.setup("You", "Wall", 466);
    design.setup("You", "Wall", 146);
    design.setup("You", "Wall", 64);
    design.setup("You", "Wall", 147);
    design.setup("You", "Wall", 237);
    design.setup("You", "Wall", 184);
    design.setup("You", "Wall", 7);
    design.setup("You", "Wall", 93);
    design.setup("You", "Wall", 200);
    design.setup("You", "Wall", 90);
    design.setup("You", "Wall", 127);
    design.setup("You", "Wall", 213);
    design.setup("You", "Wall", 162);
    design.setup("You", "Wall", 393);
    design.setup("You", "Wall", 141);
    design.setup("You", "Wall", 217);
    design.setup("You", "Wall", 165);
    design.setup("You", "Wall", 273);
    design.setup("You", "Wall", 267);
    design.setup("You", "Wall", 102);
    design.setup("You", "Wall", 95);
    design.setup("You", "Wall", 30);
    design.setup("You", "Wall", 150);
    design.setup("You", "Wall", 112);
    design.setup("You", "Wall", 302);
    design.setup("You", "Wall", 310);
    design.setup("You", "Wall", 238);
    design.setup("You", "Wall", 91);
    design.setup("You", "Wall", 423);
    design.setup("You", "Wall", 447);
    design.setup("You", "Wall", 370);
    design.setup("You", "Wall", 183);
    design.setup("You", "Wall", 226);
    design.setup("You", "Wall", 187);
    design.setup("You", "Wall", 333);
    design.setup("You", "Wall", 28);
    design.setup("You", "Wall", 199);
    design.setup("You", "Wall", 311);
    design.setup("You", "Wall", 395);
    design.setup("You", "Wall", 107);
    design.setup("You", "Wall", 269);
    design.setup("You", "Wall", 349);
    design.setup("You", "Wall", 391);
    design.setup("You", "Wall", 163);
    design.setup("You", "Wall", 341);
    design.setup("You", "Wall", 232);
    design.setup("You", "Wall", 170);
    design.setup("You", "Wall", 444);
    design.setup("You", "Wall", 448);
    design.setup("You", "Wall", 53);
    design.setup("You", "Wall", 468);
    design.setup("You", "Wall", 214);
    design.setup("You", "Wall", 360);
    design.setup("You", "Wall", 125);
    design.setup("You", "Wall", 167);
    design.setup("You", "Wall", 169);
    design.setup("You", "Wall", 219);
    design.setup("You", "Wall", 413);
    design.setup("You", "Wall", 175);
    design.setup("You", "Wall", 178);
    design.setup("You", "Wall", 201);
    design.setup("You", "Wall", 11);
    design.setup("You", "Wall", 274);
    design.setup("You", "Wall", 221);
    design.setup("You", "Wall", 439);
    design.setup("You", "Wall", 204);
    design.setup("You", "Wall", 103);
    design.setup("You", "Wall", 465);
    design.setup("You", "Wall", 330);
    design.setup("You", "Wall", 59);
    design.setup("You", "Wall", 316);
    design.setup("You", "Wall", 36);
    design.setup("You", "Wall", 65);
    design.setup("You", "Wall", 348);
    design.setup("You", "Wall", 63);
    design.setup("You", "Wall", 57);
    design.setup("You", "Wall", 281);
    design.setup("You", "Wall", 303);
    design.setup("You", "Wall", 394);
    design.setup("You", "Wall", 248);
    design.setup("You", "Wall", 164);
    design.setup("You", "Wall", 345);
    design.setup("You", "Wall", 292);
    design.setup("You", "Wall", 8);
    design.setup("You", "Wall", 235);
    design.setup("You", "Wall", 180);
    design.setup("You", "Wall", 62);
    design.setup("You", "Wall", 471);
    design.setup("You", "Wall", 197);
    design.setup("You", "Wall", 181);
    design.setup("You", "Wall", 283);
    design.setup("You", "Wall", 109);
    design.setup("You", "Wall", 212);
    design.setup("You", "Wall", 398);
    design.setup("You", "Wall", 166);
    design.setup("You", "Wall", 31);
    design.setup("You", "Wall", 363);
    design.setup("You", "Wall", 270);
    design.setup("You", "Wall", 442);
    design.setup("You", "Wall", 205);
    design.setup("You", "Wall", 185);
    design.setup("You", "Wall", 94);
    design.setup("You", "Wall", 304);
    design.setup("You", "Wall", 120);
    design.setup("You", "Wall", 229);
    design.setup("You", "Wall", 192);
    design.setup("You", "Wall", 472);
    design.setup("You", "Wall", 329);
    design.setup("You", "Wall", 262);
    design.setup("You", "Wall", 9);
    design.setup("You", "Wall", 443);
    design.setup("You", "Wall", 228);
    design.setup("You", "Wall", 111);
    design.setup("You", "Wall", 251);
    design.setup("You", "Wall", 331);
    design.setup("You", "Wall", 32);
    design.setup("You", "Wall", 137);
    design.setup("You", "Wall", 392);
    design.setup("You", "Wall", 313);
    design.setup("You", "Wall", 242);
    design.setup("You", "Box", 158);
    design.setup("You", "Box", 246);
    design.setup("You", "Box", 131);
    design.setup("You", "Box", 261);
    design.setup("You", "Box", 80);
    design.setup("You", "Box", 297);
    design.setup("You", "Box", 104);
    design.setup("You", "Box", 254);
    design.setup("You", "Box", 85);
    design.setup("You", "Box", 257);
    design.setup("You", "Box", 218);
    design.setup("You", "Box", 133);
    design.setup("You", "Box", 321);
    design.setup("You", "Box", 135);
    design.setup("You", "Box", 268);
    design.setup("You", "Box", 130);
    design.setup("You", "Ball", 188);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouBox", "You Box");
    view.defPiece("YouWall", "You Wall");
    view.defPiece("YouBall", "You Ball");
 
    view.defPosition("a1", 0, 0, 24, 24);
    view.defPosition("b1", 24, 0, 24, 24);
    view.defPosition("c1", 48, 0, 24, 24);
    view.defPosition("d1", 72, 0, 24, 24);
    view.defPosition("e1", 96, 0, 24, 24);
    view.defPosition("f1", 120, 0, 24, 24);
    view.defPosition("g1", 144, 0, 24, 24);
    view.defPosition("h1", 168, 0, 24, 24);
    view.defPosition("i1", 192, 0, 24, 24);
    view.defPosition("j1", 216, 0, 24, 24);
    view.defPosition("k1", 240, 0, 24, 24);
    view.defPosition("l1", 264, 0, 24, 24);
    view.defPosition("m1", 288, 0, 24, 24);
    view.defPosition("n1", 312, 0, 24, 24);
    view.defPosition("o1", 336, 0, 24, 24);
    view.defPosition("p1", 360, 0, 24, 24);
    view.defPosition("q1", 384, 0, 24, 24);
    view.defPosition("r1", 408, 0, 24, 24);
    view.defPosition("s1", 432, 0, 24, 24);
    view.defPosition("t1", 456, 0, 24, 24);
    view.defPosition("u1", 480, 0, 24, 24);
    view.defPosition("v1", 504, 0, 24, 24);
    view.defPosition("w1", 528, 0, 24, 24);
    view.defPosition("x1", 552, 0, 24, 24);
    view.defPosition("y1", 576, 0, 24, 24);
    view.defPosition("a2", 0, 24, 24, 24);
    view.defPosition("b2", 24, 24, 24, 24);
    view.defPosition("c2", 48, 24, 24, 24);
    view.defPosition("d2", 72, 24, 24, 24);
    view.defPosition("e2", 96, 24, 24, 24);
    view.defPosition("f2", 120, 24, 24, 24);
    view.defPosition("g2", 144, 24, 24, 24);
    view.defPosition("h2", 168, 24, 24, 24);
    view.defPosition("i2", 192, 24, 24, 24);
    view.defPosition("j2", 216, 24, 24, 24);
    view.defPosition("k2", 240, 24, 24, 24);
    view.defPosition("l2", 264, 24, 24, 24);
    view.defPosition("m2", 288, 24, 24, 24);
    view.defPosition("n2", 312, 24, 24, 24);
    view.defPosition("o2", 336, 24, 24, 24);
    view.defPosition("p2", 360, 24, 24, 24);
    view.defPosition("q2", 384, 24, 24, 24);
    view.defPosition("r2", 408, 24, 24, 24);
    view.defPosition("s2", 432, 24, 24, 24);
    view.defPosition("t2", 456, 24, 24, 24);
    view.defPosition("u2", 480, 24, 24, 24);
    view.defPosition("v2", 504, 24, 24, 24);
    view.defPosition("w2", 528, 24, 24, 24);
    view.defPosition("x2", 552, 24, 24, 24);
    view.defPosition("y2", 576, 24, 24, 24);
    view.defPosition("a3", 0, 48, 24, 24);
    view.defPosition("b3", 24, 48, 24, 24);
    view.defPosition("c3", 48, 48, 24, 24);
    view.defPosition("d3", 72, 48, 24, 24);
    view.defPosition("e3", 96, 48, 24, 24);
    view.defPosition("f3", 120, 48, 24, 24);
    view.defPosition("g3", 144, 48, 24, 24);
    view.defPosition("h3", 168, 48, 24, 24);
    view.defPosition("i3", 192, 48, 24, 24);
    view.defPosition("j3", 216, 48, 24, 24);
    view.defPosition("k3", 240, 48, 24, 24);
    view.defPosition("l3", 264, 48, 24, 24);
    view.defPosition("m3", 288, 48, 24, 24);
    view.defPosition("n3", 312, 48, 24, 24);
    view.defPosition("o3", 336, 48, 24, 24);
    view.defPosition("p3", 360, 48, 24, 24);
    view.defPosition("q3", 384, 48, 24, 24);
    view.defPosition("r3", 408, 48, 24, 24);
    view.defPosition("s3", 432, 48, 24, 24);
    view.defPosition("t3", 456, 48, 24, 24);
    view.defPosition("u3", 480, 48, 24, 24);
    view.defPosition("v3", 504, 48, 24, 24);
    view.defPosition("w3", 528, 48, 24, 24);
    view.defPosition("x3", 552, 48, 24, 24);
    view.defPosition("y3", 576, 48, 24, 24);
    view.defPosition("a4", 0, 72, 24, 24);
    view.defPosition("b4", 24, 72, 24, 24);
    view.defPosition("c4", 48, 72, 24, 24);
    view.defPosition("d4", 72, 72, 24, 24);
    view.defPosition("e4", 96, 72, 24, 24);
    view.defPosition("f4", 120, 72, 24, 24);
    view.defPosition("g4", 144, 72, 24, 24);
    view.defPosition("h4", 168, 72, 24, 24);
    view.defPosition("i4", 192, 72, 24, 24);
    view.defPosition("j4", 216, 72, 24, 24);
    view.defPosition("k4", 240, 72, 24, 24);
    view.defPosition("l4", 264, 72, 24, 24);
    view.defPosition("m4", 288, 72, 24, 24);
    view.defPosition("n4", 312, 72, 24, 24);
    view.defPosition("o4", 336, 72, 24, 24);
    view.defPosition("p4", 360, 72, 24, 24);
    view.defPosition("q4", 384, 72, 24, 24);
    view.defPosition("r4", 408, 72, 24, 24);
    view.defPosition("s4", 432, 72, 24, 24);
    view.defPosition("t4", 456, 72, 24, 24);
    view.defPosition("u4", 480, 72, 24, 24);
    view.defPosition("v4", 504, 72, 24, 24);
    view.defPosition("w4", 528, 72, 24, 24);
    view.defPosition("x4", 552, 72, 24, 24);
    view.defPosition("y4", 576, 72, 24, 24);
    view.defPosition("a5", 0, 96, 24, 24);
    view.defPosition("b5", 24, 96, 24, 24);
    view.defPosition("c5", 48, 96, 24, 24);
    view.defPosition("d5", 72, 96, 24, 24);
    view.defPosition("e5", 96, 96, 24, 24);
    view.defPosition("f5", 120, 96, 24, 24);
    view.defPosition("g5", 144, 96, 24, 24);
    view.defPosition("h5", 168, 96, 24, 24);
    view.defPosition("i5", 192, 96, 24, 24);
    view.defPosition("j5", 216, 96, 24, 24);
    view.defPosition("k5", 240, 96, 24, 24);
    view.defPosition("l5", 264, 96, 24, 24);
    view.defPosition("m5", 288, 96, 24, 24);
    view.defPosition("n5", 312, 96, 24, 24);
    view.defPosition("o5", 336, 96, 24, 24);
    view.defPosition("p5", 360, 96, 24, 24);
    view.defPosition("q5", 384, 96, 24, 24);
    view.defPosition("r5", 408, 96, 24, 24);
    view.defPosition("s5", 432, 96, 24, 24);
    view.defPosition("t5", 456, 96, 24, 24);
    view.defPosition("u5", 480, 96, 24, 24);
    view.defPosition("v5", 504, 96, 24, 24);
    view.defPosition("w5", 528, 96, 24, 24);
    view.defPosition("x5", 552, 96, 24, 24);
    view.defPosition("y5", 576, 96, 24, 24);
    view.defPosition("a6", 0, 120, 24, 24);
    view.defPosition("b6", 24, 120, 24, 24);
    view.defPosition("c6", 48, 120, 24, 24);
    view.defPosition("d6", 72, 120, 24, 24);
    view.defPosition("e6", 96, 120, 24, 24);
    view.defPosition("f6", 120, 120, 24, 24);
    view.defPosition("g6", 144, 120, 24, 24);
    view.defPosition("h6", 168, 120, 24, 24);
    view.defPosition("i6", 192, 120, 24, 24);
    view.defPosition("j6", 216, 120, 24, 24);
    view.defPosition("k6", 240, 120, 24, 24);
    view.defPosition("l6", 264, 120, 24, 24);
    view.defPosition("m6", 288, 120, 24, 24);
    view.defPosition("n6", 312, 120, 24, 24);
    view.defPosition("o6", 336, 120, 24, 24);
    view.defPosition("p6", 360, 120, 24, 24);
    view.defPosition("q6", 384, 120, 24, 24);
    view.defPosition("r6", 408, 120, 24, 24);
    view.defPosition("s6", 432, 120, 24, 24);
    view.defPosition("t6", 456, 120, 24, 24);
    view.defPosition("u6", 480, 120, 24, 24);
    view.defPosition("v6", 504, 120, 24, 24);
    view.defPosition("w6", 528, 120, 24, 24);
    view.defPosition("x6", 552, 120, 24, 24);
    view.defPosition("y6", 576, 120, 24, 24);
    view.defPosition("a7", 0, 144, 24, 24);
    view.defPosition("b7", 24, 144, 24, 24);
    view.defPosition("c7", 48, 144, 24, 24);
    view.defPosition("d7", 72, 144, 24, 24);
    view.defPosition("e7", 96, 144, 24, 24);
    view.defPosition("f7", 120, 144, 24, 24);
    view.defPosition("g7", 144, 144, 24, 24);
    view.defPosition("h7", 168, 144, 24, 24);
    view.defPosition("i7", 192, 144, 24, 24);
    view.defPosition("j7", 216, 144, 24, 24);
    view.defPosition("k7", 240, 144, 24, 24);
    view.defPosition("l7", 264, 144, 24, 24);
    view.defPosition("m7", 288, 144, 24, 24);
    view.defPosition("n7", 312, 144, 24, 24);
    view.defPosition("o7", 336, 144, 24, 24);
    view.defPosition("p7", 360, 144, 24, 24);
    view.defPosition("q7", 384, 144, 24, 24);
    view.defPosition("r7", 408, 144, 24, 24);
    view.defPosition("s7", 432, 144, 24, 24);
    view.defPosition("t7", 456, 144, 24, 24);
    view.defPosition("u7", 480, 144, 24, 24);
    view.defPosition("v7", 504, 144, 24, 24);
    view.defPosition("w7", 528, 144, 24, 24);
    view.defPosition("x7", 552, 144, 24, 24);
    view.defPosition("y7", 576, 144, 24, 24);
    view.defPosition("a8", 0, 168, 24, 24);
    view.defPosition("b8", 24, 168, 24, 24);
    view.defPosition("c8", 48, 168, 24, 24);
    view.defPosition("d8", 72, 168, 24, 24);
    view.defPosition("e8", 96, 168, 24, 24);
    view.defPosition("f8", 120, 168, 24, 24);
    view.defPosition("g8", 144, 168, 24, 24);
    view.defPosition("h8", 168, 168, 24, 24);
    view.defPosition("i8", 192, 168, 24, 24);
    view.defPosition("j8", 216, 168, 24, 24);
    view.defPosition("k8", 240, 168, 24, 24);
    view.defPosition("l8", 264, 168, 24, 24);
    view.defPosition("m8", 288, 168, 24, 24);
    view.defPosition("n8", 312, 168, 24, 24);
    view.defPosition("o8", 336, 168, 24, 24);
    view.defPosition("p8", 360, 168, 24, 24);
    view.defPosition("q8", 384, 168, 24, 24);
    view.defPosition("r8", 408, 168, 24, 24);
    view.defPosition("s8", 432, 168, 24, 24);
    view.defPosition("t8", 456, 168, 24, 24);
    view.defPosition("u8", 480, 168, 24, 24);
    view.defPosition("v8", 504, 168, 24, 24);
    view.defPosition("w8", 528, 168, 24, 24);
    view.defPosition("x8", 552, 168, 24, 24);
    view.defPosition("y8", 576, 168, 24, 24);
    view.defPosition("a9", 0, 192, 24, 24);
    view.defPosition("b9", 24, 192, 24, 24);
    view.defPosition("c9", 48, 192, 24, 24);
    view.defPosition("d9", 72, 192, 24, 24);
    view.defPosition("e9", 96, 192, 24, 24);
    view.defPosition("f9", 120, 192, 24, 24);
    view.defPosition("g9", 144, 192, 24, 24);
    view.defPosition("h9", 168, 192, 24, 24);
    view.defPosition("i9", 192, 192, 24, 24);
    view.defPosition("j9", 216, 192, 24, 24);
    view.defPosition("k9", 240, 192, 24, 24);
    view.defPosition("l9", 264, 192, 24, 24);
    view.defPosition("m9", 288, 192, 24, 24);
    view.defPosition("n9", 312, 192, 24, 24);
    view.defPosition("o9", 336, 192, 24, 24);
    view.defPosition("p9", 360, 192, 24, 24);
    view.defPosition("q9", 384, 192, 24, 24);
    view.defPosition("r9", 408, 192, 24, 24);
    view.defPosition("s9", 432, 192, 24, 24);
    view.defPosition("t9", 456, 192, 24, 24);
    view.defPosition("u9", 480, 192, 24, 24);
    view.defPosition("v9", 504, 192, 24, 24);
    view.defPosition("w9", 528, 192, 24, 24);
    view.defPosition("x9", 552, 192, 24, 24);
    view.defPosition("y9", 576, 192, 24, 24);
    view.defPosition("a10", 0, 216, 24, 24);
    view.defPosition("b10", 24, 216, 24, 24);
    view.defPosition("c10", 48, 216, 24, 24);
    view.defPosition("d10", 72, 216, 24, 24);
    view.defPosition("e10", 96, 216, 24, 24);
    view.defPosition("f10", 120, 216, 24, 24);
    view.defPosition("g10", 144, 216, 24, 24);
    view.defPosition("h10", 168, 216, 24, 24);
    view.defPosition("i10", 192, 216, 24, 24);
    view.defPosition("j10", 216, 216, 24, 24);
    view.defPosition("k10", 240, 216, 24, 24);
    view.defPosition("l10", 264, 216, 24, 24);
    view.defPosition("m10", 288, 216, 24, 24);
    view.defPosition("n10", 312, 216, 24, 24);
    view.defPosition("o10", 336, 216, 24, 24);
    view.defPosition("p10", 360, 216, 24, 24);
    view.defPosition("q10", 384, 216, 24, 24);
    view.defPosition("r10", 408, 216, 24, 24);
    view.defPosition("s10", 432, 216, 24, 24);
    view.defPosition("t10", 456, 216, 24, 24);
    view.defPosition("u10", 480, 216, 24, 24);
    view.defPosition("v10", 504, 216, 24, 24);
    view.defPosition("w10", 528, 216, 24, 24);
    view.defPosition("x10", 552, 216, 24, 24);
    view.defPosition("y10", 576, 216, 24, 24);
    view.defPosition("a11", 0, 240, 24, 24);
    view.defPosition("b11", 24, 240, 24, 24);
    view.defPosition("c11", 48, 240, 24, 24);
    view.defPosition("d11", 72, 240, 24, 24);
    view.defPosition("e11", 96, 240, 24, 24);
    view.defPosition("f11", 120, 240, 24, 24);
    view.defPosition("g11", 144, 240, 24, 24);
    view.defPosition("h11", 168, 240, 24, 24);
    view.defPosition("i11", 192, 240, 24, 24);
    view.defPosition("j11", 216, 240, 24, 24);
    view.defPosition("k11", 240, 240, 24, 24);
    view.defPosition("l11", 264, 240, 24, 24);
    view.defPosition("m11", 288, 240, 24, 24);
    view.defPosition("n11", 312, 240, 24, 24);
    view.defPosition("o11", 336, 240, 24, 24);
    view.defPosition("p11", 360, 240, 24, 24);
    view.defPosition("q11", 384, 240, 24, 24);
    view.defPosition("r11", 408, 240, 24, 24);
    view.defPosition("s11", 432, 240, 24, 24);
    view.defPosition("t11", 456, 240, 24, 24);
    view.defPosition("u11", 480, 240, 24, 24);
    view.defPosition("v11", 504, 240, 24, 24);
    view.defPosition("w11", 528, 240, 24, 24);
    view.defPosition("x11", 552, 240, 24, 24);
    view.defPosition("y11", 576, 240, 24, 24);
    view.defPosition("a12", 0, 264, 24, 24);
    view.defPosition("b12", 24, 264, 24, 24);
    view.defPosition("c12", 48, 264, 24, 24);
    view.defPosition("d12", 72, 264, 24, 24);
    view.defPosition("e12", 96, 264, 24, 24);
    view.defPosition("f12", 120, 264, 24, 24);
    view.defPosition("g12", 144, 264, 24, 24);
    view.defPosition("h12", 168, 264, 24, 24);
    view.defPosition("i12", 192, 264, 24, 24);
    view.defPosition("j12", 216, 264, 24, 24);
    view.defPosition("k12", 240, 264, 24, 24);
    view.defPosition("l12", 264, 264, 24, 24);
    view.defPosition("m12", 288, 264, 24, 24);
    view.defPosition("n12", 312, 264, 24, 24);
    view.defPosition("o12", 336, 264, 24, 24);
    view.defPosition("p12", 360, 264, 24, 24);
    view.defPosition("q12", 384, 264, 24, 24);
    view.defPosition("r12", 408, 264, 24, 24);
    view.defPosition("s12", 432, 264, 24, 24);
    view.defPosition("t12", 456, 264, 24, 24);
    view.defPosition("u12", 480, 264, 24, 24);
    view.defPosition("v12", 504, 264, 24, 24);
    view.defPosition("w12", 528, 264, 24, 24);
    view.defPosition("x12", 552, 264, 24, 24);
    view.defPosition("y12", 576, 264, 24, 24);
    view.defPosition("a13", 0, 288, 24, 24);
    view.defPosition("b13", 24, 288, 24, 24);
    view.defPosition("c13", 48, 288, 24, 24);
    view.defPosition("d13", 72, 288, 24, 24);
    view.defPosition("e13", 96, 288, 24, 24);
    view.defPosition("f13", 120, 288, 24, 24);
    view.defPosition("g13", 144, 288, 24, 24);
    view.defPosition("h13", 168, 288, 24, 24);
    view.defPosition("i13", 192, 288, 24, 24);
    view.defPosition("j13", 216, 288, 24, 24);
    view.defPosition("k13", 240, 288, 24, 24);
    view.defPosition("l13", 264, 288, 24, 24);
    view.defPosition("m13", 288, 288, 24, 24);
    view.defPosition("n13", 312, 288, 24, 24);
    view.defPosition("o13", 336, 288, 24, 24);
    view.defPosition("p13", 360, 288, 24, 24);
    view.defPosition("q13", 384, 288, 24, 24);
    view.defPosition("r13", 408, 288, 24, 24);
    view.defPosition("s13", 432, 288, 24, 24);
    view.defPosition("t13", 456, 288, 24, 24);
    view.defPosition("u13", 480, 288, 24, 24);
    view.defPosition("v13", 504, 288, 24, 24);
    view.defPosition("w13", 528, 288, 24, 24);
    view.defPosition("x13", 552, 288, 24, 24);
    view.defPosition("y13", 576, 288, 24, 24);
    view.defPosition("a14", 0, 312, 24, 24);
    view.defPosition("b14", 24, 312, 24, 24);
    view.defPosition("c14", 48, 312, 24, 24);
    view.defPosition("d14", 72, 312, 24, 24);
    view.defPosition("e14", 96, 312, 24, 24);
    view.defPosition("f14", 120, 312, 24, 24);
    view.defPosition("g14", 144, 312, 24, 24);
    view.defPosition("h14", 168, 312, 24, 24);
    view.defPosition("i14", 192, 312, 24, 24);
    view.defPosition("j14", 216, 312, 24, 24);
    view.defPosition("k14", 240, 312, 24, 24);
    view.defPosition("l14", 264, 312, 24, 24);
    view.defPosition("m14", 288, 312, 24, 24);
    view.defPosition("n14", 312, 312, 24, 24);
    view.defPosition("o14", 336, 312, 24, 24);
    view.defPosition("p14", 360, 312, 24, 24);
    view.defPosition("q14", 384, 312, 24, 24);
    view.defPosition("r14", 408, 312, 24, 24);
    view.defPosition("s14", 432, 312, 24, 24);
    view.defPosition("t14", 456, 312, 24, 24);
    view.defPosition("u14", 480, 312, 24, 24);
    view.defPosition("v14", 504, 312, 24, 24);
    view.defPosition("w14", 528, 312, 24, 24);
    view.defPosition("x14", 552, 312, 24, 24);
    view.defPosition("y14", 576, 312, 24, 24);
    view.defPosition("a15", 0, 336, 24, 24);
    view.defPosition("b15", 24, 336, 24, 24);
    view.defPosition("c15", 48, 336, 24, 24);
    view.defPosition("d15", 72, 336, 24, 24);
    view.defPosition("e15", 96, 336, 24, 24);
    view.defPosition("f15", 120, 336, 24, 24);
    view.defPosition("g15", 144, 336, 24, 24);
    view.defPosition("h15", 168, 336, 24, 24);
    view.defPosition("i15", 192, 336, 24, 24);
    view.defPosition("j15", 216, 336, 24, 24);
    view.defPosition("k15", 240, 336, 24, 24);
    view.defPosition("l15", 264, 336, 24, 24);
    view.defPosition("m15", 288, 336, 24, 24);
    view.defPosition("n15", 312, 336, 24, 24);
    view.defPosition("o15", 336, 336, 24, 24);
    view.defPosition("p15", 360, 336, 24, 24);
    view.defPosition("q15", 384, 336, 24, 24);
    view.defPosition("r15", 408, 336, 24, 24);
    view.defPosition("s15", 432, 336, 24, 24);
    view.defPosition("t15", 456, 336, 24, 24);
    view.defPosition("u15", 480, 336, 24, 24);
    view.defPosition("v15", 504, 336, 24, 24);
    view.defPosition("w15", 528, 336, 24, 24);
    view.defPosition("x15", 552, 336, 24, 24);
    view.defPosition("y15", 576, 336, 24, 24);
    view.defPosition("a16", 0, 360, 24, 24);
    view.defPosition("b16", 24, 360, 24, 24);
    view.defPosition("c16", 48, 360, 24, 24);
    view.defPosition("d16", 72, 360, 24, 24);
    view.defPosition("e16", 96, 360, 24, 24);
    view.defPosition("f16", 120, 360, 24, 24);
    view.defPosition("g16", 144, 360, 24, 24);
    view.defPosition("h16", 168, 360, 24, 24);
    view.defPosition("i16", 192, 360, 24, 24);
    view.defPosition("j16", 216, 360, 24, 24);
    view.defPosition("k16", 240, 360, 24, 24);
    view.defPosition("l16", 264, 360, 24, 24);
    view.defPosition("m16", 288, 360, 24, 24);
    view.defPosition("n16", 312, 360, 24, 24);
    view.defPosition("o16", 336, 360, 24, 24);
    view.defPosition("p16", 360, 360, 24, 24);
    view.defPosition("q16", 384, 360, 24, 24);
    view.defPosition("r16", 408, 360, 24, 24);
    view.defPosition("s16", 432, 360, 24, 24);
    view.defPosition("t16", 456, 360, 24, 24);
    view.defPosition("u16", 480, 360, 24, 24);
    view.defPosition("v16", 504, 360, 24, 24);
    view.defPosition("w16", 528, 360, 24, 24);
    view.defPosition("x16", 552, 360, 24, 24);
    view.defPosition("y16", 576, 360, 24, 24);
    view.defPosition("a17", 0, 384, 24, 24);
    view.defPosition("b17", 24, 384, 24, 24);
    view.defPosition("c17", 48, 384, 24, 24);
    view.defPosition("d17", 72, 384, 24, 24);
    view.defPosition("e17", 96, 384, 24, 24);
    view.defPosition("f17", 120, 384, 24, 24);
    view.defPosition("g17", 144, 384, 24, 24);
    view.defPosition("h17", 168, 384, 24, 24);
    view.defPosition("i17", 192, 384, 24, 24);
    view.defPosition("j17", 216, 384, 24, 24);
    view.defPosition("k17", 240, 384, 24, 24);
    view.defPosition("l17", 264, 384, 24, 24);
    view.defPosition("m17", 288, 384, 24, 24);
    view.defPosition("n17", 312, 384, 24, 24);
    view.defPosition("o17", 336, 384, 24, 24);
    view.defPosition("p17", 360, 384, 24, 24);
    view.defPosition("q17", 384, 384, 24, 24);
    view.defPosition("r17", 408, 384, 24, 24);
    view.defPosition("s17", 432, 384, 24, 24);
    view.defPosition("t17", 456, 384, 24, 24);
    view.defPosition("u17", 480, 384, 24, 24);
    view.defPosition("v17", 504, 384, 24, 24);
    view.defPosition("w17", 528, 384, 24, 24);
    view.defPosition("x17", 552, 384, 24, 24);
    view.defPosition("y17", 576, 384, 24, 24);
    view.defPosition("a18", 0, 408, 24, 24);
    view.defPosition("b18", 24, 408, 24, 24);
    view.defPosition("c18", 48, 408, 24, 24);
    view.defPosition("d18", 72, 408, 24, 24);
    view.defPosition("e18", 96, 408, 24, 24);
    view.defPosition("f18", 120, 408, 24, 24);
    view.defPosition("g18", 144, 408, 24, 24);
    view.defPosition("h18", 168, 408, 24, 24);
    view.defPosition("i18", 192, 408, 24, 24);
    view.defPosition("j18", 216, 408, 24, 24);
    view.defPosition("k18", 240, 408, 24, 24);
    view.defPosition("l18", 264, 408, 24, 24);
    view.defPosition("m18", 288, 408, 24, 24);
    view.defPosition("n18", 312, 408, 24, 24);
    view.defPosition("o18", 336, 408, 24, 24);
    view.defPosition("p18", 360, 408, 24, 24);
    view.defPosition("q18", 384, 408, 24, 24);
    view.defPosition("r18", 408, 408, 24, 24);
    view.defPosition("s18", 432, 408, 24, 24);
    view.defPosition("t18", 456, 408, 24, 24);
    view.defPosition("u18", 480, 408, 24, 24);
    view.defPosition("v18", 504, 408, 24, 24);
    view.defPosition("w18", 528, 408, 24, 24);
    view.defPosition("x18", 552, 408, 24, 24);
    view.defPosition("y18", 576, 408, 24, 24);
    view.defPosition("a19", 0, 432, 24, 24);
    view.defPosition("b19", 24, 432, 24, 24);
    view.defPosition("c19", 48, 432, 24, 24);
    view.defPosition("d19", 72, 432, 24, 24);
    view.defPosition("e19", 96, 432, 24, 24);
    view.defPosition("f19", 120, 432, 24, 24);
    view.defPosition("g19", 144, 432, 24, 24);
    view.defPosition("h19", 168, 432, 24, 24);
    view.defPosition("i19", 192, 432, 24, 24);
    view.defPosition("j19", 216, 432, 24, 24);
    view.defPosition("k19", 240, 432, 24, 24);
    view.defPosition("l19", 264, 432, 24, 24);
    view.defPosition("m19", 288, 432, 24, 24);
    view.defPosition("n19", 312, 432, 24, 24);
    view.defPosition("o19", 336, 432, 24, 24);
    view.defPosition("p19", 360, 432, 24, 24);
    view.defPosition("q19", 384, 432, 24, 24);
    view.defPosition("r19", 408, 432, 24, 24);
    view.defPosition("s19", 432, 432, 24, 24);
    view.defPosition("t19", 456, 432, 24, 24);
    view.defPosition("u19", 480, 432, 24, 24);
    view.defPosition("v19", 504, 432, 24, 24);
    view.defPosition("w19", 528, 432, 24, 24);
    view.defPosition("x19", 552, 432, 24, 24);
    view.defPosition("y19", 576, 432, 24, 24);
}
