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
  addNode(4,"Richard East", "person")
  addNode(5,"John van de Wetering", "person")
  addNode(6,"Adolfo Grushin", "person")
  addNode(7,"Titouan Carette", "person")
  addNode(8,"Emmanuel Jeandel", "person")
  addNode(9,"Quanlong Wang", "person")
  addNode(10,"Hector Miller-Bakewell", "person")
  addNode(11,"Alexander Cowtan", "person")
  addNode(12,"Will Simmons", "person")
  addNode(13,"Ross Duncan", "person")
  addNode(14,"Ilyas Khan", "person")
  addNode(15,"Jonathan Gorard", "person")
  addNode(16,"Manojna Namuduri", "person")
  addNode(17,"Xerxes Arsiwalla", "person")
  addNode(18,"Chen Zhao", "person")
  addNode(19,"Cole Comfort", "person")
  addNode(20,"Marc de Visme", "person")
  addNode(21,"Simon Perdrix", "person")
  addNode(22,"Dominic Horsman", "person")
  addNode(23,"Aleks Kissinger", "person")
  addNode(24,"Miriam Backens", "person")
  addNode(25,"Alex Townsend-Teague", "person")
  addNode(26,"Richie Yeung", "person")
  addNode(27,"Shahn Majid", "person")
  addNode(28,"Craig Gidney", "person")
  addNode(29,"Renaud Vilmart", "person")
  addNode(30,"Kostia Chardonnet", "person")
  addNode(31,"Beno\^it Valiron", "person")
  addNode(32,"Korbinian Staudacher", "person")
  addNode(33,"Mark Koch", "person")
  addNode(34,"Agustin Borgna", "person")
  addNode(35,"Niel de Beaudrap", "person")
  addNode(36,"Margarita Veshchezerova", "person")
  addNode(37,"Robert Booth", "person")
  addNode(38,"Tobias Stollenwerk", "person")
  addNode(39,"Stuart Hadfield", "person")
  addNode(40,"Lia Yeh", "person")
  addNode(41,"Tom Peham", "person")
  addNode(42,"Lukas Burgholzer", "person")
  addNode(43,"Robert Wille", "person")
  addNode(44,"Tommy McElvanney", "person")
  addNode(45,"David Winderl", "person")
  addNode(46,"Stefano Gogioso", "person")
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
  addNode(99,"Dichuan Gao", "person")
  addNode(100,"Nathanan Tantivasadakarn", "person")
  addNode(101,"Vivien Vandaele", "person")
  addNode(102,"Arianne Meijer-van de Griend", "person")
  addNode(103,"Jens Eisert", "person")
  addNode(104,"William Cashman", "person")
  addNode(105,"Benjamin Rodatz", "person")
  addNode(106,"Liam Hurwitz", "person")
  addNode(107,"Wira Azmoon Ahmad", "person")
  addNode(108,"Zhenghao Zhong", "person")
  addNode(109,"Tobias Fischbach", "person")
  addNode(110,"Pierre Talbot", "person")
  addNode(111,"Peter Sigrist", "person")
  addNode(112,"Ferdi Tomassini", "person")
  addNode(113,"Andreas Bauer", "person")
  addNode(114,"Mateusz Kupper", "person")
  addNode(115,"Fedor Kuyanov", "person")
  addNode(116,"Da-Chuan Lu", "person")
  addNode(117,"Yi-Zhuang You", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.225000)
  addLink(0,3,0.225000)
  addLink(0,22,0.225000)
  addLink(0,23,0.475000)
  addLink(0,9,0.600000)
  addLink(0,68,0.350000)
  addLink(0,53,0.475000)
  addLink(0,40,0.600000)
  addLink(0,26,0.225000)
  addLink(0,88,0.350000)
  addLink(0,89,0.350000)
  addLink(0,90,0.350000)
  addLink(0,91,0.350000)
  addLink(0,46,0.350000)
  addLink(0,4,0.225000)
  addLink(0,79,0.350000)
  addLink(0,112,0.225000)
  addLink(0,111,0.225000)
  addLink(0,14,0.225000)
  addLink(0,19,0.225000)
  addLink(0,114,0.225000)
  addLink(0,104,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.225000)
  addLink(1,3,0.475000)
  addLink(1,26,0.350000)
  addLink(1,53,0.225000)
  addLink(1,68,0.225000)
  addLink(1,40,0.475000)
  addLink(1,9,0.225000)
  addLink(1,79,0.475000)
  addLink(1,104,0.475000)
  addLink(1,114,0.350000)
  addLink(1,19,0.225000)
  addLink(2,0,0.225000)
  addLink(2,1,0.225000)
  addLink(2,3,0.225000)
  addLink(2,25,0.225000)
  addLink(2,50,0.350000)
  addLink(2,5,0.350000)
  addLink(2,26,0.225000)
  addLink(3,0,0.225000)
  addLink(3,1,0.475000)
  addLink(3,2,0.225000)
  addLink(3,26,0.350000)
  addLink(3,114,0.225000)
  addLink(3,79,0.225000)
  addLink(3,104,0.225000)
  addLink(4,5,0.350000)
  addLink(4,6,0.350000)
  addLink(4,35,0.225000)
  addLink(4,9,0.225000)
  addLink(4,53,0.225000)
  addLink(4,40,0.225000)
  addLink(4,79,0.225000)
  addLink(4,0,0.225000)
  addLink(5,4,0.350000)
  addLink(5,6,0.225000)
  addLink(5,24,0.225000)
  addLink(5,23,0.600000)
  addLink(5,10,0.225000)
  addLink(5,29,0.225000)
  addLink(5,35,0.225000)
  addLink(5,40,0.600000)
  addLink(5,50,0.475000)
  addLink(5,2,0.350000)
  addLink(5,51,0.225000)
  addLink(5,69,0.350000)
  addLink(5,68,0.225000)
  addLink(5,37,0.225000)
  addLink(5,7,0.225000)
  addLink(5,56,0.225000)
  addLink(5,26,0.350000)
  addLink(5,57,0.225000)
  addLink(5,81,0.225000)
  addLink(5,79,0.225000)
  addLink(5,105,0.225000)
  addLink(6,4,0.350000)
  addLink(6,5,0.225000)
  addLink(7,8,0.225000)
  addLink(7,20,0.225000)
  addLink(7,21,0.350000)
  addLink(7,37,0.600000)
  addLink(7,29,0.475000)
  addLink(7,67,0.225000)
  addLink(7,68,0.225000)
  addLink(7,5,0.225000)
  addLink(7,40,0.225000)
  addLink(7,19,0.350000)
  addLink(8,7,0.225000)
  addLink(8,21,0.225000)
  addLink(8,36,0.225000)
  addLink(9,14,0.225000)
  addLink(9,0,0.600000)
  addLink(9,22,0.225000)
  addLink(9,23,0.225000)
  addLink(9,26,0.600000)
  addLink(9,33,0.350000)
  addLink(9,53,0.600000)
  addLink(9,68,0.350000)
  addLink(9,40,0.475000)
  addLink(9,1,0.225000)
  addLink(9,79,0.475000)
  addLink(9,4,0.225000)
  addLink(10,24,0.225000)
  addLink(10,23,0.225000)
  addLink(10,5,0.225000)
  addLink(11,12,0.225000)
  addLink(11,13,0.225000)
  addLink(11,27,0.225000)
  addLink(11,66,0.225000)
  addLink(12,11,0.225000)
  addLink(12,13,0.225000)
  addLink(13,11,0.225000)
  addLink(13,12,0.225000)
  addLink(14,9,0.225000)
  addLink(14,0,0.225000)
  addLink(14,23,0.225000)
  addLink(14,46,0.225000)
  addLink(14,88,0.225000)
  addLink(14,89,0.225000)
  addLink(14,40,0.225000)
  addLink(14,90,0.225000)
  addLink(14,91,0.225000)
  addLink(14,112,0.225000)
  addLink(14,111,0.225000)
  addLink(15,16,0.350000)
  addLink(15,17,0.350000)
  addLink(16,15,0.350000)
  addLink(16,17,0.350000)
  addLink(17,15,0.350000)
  addLink(17,16,0.350000)
  addLink(19,23,0.225000)
  addLink(19,37,0.350000)
  addLink(19,7,0.350000)
  addLink(19,1,0.225000)
  addLink(19,79,0.225000)
  addLink(19,40,0.225000)
  addLink(19,114,0.225000)
  addLink(19,104,0.225000)
  addLink(19,0,0.225000)
  addLink(20,7,0.225000)
  addLink(20,21,0.225000)
  addLink(20,30,0.225000)
  addLink(20,29,0.350000)
  addLink(21,7,0.350000)
  addLink(21,20,0.225000)
  addLink(21,34,0.225000)
  addLink(21,31,0.225000)
  addLink(21,8,0.225000)
  addLink(21,36,0.225000)
  addLink(21,71,0.350000)
  addLink(21,72,0.350000)
  addLink(21,29,0.225000)
  addLink(21,73,0.225000)
  addLink(22,0,0.225000)
  addLink(22,23,0.225000)
  addLink(22,9,0.225000)
  addLink(22,114,0.225000)
  addLink(22,35,0.225000)
  addLink(23,0,0.475000)
  addLink(23,22,0.225000)
  addLink(23,9,0.225000)
  addLink(23,24,0.225000)
  addLink(23,10,0.225000)
  addLink(23,5,0.600000)
  addLink(23,19,0.225000)
  addLink(23,29,0.225000)
  addLink(23,35,0.225000)
  addLink(23,88,0.350000)
  addLink(23,40,0.350000)
  addLink(23,89,0.350000)
  addLink(23,90,0.350000)
  addLink(23,91,0.350000)
  addLink(23,46,0.350000)
  addLink(23,26,0.225000)
  addLink(23,50,0.225000)
  addLink(23,93,0.350000)
  addLink(23,69,0.225000)
  addLink(23,105,0.600000)
  addLink(23,79,0.475000)
  addLink(23,112,0.225000)
  addLink(23,111,0.225000)
  addLink(23,14,0.225000)
  addLink(23,115,0.225000)
  addLink(23,99,0.225000)
  addLink(23,53,0.225000)
  addLink(24,23,0.225000)
  addLink(24,10,0.225000)
  addLink(24,5,0.225000)
  addLink(24,44,0.350000)
  addLink(24,67,0.225000)
  addLink(24,97,0.225000)
  addLink(25,2,0.225000)
  addLink(25,82,0.350000)
  addLink(25,83,0.350000)
  addLink(25,103,0.350000)
  addLink(26,3,0.350000)
  addLink(26,1,0.350000)
  addLink(26,9,0.600000)
  addLink(26,33,0.350000)
  addLink(26,46,0.225000)
  addLink(26,53,0.350000)
  addLink(26,68,0.225000)
  addLink(26,40,0.350000)
  addLink(26,0,0.225000)
  addLink(26,5,0.350000)
  addLink(26,50,0.225000)
  addLink(26,23,0.225000)
  addLink(26,2,0.225000)
  addLink(26,78,0.225000)
  addLink(26,45,0.225000)
  addLink(26,102,0.225000)
  addLink(26,93,0.225000)
  addLink(26,114,0.225000)
  addLink(26,79,0.350000)
  addLink(26,104,0.225000)
  addLink(26,57,0.225000)
  addLink(26,81,0.225000)
  addLink(26,105,0.225000)
  addLink(27,11,0.225000)
  addLink(29,30,0.350000)
  addLink(29,31,0.225000)
  addLink(29,23,0.225000)
  addLink(29,5,0.225000)
  addLink(29,20,0.350000)
  addLink(29,7,0.475000)
  addLink(29,67,0.225000)
  addLink(29,71,0.225000)
  addLink(29,72,0.225000)
  addLink(29,21,0.225000)
  addLink(30,31,0.225000)
  addLink(30,29,0.350000)
  addLink(30,20,0.225000)
  addLink(31,30,0.225000)
  addLink(31,29,0.225000)
  addLink(31,34,0.225000)
  addLink(31,21,0.225000)
  addLink(32,60,0.350000)
  addLink(32,80,0.350000)
  addLink(32,94,0.350000)
  addLink(32,43,0.350000)
  addLink(33,9,0.350000)
  addLink(33,26,0.350000)
  addLink(34,21,0.225000)
  addLink(34,31,0.225000)
  addLink(35,23,0.225000)
  addLink(35,5,0.225000)
  addLink(35,4,0.225000)
  addLink(35,114,0.225000)
  addLink(35,22,0.225000)
  addLink(36,8,0.225000)
  addLink(36,21,0.225000)
  addLink(37,7,0.600000)
  addLink(37,68,0.225000)
  addLink(37,5,0.225000)
  addLink(37,40,0.225000)
  addLink(37,19,0.350000)
  addLink(38,39,0.350000)
  addLink(39,38,0.350000)
  addLink(40,5,0.600000)
  addLink(40,68,0.475000)
  addLink(40,9,0.475000)
  addLink(40,53,0.600000)
  addLink(40,26,0.350000)
  addLink(40,0,0.600000)
  addLink(40,69,0.225000)
  addLink(40,1,0.475000)
  addLink(40,37,0.225000)
  addLink(40,7,0.225000)
  addLink(40,56,0.225000)
  addLink(40,88,0.475000)
  addLink(40,89,0.475000)
  addLink(40,90,0.475000)
  addLink(40,91,0.475000)
  addLink(40,23,0.350000)
  addLink(40,46,0.475000)
  addLink(40,79,0.475000)
  addLink(40,104,0.350000)
  addLink(40,111,0.350000)
  addLink(40,112,0.350000)
  addLink(40,4,0.225000)
  addLink(40,14,0.225000)
  addLink(40,19,0.225000)
  addLink(40,114,0.225000)
  addLink(41,42,0.600000)
  addLink(41,43,0.600000)
  addLink(42,41,0.600000)
  addLink(42,43,0.600000)
  addLink(43,41,0.600000)
  addLink(43,42,0.600000)
  addLink(43,32,0.350000)
  addLink(43,94,0.350000)
  addLink(44,24,0.350000)
  addLink(45,78,0.350000)
  addLink(45,102,0.225000)
  addLink(45,26,0.225000)
  addLink(46,26,0.225000)
  addLink(46,88,0.350000)
  addLink(46,40,0.475000)
  addLink(46,89,0.350000)
  addLink(46,90,0.350000)
  addLink(46,91,0.350000)
  addLink(46,23,0.350000)
  addLink(46,0,0.350000)
  addLink(46,53,0.225000)
  addLink(46,112,0.225000)
  addLink(46,111,0.225000)
  addLink(46,14,0.225000)
  addLink(47,48,0.350000)
  addLink(47,49,0.350000)
  addLink(48,47,0.350000)
  addLink(48,49,0.350000)
  addLink(49,47,0.350000)
  addLink(49,48,0.350000)
  addLink(50,2,0.350000)
  addLink(50,5,0.475000)
  addLink(50,26,0.225000)
  addLink(50,23,0.225000)
  addLink(50,51,0.225000)
  addLink(51,5,0.225000)
  addLink(51,50,0.225000)
  addLink(53,9,0.600000)
  addLink(53,26,0.350000)
  addLink(53,68,0.350000)
  addLink(53,40,0.600000)
  addLink(53,0,0.475000)
  addLink(53,1,0.225000)
  addLink(53,79,0.350000)
  addLink(53,46,0.225000)
  addLink(53,4,0.225000)
  addLink(53,99,0.225000)
  addLink(53,23,0.225000)
  addLink(54,55,0.350000)
  addLink(54,74,0.225000)
  addLink(54,76,0.225000)
  addLink(54,77,0.225000)
  addLink(55,54,0.350000)
  addLink(55,74,0.475000)
  addLink(55,75,0.350000)
  addLink(55,76,0.475000)
  addLink(55,77,0.475000)
  addLink(56,5,0.225000)
  addLink(56,40,0.225000)
  addLink(57,58,0.350000)
  addLink(57,59,0.350000)
  addLink(57,81,0.225000)
  addLink(57,79,0.225000)
  addLink(57,105,0.225000)
  addLink(57,5,0.225000)
  addLink(57,26,0.225000)
  addLink(58,57,0.350000)
  addLink(58,59,0.350000)
  addLink(59,57,0.350000)
  addLink(59,58,0.350000)
  addLink(60,32,0.350000)
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
  addLink(66,11,0.225000)
  addLink(67,7,0.225000)
  addLink(67,29,0.225000)
  addLink(67,24,0.225000)
  addLink(68,9,0.350000)
  addLink(68,53,0.350000)
  addLink(68,40,0.475000)
  addLink(68,26,0.225000)
  addLink(68,0,0.350000)
  addLink(68,1,0.225000)
  addLink(68,37,0.225000)
  addLink(68,7,0.225000)
  addLink(68,5,0.225000)
  addLink(69,5,0.350000)
  addLink(69,40,0.225000)
  addLink(69,23,0.225000)
  addLink(71,72,0.350000)
  addLink(71,21,0.350000)
  addLink(71,29,0.225000)
  addLink(72,71,0.350000)
  addLink(72,21,0.350000)
  addLink(72,29,0.225000)
  addLink(73,21,0.225000)
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
  addLink(78,45,0.350000)
  addLink(78,102,0.225000)
  addLink(78,26,0.225000)
  addLink(79,9,0.475000)
  addLink(79,53,0.350000)
  addLink(79,1,0.475000)
  addLink(79,40,0.475000)
  addLink(79,104,0.475000)
  addLink(79,105,0.600000)
  addLink(79,23,0.475000)
  addLink(79,4,0.225000)
  addLink(79,0,0.350000)
  addLink(79,114,0.350000)
  addLink(79,26,0.350000)
  addLink(79,3,0.225000)
  addLink(79,19,0.225000)
  addLink(79,57,0.225000)
  addLink(79,81,0.225000)
  addLink(79,5,0.225000)
  addLink(80,32,0.350000)
  addLink(80,60,0.225000)
  addLink(81,57,0.225000)
  addLink(81,79,0.225000)
  addLink(81,105,0.225000)
  addLink(81,5,0.225000)
  addLink(81,26,0.225000)
  addLink(82,25,0.350000)
  addLink(82,83,0.225000)
  addLink(82,103,0.225000)
  addLink(82,113,0.225000)
  addLink(83,25,0.350000)
  addLink(83,82,0.225000)
  addLink(83,103,0.225000)
  addLink(84,108,0.475000)
  addLink(85,86,0.350000)
  addLink(85,87,0.475000)
  addLink(86,85,0.350000)
  addLink(86,87,0.350000)
  addLink(87,85,0.475000)
  addLink(87,86,0.350000)
  addLink(88,40,0.475000)
  addLink(88,89,0.475000)
  addLink(88,90,0.475000)
  addLink(88,91,0.475000)
  addLink(88,23,0.350000)
  addLink(88,46,0.350000)
  addLink(88,0,0.350000)
  addLink(88,111,0.350000)
  addLink(88,112,0.350000)
  addLink(88,14,0.225000)
  addLink(89,88,0.475000)
  addLink(89,40,0.475000)
  addLink(89,90,0.475000)
  addLink(89,91,0.475000)
  addLink(89,23,0.350000)
  addLink(89,46,0.350000)
  addLink(89,0,0.350000)
  addLink(89,111,0.350000)
  addLink(89,112,0.350000)
  addLink(89,14,0.225000)
  addLink(90,88,0.475000)
  addLink(90,40,0.475000)
  addLink(90,89,0.475000)
  addLink(90,91,0.475000)
  addLink(90,23,0.350000)
  addLink(90,46,0.350000)
  addLink(90,0,0.350000)
  addLink(90,111,0.350000)
  addLink(90,112,0.350000)
  addLink(90,14,0.225000)
  addLink(91,88,0.475000)
  addLink(91,40,0.475000)
  addLink(91,89,0.475000)
  addLink(91,90,0.475000)
  addLink(91,23,0.350000)
  addLink(91,46,0.350000)
  addLink(91,0,0.350000)
  addLink(91,111,0.350000)
  addLink(91,112,0.350000)
  addLink(91,14,0.225000)
  addLink(93,23,0.350000)
  addLink(93,26,0.225000)
  addLink(93,107,0.225000)
  addLink(94,32,0.350000)
  addLink(94,43,0.350000)
  addLink(95,96,0.350000)
  addLink(96,95,0.350000)
  addLink(97,24,0.225000)
  addLink(99,53,0.225000)
  addLink(99,23,0.225000)
  addLink(100,116,0.225000)
  addLink(102,78,0.225000)
  addLink(102,45,0.225000)
  addLink(102,26,0.225000)
  addLink(103,82,0.225000)
  addLink(103,25,0.350000)
  addLink(103,83,0.225000)
  addLink(104,1,0.475000)
  addLink(104,79,0.475000)
  addLink(104,40,0.350000)
  addLink(104,114,0.350000)
  addLink(104,26,0.225000)
  addLink(104,3,0.225000)
  addLink(104,19,0.225000)
  addLink(104,0,0.225000)
  addLink(105,79,0.600000)
  addLink(105,23,0.600000)
  addLink(105,57,0.225000)
  addLink(105,81,0.225000)
  addLink(105,5,0.225000)
  addLink(105,26,0.225000)
  addLink(107,93,0.225000)
  addLink(108,84,0.475000)
  addLink(109,110,0.350000)
  addLink(110,109,0.350000)
  addLink(111,88,0.350000)
  addLink(111,89,0.350000)
  addLink(111,40,0.350000)
  addLink(111,90,0.350000)
  addLink(111,91,0.350000)
  addLink(111,112,0.350000)
  addLink(111,0,0.225000)
  addLink(111,23,0.225000)
  addLink(111,46,0.225000)
  addLink(111,14,0.225000)
  addLink(112,88,0.350000)
  addLink(112,89,0.350000)
  addLink(112,40,0.350000)
  addLink(112,90,0.350000)
  addLink(112,91,0.350000)
  addLink(112,111,0.350000)
  addLink(112,0,0.225000)
  addLink(112,23,0.225000)
  addLink(112,46,0.225000)
  addLink(112,14,0.225000)
  addLink(113,82,0.225000)
  addLink(114,22,0.225000)
  addLink(114,35,0.225000)
  addLink(114,26,0.225000)
  addLink(114,79,0.350000)
  addLink(114,3,0.225000)
  addLink(114,104,0.350000)
  addLink(114,1,0.350000)
  addLink(114,19,0.225000)
  addLink(114,40,0.225000)
  addLink(114,0,0.225000)
  addLink(115,23,0.225000)
  addLink(116,117,0.225000)
  addLink(116,100,0.225000)
  addLink(117,116,0.225000)


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