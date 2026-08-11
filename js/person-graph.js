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
  addNode(7,"Hector Miller-Bakewell", "person")
  addNode(8,"Jonathan Gorard", "person")
  addNode(9,"Manojna Namuduri", "person")
  addNode(10,"Xerxes Arsiwalla", "person")
  addNode(11,"Titouan Carette", "person")
  addNode(12,"Chen Zhao", "person")
  addNode(13,"Cole Comfort", "person")
  addNode(14,"Marc de Visme", "person")
  addNode(15,"Simon Perdrix", "person")
  addNode(16,"Dominic Horsman", "person")
  addNode(17,"Aleks Kissinger", "person")
  addNode(18,"Quanlong Wang", "person")
  addNode(19,"Miriam Backens", "person")
  addNode(20,"Alex Townsend-Teague", "person")
  addNode(21,"Richie Yeung", "person")
  addNode(22,"Shahn Majid", "person")
  addNode(23,"Renaud Vilmart", "person")
  addNode(24,"Kostia Chardonnet", "person")
  addNode(25,"Beno\^it Valiron", "person")
  addNode(26,"Alexander Cowtan", "person")
  addNode(27,"Korbinian Staudacher", "person")
  addNode(28,"Mark Koch", "person")
  addNode(29,"Agustin Borgna", "person")
  addNode(30,"Niel de Beaudrap", "person")
  addNode(31,"Margarita Veshchezerova", "person")
  addNode(32,"Robert Booth", "person")
  addNode(33,"Tobias Stollenwerk", "person")
  addNode(34,"Stuart Hadfield", "person")
  addNode(35,"Lia Yeh", "person")
  addNode(36,"Tom Peham", "person")
  addNode(37,"Lukas Burgholzer", "person")
  addNode(38,"Robert Wille", "person")
  addNode(39,"Tommy McElvanney", "person")
  addNode(40,"David Winderl", "person")
  addNode(41,"Stefano Gogioso", "person")
  addNode(42,"Craig Gidney", "person")
  addNode(43,"Adrian Lehmann", "person")
  addNode(44,"Ben Caldwell", "person")
  addNode(45,"Robert Rand", "person")
  addNode(46,"Tuomas Laakkonen", "person")
  addNode(47,"Julien Codsi", "person")
  addNode(48,"Alexandru Paler", "person")
  addNode(49,"Razin Shaikh", "person")
  addNode(50,"Daniel Litinski", "person")
  addNode(51,"Naomi Nickerson", "person")
  addNode(52,"Patrick Roy", "person")
  addNode(53,"Andrey Boris Khesin", "person")
  addNode(54,"Jonathan Lu", "person")
  addNode(55,"Peter Shor", "person")
  addNode(56,"Tobias Guggemos", "person")
  addNode(57,"Christian Ufrecht", "person")
  addNode(58,"Maniraman Periyasamy", "person")
  addNode(59,"Daniel Scherer", "person")
  addNode(60,"Axel Plinge", "person")
  addNode(61,"Christopher Mutschler", "person")
  addNode(62,"Simon Burton", "person")
  addNode(63,"Thomas Perez", "person")
  addNode(64,"Boldizsár Poór", "person")
  addNode(65,"Neil Ross", "person")
  addNode(66,"Leo Colisson", "person")
  addNode(67,"Alexandre Clement", "person")
  addNode(68,"Noe Delorme", "person")
  addNode(69,"Nicolas Heurtel", "person")
  addNode(70,"Hector Bombin", "person")
  addNode(71,"Chris Dawson", "person")
  addNode(72,"Fernando Pastawski", "person")
  addNode(73,"Sam Roberts", "person")
  addNode(74,"Qunsheng Huang", "person")
  addNode(75,"Boldizsar Poor", "person")
  addNode(76,"Karl Fürlinger", "person")
  addNode(77,"Sarah Meng Li", "person")
  addNode(78,"Julio Magdalena de la Fuente", "person")
  addNode(79,"Markus Kesselring", "person")
  addNode(80,"Kwok Ho Wan", "person")
  addNode(81,"Alejandro Villoria", "person")
  addNode(82,"Henning Basold", "person")
  addNode(83,"Alfons Laarman", "person")
  addNode(84,"Selma Dundar-Coecke", "person")
  addNode(85,"Caterina Puca", "person")
  addNode(86,"Muhammad Hamza Waseem", "person")
  addNode(87,"Thomas Cervoni", "person")
  addNode(88,"Jonathan Ruhman", "person")
  addNode(89,"Matthew Sutcliffe", "person")
  addNode(90,"Ludwig Schmid", "person")
  addNode(91,"Grace Sommers", "person")
  addNode(92,"David Huse", "person")
  addNode(93,"Piotr Mitosek", "person")
  addNode(94,"Pavel Kos", "person")
  addNode(95,"Dichuan Gao", "person")
  addNode(96,"Nathanan Tantivasadakarn", "person")
  addNode(97,"Vivien Vandaele", "person")
  addNode(98,"Arianne Meijer-van de Griend", "person")
  addNode(99,"Jens Eisert", "person")
  addNode(100,"William Cashman", "person")
  addNode(101,"Benjamin Rodatz", "person")
  addNode(102,"Liam Hurwitz", "person")
  addNode(103,"Wira Azmoon Ahmad", "person")
  addNode(104,"Zhenghao Zhong", "person")
  addNode(105,"Tobias Fischbach", "person")
  addNode(106,"Pierre Talbot", "person")
  addNode(107,"Peter Sigrist", "person")
  addNode(108,"Ferdi Tomassini", "person")
  addNode(109,"Andreas Bauer", "person")
  addNode(110,"Mateusz Kupper", "person")
  addNode(111,"Fedor Kuyanov", "person")
  addNode(112,"Da-Chuan Lu", "person")
  addNode(113,"Yi-Zhuang You", "person")
  addNode(114,"Laura Herzog", "person")
  addNode(115,"Aleksander Kubica", "person")
  addNode(116,"Sascha Zakaib-Bernier", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.225000)
  addLink(0,3,0.225000)
  addLink(0,16,0.225000)
  addLink(0,17,0.475000)
  addLink(0,18,0.600000)
  addLink(0,64,0.350000)
  addLink(0,49,0.475000)
  addLink(0,35,0.600000)
  addLink(0,21,0.225000)
  addLink(0,84,0.350000)
  addLink(0,85,0.350000)
  addLink(0,86,0.350000)
  addLink(0,87,0.350000)
  addLink(0,41,0.350000)
  addLink(0,4,0.225000)
  addLink(0,75,0.350000)
  addLink(0,108,0.225000)
  addLink(0,107,0.225000)
  addLink(0,13,0.225000)
  addLink(0,110,0.225000)
  addLink(0,100,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.225000)
  addLink(1,3,0.475000)
  addLink(1,21,0.350000)
  addLink(1,49,0.225000)
  addLink(1,64,0.225000)
  addLink(1,35,0.475000)
  addLink(1,18,0.225000)
  addLink(1,75,0.475000)
  addLink(1,100,0.475000)
  addLink(1,110,0.350000)
  addLink(1,13,0.350000)
  addLink(2,0,0.225000)
  addLink(2,1,0.225000)
  addLink(2,3,0.225000)
  addLink(2,20,0.225000)
  addLink(2,46,0.350000)
  addLink(2,5,0.350000)
  addLink(2,21,0.225000)
  addLink(3,0,0.225000)
  addLink(3,1,0.475000)
  addLink(3,2,0.225000)
  addLink(3,21,0.350000)
  addLink(3,110,0.225000)
  addLink(3,75,0.225000)
  addLink(3,100,0.225000)
  addLink(4,5,0.350000)
  addLink(4,6,0.350000)
  addLink(4,30,0.225000)
  addLink(4,18,0.225000)
  addLink(4,49,0.225000)
  addLink(4,35,0.225000)
  addLink(4,75,0.225000)
  addLink(4,0,0.225000)
  addLink(5,4,0.350000)
  addLink(5,6,0.225000)
  addLink(5,19,0.225000)
  addLink(5,17,0.600000)
  addLink(5,7,0.225000)
  addLink(5,23,0.225000)
  addLink(5,30,0.225000)
  addLink(5,35,0.600000)
  addLink(5,46,0.475000)
  addLink(5,2,0.350000)
  addLink(5,47,0.225000)
  addLink(5,65,0.350000)
  addLink(5,64,0.225000)
  addLink(5,32,0.225000)
  addLink(5,11,0.225000)
  addLink(5,52,0.225000)
  addLink(5,21,0.350000)
  addLink(5,53,0.225000)
  addLink(5,77,0.225000)
  addLink(5,75,0.225000)
  addLink(5,101,0.225000)
  addLink(6,4,0.350000)
  addLink(6,5,0.225000)
  addLink(7,19,0.225000)
  addLink(7,17,0.225000)
  addLink(7,5,0.225000)
  addLink(8,9,0.350000)
  addLink(8,10,0.350000)
  addLink(9,8,0.350000)
  addLink(9,10,0.350000)
  addLink(10,8,0.350000)
  addLink(10,9,0.350000)
  addLink(11,14,0.225000)
  addLink(11,15,0.350000)
  addLink(11,32,0.600000)
  addLink(11,23,0.475000)
  addLink(11,63,0.225000)
  addLink(11,64,0.225000)
  addLink(11,5,0.225000)
  addLink(11,35,0.225000)
  addLink(11,13,0.350000)
  addLink(13,17,0.225000)
  addLink(13,32,0.350000)
  addLink(13,11,0.350000)
  addLink(13,1,0.350000)
  addLink(13,75,0.225000)
  addLink(13,35,0.225000)
  addLink(13,110,0.225000)
  addLink(13,100,0.225000)
  addLink(13,0,0.225000)
  addLink(14,11,0.225000)
  addLink(14,15,0.225000)
  addLink(14,24,0.225000)
  addLink(14,23,0.350000)
  addLink(15,11,0.350000)
  addLink(15,14,0.225000)
  addLink(15,29,0.225000)
  addLink(15,25,0.225000)
  addLink(15,31,0.225000)
  addLink(15,67,0.350000)
  addLink(15,68,0.350000)
  addLink(15,23,0.225000)
  addLink(15,69,0.225000)
  addLink(16,0,0.225000)
  addLink(16,17,0.225000)
  addLink(16,18,0.225000)
  addLink(16,110,0.225000)
  addLink(16,30,0.225000)
  addLink(17,0,0.475000)
  addLink(17,16,0.225000)
  addLink(17,18,0.225000)
  addLink(17,19,0.225000)
  addLink(17,7,0.225000)
  addLink(17,5,0.600000)
  addLink(17,13,0.225000)
  addLink(17,23,0.225000)
  addLink(17,30,0.225000)
  addLink(17,84,0.350000)
  addLink(17,35,0.350000)
  addLink(17,85,0.350000)
  addLink(17,86,0.350000)
  addLink(17,87,0.350000)
  addLink(17,41,0.350000)
  addLink(17,21,0.225000)
  addLink(17,46,0.225000)
  addLink(17,89,0.350000)
  addLink(17,65,0.225000)
  addLink(17,101,0.600000)
  addLink(17,75,0.475000)
  addLink(17,108,0.225000)
  addLink(17,107,0.225000)
  addLink(17,111,0.225000)
  addLink(17,95,0.225000)
  addLink(17,49,0.225000)
  addLink(18,0,0.600000)
  addLink(18,16,0.225000)
  addLink(18,17,0.225000)
  addLink(18,21,0.600000)
  addLink(18,28,0.350000)
  addLink(18,49,0.600000)
  addLink(18,64,0.350000)
  addLink(18,35,0.475000)
  addLink(18,1,0.225000)
  addLink(18,75,0.475000)
  addLink(18,4,0.225000)
  addLink(19,17,0.225000)
  addLink(19,7,0.225000)
  addLink(19,5,0.225000)
  addLink(19,39,0.350000)
  addLink(19,63,0.225000)
  addLink(19,93,0.225000)
  addLink(20,2,0.225000)
  addLink(20,78,0.350000)
  addLink(20,79,0.350000)
  addLink(20,99,0.350000)
  addLink(21,3,0.350000)
  addLink(21,1,0.350000)
  addLink(21,18,0.600000)
  addLink(21,28,0.350000)
  addLink(21,41,0.225000)
  addLink(21,49,0.350000)
  addLink(21,64,0.225000)
  addLink(21,35,0.350000)
  addLink(21,0,0.225000)
  addLink(21,5,0.350000)
  addLink(21,46,0.225000)
  addLink(21,17,0.225000)
  addLink(21,2,0.225000)
  addLink(21,74,0.225000)
  addLink(21,40,0.225000)
  addLink(21,98,0.225000)
  addLink(21,89,0.225000)
  addLink(21,110,0.225000)
  addLink(21,75,0.350000)
  addLink(21,100,0.225000)
  addLink(21,53,0.225000)
  addLink(21,77,0.225000)
  addLink(21,101,0.225000)
  addLink(22,26,0.225000)
  addLink(23,24,0.350000)
  addLink(23,25,0.225000)
  addLink(23,17,0.225000)
  addLink(23,5,0.225000)
  addLink(23,14,0.350000)
  addLink(23,11,0.475000)
  addLink(23,63,0.225000)
  addLink(23,67,0.225000)
  addLink(23,68,0.225000)
  addLink(23,15,0.225000)
  addLink(24,25,0.225000)
  addLink(24,23,0.350000)
  addLink(24,14,0.225000)
  addLink(25,24,0.225000)
  addLink(25,23,0.225000)
  addLink(25,29,0.225000)
  addLink(25,15,0.225000)
  addLink(26,22,0.225000)
  addLink(26,62,0.225000)
  addLink(27,56,0.350000)
  addLink(27,76,0.350000)
  addLink(27,90,0.350000)
  addLink(27,38,0.350000)
  addLink(28,18,0.350000)
  addLink(28,21,0.350000)
  addLink(29,15,0.225000)
  addLink(29,25,0.225000)
  addLink(30,17,0.225000)
  addLink(30,5,0.225000)
  addLink(30,4,0.225000)
  addLink(30,110,0.225000)
  addLink(30,16,0.225000)
  addLink(31,15,0.225000)
  addLink(32,11,0.600000)
  addLink(32,64,0.225000)
  addLink(32,5,0.225000)
  addLink(32,35,0.225000)
  addLink(32,13,0.350000)
  addLink(33,34,0.350000)
  addLink(34,33,0.350000)
  addLink(35,5,0.600000)
  addLink(35,64,0.475000)
  addLink(35,18,0.475000)
  addLink(35,49,0.600000)
  addLink(35,21,0.350000)
  addLink(35,0,0.600000)
  addLink(35,65,0.225000)
  addLink(35,1,0.475000)
  addLink(35,32,0.225000)
  addLink(35,11,0.225000)
  addLink(35,52,0.225000)
  addLink(35,84,0.475000)
  addLink(35,85,0.475000)
  addLink(35,86,0.475000)
  addLink(35,87,0.475000)
  addLink(35,17,0.350000)
  addLink(35,41,0.475000)
  addLink(35,75,0.475000)
  addLink(35,100,0.350000)
  addLink(35,107,0.350000)
  addLink(35,108,0.350000)
  addLink(35,4,0.225000)
  addLink(35,13,0.225000)
  addLink(35,110,0.225000)
  addLink(36,37,0.600000)
  addLink(36,38,0.600000)
  addLink(37,36,0.600000)
  addLink(37,38,0.600000)
  addLink(38,36,0.600000)
  addLink(38,37,0.600000)
  addLink(38,27,0.350000)
  addLink(38,90,0.350000)
  addLink(38,114,0.350000)
  addLink(38,115,0.225000)
  addLink(39,19,0.350000)
  addLink(40,74,0.350000)
  addLink(40,98,0.225000)
  addLink(40,21,0.225000)
  addLink(41,21,0.225000)
  addLink(41,84,0.350000)
  addLink(41,35,0.475000)
  addLink(41,85,0.350000)
  addLink(41,86,0.350000)
  addLink(41,87,0.350000)
  addLink(41,17,0.350000)
  addLink(41,0,0.350000)
  addLink(41,49,0.225000)
  addLink(41,108,0.225000)
  addLink(41,107,0.225000)
  addLink(43,44,0.350000)
  addLink(43,45,0.350000)
  addLink(44,43,0.350000)
  addLink(44,45,0.350000)
  addLink(45,43,0.350000)
  addLink(45,44,0.350000)
  addLink(46,2,0.350000)
  addLink(46,5,0.475000)
  addLink(46,21,0.225000)
  addLink(46,17,0.225000)
  addLink(46,47,0.225000)
  addLink(47,5,0.225000)
  addLink(47,46,0.225000)
  addLink(49,18,0.600000)
  addLink(49,21,0.350000)
  addLink(49,64,0.350000)
  addLink(49,35,0.600000)
  addLink(49,0,0.475000)
  addLink(49,1,0.225000)
  addLink(49,75,0.350000)
  addLink(49,41,0.225000)
  addLink(49,4,0.225000)
  addLink(49,95,0.225000)
  addLink(49,17,0.225000)
  addLink(50,51,0.350000)
  addLink(50,70,0.225000)
  addLink(50,72,0.225000)
  addLink(50,73,0.225000)
  addLink(51,50,0.350000)
  addLink(51,70,0.475000)
  addLink(51,71,0.350000)
  addLink(51,72,0.475000)
  addLink(51,73,0.475000)
  addLink(52,5,0.225000)
  addLink(52,35,0.225000)
  addLink(53,54,0.350000)
  addLink(53,55,0.350000)
  addLink(53,77,0.225000)
  addLink(53,75,0.225000)
  addLink(53,101,0.225000)
  addLink(53,5,0.225000)
  addLink(53,21,0.225000)
  addLink(54,53,0.350000)
  addLink(54,55,0.350000)
  addLink(55,53,0.350000)
  addLink(55,54,0.350000)
  addLink(56,27,0.350000)
  addLink(56,76,0.225000)
  addLink(57,58,0.350000)
  addLink(57,59,0.350000)
  addLink(57,60,0.350000)
  addLink(57,61,0.350000)
  addLink(58,57,0.350000)
  addLink(58,59,0.350000)
  addLink(58,60,0.350000)
  addLink(58,61,0.350000)
  addLink(59,57,0.350000)
  addLink(59,58,0.350000)
  addLink(59,60,0.350000)
  addLink(59,61,0.350000)
  addLink(60,57,0.350000)
  addLink(60,58,0.350000)
  addLink(60,59,0.350000)
  addLink(60,61,0.350000)
  addLink(61,57,0.350000)
  addLink(61,58,0.350000)
  addLink(61,59,0.350000)
  addLink(61,60,0.350000)
  addLink(62,26,0.225000)
  addLink(63,11,0.225000)
  addLink(63,23,0.225000)
  addLink(63,19,0.225000)
  addLink(64,18,0.350000)
  addLink(64,49,0.350000)
  addLink(64,35,0.475000)
  addLink(64,21,0.225000)
  addLink(64,0,0.350000)
  addLink(64,1,0.225000)
  addLink(64,32,0.225000)
  addLink(64,11,0.225000)
  addLink(64,5,0.225000)
  addLink(65,5,0.350000)
  addLink(65,35,0.225000)
  addLink(65,17,0.225000)
  addLink(67,68,0.350000)
  addLink(67,15,0.350000)
  addLink(67,23,0.225000)
  addLink(68,67,0.350000)
  addLink(68,15,0.350000)
  addLink(68,23,0.225000)
  addLink(69,15,0.225000)
  addLink(70,71,0.350000)
  addLink(70,51,0.475000)
  addLink(70,72,0.475000)
  addLink(70,73,0.475000)
  addLink(70,50,0.225000)
  addLink(71,70,0.350000)
  addLink(71,51,0.350000)
  addLink(71,72,0.350000)
  addLink(71,73,0.350000)
  addLink(72,70,0.475000)
  addLink(72,71,0.350000)
  addLink(72,51,0.475000)
  addLink(72,73,0.475000)
  addLink(72,50,0.225000)
  addLink(73,70,0.475000)
  addLink(73,71,0.350000)
  addLink(73,51,0.475000)
  addLink(73,72,0.475000)
  addLink(73,50,0.225000)
  addLink(74,40,0.350000)
  addLink(74,98,0.225000)
  addLink(74,21,0.225000)
  addLink(75,18,0.475000)
  addLink(75,49,0.350000)
  addLink(75,1,0.475000)
  addLink(75,35,0.475000)
  addLink(75,100,0.475000)
  addLink(75,101,0.600000)
  addLink(75,17,0.475000)
  addLink(75,4,0.225000)
  addLink(75,0,0.350000)
  addLink(75,110,0.350000)
  addLink(75,21,0.350000)
  addLink(75,3,0.225000)
  addLink(75,13,0.225000)
  addLink(75,53,0.225000)
  addLink(75,77,0.225000)
  addLink(75,5,0.225000)
  addLink(76,27,0.350000)
  addLink(76,56,0.225000)
  addLink(77,53,0.225000)
  addLink(77,75,0.225000)
  addLink(77,101,0.225000)
  addLink(77,5,0.225000)
  addLink(77,21,0.225000)
  addLink(78,20,0.350000)
  addLink(78,79,0.225000)
  addLink(78,99,0.225000)
  addLink(78,109,0.225000)
  addLink(79,20,0.350000)
  addLink(79,78,0.225000)
  addLink(79,99,0.225000)
  addLink(80,104,0.475000)
  addLink(81,82,0.350000)
  addLink(81,83,0.475000)
  addLink(82,81,0.350000)
  addLink(82,83,0.350000)
  addLink(83,81,0.475000)
  addLink(83,82,0.350000)
  addLink(84,35,0.475000)
  addLink(84,85,0.475000)
  addLink(84,86,0.475000)
  addLink(84,87,0.475000)
  addLink(84,17,0.350000)
  addLink(84,41,0.350000)
  addLink(84,0,0.350000)
  addLink(84,107,0.350000)
  addLink(84,108,0.350000)
  addLink(85,84,0.475000)
  addLink(85,35,0.475000)
  addLink(85,86,0.475000)
  addLink(85,87,0.475000)
  addLink(85,17,0.350000)
  addLink(85,41,0.350000)
  addLink(85,0,0.350000)
  addLink(85,107,0.350000)
  addLink(85,108,0.350000)
  addLink(86,84,0.475000)
  addLink(86,35,0.475000)
  addLink(86,85,0.475000)
  addLink(86,87,0.475000)
  addLink(86,17,0.350000)
  addLink(86,41,0.350000)
  addLink(86,0,0.350000)
  addLink(86,107,0.350000)
  addLink(86,108,0.350000)
  addLink(87,84,0.475000)
  addLink(87,35,0.475000)
  addLink(87,85,0.475000)
  addLink(87,86,0.475000)
  addLink(87,17,0.350000)
  addLink(87,41,0.350000)
  addLink(87,0,0.350000)
  addLink(87,107,0.350000)
  addLink(87,108,0.350000)
  addLink(89,17,0.350000)
  addLink(89,21,0.225000)
  addLink(89,103,0.225000)
  addLink(90,27,0.350000)
  addLink(90,38,0.350000)
  addLink(91,92,0.350000)
  addLink(92,91,0.350000)
  addLink(93,19,0.225000)
  addLink(95,49,0.225000)
  addLink(95,17,0.225000)
  addLink(96,112,0.225000)
  addLink(98,74,0.225000)
  addLink(98,40,0.225000)
  addLink(98,21,0.225000)
  addLink(99,78,0.225000)
  addLink(99,20,0.350000)
  addLink(99,79,0.225000)
  addLink(100,1,0.475000)
  addLink(100,75,0.475000)
  addLink(100,35,0.350000)
  addLink(100,110,0.350000)
  addLink(100,21,0.225000)
  addLink(100,3,0.225000)
  addLink(100,13,0.225000)
  addLink(100,0,0.225000)
  addLink(101,75,0.600000)
  addLink(101,17,0.600000)
  addLink(101,53,0.225000)
  addLink(101,77,0.225000)
  addLink(101,5,0.225000)
  addLink(101,21,0.225000)
  addLink(103,89,0.225000)
  addLink(104,80,0.475000)
  addLink(105,106,0.350000)
  addLink(106,105,0.350000)
  addLink(107,84,0.350000)
  addLink(107,85,0.350000)
  addLink(107,35,0.350000)
  addLink(107,86,0.350000)
  addLink(107,87,0.350000)
  addLink(107,108,0.350000)
  addLink(107,0,0.225000)
  addLink(107,17,0.225000)
  addLink(107,41,0.225000)
  addLink(108,84,0.350000)
  addLink(108,85,0.350000)
  addLink(108,35,0.350000)
  addLink(108,86,0.350000)
  addLink(108,87,0.350000)
  addLink(108,107,0.350000)
  addLink(108,0,0.225000)
  addLink(108,17,0.225000)
  addLink(108,41,0.225000)
  addLink(109,78,0.225000)
  addLink(110,16,0.225000)
  addLink(110,30,0.225000)
  addLink(110,21,0.225000)
  addLink(110,75,0.350000)
  addLink(110,3,0.225000)
  addLink(110,100,0.350000)
  addLink(110,1,0.350000)
  addLink(110,13,0.225000)
  addLink(110,35,0.225000)
  addLink(110,0,0.225000)
  addLink(111,17,0.225000)
  addLink(112,113,0.225000)
  addLink(112,96,0.225000)
  addLink(113,112,0.225000)
  addLink(114,115,0.225000)
  addLink(114,38,0.350000)
  addLink(115,114,0.225000)
  addLink(115,38,0.225000)


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