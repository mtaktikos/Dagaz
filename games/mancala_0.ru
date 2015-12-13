﻿game:    mancala
fact:    [1] В игре участвуют 2 игрока, которые ходят по очереди
fact:    Каждая лунка может содержать несколько камней
fact:    При выполнении хода, все камни вынимаются из лунки и раскладываются
         по одному в каждую следующую лунку в выбранном направлении

aspect:  Циклический посев
fact:    Если последний камень посева попадает в непустую лунку, из неё выбираются
         все камни и посев продолжается со следующей лунки в том же направлении

aspect:  Нулевой посев
fact:    На первом ходу игроки не могут выполнять результативные ходы
!:       [1] Первый ход оба игрока выполняют одновременно
?:       [2] Тот кто первым завершил посев, выполняет первый ход

board:   gabata
fact:    Три ряда по шесть лунок и два амбара
fact:    Игроку принадлежат лунки ближнего ему ряда, а также три правых
         лунки в среднем ряду
fact:    В нижнем ряду посев идёт слева направо, затем в среднем, по своим
         лункам, справа налево, затем по лункам противника в том де порядке
fact:    Первоначально, в каждую лунку (кроме амбаров) раскладывается по 
         3 камня

board:   mancala-MxN
fact:    M рядов по N лунок
fact:    Лунки в M/2 ближних рядах принадлежат игроку

aspect:  Амбары задействованы в посеве
fact:    Доска дополнена амбарами игроков
fact:    Посев проходит по крайней мере через один из амбаров

mancala: Габата
region:  Эфиопия
board:   gabata
aspect:  Циклический посев
aspect:  Нулевой посев
fact:    Если последний камень падает в пустую лунку, игрок забирает в амбар
         камни из лунок противника, расположенных в том же столбце
!:       После выполнения успешного захвата, игрок получает право на 
         дополнительный ход
?:       Правило действует только в случае, если посев завершён на своей стороне
?:       Забираются камни из всех лунок того же столбца (кроме той, в которой
         был завершён посев), вне зависимости от их принадлежности
fact:    Если игрок не может выполнить ход, его противник заьирает все камни,
         оставшиеся на доске в свое амбар
fact:    Игра ведётся в несколько раундов до полного отъёма камней
+:       Закончив раунд, более слабый игрок раскладывает камни из своего амбара
         по лункам, по 3, с нижней левой лунки, в направлении посева
+:       Если в последней лунке не хватает камней, более сильный игрок дополняет
         её до трёх из своих камней
+:       Оставшиеся камни, более сильный игрок раскладывает по своим лункам,
         помещая лишние камни в свой амбар

mancala: Селус
region:  Эфиопия
board:   gabata
aspect:  Циклический посев
fact:    Если последний камень посева падает в лунку с 3 камнями, образуется
         ловушка, содержащая 4 камня, принадлежащая игроку
+:       На первом ходу обоих игроков ловушки не создаются
+:       Из ловушки нельзя начинать посев
fact:    Если последний камень посева падает в ловушку, он переносится в амбар
         игрока, выполняющего ход, забирая с собой один камень из ловушки
+:       Если захват выполнен из ловушки, принадлежащей игроку, он получает
         право на дополнительный ход
+:       Захват не может быть выполнен, если ловушка создана в нижней левой
         лунке, принадлежащей игроку (ayemy)
+:       Если захват выполняется из ловушки в ayemy противника, игрок получает
         право на повторный ход, вне зависимости от принадлежности ловушки
?:       Ловушка ликвидируется если из неё забирается последний камень
fact:    Если у игрока нет ходов, он пропускает ход
fact:    Раунд завершается когда у игроков нет ходов
+:       Подсчитываются камни в ловушках и амбарах игроков

mancala: Охочичи
board:   mancala-6x2; mancala-8x2
fact:    Первоначально в каждой лунке по 4 камня
fact:    Посев однократный, против часовой стрелки, только по своей территории
fact:    Если последний камень посева падает в лунку с 3 камнями (дополняя
         их до 4), игрок захватывает эти камни и переносит в одну из лунок
         на территории противника
+:       К захваченным камням добавляются камни из предыдущих (по направлению
         посева) лунок, содержащих по 4 камня (до первой лунки, содержашей
         другое количество камней)
!:       Игрок не может добавлять камни каждый раз в одну и ту же лунку
         противника
fact:    Побеждает игрок, первым отдавший все свои камни противнику