Dagaz.AI.Patterns = [];

Dagaz.AI.Patterns.push({re: /.{7}A.{4}0.{12}/, price: 1000000});
Dagaz.AI.Patterns.push({re: /.{11}A0.{12}/, price: 1000000});
Dagaz.AI.Patterns.push({re: /.{12}0.{4}A.{7}/, price: 1000000});
Dagaz.AI.Patterns.push({re: /.{12}0A.{11}/, price: 1000000});
Dagaz.AI.Patterns.push({re: /.{7}[A-DX].{4}0.{12}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{11}[A-DX]0.{12}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{12}0.{4}[A-DX].{7}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{12}0[A-DX].{11}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{7}a.{4}0.{12}/, price: 999999});
Dagaz.AI.Patterns.push({re: /.{11}a0.{12}/, price: 999999});
Dagaz.AI.Patterns.push({re: /.{12}0.{4}a.{7}/, price: 999999});
Dagaz.AI.Patterns.push({re: /.{12}0a.{11}/, price: 999999});
Dagaz.AI.Patterns.push({re: /\s{10}[\s0]{2}0[\s0]{2}.{10}/, price: -1});
Dagaz.AI.Patterns.push({re: /\s{2}[\s0].{2}\s{2}[\s0].{2}\s{2}0.{2}\s{2}[\s0].{2}\s{2}[\s0].{2}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{10}[\s0]{2}0[\s0]{2}\s{10}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{2}[\s0]\s{2}.{2}[\s0]\s{2}.{2}0\s{2}.{2}[\s0]\s{2}.{2}[\s0]\s{2}/, price: -1});
Dagaz.AI.Patterns.push({re: /\s{5}[\s0]{2}0{2}[\s0].[A-DX]0{2}.{3}[A-DX].{7}/, price: -1});
Dagaz.AI.Patterns.push({re: /\s[\s0].{3}\s0{2}.{2}\s0{2}[A-DX].\s[\s0][A-DX].{2}\s[\s0].{3}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{7}[A-DX].{3}0{2}[A-DX].[\s0]0{2}[\s0]{2}\s{5}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{3}[\s0]\s.{2}[A-DX][\s0]\s.[A-DX]0{2}\s.{2}0{2}\s.{3}[\s0]\s/, price: -1});
Dagaz.AI.Patterns.push({re: /\s{5}[\s0]0{2}[\s0]{2}.0{2}[A-DX].{3}[A-DX].{7}/, price: -1});
Dagaz.AI.Patterns.push({re: /\s[\s0].{3}\s[\s0][A-DX].{2}\s0{2}[A-DX].\s0{2}.{2}\s[\s0].{3}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{7}[A-DX].{3}[A-DX]0{2}.[\s0]{2}0{2}[\s0]\s{5}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{3}[\s0]\s.{2}0{2}\s.[A-DX]0{2}\s.{2}[A-DX][\s0]\s.{3}[\s0]\s/, price: -1});
Dagaz.AI.Patterns.push({re: /\s{5}[\s0]0{3}[\s0].[A-DX]0[A-DX].{3}0.{7}/, price: -1});
Dagaz.AI.Patterns.push({re: /\s[\s0].{3}\s0[A-DX].{2}\s0{3}.\s0[A-DX].{2}\s[\s0].{3}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{7}0.{3}[A-DX]0[A-DX].[\s0]0{3}[\s0]\s{5}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{3}[\s0]\s.{2}[A-DX]0\s.0{3}\s.{2}[A-DX]0\s.{3}[\s0]\s/, price: -1});
Dagaz.AI.Patterns.push({re: /.{6}[a-dx]{2}.{3}0{2}.{12}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{11}[a-dx]0.{3}[a-dx]0.{7}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{12}0{2}.{3}[a-dx]{2}.{6}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{7}0[a-dx].{3}0[a-dx].{11}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{7}[a-dx]{2}.{3}0{2}.{11}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{6}[a-dx]0.{3}[a-dx]0.{12}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{11}0{2}.{3}[a-dx]{2}.{7}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{12}0[a-dx].{3}0[a-dx].{6}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{6}0[a-dx].{3}[a-dx]0.{12}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{11}[a-dx]0.{3}0[a-dx].{7}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{12}0[a-dx].{3}[a-dx]0.{6}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{7}[a-dx]0.{3}0[a-dx].{11}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{6}[a-dx]{2}.{3}[a-dx]0.{12}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{11}[a-dx]0.{3}[a-dx]{2}.{7}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{12}0[a-dx].{3}[a-dx]{2}.{6}/, price: -1});
Dagaz.AI.Patterns.push({re: /.{7}[a-dx]{2}.{3}0[a-dx].{11}/, price: -1});
Dagaz.AI.Patterns.push({re: /\s{5}0{3}[\s0]{2}[a-dx][A-DX]0.{3}[a-dx].{8}/, price: 1000});
Dagaz.AI.Patterns.push({re: /\s[\s0].{3}\s[\s0].{3}\s0{2}.{2}\s0[A-DX][a-dx].\s0[a-dx].{2}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx].{3}0[A-DX][a-dx][\s0]{2}0{3}\s{5}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{2}[a-dx]0\s.[a-dx][A-DX]0\s.{2}0{2}\s.{3}[\s0]\s.{3}[\s0]\s/, price: 1000});
Dagaz.AI.Patterns.push({re: /\s{5}[\s0]{2}0{3}.{2}0[A-DX][a-dx].{3}[a-dx].{6}/, price: 1000});
Dagaz.AI.Patterns.push({re: /\s0[a-dx].{2}\s0[A-DX][a-dx].\s0{2}.{2}\s[\s0].{3}\s[\s0].{3}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{6}[a-dx].{3}[a-dx][A-DX]0.{2}0{3}[\s0]{2}\s{5}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{3}[\s0]\s.{3}[\s0]\s.{2}0{2}\s.[a-dx][A-DX]0\s.{2}[a-dx]0\s/, price: 1000});
Dagaz.AI.Patterns.push({re: /\s{5}.0[A-DX].{4}0.{12}/, price: 100});
Dagaz.AI.Patterns.push({re: /\s.{4}\s.{4}\s[A-DX]0.{2}\s0.{3}\s.{4}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{12}0.{4}[A-DX]0.\s{5}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{4}\s.{3}0\s.{2}0[A-DX]\s.{4}\s.{4}\s/, price: 100});
Dagaz.AI.Patterns.push({re: /\s{5}.{2}[A-DX]0.{3}0.{12}/, price: 100});
Dagaz.AI.Patterns.push({re: /\s.{4}\s0.{3}\s[A-DX]0.{2}\s.{4}\s.{4}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{12}0.{3}0[A-DX].{2}\s{5}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{4}\s.{4}\s.{2}0[A-DX]\s.{3}0\s.{4}\s/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}b.{3}0{2}.{4}0.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{11}b0{2}.{3}0.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}0.{4}0{2}.{3}b.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}0.{3}0{2}b.{11}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}b.{4}0{2}.{3}0.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}0.{3}b0{2}.{11}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}0.{3}0{2}.{4}b.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{11}0{2}b.{3}0.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}b.{3}0{3}.{11}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}0.{3}b0.{4}0.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{11}0{3}.{3}b.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{7}0.{4}0b.{3}0.{7}/, price: 100});
Dagaz.AI.Patterns.push({re: /.[a-dx].{3}0{2}B[a-dx].{3}0.{12}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{6}[a-dx].{4}B0.{2}[a-dx]0.{4}0.{3}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{12}0.{3}[a-dx]B0{2}.{3}[a-dx]./, price: 1000});
Dagaz.AI.Patterns.push({re: /.{3}0.{4}0[a-dx].{2}0B.{4}[a-dx].{6}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{3}[a-dx].{2}[a-dx]B0{2}.{2}0.{12}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.0.{3}[a-dx]0.{4}B0.{3}[a-dx].{8}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{12}0.{2}0{2}B[a-dx].{2}[a-dx].{3}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx].{3}0B.{4}0[a-dx].{3}0./, price: 1000});
Dagaz.AI.Patterns.push({re: /.{17}B.{3}0{2}.{2}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{13}B0.{4}0.{5}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{2}0{2}.{3}B.{17}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{5}0.{4}0B.{13}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{17}B.{4}0{2}./, price: 80});
Dagaz.AI.Patterns.push({re: /.{9}0.{3}B0.{10}/, price: 80});
Dagaz.AI.Patterns.push({re: /.0{2}.{4}B.{17}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{10}0B.{3}0.{9}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{2}0.{14}B.{3}0{3}./, price: 80});
Dagaz.AI.Patterns.push({re: /.{9}0{2}.{2}B0.{4}0.{5}/, price: 80});
Dagaz.AI.Patterns.push({re: /.0{3}.{3}B.{14}0.{2}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{5}0.{4}0B.{2}0{2}.{9}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{17}[A-DX].{3}[a-dx]0[a-dx]./, price: 100});
Dagaz.AI.Patterns.push({re: /.{9}[a-dx].{3}[A-DX]0.{4}[a-dx].{5}/, price: 100});
Dagaz.AI.Patterns.push({re: /.[a-dx]0[a-dx].{3}[A-DX].{17}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{5}[a-dx].{4}0[A-DX].{3}[a-dx].{9}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{16}[a-dx][A-DX][a-dx].{3}0{2}./, price: 100});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx]0.{3}[A-DX]0.{3}[a-dx].{6}/, price: 100});
Dagaz.AI.Patterns.push({re: /.0{2}.{3}[a-dx][A-DX][a-dx].{16}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{6}[a-dx].{3}0[A-DX].{3}0[a-dx].{8}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{16}[a-dx][A-DX][a-dx].{2}0{2}.{2}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx].{4}[A-DX]0.{3}[a-dx]0.{5}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{2}0{2}.{2}[a-dx][A-DX][a-dx].{16}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{5}0[a-dx].{3}0[A-DX].{4}[a-dx].{8}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{16}[A-DX][a-dx].{3}[a-dx]0.{2}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{13}[a-dx]0.{3}[A-DX][a-dx].{5}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{2}0[a-dx].{3}[a-dx][A-DX].{16}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{5}[a-dx][A-DX].{3}0[a-dx].{13}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{17}[a-dx][A-DX].{3}0[a-dx]./, price: 100});
Dagaz.AI.Patterns.push({re: /.{8}[A-DX][a-dx].{3}[a-dx]0.{10}/, price: 100});
Dagaz.AI.Patterns.push({re: /.[a-dx]0.{3}[A-DX][a-dx].{17}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{10}0[a-dx].{3}[a-dx][A-DX].{8}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{16}[a-dx][A-DX].{3}[A-DX]0.{2}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{13}[A-DX]0.{3}[a-dx][A-DX].{5}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{2}0[A-DX].{3}[A-DX][a-dx].{16}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{5}[A-DX][a-dx].{3}0[A-DX].{13}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{17}[A-DX][a-dx].{3}0[A-DX]./, price: 80});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx][A-DX].{3}[A-DX]0.{10}/, price: 80});
Dagaz.AI.Patterns.push({re: /.[A-DX]0.{3}[a-dx][A-DX].{17}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{10}0[A-DX].{3}[A-DX][a-dx].{8}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{17}B.{3}B0.{2}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{13}B0.{4}B.{5}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{2}0B.{3}B.{17}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{5}B.{4}0B.{13}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{17}B.{4}0B./, price: 1000});
Dagaz.AI.Patterns.push({re: /.{9}B.{3}B0.{10}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.B0.{4}B.{17}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{10}0B.{3}B.{9}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{21}B0B./, price: 1000});
Dagaz.AI.Patterns.push({re: /.{9}B.{4}0.{4}B.{5}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.B0B.{21}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{5}B.{4}0.{4}B.{9}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{12}0.{3}[A-DX]c0.{3}0.{2}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{8}0.{3}0c0.{3}[A-DX].{6}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{2}0.{3}0c[A-DX].{3}0.{12}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{6}[A-DX].{3}0c0.{3}0.{8}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{12}0.{3}0c[A-DX].{3}0.{2}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{8}[A-DX].{3}0c0.{3}0.{6}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{2}0.{3}[A-DX]c0.{3}0.{12}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{6}0.{3}0c0.{3}[A-DX].{8}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{16}[a-dx]0.{3}0{2}.{2}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{13}0{2}.{3}[a-dx]0.{5}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{2}0{2}.{3}0[a-dx].{16}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{5}0[a-dx].{3}0{2}.{13}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{17}0[a-dx].{3}0{2}./, price: 10});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx]0.{3}0{2}.{10}/, price: 10});
Dagaz.AI.Patterns.push({re: /.0{2}.{3}[a-dx]0.{17}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{10}0{2}.{3}0[a-dx].{8}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{11}[a-dx]0.{3}0{2}.{3}0{2}.{2}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{12}0{3}.{2}[a-dx]0{2}.{5}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{2}0{2}.{3}0{2}.{3}0[a-dx].{11}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{5}0{2}[a-dx].{2}0{3}.{12}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{12}0[a-dx].{3}0{2}.{3}0{2}./, price: 10});
Dagaz.AI.Patterns.push({re: /.{7}[a-dx]0{2}.{2}0{3}.{10}/, price: 10});
Dagaz.AI.Patterns.push({re: /.0{2}.{3}0{2}.{3}[a-dx]0.{12}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{10}0{3}.{2}0{2}[a-dx].{7}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{16}[a-dx]0.{3}[A-DX]0.{2}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{13}0{2}.{3}[a-dx][A-DX].{5}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{2}0[A-DX].{3}0[a-dx].{16}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{5}[A-DX][a-dx].{3}0{2}.{13}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{17}0[a-dx].{3}0[A-DX]./, price: 1000});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx][A-DX].{3}0{2}.{10}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.[A-DX]0.{3}[a-dx]0.{17}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{10}0{2}.{3}[A-DX][a-dx].{8}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{2}[a-dx].{15}[a-dx].{3}0[A-DX][a-dx]/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{4}[a-dx].{3}[a-dx][A-DX][a-dx].{3}0.{10}/, price: 1000});
Dagaz.AI.Patterns.push({re: /[a-dx][A-DX]0.{3}[a-dx].{15}[a-dx].{2}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{10}0.{3}[a-dx][A-DX][a-dx].{3}[a-dx].{4}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{2}[a-dx].{13}[a-dx].{3}[a-dx][A-DX]0.{2}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{10}[a-dx].{3}0.{3}[a-dx][A-DX].{4}[a-dx]/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{2}0[A-DX][a-dx].{3}[a-dx].{13}[a-dx].{2}/, price: 1000});
Dagaz.AI.Patterns.push({re: /[a-dx].{4}[A-DX][a-dx].{3}0.{3}[a-dx].{10}/, price: 1000});
Dagaz.AI.Patterns.push({re: /.{4}[a-dx].{6}0[a-dx].{3}0{2}.{3}[a-dx]0.{2}/, price: 10});
Dagaz.AI.Patterns.push({re: /[a-dx].{11}[a-dx]0{2}.{2}0{2}[a-dx].{5}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{2}0[a-dx].{3}0{2}.{3}[a-dx]0.{6}[a-dx].{4}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{5}[a-dx]0{2}.{2}0{2}[a-dx].{11}[a-dx]/, price: 10});
Dagaz.AI.Patterns.push({re: /[a-dx].{11}[a-dx]0.{3}0{2}.{3}0[a-dx]./, price: 10});
Dagaz.AI.Patterns.push({re: /.{7}0{2}[a-dx].{2}[a-dx]0{2}.{5}[a-dx].{4}/, price: 10});
Dagaz.AI.Patterns.push({re: /.[a-dx]0.{3}0{2}.{3}0[a-dx].{11}[a-dx]/, price: 10});
Dagaz.AI.Patterns.push({re: /.{4}[a-dx].{5}0{2}[a-dx].{2}[a-dx]0{2}.{7}/, price: 10});
Dagaz.AI.Patterns.push({re: /.{11}[a-dx]{2}.{3}0{2}.{3}[a-dx]0.{2}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{12}[a-dx]0{2}.{2}[a-dx]0[a-dx].{5}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{2}0[a-dx].{3}0{2}.{3}[a-dx]{2}.{11}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{5}[a-dx]0[a-dx].{2}0{2}[a-dx].{12}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{12}[a-dx]{2}.{3}0{2}.{3}0[a-dx]./, price: 80});
Dagaz.AI.Patterns.push({re: /.{7}[a-dx]0[a-dx].{2}[a-dx]0{2}.{10}/, price: 80});
Dagaz.AI.Patterns.push({re: /.[a-dx]0.{3}0{2}.{3}[a-dx]{2}.{12}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{10}0{2}[a-dx].{2}[a-dx]0[a-dx].{7}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{16}[a-dx]{2}.{3}[A-DX]0.{2}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{13}[a-dx]0.{3}[a-dx][A-DX].{5}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{2}0[A-DX].{3}[a-dx]{2}.{16}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{5}[A-DX][a-dx].{3}0[a-dx].{13}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{17}[a-dx]{2}.{3}0[A-DX]./, price: 100});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx][A-DX].{3}[a-dx]0.{10}/, price: 100});
Dagaz.AI.Patterns.push({re: /.[A-DX]0.{3}[a-dx]{2}.{17}/, price: 100});
Dagaz.AI.Patterns.push({re: /.{10}0[a-dx].{3}[A-DX][a-dx].{8}/, price: 100});
Dagaz.AI.Patterns.push({re: /.[a-dx]{2}.{9}0.{3}[a-dx]0[a-dx].{2}0{3}./, price: 80});
Dagaz.AI.Patterns.push({re: /.{8}[a-dx]0[a-dx].0{3}[a-dx].{2}[a-dx]0.{5}/, price: 80});
Dagaz.AI.Patterns.push({re: /.0{3}.{2}[a-dx]0[a-dx].{3}0.{9}[a-dx]{2}./, price: 80});
Dagaz.AI.Patterns.push({re: /.{5}0[a-dx].{2}[a-dx]0{3}.[a-dx]0[a-dx].{8}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{2}[a-dx]{2}.{8}0.{3}[a-dx]0[a-dx].{2}0{3}./, price: 80});
Dagaz.AI.Patterns.push({re: /.{5}[a-dx].{2}[a-dx]0[a-dx].0{3}.{3}[a-dx]0.{5}/, price: 80});
Dagaz.AI.Patterns.push({re: /.0{3}.{2}[a-dx]0[a-dx].{3}0.{8}[a-dx]{2}.{2}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{5}0[a-dx].{3}0{3}.[a-dx]0[a-dx].{2}[a-dx].{5}/, price: 80});
Dagaz.AI.Patterns.push({re: /.{11}0d0.0d0d0.0{3}./, price: 80});
Dagaz.AI.Patterns.push({re: /.{3}0.{3}0d0.{2}d0{2}.{2}0d0.{3}0./, price: 80});
Dagaz.AI.Patterns.push({re: /.0{3}.0d0d0.0d0.{11}/, price: 80});
Dagaz.AI.Patterns.push({re: /.0.{3}0d0.{2}0{2}d.{2}0d0.{3}0.{3}/, price: 80});
