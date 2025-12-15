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
  addNode(6,"Niel de Beaudrap", "person")
  addNode(7,"Aleks Kissinger", "person")
  addNode(8,"Arianne Meijer-van de Griend", "person")
  addNode(9,"Ross Duncan", "person")
  addNode(10,"Richard East", "person")
  addNode(11,"John van de Wetering", "person")
  addNode(12,"Adolfo Grushin", "person")
  addNode(13,"Emmanuel Jeandel", "person")
  addNode(14,"Marta Estarellas", "person")
  addNode(15,"Quanlong Wang", "person")
  addNode(16,"Miriam Backens", "person")
  addNode(17,"Hector Miller-Bakewell", "person")
  addNode(18,"Louis Lemonnier", "person")
  addNode(19,"Renaud Vilmart", "person")
  addNode(20,"Cole Comfort", "person")
  addNode(21,"Alexander Cowtan", "person")
  addNode(22,"Will Simmons", "person")
  addNode(23,"Ilyas Khan", "person")
  addNode(24,"Jonathan Gorard", "person")
  addNode(25,"Manojna Namuduri", "person")
  addNode(26,"Xerxes Arsiwalla", "person")
  addNode(27,"Chen Zhao", "person")
  addNode(28,"Marc de Visme", "person")
  addNode(29,"Lia Yeh", "person")
  addNode(30,"Dominic Horsman", "person")
  addNode(31,"Mateusz Kupper", "person")
  addNode(32,"Alex Townsend-Teague", "person")
  addNode(33,"Richie Yeung", "person")
  addNode(34,"Shahn Majid", "person")
  addNode(35,"Stefano Gogioso", "person")
  addNode(36,"Craig Gidney", "person")
  addNode(37,"Kostia Chardonnet", "person")
  addNode(38,"Beno\^it Valiron", "person")
  addNode(39,"Korbinian Staudacher", "person")
  addNode(40,"Mark Koch", "person")
  addNode(41,"Agustin Borgna", "person")
  addNode(42,"Margarita Veshchezerova", "person")
  addNode(43,"Robert Booth", "person")
  addNode(44,"Tobias Stollenwerk", "person")
  addNode(45,"Stuart Hadfield", "person")
  addNode(46,"Tom Peham", "person")
  addNode(47,"Lukas Burgholzer", "person")
  addNode(48,"Robert Wille", "person")
  addNode(49,"Tommy McElvanney", "person")
  addNode(50,"David Winderl", "person")
  addNode(51,"Adrian Lehmann", "person")
  addNode(52,"Ben Caldwell", "person")
  addNode(53,"Robert Rand", "person")
  addNode(54,"Tuomas Laakkonen", "person")
  addNode(55,"Julien Codsi", "person")
  addNode(56,"Alexandru Paler", "person")
  addNode(57,"Razin Shaikh", "person")
  addNode(58,"Daniel Litinski", "person")
  addNode(59,"Naomi Nickerson", "person")
  addNode(60,"Patrick Roy", "person")
  addNode(61,"Andrey Boris Khesin", "person")
  addNode(62,"Jonathan Lu", "person")
  addNode(63,"Peter Shor", "person")
  addNode(64,"Tobias Guggemos", "person")
  addNode(65,"Christian Ufrecht", "person")
  addNode(66,"Maniraman Periyasamy", "person")
  addNode(67,"Daniel Scherer", "person")
  addNode(68,"Axel Plinge", "person")
  addNode(69,"Christopher Mutschler", "person")
  addNode(70,"Simon Burton", "person")
  addNode(71,"Thomas Perez", "person")
  addNode(72,"Boldizsár Poór", "person")
  addNode(73,"Neil Ross", "person")
  addNode(74,"Leo Colisson", "person")
  addNode(75,"Alexandre Clement", "person")
  addNode(76,"Noe Delorme", "person")
  addNode(77,"Nicolas Heurtel", "person")
  addNode(78,"Hector Bombin", "person")
  addNode(79,"Chris Dawson", "person")
  addNode(80,"Fernando Pastawski", "person")
  addNode(81,"Sam Roberts", "person")
  addNode(82,"Qunsheng Huang", "person")
  addNode(83,"Boldizsar Poor", "person")
  addNode(84,"Karl Fürlinger", "person")
  addNode(85,"Julio Magdalena de la Fuente", "person")
  addNode(86,"Markus Kesselring", "person")
  addNode(87,"Kwok Ho Wan", "person")
  addNode(88,"Alejandro Villoria", "person")
  addNode(89,"Henning Basold", "person")
  addNode(90,"Alfons Laarman", "person")
  addNode(91,"Selma Dundar-Coecke", "person")
  addNode(92,"Caterina Puca", "person")
  addNode(93,"Muhammad Hamza Waseem", "person")
  addNode(94,"Thomas Cervoni", "person")
  addNode(95,"Jonathan Ruhman", "person")
  addNode(96,"Matthew Sutcliffe", "person")
  addNode(97,"Grace Sommers", "person")
  addNode(98,"David Huse", "person")
  addNode(99,"Pavel Kos", "person")
  addNode(100,"Vivien Vandaele", "person")
  addNode(101,"Jens Eisert", "person")
  addNode(102,"William Cashman", "person")
  addNode(103,"Benjamin Rodatz", "person")
  addNode(104,"Liam Hurwitz", "person")
  addNode(105,"Wira Azmoon Ahmad", "person")
  addNode(106,"Zhenghao Zhong", "person")
  addNode(107,"Tobias Fischbach", "person")
  addNode(108,"Pierre Talbot", "person")
  addNode(109,"Andreas Bauer", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.350000)
  addLink(0,3,0.350000)
  addLink(0,30,0.225000)
  addLink(0,7,0.475000)
  addLink(0,15,0.600000)
  addLink(0,35,0.475000)
  addLink(0,72,0.350000)
  addLink(0,57,0.475000)
  addLink(0,29,0.600000)
  addLink(0,33,0.225000)
  addLink(0,91,0.350000)
  addLink(0,92,0.350000)
  addLink(0,93,0.350000)
  addLink(0,94,0.350000)
  addLink(0,10,0.225000)
  addLink(0,83,0.225000)
  addLink(0,23,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.350000)
  addLink(1,3,0.600000)
  addLink(1,16,0.225000)
  addLink(1,17,0.225000)
  addLink(1,11,0.225000)
  addLink(1,33,0.350000)
  addLink(1,35,0.225000)
  addLink(1,57,0.225000)
  addLink(1,72,0.225000)
  addLink(1,29,0.350000)
  addLink(1,15,0.225000)
  addLink(1,83,0.350000)
  addLink(1,102,0.350000)
  addLink(1,31,0.225000)
  addLink(2,0,0.350000)
  addLink(2,1,0.350000)
  addLink(2,3,0.350000)
  addLink(2,6,0.225000)
  addLink(2,7,0.225000)
  addLink(2,32,0.225000)
  addLink(2,35,0.225000)
  addLink(2,54,0.350000)
  addLink(2,11,0.350000)
  addLink(2,33,0.225000)
  addLink(3,0,0.350000)
  addLink(3,1,0.600000)
  addLink(3,2,0.350000)
  addLink(3,33,0.350000)
  addLink(3,35,0.225000)
  addLink(3,31,0.225000)
  addLink(3,83,0.225000)
  addLink(3,102,0.225000)
  addLink(4,5,0.475000)
  addLink(4,13,0.225000)
  addLink(4,28,0.225000)
  addLink(4,43,0.600000)
  addLink(4,18,0.225000)
  addLink(4,19,0.475000)
  addLink(4,71,0.225000)
  addLink(4,72,0.225000)
  addLink(4,11,0.225000)
  addLink(4,29,0.225000)
  addLink(4,20,0.350000)
  addLink(5,4,0.475000)
  addLink(5,28,0.225000)
  addLink(5,41,0.225000)
  addLink(5,38,0.225000)
  addLink(5,13,0.225000)
  addLink(5,42,0.225000)
  addLink(5,75,0.350000)
  addLink(5,76,0.350000)
  addLink(5,19,0.225000)
  addLink(5,77,0.225000)
  addLink(6,7,0.350000)
  addLink(6,2,0.225000)
  addLink(6,15,0.225000)
  addLink(6,11,0.225000)
  addLink(6,10,0.225000)
  addLink(6,31,0.225000)
  addLink(6,30,0.225000)
  addLink(7,6,0.350000)
  addLink(7,2,0.225000)
  addLink(7,18,0.225000)
  addLink(7,11,0.600000)
  addLink(7,0,0.475000)
  addLink(7,30,0.225000)
  addLink(7,15,0.225000)
  addLink(7,16,0.225000)
  addLink(7,17,0.225000)
  addLink(7,20,0.225000)
  addLink(7,19,0.225000)
  addLink(7,91,0.350000)
  addLink(7,29,0.350000)
  addLink(7,92,0.350000)
  addLink(7,93,0.350000)
  addLink(7,94,0.350000)
  addLink(7,35,0.350000)
  addLink(7,33,0.225000)
  addLink(7,54,0.225000)
  addLink(7,96,0.350000)
  addLink(7,73,0.225000)
  addLink(7,103,0.600000)
  addLink(7,83,0.475000)
  addLink(7,23,0.225000)
  addLink(8,9,0.225000)
  addLink(8,82,0.225000)
  addLink(8,50,0.225000)
  addLink(8,33,0.225000)
  addLink(9,8,0.225000)
  addLink(9,21,0.225000)
  addLink(9,22,0.225000)
  addLink(10,11,0.350000)
  addLink(10,12,0.350000)
  addLink(10,6,0.225000)
  addLink(10,15,0.225000)
  addLink(10,57,0.225000)
  addLink(10,29,0.225000)
  addLink(10,83,0.225000)
  addLink(10,0,0.225000)
  addLink(11,10,0.350000)
  addLink(11,12,0.225000)
  addLink(11,16,0.350000)
  addLink(11,17,0.350000)
  addLink(11,1,0.225000)
  addLink(11,18,0.225000)
  addLink(11,7,0.600000)
  addLink(11,19,0.225000)
  addLink(11,6,0.225000)
  addLink(11,29,0.600000)
  addLink(11,54,0.475000)
  addLink(11,2,0.350000)
  addLink(11,55,0.225000)
  addLink(11,73,0.350000)
  addLink(11,72,0.225000)
  addLink(11,43,0.225000)
  addLink(11,4,0.225000)
  addLink(11,60,0.225000)
  addLink(11,33,0.225000)
  addLink(12,10,0.350000)
  addLink(12,11,0.225000)
  addLink(13,4,0.225000)
  addLink(13,5,0.225000)
  addLink(13,42,0.225000)
  addLink(15,6,0.225000)
  addLink(15,23,0.225000)
  addLink(15,0,0.600000)
  addLink(15,30,0.225000)
  addLink(15,7,0.225000)
  addLink(15,33,0.600000)
  addLink(15,40,0.350000)
  addLink(15,57,0.600000)
  addLink(15,72,0.350000)
  addLink(15,29,0.475000)
  addLink(15,1,0.225000)
  addLink(15,83,0.475000)
  addLink(15,10,0.225000)
  addLink(16,17,0.350000)
  addLink(16,1,0.225000)
  addLink(16,11,0.350000)
  addLink(16,7,0.225000)
  addLink(16,49,0.350000)
  addLink(16,71,0.225000)
  addLink(17,16,0.350000)
  addLink(17,1,0.225000)
  addLink(17,11,0.350000)
  addLink(17,7,0.225000)
  addLink(18,11,0.225000)
  addLink(18,7,0.225000)
  addLink(18,4,0.225000)
  addLink(19,37,0.350000)
  addLink(19,38,0.225000)
  addLink(19,7,0.225000)
  addLink(19,11,0.225000)
  addLink(19,28,0.350000)
  addLink(19,4,0.475000)
  addLink(19,71,0.225000)
  addLink(19,75,0.225000)
  addLink(19,76,0.225000)
  addLink(19,5,0.225000)
  addLink(20,7,0.225000)
  addLink(20,43,0.350000)
  addLink(20,4,0.350000)
  addLink(21,22,0.225000)
  addLink(21,9,0.225000)
  addLink(21,34,0.225000)
  addLink(21,70,0.225000)
  addLink(22,21,0.225000)
  addLink(22,9,0.225000)
  addLink(23,15,0.225000)
  addLink(23,0,0.225000)
  addLink(23,7,0.225000)
  addLink(23,35,0.225000)
  addLink(23,91,0.225000)
  addLink(23,92,0.225000)
  addLink(23,29,0.225000)
  addLink(23,93,0.225000)
  addLink(23,94,0.225000)
  addLink(24,25,0.350000)
  addLink(24,26,0.350000)
  addLink(25,24,0.350000)
  addLink(25,26,0.350000)
  addLink(26,24,0.350000)
  addLink(26,25,0.350000)
  addLink(28,4,0.225000)
  addLink(28,5,0.225000)
  addLink(28,37,0.225000)
  addLink(28,19,0.350000)
  addLink(29,11,0.600000)
  addLink(29,72,0.475000)
  addLink(29,15,0.475000)
  addLink(29,57,0.600000)
  addLink(29,33,0.225000)
  addLink(29,0,0.600000)
  addLink(29,73,0.225000)
  addLink(29,1,0.350000)
  addLink(29,43,0.225000)
  addLink(29,4,0.225000)
  addLink(29,60,0.225000)
  addLink(29,91,0.350000)
  addLink(29,92,0.350000)
  addLink(29,93,0.350000)
  addLink(29,94,0.350000)
  addLink(29,7,0.350000)
  addLink(29,35,0.475000)
  addLink(29,83,0.350000)
  addLink(29,102,0.225000)
  addLink(29,10,0.225000)
  addLink(29,23,0.225000)
  addLink(30,0,0.225000)
  addLink(30,7,0.225000)
  addLink(30,15,0.225000)
  addLink(30,31,0.225000)
  addLink(30,6,0.225000)
  addLink(31,30,0.225000)
  addLink(31,6,0.225000)
  addLink(31,33,0.225000)
  addLink(31,83,0.225000)
  addLink(31,3,0.225000)
  addLink(31,102,0.225000)
  addLink(31,1,0.225000)
  addLink(32,2,0.225000)
  addLink(32,85,0.350000)
  addLink(32,86,0.350000)
  addLink(32,101,0.350000)
  addLink(33,3,0.350000)
  addLink(33,1,0.350000)
  addLink(33,15,0.600000)
  addLink(33,40,0.350000)
  addLink(33,35,0.225000)
  addLink(33,57,0.350000)
  addLink(33,72,0.225000)
  addLink(33,29,0.225000)
  addLink(33,0,0.225000)
  addLink(33,11,0.225000)
  addLink(33,54,0.225000)
  addLink(33,7,0.225000)
  addLink(33,2,0.225000)
  addLink(33,82,0.225000)
  addLink(33,50,0.225000)
  addLink(33,8,0.225000)
  addLink(33,96,0.225000)
  addLink(33,31,0.225000)
  addLink(33,83,0.225000)
  addLink(33,102,0.225000)
  addLink(34,21,0.225000)
  addLink(35,2,0.225000)
  addLink(35,1,0.225000)
  addLink(35,3,0.225000)
  addLink(35,0,0.475000)
  addLink(35,33,0.225000)
  addLink(35,91,0.350000)
  addLink(35,29,0.475000)
  addLink(35,92,0.350000)
  addLink(35,93,0.350000)
  addLink(35,94,0.350000)
  addLink(35,7,0.350000)
  addLink(35,57,0.225000)
  addLink(35,23,0.225000)
  addLink(37,38,0.225000)
  addLink(37,19,0.350000)
  addLink(37,28,0.225000)
  addLink(38,37,0.225000)
  addLink(38,19,0.225000)
  addLink(38,41,0.225000)
  addLink(38,5,0.225000)
  addLink(39,64,0.350000)
  addLink(39,84,0.350000)
  addLink(39,48,0.225000)
  addLink(40,15,0.350000)
  addLink(40,33,0.350000)
  addLink(41,5,0.225000)
  addLink(41,38,0.225000)
  addLink(42,13,0.225000)
  addLink(42,5,0.225000)
  addLink(43,4,0.600000)
  addLink(43,72,0.225000)
  addLink(43,11,0.225000)
  addLink(43,29,0.225000)
  addLink(43,20,0.350000)
  addLink(44,45,0.350000)
  addLink(45,44,0.350000)
  addLink(46,47,0.600000)
  addLink(46,48,0.600000)
  addLink(47,46,0.600000)
  addLink(47,48,0.600000)
  addLink(48,46,0.600000)
  addLink(48,47,0.600000)
  addLink(48,39,0.225000)
  addLink(49,16,0.350000)
  addLink(50,82,0.350000)
  addLink(50,8,0.225000)
  addLink(50,33,0.225000)
  addLink(51,52,0.350000)
  addLink(51,53,0.350000)
  addLink(52,51,0.350000)
  addLink(52,53,0.350000)
  addLink(53,51,0.350000)
  addLink(53,52,0.350000)
  addLink(54,2,0.350000)
  addLink(54,11,0.475000)
  addLink(54,33,0.225000)
  addLink(54,7,0.225000)
  addLink(55,11,0.225000)
  addLink(57,15,0.600000)
  addLink(57,33,0.350000)
  addLink(57,72,0.350000)
  addLink(57,29,0.600000)
  addLink(57,0,0.475000)
  addLink(57,1,0.225000)
  addLink(57,83,0.350000)
  addLink(57,35,0.225000)
  addLink(57,10,0.225000)
  addLink(58,59,0.350000)
  addLink(58,78,0.225000)
  addLink(58,80,0.225000)
  addLink(58,81,0.225000)
  addLink(59,58,0.350000)
  addLink(59,78,0.475000)
  addLink(59,79,0.350000)
  addLink(59,80,0.475000)
  addLink(59,81,0.475000)
  addLink(60,11,0.225000)
  addLink(60,29,0.225000)
  addLink(61,62,0.350000)
  addLink(61,63,0.350000)
  addLink(62,61,0.350000)
  addLink(62,63,0.350000)
  addLink(63,61,0.350000)
  addLink(63,62,0.350000)
  addLink(64,39,0.350000)
  addLink(64,84,0.225000)
  addLink(65,66,0.350000)
  addLink(65,67,0.350000)
  addLink(65,68,0.350000)
  addLink(65,69,0.350000)
  addLink(66,65,0.350000)
  addLink(66,67,0.350000)
  addLink(66,68,0.350000)
  addLink(66,69,0.350000)
  addLink(67,65,0.350000)
  addLink(67,66,0.350000)
  addLink(67,68,0.350000)
  addLink(67,69,0.350000)
  addLink(68,65,0.350000)
  addLink(68,66,0.350000)
  addLink(68,67,0.350000)
  addLink(68,69,0.350000)
  addLink(69,65,0.350000)
  addLink(69,66,0.350000)
  addLink(69,67,0.350000)
  addLink(69,68,0.350000)
  addLink(70,21,0.225000)
  addLink(71,4,0.225000)
  addLink(71,19,0.225000)
  addLink(71,16,0.225000)
  addLink(72,15,0.350000)
  addLink(72,57,0.350000)
  addLink(72,29,0.475000)
  addLink(72,33,0.225000)
  addLink(72,0,0.350000)
  addLink(72,1,0.225000)
  addLink(72,43,0.225000)
  addLink(72,4,0.225000)
  addLink(72,11,0.225000)
  addLink(73,11,0.350000)
  addLink(73,29,0.225000)
  addLink(73,7,0.225000)
  addLink(75,76,0.350000)
  addLink(75,5,0.350000)
  addLink(75,19,0.225000)
  addLink(76,75,0.350000)
  addLink(76,5,0.350000)
  addLink(76,19,0.225000)
  addLink(77,5,0.225000)
  addLink(78,79,0.350000)
  addLink(78,59,0.475000)
  addLink(78,80,0.475000)
  addLink(78,81,0.475000)
  addLink(78,58,0.225000)
  addLink(79,78,0.350000)
  addLink(79,59,0.350000)
  addLink(79,80,0.350000)
  addLink(79,81,0.350000)
  addLink(80,78,0.475000)
  addLink(80,79,0.350000)
  addLink(80,59,0.475000)
  addLink(80,81,0.475000)
  addLink(80,58,0.225000)
  addLink(81,78,0.475000)
  addLink(81,79,0.350000)
  addLink(81,59,0.475000)
  addLink(81,80,0.475000)
  addLink(81,58,0.225000)
  addLink(82,50,0.350000)
  addLink(82,8,0.225000)
  addLink(82,33,0.225000)
  addLink(83,15,0.475000)
  addLink(83,57,0.350000)
  addLink(83,1,0.350000)
  addLink(83,29,0.350000)
  addLink(83,102,0.350000)
  addLink(83,103,0.475000)
  addLink(83,7,0.475000)
  addLink(83,10,0.225000)
  addLink(83,0,0.225000)
  addLink(83,31,0.225000)
  addLink(83,33,0.225000)
  addLink(83,3,0.225000)
  addLink(84,39,0.350000)
  addLink(84,64,0.225000)
  addLink(85,32,0.350000)
  addLink(85,86,0.225000)
  addLink(85,101,0.225000)
  addLink(85,109,0.225000)
  addLink(86,32,0.350000)
  addLink(86,85,0.225000)
  addLink(86,101,0.225000)
  addLink(87,106,0.475000)
  addLink(88,89,0.350000)
  addLink(88,90,0.475000)
  addLink(89,88,0.350000)
  addLink(89,90,0.350000)
  addLink(90,88,0.475000)
  addLink(90,89,0.350000)
  addLink(91,29,0.350000)
  addLink(91,92,0.350000)
  addLink(91,93,0.350000)
  addLink(91,94,0.350000)
  addLink(91,7,0.350000)
  addLink(91,35,0.350000)
  addLink(91,0,0.350000)
  addLink(91,23,0.225000)
  addLink(92,91,0.350000)
  addLink(92,29,0.350000)
  addLink(92,93,0.350000)
  addLink(92,94,0.350000)
  addLink(92,7,0.350000)
  addLink(92,35,0.350000)
  addLink(92,0,0.350000)
  addLink(92,23,0.225000)
  addLink(93,91,0.350000)
  addLink(93,29,0.350000)
  addLink(93,92,0.350000)
  addLink(93,94,0.350000)
  addLink(93,7,0.350000)
  addLink(93,35,0.350000)
  addLink(93,0,0.350000)
  addLink(93,23,0.225000)
  addLink(94,91,0.350000)
  addLink(94,29,0.350000)
  addLink(94,92,0.350000)
  addLink(94,93,0.350000)
  addLink(94,7,0.350000)
  addLink(94,35,0.350000)
  addLink(94,0,0.350000)
  addLink(94,23,0.225000)
  addLink(96,7,0.350000)
  addLink(96,33,0.225000)
  addLink(96,105,0.225000)
  addLink(97,98,0.350000)
  addLink(98,97,0.350000)
  addLink(101,85,0.225000)
  addLink(101,32,0.350000)
  addLink(101,86,0.225000)
  addLink(102,1,0.350000)
  addLink(102,83,0.350000)
  addLink(102,29,0.225000)
  addLink(102,31,0.225000)
  addLink(102,33,0.225000)
  addLink(102,3,0.225000)
  addLink(103,83,0.475000)
  addLink(103,7,0.600000)
  addLink(105,96,0.225000)
  addLink(106,87,0.475000)
  addLink(107,108,0.350000)
  addLink(108,107,0.350000)
  addLink(109,85,0.225000)


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