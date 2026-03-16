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
  addNode(14,"Quanlong Wang", "person")
  addNode(15,"Louis Lemonnier", "person")
  addNode(16,"Hector Miller-Bakewell", "person")
  addNode(17,"Cole Comfort", "person")
  addNode(18,"Alexander Cowtan", "person")
  addNode(19,"Will Simmons", "person")
  addNode(20,"Ilyas Khan", "person")
  addNode(21,"Jonathan Gorard", "person")
  addNode(22,"Manojna Namuduri", "person")
  addNode(23,"Xerxes Arsiwalla", "person")
  addNode(24,"Chen Zhao", "person")
  addNode(25,"Marc de Visme", "person")
  addNode(26,"Lia Yeh", "person")
  addNode(27,"Dominic Horsman", "person")
  addNode(28,"Miriam Backens", "person")
  addNode(29,"Alex Townsend-Teague", "person")
  addNode(30,"Richie Yeung", "person")
  addNode(31,"Shahn Majid", "person")
  addNode(32,"Stefano Gogioso", "person")
  addNode(33,"Craig Gidney", "person")
  addNode(34,"Renaud Vilmart", "person")
  addNode(35,"Kostia Chardonnet", "person")
  addNode(36,"Beno\^it Valiron", "person")
  addNode(37,"Korbinian Staudacher", "person")
  addNode(38,"Mark Koch", "person")
  addNode(39,"Agustin Borgna", "person")
  addNode(40,"Margarita Veshchezerova", "person")
  addNode(41,"Robert Booth", "person")
  addNode(42,"Tobias Stollenwerk", "person")
  addNode(43,"Stuart Hadfield", "person")
  addNode(44,"Tom Peham", "person")
  addNode(45,"Lukas Burgholzer", "person")
  addNode(46,"Robert Wille", "person")
  addNode(47,"Tommy McElvanney", "person")
  addNode(48,"David Winderl", "person")
  addNode(49,"Adrian Lehmann", "person")
  addNode(50,"Ben Caldwell", "person")
  addNode(51,"Robert Rand", "person")
  addNode(52,"Tuomas Laakkonen", "person")
  addNode(53,"Julien Codsi", "person")
  addNode(54,"Alexandru Paler", "person")
  addNode(55,"Razin Shaikh", "person")
  addNode(56,"Daniel Litinski", "person")
  addNode(57,"Naomi Nickerson", "person")
  addNode(58,"Patrick Roy", "person")
  addNode(59,"Andrey Boris Khesin", "person")
  addNode(60,"Jonathan Lu", "person")
  addNode(61,"Peter Shor", "person")
  addNode(62,"Tobias Guggemos", "person")
  addNode(63,"Christian Ufrecht", "person")
  addNode(64,"Maniraman Periyasamy", "person")
  addNode(65,"Daniel Scherer", "person")
  addNode(66,"Axel Plinge", "person")
  addNode(67,"Christopher Mutschler", "person")
  addNode(68,"Simon Burton", "person")
  addNode(69,"Thomas Perez", "person")
  addNode(70,"Boldizsár Poór", "person")
  addNode(71,"Neil Ross", "person")
  addNode(72,"Leo Colisson", "person")
  addNode(73,"Alexandre Clement", "person")
  addNode(74,"Noe Delorme", "person")
  addNode(75,"Nicolas Heurtel", "person")
  addNode(76,"Hector Bombin", "person")
  addNode(77,"Chris Dawson", "person")
  addNode(78,"Fernando Pastawski", "person")
  addNode(79,"Sam Roberts", "person")
  addNode(80,"Qunsheng Huang", "person")
  addNode(81,"Boldizsar Poor", "person")
  addNode(82,"Karl Fürlinger", "person")
  addNode(83,"Sarah Meng Li", "person")
  addNode(84,"Julio Magdalena de la Fuente", "person")
  addNode(85,"Markus Kesselring", "person")
  addNode(86,"Kwok Ho Wan", "person")
  addNode(87,"Alejandro Villoria", "person")
  addNode(88,"Henning Basold", "person")
  addNode(89,"Alfons Laarman", "person")
  addNode(90,"Selma Dundar-Coecke", "person")
  addNode(91,"Caterina Puca", "person")
  addNode(92,"Muhammad Hamza Waseem", "person")
  addNode(93,"Thomas Cervoni", "person")
  addNode(94,"Jonathan Ruhman", "person")
  addNode(95,"Matthew Sutcliffe", "person")
  addNode(96,"Ludwig Schmid", "person")
  addNode(97,"Grace Sommers", "person")
  addNode(98,"David Huse", "person")
  addNode(99,"Piotr Mitosek", "person")
  addNode(100,"Pavel Kos", "person")
  addNode(101,"Nathanan Tantivasadakarn", "person")
  addNode(102,"Vivien Vandaele", "person")
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
  addLink(0,1,0.600000)
  addLink(0,2,0.350000)
  addLink(0,3,0.350000)
  addLink(0,27,0.225000)
  addLink(0,7,0.475000)
  addLink(0,14,0.600000)
  addLink(0,32,0.475000)
  addLink(0,70,0.350000)
  addLink(0,55,0.475000)
  addLink(0,26,0.600000)
  addLink(0,30,0.225000)
  addLink(0,90,0.350000)
  addLink(0,91,0.350000)
  addLink(0,92,0.350000)
  addLink(0,93,0.350000)
  addLink(0,10,0.225000)
  addLink(0,81,0.350000)
  addLink(0,112,0.225000)
  addLink(0,111,0.225000)
  addLink(0,20,0.225000)
  addLink(0,17,0.225000)
  addLink(0,114,0.225000)
  addLink(0,104,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.350000)
  addLink(1,3,0.600000)
  addLink(1,30,0.350000)
  addLink(1,32,0.225000)
  addLink(1,55,0.225000)
  addLink(1,70,0.225000)
  addLink(1,26,0.475000)
  addLink(1,14,0.225000)
  addLink(1,81,0.475000)
  addLink(1,104,0.475000)
  addLink(1,114,0.350000)
  addLink(1,17,0.225000)
  addLink(2,0,0.350000)
  addLink(2,1,0.350000)
  addLink(2,3,0.350000)
  addLink(2,6,0.225000)
  addLink(2,7,0.225000)
  addLink(2,29,0.225000)
  addLink(2,32,0.225000)
  addLink(2,52,0.350000)
  addLink(2,11,0.350000)
  addLink(2,30,0.225000)
  addLink(3,0,0.350000)
  addLink(3,1,0.600000)
  addLink(3,2,0.350000)
  addLink(3,30,0.350000)
  addLink(3,32,0.225000)
  addLink(3,114,0.225000)
  addLink(3,81,0.225000)
  addLink(3,104,0.225000)
  addLink(4,5,0.475000)
  addLink(4,13,0.225000)
  addLink(4,25,0.225000)
  addLink(4,41,0.600000)
  addLink(4,15,0.225000)
  addLink(4,34,0.475000)
  addLink(4,69,0.225000)
  addLink(4,70,0.225000)
  addLink(4,11,0.225000)
  addLink(4,26,0.225000)
  addLink(4,17,0.350000)
  addLink(5,4,0.475000)
  addLink(5,25,0.225000)
  addLink(5,39,0.225000)
  addLink(5,36,0.225000)
  addLink(5,13,0.225000)
  addLink(5,40,0.225000)
  addLink(5,73,0.350000)
  addLink(5,74,0.350000)
  addLink(5,34,0.225000)
  addLink(5,75,0.225000)
  addLink(6,7,0.350000)
  addLink(6,2,0.225000)
  addLink(6,14,0.225000)
  addLink(6,11,0.225000)
  addLink(6,10,0.225000)
  addLink(6,114,0.225000)
  addLink(6,27,0.225000)
  addLink(7,6,0.350000)
  addLink(7,2,0.225000)
  addLink(7,15,0.225000)
  addLink(7,11,0.600000)
  addLink(7,0,0.475000)
  addLink(7,27,0.225000)
  addLink(7,14,0.225000)
  addLink(7,28,0.225000)
  addLink(7,16,0.225000)
  addLink(7,17,0.225000)
  addLink(7,34,0.225000)
  addLink(7,90,0.350000)
  addLink(7,26,0.350000)
  addLink(7,91,0.350000)
  addLink(7,92,0.350000)
  addLink(7,93,0.350000)
  addLink(7,32,0.350000)
  addLink(7,30,0.225000)
  addLink(7,52,0.225000)
  addLink(7,95,0.350000)
  addLink(7,71,0.225000)
  addLink(7,105,0.600000)
  addLink(7,81,0.475000)
  addLink(7,112,0.225000)
  addLink(7,111,0.225000)
  addLink(7,20,0.225000)
  addLink(7,115,0.225000)
  addLink(8,9,0.225000)
  addLink(8,80,0.225000)
  addLink(8,48,0.225000)
  addLink(8,30,0.225000)
  addLink(9,8,0.225000)
  addLink(9,18,0.225000)
  addLink(9,19,0.225000)
  addLink(10,11,0.350000)
  addLink(10,12,0.350000)
  addLink(10,6,0.225000)
  addLink(10,14,0.225000)
  addLink(10,55,0.225000)
  addLink(10,26,0.225000)
  addLink(10,81,0.225000)
  addLink(10,0,0.225000)
  addLink(11,10,0.350000)
  addLink(11,12,0.225000)
  addLink(11,15,0.225000)
  addLink(11,7,0.600000)
  addLink(11,28,0.225000)
  addLink(11,16,0.225000)
  addLink(11,34,0.225000)
  addLink(11,6,0.225000)
  addLink(11,26,0.600000)
  addLink(11,52,0.475000)
  addLink(11,2,0.350000)
  addLink(11,53,0.225000)
  addLink(11,71,0.350000)
  addLink(11,70,0.225000)
  addLink(11,41,0.225000)
  addLink(11,4,0.225000)
  addLink(11,58,0.225000)
  addLink(11,30,0.350000)
  addLink(11,59,0.225000)
  addLink(11,83,0.225000)
  addLink(11,81,0.225000)
  addLink(11,105,0.225000)
  addLink(12,10,0.350000)
  addLink(12,11,0.225000)
  addLink(13,4,0.225000)
  addLink(13,5,0.225000)
  addLink(13,40,0.225000)
  addLink(14,6,0.225000)
  addLink(14,20,0.225000)
  addLink(14,0,0.600000)
  addLink(14,27,0.225000)
  addLink(14,7,0.225000)
  addLink(14,30,0.600000)
  addLink(14,38,0.350000)
  addLink(14,55,0.600000)
  addLink(14,70,0.350000)
  addLink(14,26,0.475000)
  addLink(14,1,0.225000)
  addLink(14,81,0.475000)
  addLink(14,10,0.225000)
  addLink(15,11,0.225000)
  addLink(15,7,0.225000)
  addLink(15,4,0.225000)
  addLink(16,28,0.225000)
  addLink(16,7,0.225000)
  addLink(16,11,0.225000)
  addLink(17,7,0.225000)
  addLink(17,41,0.350000)
  addLink(17,4,0.350000)
  addLink(17,1,0.225000)
  addLink(17,81,0.225000)
  addLink(17,26,0.225000)
  addLink(17,114,0.225000)
  addLink(17,104,0.225000)
  addLink(17,0,0.225000)
  addLink(18,19,0.225000)
  addLink(18,9,0.225000)
  addLink(18,31,0.225000)
  addLink(18,68,0.225000)
  addLink(19,18,0.225000)
  addLink(19,9,0.225000)
  addLink(20,14,0.225000)
  addLink(20,0,0.225000)
  addLink(20,7,0.225000)
  addLink(20,32,0.225000)
  addLink(20,90,0.225000)
  addLink(20,91,0.225000)
  addLink(20,26,0.225000)
  addLink(20,92,0.225000)
  addLink(20,93,0.225000)
  addLink(20,112,0.225000)
  addLink(20,111,0.225000)
  addLink(21,22,0.350000)
  addLink(21,23,0.350000)
  addLink(22,21,0.350000)
  addLink(22,23,0.350000)
  addLink(23,21,0.350000)
  addLink(23,22,0.350000)
  addLink(25,4,0.225000)
  addLink(25,5,0.225000)
  addLink(25,35,0.225000)
  addLink(25,34,0.350000)
  addLink(26,11,0.600000)
  addLink(26,70,0.475000)
  addLink(26,14,0.475000)
  addLink(26,55,0.600000)
  addLink(26,30,0.225000)
  addLink(26,0,0.600000)
  addLink(26,71,0.225000)
  addLink(26,1,0.475000)
  addLink(26,41,0.225000)
  addLink(26,4,0.225000)
  addLink(26,58,0.225000)
  addLink(26,90,0.475000)
  addLink(26,91,0.475000)
  addLink(26,92,0.475000)
  addLink(26,93,0.475000)
  addLink(26,7,0.350000)
  addLink(26,32,0.475000)
  addLink(26,81,0.475000)
  addLink(26,104,0.350000)
  addLink(26,111,0.350000)
  addLink(26,112,0.350000)
  addLink(26,10,0.225000)
  addLink(26,20,0.225000)
  addLink(26,17,0.225000)
  addLink(26,114,0.225000)
  addLink(27,0,0.225000)
  addLink(27,7,0.225000)
  addLink(27,14,0.225000)
  addLink(27,114,0.225000)
  addLink(27,6,0.225000)
  addLink(28,7,0.225000)
  addLink(28,16,0.225000)
  addLink(28,11,0.225000)
  addLink(28,47,0.350000)
  addLink(28,69,0.225000)
  addLink(29,2,0.225000)
  addLink(29,84,0.350000)
  addLink(29,85,0.350000)
  addLink(29,103,0.350000)
  addLink(30,3,0.350000)
  addLink(30,1,0.350000)
  addLink(30,14,0.600000)
  addLink(30,38,0.350000)
  addLink(30,32,0.225000)
  addLink(30,55,0.350000)
  addLink(30,70,0.225000)
  addLink(30,26,0.225000)
  addLink(30,0,0.225000)
  addLink(30,11,0.350000)
  addLink(30,52,0.225000)
  addLink(30,7,0.225000)
  addLink(30,2,0.225000)
  addLink(30,80,0.225000)
  addLink(30,48,0.225000)
  addLink(30,8,0.225000)
  addLink(30,95,0.225000)
  addLink(30,114,0.225000)
  addLink(30,81,0.350000)
  addLink(30,104,0.225000)
  addLink(30,59,0.225000)
  addLink(30,83,0.225000)
  addLink(30,105,0.225000)
  addLink(31,18,0.225000)
  addLink(32,2,0.225000)
  addLink(32,1,0.225000)
  addLink(32,3,0.225000)
  addLink(32,0,0.475000)
  addLink(32,30,0.225000)
  addLink(32,90,0.350000)
  addLink(32,26,0.475000)
  addLink(32,91,0.350000)
  addLink(32,92,0.350000)
  addLink(32,93,0.350000)
  addLink(32,7,0.350000)
  addLink(32,55,0.225000)
  addLink(32,112,0.225000)
  addLink(32,111,0.225000)
  addLink(32,20,0.225000)
  addLink(34,35,0.350000)
  addLink(34,36,0.225000)
  addLink(34,7,0.225000)
  addLink(34,11,0.225000)
  addLink(34,25,0.350000)
  addLink(34,4,0.475000)
  addLink(34,69,0.225000)
  addLink(34,73,0.225000)
  addLink(34,74,0.225000)
  addLink(34,5,0.225000)
  addLink(35,36,0.225000)
  addLink(35,34,0.350000)
  addLink(35,25,0.225000)
  addLink(36,35,0.225000)
  addLink(36,34,0.225000)
  addLink(36,39,0.225000)
  addLink(36,5,0.225000)
  addLink(37,62,0.350000)
  addLink(37,82,0.350000)
  addLink(37,96,0.350000)
  addLink(37,46,0.350000)
  addLink(38,14,0.350000)
  addLink(38,30,0.350000)
  addLink(39,5,0.225000)
  addLink(39,36,0.225000)
  addLink(40,13,0.225000)
  addLink(40,5,0.225000)
  addLink(41,4,0.600000)
  addLink(41,70,0.225000)
  addLink(41,11,0.225000)
  addLink(41,26,0.225000)
  addLink(41,17,0.350000)
  addLink(42,43,0.350000)
  addLink(43,42,0.350000)
  addLink(44,45,0.600000)
  addLink(44,46,0.600000)
  addLink(45,44,0.600000)
  addLink(45,46,0.600000)
  addLink(46,44,0.600000)
  addLink(46,45,0.600000)
  addLink(46,37,0.350000)
  addLink(46,96,0.350000)
  addLink(47,28,0.350000)
  addLink(48,80,0.350000)
  addLink(48,8,0.225000)
  addLink(48,30,0.225000)
  addLink(49,50,0.350000)
  addLink(49,51,0.350000)
  addLink(50,49,0.350000)
  addLink(50,51,0.350000)
  addLink(51,49,0.350000)
  addLink(51,50,0.350000)
  addLink(52,2,0.350000)
  addLink(52,11,0.475000)
  addLink(52,30,0.225000)
  addLink(52,7,0.225000)
  addLink(53,11,0.225000)
  addLink(55,14,0.600000)
  addLink(55,30,0.350000)
  addLink(55,70,0.350000)
  addLink(55,26,0.600000)
  addLink(55,0,0.475000)
  addLink(55,1,0.225000)
  addLink(55,81,0.350000)
  addLink(55,32,0.225000)
  addLink(55,10,0.225000)
  addLink(56,57,0.350000)
  addLink(56,76,0.225000)
  addLink(56,78,0.225000)
  addLink(56,79,0.225000)
  addLink(57,56,0.350000)
  addLink(57,76,0.475000)
  addLink(57,77,0.350000)
  addLink(57,78,0.475000)
  addLink(57,79,0.475000)
  addLink(58,11,0.225000)
  addLink(58,26,0.225000)
  addLink(59,60,0.350000)
  addLink(59,61,0.350000)
  addLink(59,83,0.225000)
  addLink(59,81,0.225000)
  addLink(59,105,0.225000)
  addLink(59,11,0.225000)
  addLink(59,30,0.225000)
  addLink(60,59,0.350000)
  addLink(60,61,0.350000)
  addLink(61,59,0.350000)
  addLink(61,60,0.350000)
  addLink(62,37,0.350000)
  addLink(62,82,0.225000)
  addLink(63,64,0.350000)
  addLink(63,65,0.350000)
  addLink(63,66,0.350000)
  addLink(63,67,0.350000)
  addLink(64,63,0.350000)
  addLink(64,65,0.350000)
  addLink(64,66,0.350000)
  addLink(64,67,0.350000)
  addLink(65,63,0.350000)
  addLink(65,64,0.350000)
  addLink(65,66,0.350000)
  addLink(65,67,0.350000)
  addLink(66,63,0.350000)
  addLink(66,64,0.350000)
  addLink(66,65,0.350000)
  addLink(66,67,0.350000)
  addLink(67,63,0.350000)
  addLink(67,64,0.350000)
  addLink(67,65,0.350000)
  addLink(67,66,0.350000)
  addLink(68,18,0.225000)
  addLink(69,4,0.225000)
  addLink(69,34,0.225000)
  addLink(69,28,0.225000)
  addLink(70,14,0.350000)
  addLink(70,55,0.350000)
  addLink(70,26,0.475000)
  addLink(70,30,0.225000)
  addLink(70,0,0.350000)
  addLink(70,1,0.225000)
  addLink(70,41,0.225000)
  addLink(70,4,0.225000)
  addLink(70,11,0.225000)
  addLink(71,11,0.350000)
  addLink(71,26,0.225000)
  addLink(71,7,0.225000)
  addLink(73,74,0.350000)
  addLink(73,5,0.350000)
  addLink(73,34,0.225000)
  addLink(74,73,0.350000)
  addLink(74,5,0.350000)
  addLink(74,34,0.225000)
  addLink(75,5,0.225000)
  addLink(76,77,0.350000)
  addLink(76,57,0.475000)
  addLink(76,78,0.475000)
  addLink(76,79,0.475000)
  addLink(76,56,0.225000)
  addLink(77,76,0.350000)
  addLink(77,57,0.350000)
  addLink(77,78,0.350000)
  addLink(77,79,0.350000)
  addLink(78,76,0.475000)
  addLink(78,77,0.350000)
  addLink(78,57,0.475000)
  addLink(78,79,0.475000)
  addLink(78,56,0.225000)
  addLink(79,76,0.475000)
  addLink(79,77,0.350000)
  addLink(79,57,0.475000)
  addLink(79,78,0.475000)
  addLink(79,56,0.225000)
  addLink(80,48,0.350000)
  addLink(80,8,0.225000)
  addLink(80,30,0.225000)
  addLink(81,14,0.475000)
  addLink(81,55,0.350000)
  addLink(81,1,0.475000)
  addLink(81,26,0.475000)
  addLink(81,104,0.475000)
  addLink(81,105,0.600000)
  addLink(81,7,0.475000)
  addLink(81,10,0.225000)
  addLink(81,0,0.350000)
  addLink(81,114,0.350000)
  addLink(81,30,0.350000)
  addLink(81,3,0.225000)
  addLink(81,17,0.225000)
  addLink(81,59,0.225000)
  addLink(81,83,0.225000)
  addLink(81,11,0.225000)
  addLink(82,37,0.350000)
  addLink(82,62,0.225000)
  addLink(83,59,0.225000)
  addLink(83,81,0.225000)
  addLink(83,105,0.225000)
  addLink(83,11,0.225000)
  addLink(83,30,0.225000)
  addLink(84,29,0.350000)
  addLink(84,85,0.225000)
  addLink(84,103,0.225000)
  addLink(84,113,0.225000)
  addLink(85,29,0.350000)
  addLink(85,84,0.225000)
  addLink(85,103,0.225000)
  addLink(86,108,0.475000)
  addLink(87,88,0.350000)
  addLink(87,89,0.475000)
  addLink(88,87,0.350000)
  addLink(88,89,0.350000)
  addLink(89,87,0.475000)
  addLink(89,88,0.350000)
  addLink(90,26,0.475000)
  addLink(90,91,0.475000)
  addLink(90,92,0.475000)
  addLink(90,93,0.475000)
  addLink(90,7,0.350000)
  addLink(90,32,0.350000)
  addLink(90,0,0.350000)
  addLink(90,111,0.350000)
  addLink(90,112,0.350000)
  addLink(90,20,0.225000)
  addLink(91,90,0.475000)
  addLink(91,26,0.475000)
  addLink(91,92,0.475000)
  addLink(91,93,0.475000)
  addLink(91,7,0.350000)
  addLink(91,32,0.350000)
  addLink(91,0,0.350000)
  addLink(91,111,0.350000)
  addLink(91,112,0.350000)
  addLink(91,20,0.225000)
  addLink(92,90,0.475000)
  addLink(92,26,0.475000)
  addLink(92,91,0.475000)
  addLink(92,93,0.475000)
  addLink(92,7,0.350000)
  addLink(92,32,0.350000)
  addLink(92,0,0.350000)
  addLink(92,111,0.350000)
  addLink(92,112,0.350000)
  addLink(92,20,0.225000)
  addLink(93,90,0.475000)
  addLink(93,26,0.475000)
  addLink(93,91,0.475000)
  addLink(93,92,0.475000)
  addLink(93,7,0.350000)
  addLink(93,32,0.350000)
  addLink(93,0,0.350000)
  addLink(93,111,0.350000)
  addLink(93,112,0.350000)
  addLink(93,20,0.225000)
  addLink(95,7,0.350000)
  addLink(95,30,0.225000)
  addLink(95,107,0.225000)
  addLink(96,37,0.350000)
  addLink(96,46,0.350000)
  addLink(97,98,0.350000)
  addLink(98,97,0.350000)
  addLink(101,116,0.225000)
  addLink(103,84,0.225000)
  addLink(103,29,0.350000)
  addLink(103,85,0.225000)
  addLink(104,1,0.475000)
  addLink(104,81,0.475000)
  addLink(104,26,0.350000)
  addLink(104,114,0.350000)
  addLink(104,30,0.225000)
  addLink(104,3,0.225000)
  addLink(104,17,0.225000)
  addLink(104,0,0.225000)
  addLink(105,81,0.600000)
  addLink(105,7,0.600000)
  addLink(105,59,0.225000)
  addLink(105,83,0.225000)
  addLink(105,11,0.225000)
  addLink(105,30,0.225000)
  addLink(107,95,0.225000)
  addLink(108,86,0.475000)
  addLink(109,110,0.350000)
  addLink(110,109,0.350000)
  addLink(111,90,0.350000)
  addLink(111,91,0.350000)
  addLink(111,26,0.350000)
  addLink(111,92,0.350000)
  addLink(111,93,0.350000)
  addLink(111,112,0.350000)
  addLink(111,0,0.225000)
  addLink(111,7,0.225000)
  addLink(111,32,0.225000)
  addLink(111,20,0.225000)
  addLink(112,90,0.350000)
  addLink(112,91,0.350000)
  addLink(112,26,0.350000)
  addLink(112,92,0.350000)
  addLink(112,93,0.350000)
  addLink(112,111,0.350000)
  addLink(112,0,0.225000)
  addLink(112,7,0.225000)
  addLink(112,32,0.225000)
  addLink(112,20,0.225000)
  addLink(113,84,0.225000)
  addLink(114,27,0.225000)
  addLink(114,6,0.225000)
  addLink(114,30,0.225000)
  addLink(114,81,0.350000)
  addLink(114,3,0.225000)
  addLink(114,104,0.350000)
  addLink(114,1,0.350000)
  addLink(114,17,0.225000)
  addLink(114,26,0.225000)
  addLink(114,0,0.225000)
  addLink(115,7,0.225000)
  addLink(116,101,0.225000)


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