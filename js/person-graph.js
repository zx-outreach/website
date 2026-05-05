var start = function () {

  var data = {
    nodes: [],
    links: []
  }
  var addNode = function (id, text, type) {
    data.nodes.push({
      id: id,
      text: text,
      type: type || 0
    })
  }

  var addLink = function (a, b, strength) {
    data.links.push({
      source: a,
      target: b,
      strength: strength
    })
  }

  addNode(0,"Bob Coecke", "person")
  addNode(1,"Giovanni de Felice", "person")
  addNode(2,"Konstantinos Meichanetzidis", "person")
  addNode(3,"Alexis Toumi", "person")
  addNode(4,"Titouan Carette", "person")
  addNode(5,"Simon Perdrix", "person")
  addNode(6,"Richard East", "person")
  addNode(7,"John van de Wetering", "person")
  addNode(8,"Adolfo Grushin", "person")
  addNode(9,"Emmanuel Jeandel", "person")
  addNode(10,"Quanlong Wang", "person")
  addNode(11,"Hector Miller-Bakewell", "person")
  addNode(12,"Niel de Beaudrap", "person")
  addNode(13,"Alexander Cowtan", "person")
  addNode(14,"Will Simmons", "person")
  addNode(15,"Ross Duncan", "person")
  addNode(16,"Ilyas Khan", "person")
  addNode(17,"Jonathan Gorard", "person")
  addNode(18,"Manojna Namuduri", "person")
  addNode(19,"Xerxes Arsiwalla", "person")
  addNode(20,"Chen Zhao", "person")
  addNode(21,"Cole Comfort", "person")
  addNode(22,"Marc de Visme", "person")
  addNode(23,"Dominic Horsman", "person")
  addNode(24,"Aleks Kissinger", "person")
  addNode(25,"Miriam Backens", "person")
  addNode(26,"Alex Townsend-Teague", "person")
  addNode(27,"Richie Yeung", "person")
  addNode(28,"Shahn Majid", "person")
  addNode(29,"Stefano Gogioso", "person")
  addNode(30,"Craig Gidney", "person")
  addNode(31,"Renaud Vilmart", "person")
  addNode(32,"Kostia Chardonnet", "person")
  addNode(33,"Beno\^it Valiron", "person")
  addNode(34,"Korbinian Staudacher", "person")
  addNode(35,"Mark Koch", "person")
  addNode(36,"Agustin Borgna", "person")
  addNode(37,"Margarita Veshchezerova", "person")
  addNode(38,"Robert Booth", "person")
  addNode(39,"Tobias Stollenwerk", "person")
  addNode(40,"Stuart Hadfield", "person")
  addNode(41,"Lia Yeh", "person")
  addNode(42,"Tom Peham", "person")
  addNode(43,"Lukas Burgholzer", "person")
  addNode(44,"Robert Wille", "person")
  addNode(45,"Tommy McElvanney", "person")
  addNode(46,"David Winderl", "person")
  addNode(47,"Adrian Lehmann", "person")
  addNode(48,"Ben Caldwell", "person")
  addNode(49,"Robert Rand", "person")
  addNode(50,"Tuomas Laakkonen", "person")
  addNode(51,"Julien Codsi", "person")
  addNode(52,"Alexandru Paler", "person")
  addNode(53,"Razin Shaikh", "person")
  addNode(54,"Daniel Litinski", "person")
  addNode(55,"Naomi Nickerson", "person")
  addNode(56,"Patrick Roy", "person")
  addNode(57,"Andrey Boris Khesin", "person")
  addNode(58,"Jonathan Lu", "person")
  addNode(59,"Peter Shor", "person")
  addNode(60,"Tobias Guggemos", "person")
  addNode(61,"Christian Ufrecht", "person")
  addNode(62,"Maniraman Periyasamy", "person")
  addNode(63,"Daniel Scherer", "person")
  addNode(64,"Axel Plinge", "person")
  addNode(65,"Christopher Mutschler", "person")
  addNode(66,"Simon Burton", "person")
  addNode(67,"Thomas Perez", "person")
  addNode(68,"Boldizsár Poór", "person")
  addNode(69,"Neil Ross", "person")
  addNode(70,"Leo Colisson", "person")
  addNode(71,"Alexandre Clement", "person")
  addNode(72,"Noe Delorme", "person")
  addNode(73,"Nicolas Heurtel", "person")
  addNode(74,"Hector Bombin", "person")
  addNode(75,"Chris Dawson", "person")
  addNode(76,"Fernando Pastawski", "person")
  addNode(77,"Sam Roberts", "person")
  addNode(78,"Qunsheng Huang", "person")
  addNode(79,"Boldizsar Poor", "person")
  addNode(80,"Karl Fürlinger", "person")
  addNode(81,"Sarah Meng Li", "person")
  addNode(82,"Julio Magdalena de la Fuente", "person")
  addNode(83,"Markus Kesselring", "person")
  addNode(84,"Kwok Ho Wan", "person")
  addNode(85,"Alejandro Villoria", "person")
  addNode(86,"Henning Basold", "person")
  addNode(87,"Alfons Laarman", "person")
  addNode(88,"Selma Dundar-Coecke", "person")
  addNode(89,"Caterina Puca", "person")
  addNode(90,"Muhammad Hamza Waseem", "person")
  addNode(91,"Thomas Cervoni", "person")
  addNode(92,"Jonathan Ruhman", "person")
  addNode(93,"Matthew Sutcliffe", "person")
  addNode(94,"Ludwig Schmid", "person")
  addNode(95,"Grace Sommers", "person")
  addNode(96,"David Huse", "person")
  addNode(97,"Piotr Mitosek", "person")
  addNode(98,"Pavel Kos", "person")
  addNode(99,"Nathanan Tantivasadakarn", "person")
  addNode(100,"Vivien Vandaele", "person")
  addNode(101,"Arianne Meijer-van de Griend", "person")
  addNode(102,"Jens Eisert", "person")
  addNode(103,"William Cashman", "person")
  addNode(104,"Benjamin Rodatz", "person")
  addNode(105,"Liam Hurwitz", "person")
  addNode(106,"Wira Azmoon Ahmad", "person")
  addNode(107,"Zhenghao Zhong", "person")
  addNode(108,"Tobias Fischbach", "person")
  addNode(109,"Pierre Talbot", "person")
  addNode(110,"Peter Sigrist", "person")
  addNode(111,"Ferdi Tomassini", "person")
  addNode(112,"Andreas Bauer", "person")
  addNode(113,"Mateusz Kupper", "person")
  addNode(114,"Fedor Kuyanov", "person")
  addNode(115,"Da-Chuan Lu", "person")
  addNode(116,"Yi-Zhuang You", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.350000)
  addLink(0,3,0.350000)
  addLink(0,23,0.225000)
  addLink(0,24,0.475000)
  addLink(0,10,0.600000)
  addLink(0,29,0.475000)
  addLink(0,68,0.350000)
  addLink(0,53,0.475000)
  addLink(0,41,0.600000)
  addLink(0,27,0.225000)
  addLink(0,88,0.350000)
  addLink(0,89,0.350000)
  addLink(0,90,0.350000)
  addLink(0,91,0.350000)
  addLink(0,6,0.225000)
  addLink(0,79,0.350000)
  addLink(0,111,0.225000)
  addLink(0,110,0.225000)
  addLink(0,16,0.225000)
  addLink(0,21,0.225000)
  addLink(0,113,0.225000)
  addLink(0,103,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.350000)
  addLink(1,3,0.600000)
  addLink(1,27,0.350000)
  addLink(1,29,0.225000)
  addLink(1,53,0.225000)
  addLink(1,68,0.225000)
  addLink(1,41,0.475000)
  addLink(1,10,0.225000)
  addLink(1,79,0.475000)
  addLink(1,103,0.475000)
  addLink(1,113,0.350000)
  addLink(1,21,0.225000)
  addLink(2,0,0.350000)
  addLink(2,1,0.350000)
  addLink(2,3,0.350000)
  addLink(2,26,0.225000)
  addLink(2,29,0.225000)
  addLink(2,50,0.350000)
  addLink(2,7,0.350000)
  addLink(2,27,0.225000)
  addLink(3,0,0.350000)
  addLink(3,1,0.600000)
  addLink(3,2,0.350000)
  addLink(3,27,0.350000)
  addLink(3,29,0.225000)
  addLink(3,113,0.225000)
  addLink(3,79,0.225000)
  addLink(3,103,0.225000)
  addLink(4,5,0.475000)
  addLink(4,9,0.225000)
  addLink(4,22,0.225000)
  addLink(4,38,0.600000)
  addLink(4,31,0.475000)
  addLink(4,67,0.225000)
  addLink(4,68,0.225000)
  addLink(4,7,0.225000)
  addLink(4,41,0.225000)
  addLink(4,21,0.350000)
  addLink(5,4,0.475000)
  addLink(5,22,0.225000)
  addLink(5,36,0.225000)
  addLink(5,33,0.225000)
  addLink(5,9,0.225000)
  addLink(5,37,0.225000)
  addLink(5,71,0.350000)
  addLink(5,72,0.350000)
  addLink(5,31,0.225000)
  addLink(5,73,0.225000)
  addLink(6,7,0.350000)
  addLink(6,8,0.350000)
  addLink(6,12,0.225000)
  addLink(6,10,0.225000)
  addLink(6,53,0.225000)
  addLink(6,41,0.225000)
  addLink(6,79,0.225000)
  addLink(6,0,0.225000)
  addLink(7,6,0.350000)
  addLink(7,8,0.225000)
  addLink(7,25,0.225000)
  addLink(7,24,0.600000)
  addLink(7,11,0.225000)
  addLink(7,31,0.225000)
  addLink(7,12,0.225000)
  addLink(7,41,0.600000)
  addLink(7,50,0.475000)
  addLink(7,2,0.350000)
  addLink(7,51,0.225000)
  addLink(7,69,0.350000)
  addLink(7,68,0.225000)
  addLink(7,38,0.225000)
  addLink(7,4,0.225000)
  addLink(7,56,0.225000)
  addLink(7,27,0.350000)
  addLink(7,57,0.225000)
  addLink(7,81,0.225000)
  addLink(7,79,0.225000)
  addLink(7,104,0.225000)
  addLink(8,6,0.350000)
  addLink(8,7,0.225000)
  addLink(9,4,0.225000)
  addLink(9,5,0.225000)
  addLink(9,37,0.225000)
  addLink(10,16,0.225000)
  addLink(10,0,0.600000)
  addLink(10,23,0.225000)
  addLink(10,24,0.225000)
  addLink(10,27,0.600000)
  addLink(10,35,0.350000)
  addLink(10,53,0.600000)
  addLink(10,68,0.350000)
  addLink(10,41,0.475000)
  addLink(10,1,0.225000)
  addLink(10,79,0.475000)
  addLink(10,6,0.225000)
  addLink(11,25,0.225000)
  addLink(11,24,0.225000)
  addLink(11,7,0.225000)
  addLink(12,24,0.225000)
  addLink(12,7,0.225000)
  addLink(12,6,0.225000)
  addLink(12,113,0.225000)
  addLink(12,23,0.225000)
  addLink(13,14,0.225000)
  addLink(13,15,0.225000)
  addLink(13,28,0.225000)
  addLink(13,66,0.225000)
  addLink(14,13,0.225000)
  addLink(14,15,0.225000)
  addLink(15,13,0.225000)
  addLink(15,14,0.225000)
  addLink(16,10,0.225000)
  addLink(16,0,0.225000)
  addLink(16,24,0.225000)
  addLink(16,29,0.225000)
  addLink(16,88,0.225000)
  addLink(16,89,0.225000)
  addLink(16,41,0.225000)
  addLink(16,90,0.225000)
  addLink(16,91,0.225000)
  addLink(16,111,0.225000)
  addLink(16,110,0.225000)
  addLink(17,18,0.350000)
  addLink(17,19,0.350000)
  addLink(18,17,0.350000)
  addLink(18,19,0.350000)
  addLink(19,17,0.350000)
  addLink(19,18,0.350000)
  addLink(21,24,0.225000)
  addLink(21,38,0.350000)
  addLink(21,4,0.350000)
  addLink(21,1,0.225000)
  addLink(21,79,0.225000)
  addLink(21,41,0.225000)
  addLink(21,113,0.225000)
  addLink(21,103,0.225000)
  addLink(21,0,0.225000)
  addLink(22,4,0.225000)
  addLink(22,5,0.225000)
  addLink(22,32,0.225000)
  addLink(22,31,0.350000)
  addLink(23,0,0.225000)
  addLink(23,24,0.225000)
  addLink(23,10,0.225000)
  addLink(23,113,0.225000)
  addLink(23,12,0.225000)
  addLink(24,0,0.475000)
  addLink(24,23,0.225000)
  addLink(24,10,0.225000)
  addLink(24,25,0.225000)
  addLink(24,11,0.225000)
  addLink(24,7,0.600000)
  addLink(24,21,0.225000)
  addLink(24,31,0.225000)
  addLink(24,12,0.225000)
  addLink(24,88,0.350000)
  addLink(24,41,0.350000)
  addLink(24,89,0.350000)
  addLink(24,90,0.350000)
  addLink(24,91,0.350000)
  addLink(24,29,0.350000)
  addLink(24,27,0.225000)
  addLink(24,50,0.225000)
  addLink(24,93,0.350000)
  addLink(24,69,0.225000)
  addLink(24,104,0.600000)
  addLink(24,79,0.475000)
  addLink(24,111,0.225000)
  addLink(24,110,0.225000)
  addLink(24,16,0.225000)
  addLink(24,114,0.225000)
  addLink(25,24,0.225000)
  addLink(25,11,0.225000)
  addLink(25,7,0.225000)
  addLink(25,45,0.350000)
  addLink(25,67,0.225000)
  addLink(26,2,0.225000)
  addLink(26,82,0.350000)
  addLink(26,83,0.350000)
  addLink(26,102,0.350000)
  addLink(27,3,0.350000)
  addLink(27,1,0.350000)
  addLink(27,10,0.600000)
  addLink(27,35,0.350000)
  addLink(27,29,0.225000)
  addLink(27,53,0.350000)
  addLink(27,68,0.225000)
  addLink(27,41,0.350000)
  addLink(27,0,0.225000)
  addLink(27,7,0.350000)
  addLink(27,50,0.225000)
  addLink(27,24,0.225000)
  addLink(27,2,0.225000)
  addLink(27,78,0.225000)
  addLink(27,46,0.225000)
  addLink(27,101,0.225000)
  addLink(27,93,0.225000)
  addLink(27,113,0.225000)
  addLink(27,79,0.350000)
  addLink(27,103,0.225000)
  addLink(27,57,0.225000)
  addLink(27,81,0.225000)
  addLink(27,104,0.225000)
  addLink(28,13,0.225000)
  addLink(29,2,0.225000)
  addLink(29,1,0.225000)
  addLink(29,3,0.225000)
  addLink(29,0,0.475000)
  addLink(29,27,0.225000)
  addLink(29,88,0.350000)
  addLink(29,41,0.475000)
  addLink(29,89,0.350000)
  addLink(29,90,0.350000)
  addLink(29,91,0.350000)
  addLink(29,24,0.350000)
  addLink(29,53,0.225000)
  addLink(29,111,0.225000)
  addLink(29,110,0.225000)
  addLink(29,16,0.225000)
  addLink(31,32,0.350000)
  addLink(31,33,0.225000)
  addLink(31,24,0.225000)
  addLink(31,7,0.225000)
  addLink(31,22,0.350000)
  addLink(31,4,0.475000)
  addLink(31,67,0.225000)
  addLink(31,71,0.225000)
  addLink(31,72,0.225000)
  addLink(31,5,0.225000)
  addLink(32,33,0.225000)
  addLink(32,31,0.350000)
  addLink(32,22,0.225000)
  addLink(33,32,0.225000)
  addLink(33,31,0.225000)
  addLink(33,36,0.225000)
  addLink(33,5,0.225000)
  addLink(34,60,0.350000)
  addLink(34,80,0.350000)
  addLink(34,94,0.350000)
  addLink(34,44,0.350000)
  addLink(35,10,0.350000)
  addLink(35,27,0.350000)
  addLink(36,5,0.225000)
  addLink(36,33,0.225000)
  addLink(37,9,0.225000)
  addLink(37,5,0.225000)
  addLink(38,4,0.600000)
  addLink(38,68,0.225000)
  addLink(38,7,0.225000)
  addLink(38,41,0.225000)
  addLink(38,21,0.350000)
  addLink(39,40,0.350000)
  addLink(40,39,0.350000)
  addLink(41,7,0.600000)
  addLink(41,68,0.475000)
  addLink(41,10,0.475000)
  addLink(41,53,0.600000)
  addLink(41,27,0.350000)
  addLink(41,0,0.600000)
  addLink(41,69,0.225000)
  addLink(41,1,0.475000)
  addLink(41,38,0.225000)
  addLink(41,4,0.225000)
  addLink(41,56,0.225000)
  addLink(41,88,0.475000)
  addLink(41,89,0.475000)
  addLink(41,90,0.475000)
  addLink(41,91,0.475000)
  addLink(41,24,0.350000)
  addLink(41,29,0.475000)
  addLink(41,79,0.475000)
  addLink(41,103,0.350000)
  addLink(41,110,0.350000)
  addLink(41,111,0.350000)
  addLink(41,6,0.225000)
  addLink(41,16,0.225000)
  addLink(41,21,0.225000)
  addLink(41,113,0.225000)
  addLink(42,43,0.600000)
  addLink(42,44,0.600000)
  addLink(43,42,0.600000)
  addLink(43,44,0.600000)
  addLink(44,42,0.600000)
  addLink(44,43,0.600000)
  addLink(44,34,0.350000)
  addLink(44,94,0.350000)
  addLink(45,25,0.350000)
  addLink(46,78,0.350000)
  addLink(46,101,0.225000)
  addLink(46,27,0.225000)
  addLink(47,48,0.350000)
  addLink(47,49,0.350000)
  addLink(48,47,0.350000)
  addLink(48,49,0.350000)
  addLink(49,47,0.350000)
  addLink(49,48,0.350000)
  addLink(50,2,0.350000)
  addLink(50,7,0.475000)
  addLink(50,27,0.225000)
  addLink(50,24,0.225000)
  addLink(50,51,0.225000)
  addLink(51,7,0.225000)
  addLink(51,50,0.225000)
  addLink(53,10,0.600000)
  addLink(53,27,0.350000)
  addLink(53,68,0.350000)
  addLink(53,41,0.600000)
  addLink(53,0,0.475000)
  addLink(53,1,0.225000)
  addLink(53,79,0.350000)
  addLink(53,29,0.225000)
  addLink(53,6,0.225000)
  addLink(54,55,0.350000)
  addLink(54,74,0.225000)
  addLink(54,76,0.225000)
  addLink(54,77,0.225000)
  addLink(55,54,0.350000)
  addLink(55,74,0.475000)
  addLink(55,75,0.350000)
  addLink(55,76,0.475000)
  addLink(55,77,0.475000)
  addLink(56,7,0.225000)
  addLink(56,41,0.225000)
  addLink(57,58,0.350000)
  addLink(57,59,0.350000)
  addLink(57,81,0.225000)
  addLink(57,79,0.225000)
  addLink(57,104,0.225000)
  addLink(57,7,0.225000)
  addLink(57,27,0.225000)
  addLink(58,57,0.350000)
  addLink(58,59,0.350000)
  addLink(59,57,0.350000)
  addLink(59,58,0.350000)
  addLink(60,34,0.350000)
  addLink(60,80,0.225000)
  addLink(61,62,0.350000)
  addLink(61,63,0.350000)
  addLink(61,64,0.350000)
  addLink(61,65,0.350000)
  addLink(62,61,0.350000)
  addLink(62,63,0.350000)
  addLink(62,64,0.350000)
  addLink(62,65,0.350000)
  addLink(63,61,0.350000)
  addLink(63,62,0.350000)
  addLink(63,64,0.350000)
  addLink(63,65,0.350000)
  addLink(64,61,0.350000)
  addLink(64,62,0.350000)
  addLink(64,63,0.350000)
  addLink(64,65,0.350000)
  addLink(65,61,0.350000)
  addLink(65,62,0.350000)
  addLink(65,63,0.350000)
  addLink(65,64,0.350000)
  addLink(66,13,0.225000)
  addLink(67,4,0.225000)
  addLink(67,31,0.225000)
  addLink(67,25,0.225000)
  addLink(68,10,0.350000)
  addLink(68,53,0.350000)
  addLink(68,41,0.475000)
  addLink(68,27,0.225000)
  addLink(68,0,0.350000)
  addLink(68,1,0.225000)
  addLink(68,38,0.225000)
  addLink(68,4,0.225000)
  addLink(68,7,0.225000)
  addLink(69,7,0.350000)
  addLink(69,41,0.225000)
  addLink(69,24,0.225000)
  addLink(71,72,0.350000)
  addLink(71,5,0.350000)
  addLink(71,31,0.225000)
  addLink(72,71,0.350000)
  addLink(72,5,0.350000)
  addLink(72,31,0.225000)
  addLink(73,5,0.225000)
  addLink(74,75,0.350000)
  addLink(74,55,0.475000)
  addLink(74,76,0.475000)
  addLink(74,77,0.475000)
  addLink(74,54,0.225000)
  addLink(75,74,0.350000)
  addLink(75,55,0.350000)
  addLink(75,76,0.350000)
  addLink(75,77,0.350000)
  addLink(76,74,0.475000)
  addLink(76,75,0.350000)
  addLink(76,55,0.475000)
  addLink(76,77,0.475000)
  addLink(76,54,0.225000)
  addLink(77,74,0.475000)
  addLink(77,75,0.350000)
  addLink(77,55,0.475000)
  addLink(77,76,0.475000)
  addLink(77,54,0.225000)
  addLink(78,46,0.350000)
  addLink(78,101,0.225000)
  addLink(78,27,0.225000)
  addLink(79,10,0.475000)
  addLink(79,53,0.350000)
  addLink(79,1,0.475000)
  addLink(79,41,0.475000)
  addLink(79,103,0.475000)
  addLink(79,104,0.600000)
  addLink(79,24,0.475000)
  addLink(79,6,0.225000)
  addLink(79,0,0.350000)
  addLink(79,113,0.350000)
  addLink(79,27,0.350000)
  addLink(79,3,0.225000)
  addLink(79,21,0.225000)
  addLink(79,57,0.225000)
  addLink(79,81,0.225000)
  addLink(79,7,0.225000)
  addLink(80,34,0.350000)
  addLink(80,60,0.225000)
  addLink(81,57,0.225000)
  addLink(81,79,0.225000)
  addLink(81,104,0.225000)
  addLink(81,7,0.225000)
  addLink(81,27,0.225000)
  addLink(82,26,0.350000)
  addLink(82,83,0.225000)
  addLink(82,102,0.225000)
  addLink(82,112,0.225000)
  addLink(83,26,0.350000)
  addLink(83,82,0.225000)
  addLink(83,102,0.225000)
  addLink(84,107,0.475000)
  addLink(85,86,0.350000)
  addLink(85,87,0.475000)
  addLink(86,85,0.350000)
  addLink(86,87,0.350000)
  addLink(87,85,0.475000)
  addLink(87,86,0.350000)
  addLink(88,41,0.475000)
  addLink(88,89,0.475000)
  addLink(88,90,0.475000)
  addLink(88,91,0.475000)
  addLink(88,24,0.350000)
  addLink(88,29,0.350000)
  addLink(88,0,0.350000)
  addLink(88,110,0.350000)
  addLink(88,111,0.350000)
  addLink(88,16,0.225000)
  addLink(89,88,0.475000)
  addLink(89,41,0.475000)
  addLink(89,90,0.475000)
  addLink(89,91,0.475000)
  addLink(89,24,0.350000)
  addLink(89,29,0.350000)
  addLink(89,0,0.350000)
  addLink(89,110,0.350000)
  addLink(89,111,0.350000)
  addLink(89,16,0.225000)
  addLink(90,88,0.475000)
  addLink(90,41,0.475000)
  addLink(90,89,0.475000)
  addLink(90,91,0.475000)
  addLink(90,24,0.350000)
  addLink(90,29,0.350000)
  addLink(90,0,0.350000)
  addLink(90,110,0.350000)
  addLink(90,111,0.350000)
  addLink(90,16,0.225000)
  addLink(91,88,0.475000)
  addLink(91,41,0.475000)
  addLink(91,89,0.475000)
  addLink(91,90,0.475000)
  addLink(91,24,0.350000)
  addLink(91,29,0.350000)
  addLink(91,0,0.350000)
  addLink(91,110,0.350000)
  addLink(91,111,0.350000)
  addLink(91,16,0.225000)
  addLink(93,24,0.350000)
  addLink(93,27,0.225000)
  addLink(93,106,0.225000)
  addLink(94,34,0.350000)
  addLink(94,44,0.350000)
  addLink(95,96,0.350000)
  addLink(96,95,0.350000)
  addLink(99,115,0.225000)
  addLink(101,78,0.225000)
  addLink(101,46,0.225000)
  addLink(101,27,0.225000)
  addLink(102,82,0.225000)
  addLink(102,26,0.350000)
  addLink(102,83,0.225000)
  addLink(103,1,0.475000)
  addLink(103,79,0.475000)
  addLink(103,41,0.350000)
  addLink(103,113,0.350000)
  addLink(103,27,0.225000)
  addLink(103,3,0.225000)
  addLink(103,21,0.225000)
  addLink(103,0,0.225000)
  addLink(104,79,0.600000)
  addLink(104,24,0.600000)
  addLink(104,57,0.225000)
  addLink(104,81,0.225000)
  addLink(104,7,0.225000)
  addLink(104,27,0.225000)
  addLink(106,93,0.225000)
  addLink(107,84,0.475000)
  addLink(108,109,0.350000)
  addLink(109,108,0.350000)
  addLink(110,88,0.350000)
  addLink(110,89,0.350000)
  addLink(110,41,0.350000)
  addLink(110,90,0.350000)
  addLink(110,91,0.350000)
  addLink(110,111,0.350000)
  addLink(110,0,0.225000)
  addLink(110,24,0.225000)
  addLink(110,29,0.225000)
  addLink(110,16,0.225000)
  addLink(111,88,0.350000)
  addLink(111,89,0.350000)
  addLink(111,41,0.350000)
  addLink(111,90,0.350000)
  addLink(111,91,0.350000)
  addLink(111,110,0.350000)
  addLink(111,0,0.225000)
  addLink(111,24,0.225000)
  addLink(111,29,0.225000)
  addLink(111,16,0.225000)
  addLink(112,82,0.225000)
  addLink(113,23,0.225000)
  addLink(113,12,0.225000)
  addLink(113,27,0.225000)
  addLink(113,79,0.350000)
  addLink(113,3,0.225000)
  addLink(113,103,0.350000)
  addLink(113,1,0.350000)
  addLink(113,21,0.225000)
  addLink(113,41,0.225000)
  addLink(113,0,0.225000)
  addLink(114,24,0.225000)
  addLink(115,116,0.225000)
  addLink(115,99,0.225000)
  addLink(116,115,0.225000)


  // Event handling

  var selected = null;

  drag = simulation => {

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      if (selected != null) {
        $("#info-"+selected).toggle();
      }
      $("#info-"+d.id).toggle();
      selected = d.id;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }


  // Map drawing

  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));


  const constrain = function (x) {
    return Math.max(-size * 0.8, Math.min(x, size * 0.8))
  }


  const constrainForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      node.x = constrain(node.x);
      node.y = constrain(node.y);
    }
  }

  const midForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      var str = 500;
      node.vx -= str*k * Math.pow(1.1*node.x / size, 3);
      node.vy -= str*k * Math.pow(1.1*node.y / size, 3);
    }
  }

  const categoryForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      if (node.type === "field") {
        node.y -= k * (node.y - 0.9 * size);
      }
      if (node.type === "place") {
        node.x -= k * (node.x - 0.9 * size);
      }
    }
  }

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).strength(d => d.strength))
    .force("charge", d3.forceManyBody().strength(-700))
    .force("collide", d3.forceCollide()
      .radius(d => 40)  // radius of each node
      .strength(0.9)                // how hard the collision pushes back
      )
    .force("mid", midForce)
    .force("center", d3.forceCenter(0, 0))
    .force("constrain", constrainForce)
    //.force("category", categoryForce)

    
    /*
    */


  const size = 500

  const svg = d3.select("#map").append("svg")
    .attr("width", "90%")
    .attr("height", "90%")
    .attr('viewBox', `-${size} -${size} ${2*size} ${2*size}`)

  g = svg.append('g');

  svg.call(d3.zoom()
    .scaleExtent([1 / 2, 8])
    .on("zoom", zoomed));

  function zoomed() {
    g.attr("transform", d3.event.transform);
  }

  const link = g.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("color", function (d) {
      switch (d.type) {
        case 0:
          return "blue";
        default:
          return "red";
      }
    });


  var color = function (a) {
    switch (a) {
      case "place":
        return "#DAA";
      case "person":
        return "#ADA";
      case "field":
        return "#AAD";
      default:
        return "black";
    }
  }

  var node = g.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter().append("g")
    .call(drag(simulation));

  // --- helper for wrapping text into tspans ---
  function wrap(text, width) {
    text.each(function() {
      const textEl = d3.select(this);
      const words = textEl.text().split(/\s+/).reverse();
      let word;
      let line = [];
      let lineNumber = 0;
      const lineHeight = 1.1; // ems
      const y = textEl.attr("y");
      const x = textEl.attr("x");
      const dy = 0; // adjust for vertical centering
      let tspan = textEl.text(null)
        .append("tspan")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", dy + "em");

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = textEl.append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }

  // --- measure bounding boxes of text ---
  function getTextBox(selection) {
    selection.each(function(d) {
      d.bbox = this.getBBox();
    });
  }

  // --- create text labels ---
  var labels = node.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 6)
    .attr("y", 3)
    .text(d => d.text)
    .call(wrap, 80);  // 80px width before wrapping

  // --- add background rects based on wrapped text size ---
  labels.call(getTextBox)
    .each(function(d) {
      // insert rect *before* text so it's behind it
      d3.select(this.parentNode)
        .insert("rect", "text")
        .attr("x", d.bbox.x)
        .attr("y", d.bbox.y)
        .attr("width", d.bbox.width)
        .attr("height", d.bbox.height)
        .attr("fill", color(d.type))
        .attr("opacity", 0.2);
    });
  // var labels1 = node.append("text")
  //   .attr("text-anchor", "middle")
  //   .text(function (d) {
  //     return d.text;
  //   })
  //   .attr('x', 6)
  //   .attr('y', 3);


  // function getTextBox(selection) {
  //   selection.each(function (d) {
  //     d.bbox = this.getBBox();
  //   })
  // }

  // node.call(getTextBox)
  //   .append("rect")
  //   .attr("x", function (d) {
  //     return d.bbox.x
  //   })
  //   .attr("y", function (d) {
  //     return d.bbox.y
  //   })
  //   .attr("width", function (d) {
  //     return d.bbox.width
  //   })
  //   .attr("height", function (d) {
  //     return d.bbox.height
  //   })
  //   .attr("fill", d => color(d.type))
  //   .attr("opacity", "0.2")


  // var labels2 = node.append("text")
  //   .attr("text-anchor", "middle")
  //   .text(function (d) {
  //     return d.text;
  //   })
  //   .attr('x', 6)
  //   .attr('y', 3);



  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("transform", d => `translate(${d.x},${d.y})`);
  });

  // invalidation.then(() => simulation.stop());
}