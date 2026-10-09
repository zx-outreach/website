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
  addNode(8,"Chen Zhao", "person")
  addNode(9,"Cole Comfort", "person")
  addNode(10,"Marc de Visme", "person")
  addNode(11,"Simon Perdrix", "person")
  addNode(12,"Dominic Horsman", "person")
  addNode(13,"Aleks Kissinger", "person")
  addNode(14,"Quanlong Wang", "person")
  addNode(15,"Miriam Backens", "person")
  addNode(16,"Alex Townsend-Teague", "person")
  addNode(17,"Richie Yeung", "person")
  addNode(18,"Shahn Majid", "person")
  addNode(19,"Renaud Vilmart", "person")
  addNode(20,"Kostia Chardonnet", "person")
  addNode(21,"Beno\^it Valiron", "person")
  addNode(22,"Alexander Cowtan", "person")
  addNode(23,"Korbinian Staudacher", "person")
  addNode(24,"Mark Koch", "person")
  addNode(25,"Agustin Borgna", "person")
  addNode(26,"Niel de Beaudrap", "person")
  addNode(27,"Margarita Veshchezerova", "person")
  addNode(28,"Robert Booth", "person")
  addNode(29,"Tobias Stollenwerk", "person")
  addNode(30,"Stuart Hadfield", "person")
  addNode(31,"Lia Yeh", "person")
  addNode(32,"Tom Peham", "person")
  addNode(33,"Lukas Burgholzer", "person")
  addNode(34,"Robert Wille", "person")
  addNode(35,"Tommy McElvanney", "person")
  addNode(36,"David Winderl", "person")
  addNode(37,"Stefano Gogioso", "person")
  addNode(38,"Craig Gidney", "person")
  addNode(39,"Adrian Lehmann", "person")
  addNode(40,"Ben Caldwell", "person")
  addNode(41,"Robert Rand", "person")
  addNode(42,"Tuomas Laakkonen", "person")
  addNode(43,"Julien Codsi", "person")
  addNode(44,"Alexandru Paler", "person")
  addNode(45,"Razin Shaikh", "person")
  addNode(46,"Daniel Litinski", "person")
  addNode(47,"Naomi Nickerson", "person")
  addNode(48,"Patrick Roy", "person")
  addNode(49,"Andrey Boris Khesin", "person")
  addNode(50,"Jonathan Lu", "person")
  addNode(51,"Peter Shor", "person")
  addNode(52,"Tobias Guggemos", "person")
  addNode(53,"Christian Ufrecht", "person")
  addNode(54,"Maniraman Periyasamy", "person")
  addNode(55,"Daniel Scherer", "person")
  addNode(56,"Axel Plinge", "person")
  addNode(57,"Christopher Mutschler", "person")
  addNode(58,"Simon Burton", "person")
  addNode(59,"Thomas Perez", "person")
  addNode(60,"Boldizsár Poór", "person")
  addNode(61,"Neil Ross", "person")
  addNode(62,"Leo Colisson", "person")
  addNode(63,"Alexandre Clement", "person")
  addNode(64,"Noe Delorme", "person")
  addNode(65,"Nicolas Heurtel", "person")
  addNode(66,"Hector Bombin", "person")
  addNode(67,"Chris Dawson", "person")
  addNode(68,"Fernando Pastawski", "person")
  addNode(69,"Sam Roberts", "person")
  addNode(70,"Qunsheng Huang", "person")
  addNode(71,"Song Cheng", "person")
  addNode(72,"Boldizsar Poor", "person")
  addNode(73,"Karl Fürlinger", "person")
  addNode(74,"Sarah Meng Li", "person")
  addNode(75,"Julio Magdalena de la Fuente", "person")
  addNode(76,"Markus Kesselring", "person")
  addNode(77,"Kwok Ho Wan", "person")
  addNode(78,"Alejandro Villoria", "person")
  addNode(79,"Henning Basold", "person")
  addNode(80,"Alfons Laarman", "person")
  addNode(81,"Selma Dundar-Coecke", "person")
  addNode(82,"Caterina Puca", "person")
  addNode(83,"Muhammad Hamza Waseem", "person")
  addNode(84,"Thomas Cervoni", "person")
  addNode(85,"Jonathan Ruhman", "person")
  addNode(86,"Matthew Sutcliffe", "person")
  addNode(87,"Ludwig Schmid", "person")
  addNode(88,"Grace Sommers", "person")
  addNode(89,"David Huse", "person")
  addNode(90,"Piotr Mitosek", "person")
  addNode(91,"Pavel Kos", "person")
  addNode(92,"Dichuan Gao", "person")
  addNode(93,"Nathanan Tantivasadakarn", "person")
  addNode(94,"Vivien Vandaele", "person")
  addNode(95,"Arianne Meijer-van de Griend", "person")
  addNode(96,"Jens Eisert", "person")
  addNode(97,"William Cashman", "person")
  addNode(98,"Benjamin Rodatz", "person")
  addNode(99,"Liam Hurwitz", "person")
  addNode(100,"Wira Azmoon Ahmad", "person")
  addNode(101,"Zhenghao Zhong", "person")
  addNode(102,"Tobias Fischbach", "person")
  addNode(103,"Pierre Talbot", "person")
  addNode(104,"Peter Sigrist", "person")
  addNode(105,"Ferdi Tomassini", "person")
  addNode(106,"Andreas Bauer", "person")
  addNode(107,"Mateusz Kupper", "person")
  addNode(108,"Fedor Kuyanov", "person")
  addNode(109,"Da-Chuan Lu", "person")
  addNode(110,"Yi-Zhuang You", "person")
  addNode(111,"Laura Herzog", "person")
  addNode(112,"Aleksander Kubica", "person")
  addNode(113,"Sascha Zakaib-Bernier", "person")
  addNode(114,"Harry Stoltz", "person")
  addNode(115,"Yi-Yu Lin", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.225000)
  addLink(0,3,0.225000)
  addLink(0,12,0.225000)
  addLink(0,13,0.475000)
  addLink(0,14,0.600000)
  addLink(0,60,0.350000)
  addLink(0,45,0.475000)
  addLink(0,31,0.600000)
  addLink(0,17,0.225000)
  addLink(0,81,0.350000)
  addLink(0,82,0.350000)
  addLink(0,83,0.350000)
  addLink(0,84,0.350000)
  addLink(0,37,0.350000)
  addLink(0,4,0.225000)
  addLink(0,72,0.350000)
  addLink(0,105,0.225000)
  addLink(0,104,0.225000)
  addLink(0,9,0.225000)
  addLink(0,107,0.225000)
  addLink(0,97,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.225000)
  addLink(1,3,0.475000)
  addLink(1,17,0.350000)
  addLink(1,45,0.225000)
  addLink(1,60,0.225000)
  addLink(1,31,0.475000)
  addLink(1,14,0.225000)
  addLink(1,72,0.475000)
  addLink(1,97,0.475000)
  addLink(1,107,0.350000)
  addLink(1,9,0.350000)
  addLink(2,0,0.225000)
  addLink(2,1,0.225000)
  addLink(2,3,0.225000)
  addLink(2,16,0.225000)
  addLink(2,42,0.350000)
  addLink(2,5,0.350000)
  addLink(2,17,0.225000)
  addLink(3,0,0.225000)
  addLink(3,1,0.475000)
  addLink(3,2,0.225000)
  addLink(3,17,0.350000)
  addLink(3,107,0.225000)
  addLink(3,72,0.225000)
  addLink(3,97,0.225000)
  addLink(4,5,0.350000)
  addLink(4,6,0.350000)
  addLink(4,26,0.225000)
  addLink(4,14,0.225000)
  addLink(4,45,0.225000)
  addLink(4,31,0.225000)
  addLink(4,72,0.225000)
  addLink(4,0,0.225000)
  addLink(5,4,0.350000)
  addLink(5,6,0.225000)
  addLink(5,15,0.225000)
  addLink(5,13,0.600000)
  addLink(5,19,0.225000)
  addLink(5,26,0.225000)
  addLink(5,31,0.600000)
  addLink(5,42,0.475000)
  addLink(5,2,0.350000)
  addLink(5,43,0.225000)
  addLink(5,61,0.350000)
  addLink(5,60,0.225000)
  addLink(5,28,0.225000)
  addLink(5,7,0.225000)
  addLink(5,48,0.225000)
  addLink(5,17,0.475000)
  addLink(5,49,0.350000)
  addLink(5,74,0.350000)
  addLink(5,72,0.350000)
  addLink(5,98,0.350000)
  addLink(5,86,0.225000)
  addLink(6,4,0.350000)
  addLink(6,5,0.225000)
  addLink(7,10,0.225000)
  addLink(7,11,0.350000)
  addLink(7,28,0.600000)
  addLink(7,19,0.475000)
  addLink(7,59,0.225000)
  addLink(7,60,0.225000)
  addLink(7,5,0.225000)
  addLink(7,31,0.225000)
  addLink(7,9,0.350000)
  addLink(9,13,0.225000)
  addLink(9,28,0.350000)
  addLink(9,7,0.350000)
  addLink(9,1,0.350000)
  addLink(9,72,0.225000)
  addLink(9,31,0.225000)
  addLink(9,107,0.225000)
  addLink(9,97,0.225000)
  addLink(9,0,0.225000)
  addLink(10,7,0.225000)
  addLink(10,11,0.225000)
  addLink(10,20,0.225000)
  addLink(10,19,0.350000)
  addLink(11,7,0.350000)
  addLink(11,10,0.225000)
  addLink(11,25,0.225000)
  addLink(11,21,0.225000)
  addLink(11,27,0.225000)
  addLink(11,63,0.350000)
  addLink(11,64,0.350000)
  addLink(11,19,0.225000)
  addLink(11,65,0.225000)
  addLink(11,15,0.225000)
  addLink(12,0,0.225000)
  addLink(12,13,0.225000)
  addLink(12,14,0.225000)
  addLink(12,107,0.225000)
  addLink(12,26,0.225000)
  addLink(13,0,0.475000)
  addLink(13,12,0.225000)
  addLink(13,14,0.225000)
  addLink(13,15,0.225000)
  addLink(13,5,0.600000)
  addLink(13,9,0.225000)
  addLink(13,19,0.225000)
  addLink(13,26,0.225000)
  addLink(13,81,0.350000)
  addLink(13,31,0.350000)
  addLink(13,82,0.350000)
  addLink(13,83,0.350000)
  addLink(13,84,0.350000)
  addLink(13,37,0.350000)
  addLink(13,17,0.225000)
  addLink(13,42,0.225000)
  addLink(13,86,0.350000)
  addLink(13,61,0.225000)
  addLink(13,98,0.600000)
  addLink(13,72,0.475000)
  addLink(13,105,0.225000)
  addLink(13,104,0.225000)
  addLink(13,108,0.225000)
  addLink(13,92,0.225000)
  addLink(13,45,0.225000)
  addLink(14,0,0.600000)
  addLink(14,12,0.225000)
  addLink(14,13,0.225000)
  addLink(14,17,0.600000)
  addLink(14,24,0.350000)
  addLink(14,45,0.600000)
  addLink(14,60,0.350000)
  addLink(14,31,0.475000)
  addLink(14,1,0.225000)
  addLink(14,72,0.475000)
  addLink(14,4,0.225000)
  addLink(15,13,0.225000)
  addLink(15,5,0.225000)
  addLink(15,35,0.350000)
  addLink(15,59,0.225000)
  addLink(15,90,0.225000)
  addLink(15,11,0.225000)
  addLink(16,2,0.225000)
  addLink(16,75,0.350000)
  addLink(16,76,0.350000)
  addLink(16,96,0.350000)
  addLink(17,3,0.350000)
  addLink(17,1,0.350000)
  addLink(17,14,0.600000)
  addLink(17,24,0.350000)
  addLink(17,37,0.225000)
  addLink(17,45,0.350000)
  addLink(17,60,0.225000)
  addLink(17,31,0.350000)
  addLink(17,0,0.225000)
  addLink(17,5,0.475000)
  addLink(17,42,0.225000)
  addLink(17,13,0.225000)
  addLink(17,2,0.225000)
  addLink(17,70,0.225000)
  addLink(17,36,0.225000)
  addLink(17,95,0.225000)
  addLink(17,86,0.225000)
  addLink(17,107,0.225000)
  addLink(17,72,0.475000)
  addLink(17,97,0.225000)
  addLink(17,49,0.350000)
  addLink(17,74,0.350000)
  addLink(17,98,0.350000)
  addLink(18,22,0.225000)
  addLink(19,20,0.350000)
  addLink(19,21,0.225000)
  addLink(19,13,0.225000)
  addLink(19,5,0.225000)
  addLink(19,10,0.350000)
  addLink(19,7,0.475000)
  addLink(19,59,0.225000)
  addLink(19,63,0.225000)
  addLink(19,64,0.225000)
  addLink(19,11,0.225000)
  addLink(19,114,0.225000)
  addLink(20,21,0.225000)
  addLink(20,19,0.350000)
  addLink(20,10,0.225000)
  addLink(21,20,0.225000)
  addLink(21,19,0.225000)
  addLink(21,25,0.225000)
  addLink(21,11,0.225000)
  addLink(22,18,0.225000)
  addLink(22,58,0.225000)
  addLink(23,52,0.350000)
  addLink(23,73,0.350000)
  addLink(23,87,0.350000)
  addLink(23,34,0.350000)
  addLink(24,14,0.350000)
  addLink(24,17,0.350000)
  addLink(25,11,0.225000)
  addLink(25,21,0.225000)
  addLink(26,13,0.225000)
  addLink(26,5,0.225000)
  addLink(26,4,0.225000)
  addLink(26,107,0.225000)
  addLink(26,12,0.225000)
  addLink(27,11,0.225000)
  addLink(28,7,0.600000)
  addLink(28,60,0.225000)
  addLink(28,5,0.225000)
  addLink(28,31,0.225000)
  addLink(28,9,0.350000)
  addLink(29,30,0.350000)
  addLink(30,29,0.350000)
  addLink(31,5,0.600000)
  addLink(31,60,0.475000)
  addLink(31,14,0.475000)
  addLink(31,45,0.600000)
  addLink(31,17,0.350000)
  addLink(31,0,0.600000)
  addLink(31,61,0.225000)
  addLink(31,1,0.475000)
  addLink(31,28,0.225000)
  addLink(31,7,0.225000)
  addLink(31,48,0.225000)
  addLink(31,81,0.475000)
  addLink(31,82,0.475000)
  addLink(31,83,0.475000)
  addLink(31,84,0.475000)
  addLink(31,13,0.350000)
  addLink(31,37,0.475000)
  addLink(31,72,0.475000)
  addLink(31,97,0.350000)
  addLink(31,104,0.350000)
  addLink(31,105,0.350000)
  addLink(31,4,0.225000)
  addLink(31,9,0.225000)
  addLink(31,107,0.225000)
  addLink(32,33,0.600000)
  addLink(32,34,0.600000)
  addLink(33,32,0.600000)
  addLink(33,34,0.600000)
  addLink(34,32,0.600000)
  addLink(34,33,0.600000)
  addLink(34,23,0.350000)
  addLink(34,87,0.350000)
  addLink(34,111,0.350000)
  addLink(34,112,0.225000)
  addLink(35,15,0.350000)
  addLink(36,70,0.350000)
  addLink(36,95,0.225000)
  addLink(36,17,0.225000)
  addLink(37,17,0.225000)
  addLink(37,81,0.350000)
  addLink(37,31,0.475000)
  addLink(37,82,0.350000)
  addLink(37,83,0.350000)
  addLink(37,84,0.350000)
  addLink(37,13,0.350000)
  addLink(37,0,0.350000)
  addLink(37,45,0.225000)
  addLink(37,105,0.225000)
  addLink(37,104,0.225000)
  addLink(39,40,0.350000)
  addLink(39,41,0.350000)
  addLink(40,39,0.350000)
  addLink(40,41,0.350000)
  addLink(41,39,0.350000)
  addLink(41,40,0.350000)
  addLink(42,2,0.350000)
  addLink(42,5,0.475000)
  addLink(42,17,0.225000)
  addLink(42,13,0.225000)
  addLink(42,43,0.225000)
  addLink(43,5,0.225000)
  addLink(43,42,0.225000)
  addLink(45,14,0.600000)
  addLink(45,17,0.350000)
  addLink(45,60,0.350000)
  addLink(45,31,0.600000)
  addLink(45,0,0.475000)
  addLink(45,1,0.225000)
  addLink(45,72,0.350000)
  addLink(45,37,0.225000)
  addLink(45,4,0.225000)
  addLink(45,92,0.225000)
  addLink(45,13,0.225000)
  addLink(46,47,0.350000)
  addLink(46,66,0.225000)
  addLink(46,68,0.225000)
  addLink(46,69,0.225000)
  addLink(47,46,0.350000)
  addLink(47,66,0.475000)
  addLink(47,67,0.350000)
  addLink(47,68,0.475000)
  addLink(47,69,0.475000)
  addLink(48,5,0.225000)
  addLink(48,31,0.225000)
  addLink(49,50,0.350000)
  addLink(49,51,0.350000)
  addLink(49,74,0.350000)
  addLink(49,72,0.350000)
  addLink(49,98,0.350000)
  addLink(49,5,0.350000)
  addLink(49,17,0.350000)
  addLink(50,49,0.350000)
  addLink(50,51,0.350000)
  addLink(51,49,0.350000)
  addLink(51,50,0.350000)
  addLink(52,23,0.350000)
  addLink(52,73,0.225000)
  addLink(53,54,0.350000)
  addLink(53,55,0.350000)
  addLink(53,56,0.350000)
  addLink(53,57,0.350000)
  addLink(54,53,0.350000)
  addLink(54,55,0.350000)
  addLink(54,56,0.350000)
  addLink(54,57,0.350000)
  addLink(55,53,0.350000)
  addLink(55,54,0.350000)
  addLink(55,56,0.350000)
  addLink(55,57,0.350000)
  addLink(56,53,0.350000)
  addLink(56,54,0.350000)
  addLink(56,55,0.350000)
  addLink(56,57,0.350000)
  addLink(57,53,0.350000)
  addLink(57,54,0.350000)
  addLink(57,55,0.350000)
  addLink(57,56,0.350000)
  addLink(58,22,0.225000)
  addLink(59,7,0.225000)
  addLink(59,19,0.225000)
  addLink(59,15,0.225000)
  addLink(60,14,0.350000)
  addLink(60,45,0.350000)
  addLink(60,31,0.475000)
  addLink(60,17,0.225000)
  addLink(60,0,0.350000)
  addLink(60,1,0.225000)
  addLink(60,28,0.225000)
  addLink(60,7,0.225000)
  addLink(60,5,0.225000)
  addLink(61,5,0.350000)
  addLink(61,31,0.225000)
  addLink(61,13,0.225000)
  addLink(63,64,0.350000)
  addLink(63,11,0.350000)
  addLink(63,19,0.225000)
  addLink(64,63,0.350000)
  addLink(64,11,0.350000)
  addLink(64,19,0.225000)
  addLink(65,11,0.225000)
  addLink(66,67,0.350000)
  addLink(66,47,0.475000)
  addLink(66,68,0.475000)
  addLink(66,69,0.475000)
  addLink(66,46,0.225000)
  addLink(67,66,0.350000)
  addLink(67,47,0.350000)
  addLink(67,68,0.350000)
  addLink(67,69,0.350000)
  addLink(68,66,0.475000)
  addLink(68,67,0.350000)
  addLink(68,47,0.475000)
  addLink(68,69,0.475000)
  addLink(68,46,0.225000)
  addLink(69,66,0.475000)
  addLink(69,67,0.350000)
  addLink(69,47,0.475000)
  addLink(69,68,0.475000)
  addLink(69,46,0.225000)
  addLink(70,36,0.350000)
  addLink(70,95,0.225000)
  addLink(70,17,0.225000)
  addLink(71,115,0.225000)
  addLink(72,14,0.475000)
  addLink(72,45,0.350000)
  addLink(72,1,0.475000)
  addLink(72,31,0.475000)
  addLink(72,97,0.475000)
  addLink(72,98,0.600000)
  addLink(72,13,0.475000)
  addLink(72,4,0.225000)
  addLink(72,0,0.350000)
  addLink(72,107,0.350000)
  addLink(72,17,0.475000)
  addLink(72,3,0.225000)
  addLink(72,9,0.225000)
  addLink(72,49,0.350000)
  addLink(72,74,0.350000)
  addLink(72,5,0.350000)
  addLink(73,23,0.350000)
  addLink(73,52,0.225000)
  addLink(74,49,0.350000)
  addLink(74,72,0.350000)
  addLink(74,98,0.350000)
  addLink(74,5,0.350000)
  addLink(74,17,0.350000)
  addLink(75,16,0.350000)
  addLink(75,76,0.225000)
  addLink(75,96,0.225000)
  addLink(75,106,0.225000)
  addLink(76,16,0.350000)
  addLink(76,75,0.225000)
  addLink(76,96,0.225000)
  addLink(77,101,0.475000)
  addLink(78,79,0.350000)
  addLink(78,80,0.475000)
  addLink(79,78,0.350000)
  addLink(79,80,0.350000)
  addLink(80,78,0.475000)
  addLink(80,79,0.350000)
  addLink(81,31,0.475000)
  addLink(81,82,0.475000)
  addLink(81,83,0.475000)
  addLink(81,84,0.475000)
  addLink(81,13,0.350000)
  addLink(81,37,0.350000)
  addLink(81,0,0.350000)
  addLink(81,104,0.350000)
  addLink(81,105,0.350000)
  addLink(82,81,0.475000)
  addLink(82,31,0.475000)
  addLink(82,83,0.475000)
  addLink(82,84,0.475000)
  addLink(82,13,0.350000)
  addLink(82,37,0.350000)
  addLink(82,0,0.350000)
  addLink(82,104,0.350000)
  addLink(82,105,0.350000)
  addLink(83,81,0.475000)
  addLink(83,31,0.475000)
  addLink(83,82,0.475000)
  addLink(83,84,0.475000)
  addLink(83,13,0.350000)
  addLink(83,37,0.350000)
  addLink(83,0,0.350000)
  addLink(83,104,0.350000)
  addLink(83,105,0.350000)
  addLink(84,81,0.475000)
  addLink(84,31,0.475000)
  addLink(84,82,0.475000)
  addLink(84,83,0.475000)
  addLink(84,13,0.350000)
  addLink(84,37,0.350000)
  addLink(84,0,0.350000)
  addLink(84,104,0.350000)
  addLink(84,105,0.350000)
  addLink(86,13,0.350000)
  addLink(86,17,0.225000)
  addLink(86,100,0.225000)
  addLink(86,5,0.225000)
  addLink(87,23,0.350000)
  addLink(87,34,0.350000)
  addLink(88,89,0.350000)
  addLink(89,88,0.350000)
  addLink(90,15,0.225000)
  addLink(92,45,0.225000)
  addLink(92,13,0.225000)
  addLink(93,109,0.225000)
  addLink(95,70,0.225000)
  addLink(95,36,0.225000)
  addLink(95,17,0.225000)
  addLink(96,75,0.225000)
  addLink(96,16,0.350000)
  addLink(96,76,0.225000)
  addLink(97,1,0.475000)
  addLink(97,72,0.475000)
  addLink(97,31,0.350000)
  addLink(97,107,0.350000)
  addLink(97,17,0.225000)
  addLink(97,3,0.225000)
  addLink(97,9,0.225000)
  addLink(97,0,0.225000)
  addLink(98,72,0.600000)
  addLink(98,13,0.600000)
  addLink(98,49,0.350000)
  addLink(98,74,0.350000)
  addLink(98,5,0.350000)
  addLink(98,17,0.350000)
  addLink(100,86,0.225000)
  addLink(101,77,0.475000)
  addLink(102,103,0.350000)
  addLink(103,102,0.350000)
  addLink(104,81,0.350000)
  addLink(104,82,0.350000)
  addLink(104,31,0.350000)
  addLink(104,83,0.350000)
  addLink(104,84,0.350000)
  addLink(104,105,0.350000)
  addLink(104,0,0.225000)
  addLink(104,13,0.225000)
  addLink(104,37,0.225000)
  addLink(105,81,0.350000)
  addLink(105,82,0.350000)
  addLink(105,31,0.350000)
  addLink(105,83,0.350000)
  addLink(105,84,0.350000)
  addLink(105,104,0.350000)
  addLink(105,0,0.225000)
  addLink(105,13,0.225000)
  addLink(105,37,0.225000)
  addLink(106,75,0.225000)
  addLink(107,12,0.225000)
  addLink(107,26,0.225000)
  addLink(107,17,0.225000)
  addLink(107,72,0.350000)
  addLink(107,3,0.225000)
  addLink(107,97,0.350000)
  addLink(107,1,0.350000)
  addLink(107,9,0.225000)
  addLink(107,31,0.225000)
  addLink(107,0,0.225000)
  addLink(108,13,0.225000)
  addLink(109,110,0.225000)
  addLink(109,93,0.225000)
  addLink(110,109,0.225000)
  addLink(111,112,0.225000)
  addLink(111,34,0.350000)
  addLink(112,111,0.225000)
  addLink(112,34,0.225000)
  addLink(114,19,0.225000)
  addLink(115,71,0.225000)


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