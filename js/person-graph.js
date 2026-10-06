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
  addNode(8,"Titouan Carette", "person")
  addNode(9,"Chen Zhao", "person")
  addNode(10,"Cole Comfort", "person")
  addNode(11,"Marc de Visme", "person")
  addNode(12,"Simon Perdrix", "person")
  addNode(13,"Dominic Horsman", "person")
  addNode(14,"Aleks Kissinger", "person")
  addNode(15,"Quanlong Wang", "person")
  addNode(16,"Miriam Backens", "person")
  addNode(17,"Alex Townsend-Teague", "person")
  addNode(18,"Richie Yeung", "person")
  addNode(19,"Shahn Majid", "person")
  addNode(20,"Renaud Vilmart", "person")
  addNode(21,"Kostia Chardonnet", "person")
  addNode(22,"Beno\^it Valiron", "person")
  addNode(23,"Alexander Cowtan", "person")
  addNode(24,"Korbinian Staudacher", "person")
  addNode(25,"Mark Koch", "person")
  addNode(26,"Agustin Borgna", "person")
  addNode(27,"Niel de Beaudrap", "person")
  addNode(28,"Margarita Veshchezerova", "person")
  addNode(29,"Robert Booth", "person")
  addNode(30,"Tobias Stollenwerk", "person")
  addNode(31,"Stuart Hadfield", "person")
  addNode(32,"Lia Yeh", "person")
  addNode(33,"Tom Peham", "person")
  addNode(34,"Lukas Burgholzer", "person")
  addNode(35,"Robert Wille", "person")
  addNode(36,"Tommy McElvanney", "person")
  addNode(37,"David Winderl", "person")
  addNode(38,"Stefano Gogioso", "person")
  addNode(39,"Craig Gidney", "person")
  addNode(40,"Adrian Lehmann", "person")
  addNode(41,"Ben Caldwell", "person")
  addNode(42,"Robert Rand", "person")
  addNode(43,"Tuomas Laakkonen", "person")
  addNode(44,"Julien Codsi", "person")
  addNode(45,"Alexandru Paler", "person")
  addNode(46,"Razin Shaikh", "person")
  addNode(47,"Daniel Litinski", "person")
  addNode(48,"Naomi Nickerson", "person")
  addNode(49,"Patrick Roy", "person")
  addNode(50,"Andrey Boris Khesin", "person")
  addNode(51,"Jonathan Lu", "person")
  addNode(52,"Peter Shor", "person")
  addNode(53,"Tobias Guggemos", "person")
  addNode(54,"Christian Ufrecht", "person")
  addNode(55,"Maniraman Periyasamy", "person")
  addNode(56,"Daniel Scherer", "person")
  addNode(57,"Axel Plinge", "person")
  addNode(58,"Christopher Mutschler", "person")
  addNode(59,"Simon Burton", "person")
  addNode(60,"Thomas Perez", "person")
  addNode(61,"Boldizsár Poór", "person")
  addNode(62,"Neil Ross", "person")
  addNode(63,"Leo Colisson", "person")
  addNode(64,"Alexandre Clement", "person")
  addNode(65,"Noe Delorme", "person")
  addNode(66,"Nicolas Heurtel", "person")
  addNode(67,"Hector Bombin", "person")
  addNode(68,"Chris Dawson", "person")
  addNode(69,"Fernando Pastawski", "person")
  addNode(70,"Sam Roberts", "person")
  addNode(71,"Qunsheng Huang", "person")
  addNode(72,"Song Cheng", "person")
  addNode(73,"Boldizsar Poor", "person")
  addNode(74,"Karl Fürlinger", "person")
  addNode(75,"Sarah Meng Li", "person")
  addNode(76,"Julio Magdalena de la Fuente", "person")
  addNode(77,"Markus Kesselring", "person")
  addNode(78,"Kwok Ho Wan", "person")
  addNode(79,"Alejandro Villoria", "person")
  addNode(80,"Henning Basold", "person")
  addNode(81,"Alfons Laarman", "person")
  addNode(82,"Selma Dundar-Coecke", "person")
  addNode(83,"Caterina Puca", "person")
  addNode(84,"Muhammad Hamza Waseem", "person")
  addNode(85,"Thomas Cervoni", "person")
  addNode(86,"Jonathan Ruhman", "person")
  addNode(87,"Matthew Sutcliffe", "person")
  addNode(88,"Ludwig Schmid", "person")
  addNode(89,"Grace Sommers", "person")
  addNode(90,"David Huse", "person")
  addNode(91,"Piotr Mitosek", "person")
  addNode(92,"Pavel Kos", "person")
  addNode(93,"Dichuan Gao", "person")
  addNode(94,"Nathanan Tantivasadakarn", "person")
  addNode(95,"Vivien Vandaele", "person")
  addNode(96,"Arianne Meijer-van de Griend", "person")
  addNode(97,"Jens Eisert", "person")
  addNode(98,"William Cashman", "person")
  addNode(99,"Benjamin Rodatz", "person")
  addNode(100,"Liam Hurwitz", "person")
  addNode(101,"Wira Azmoon Ahmad", "person")
  addNode(102,"Zhenghao Zhong", "person")
  addNode(103,"Tobias Fischbach", "person")
  addNode(104,"Pierre Talbot", "person")
  addNode(105,"Peter Sigrist", "person")
  addNode(106,"Ferdi Tomassini", "person")
  addNode(107,"Andreas Bauer", "person")
  addNode(108,"Mateusz Kupper", "person")
  addNode(109,"Fedor Kuyanov", "person")
  addNode(110,"Da-Chuan Lu", "person")
  addNode(111,"Yi-Zhuang You", "person")
  addNode(112,"Laura Herzog", "person")
  addNode(113,"Aleksander Kubica", "person")
  addNode(114,"Sascha Zakaib-Bernier", "person")
  addNode(115,"Harry Stoltz", "person")
  addNode(116,"Yi-Yu Lin", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.225000)
  addLink(0,3,0.225000)
  addLink(0,13,0.225000)
  addLink(0,14,0.475000)
  addLink(0,15,0.600000)
  addLink(0,61,0.350000)
  addLink(0,46,0.475000)
  addLink(0,32,0.600000)
  addLink(0,18,0.225000)
  addLink(0,82,0.350000)
  addLink(0,83,0.350000)
  addLink(0,84,0.350000)
  addLink(0,85,0.350000)
  addLink(0,38,0.350000)
  addLink(0,4,0.225000)
  addLink(0,73,0.350000)
  addLink(0,106,0.225000)
  addLink(0,105,0.225000)
  addLink(0,10,0.225000)
  addLink(0,108,0.225000)
  addLink(0,98,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.225000)
  addLink(1,3,0.475000)
  addLink(1,18,0.350000)
  addLink(1,46,0.225000)
  addLink(1,61,0.225000)
  addLink(1,32,0.475000)
  addLink(1,15,0.225000)
  addLink(1,73,0.475000)
  addLink(1,98,0.475000)
  addLink(1,108,0.350000)
  addLink(1,10,0.350000)
  addLink(2,0,0.225000)
  addLink(2,1,0.225000)
  addLink(2,3,0.225000)
  addLink(2,17,0.225000)
  addLink(2,43,0.350000)
  addLink(2,5,0.350000)
  addLink(2,18,0.225000)
  addLink(3,0,0.225000)
  addLink(3,1,0.475000)
  addLink(3,2,0.225000)
  addLink(3,18,0.350000)
  addLink(3,108,0.225000)
  addLink(3,73,0.225000)
  addLink(3,98,0.225000)
  addLink(4,5,0.350000)
  addLink(4,6,0.350000)
  addLink(4,27,0.225000)
  addLink(4,15,0.225000)
  addLink(4,46,0.225000)
  addLink(4,32,0.225000)
  addLink(4,73,0.225000)
  addLink(4,0,0.225000)
  addLink(5,4,0.350000)
  addLink(5,6,0.225000)
  addLink(5,16,0.225000)
  addLink(5,14,0.600000)
  addLink(5,7,0.225000)
  addLink(5,20,0.225000)
  addLink(5,27,0.225000)
  addLink(5,32,0.600000)
  addLink(5,43,0.475000)
  addLink(5,2,0.350000)
  addLink(5,44,0.225000)
  addLink(5,62,0.350000)
  addLink(5,61,0.225000)
  addLink(5,29,0.225000)
  addLink(5,8,0.225000)
  addLink(5,49,0.225000)
  addLink(5,18,0.350000)
  addLink(5,50,0.225000)
  addLink(5,75,0.225000)
  addLink(5,73,0.225000)
  addLink(5,99,0.225000)
  addLink(5,87,0.225000)
  addLink(6,4,0.350000)
  addLink(6,5,0.225000)
  addLink(7,16,0.225000)
  addLink(7,14,0.225000)
  addLink(7,5,0.225000)
  addLink(8,11,0.225000)
  addLink(8,12,0.350000)
  addLink(8,29,0.600000)
  addLink(8,20,0.475000)
  addLink(8,60,0.225000)
  addLink(8,61,0.225000)
  addLink(8,5,0.225000)
  addLink(8,32,0.225000)
  addLink(8,10,0.350000)
  addLink(10,14,0.225000)
  addLink(10,29,0.350000)
  addLink(10,8,0.350000)
  addLink(10,1,0.350000)
  addLink(10,73,0.225000)
  addLink(10,32,0.225000)
  addLink(10,108,0.225000)
  addLink(10,98,0.225000)
  addLink(10,0,0.225000)
  addLink(11,8,0.225000)
  addLink(11,12,0.225000)
  addLink(11,21,0.225000)
  addLink(11,20,0.350000)
  addLink(12,8,0.350000)
  addLink(12,11,0.225000)
  addLink(12,26,0.225000)
  addLink(12,22,0.225000)
  addLink(12,28,0.225000)
  addLink(12,64,0.350000)
  addLink(12,65,0.350000)
  addLink(12,20,0.225000)
  addLink(12,66,0.225000)
  addLink(12,16,0.225000)
  addLink(13,0,0.225000)
  addLink(13,14,0.225000)
  addLink(13,15,0.225000)
  addLink(13,108,0.225000)
  addLink(13,27,0.225000)
  addLink(14,0,0.475000)
  addLink(14,13,0.225000)
  addLink(14,15,0.225000)
  addLink(14,16,0.225000)
  addLink(14,7,0.225000)
  addLink(14,5,0.600000)
  addLink(14,10,0.225000)
  addLink(14,20,0.225000)
  addLink(14,27,0.225000)
  addLink(14,82,0.350000)
  addLink(14,32,0.350000)
  addLink(14,83,0.350000)
  addLink(14,84,0.350000)
  addLink(14,85,0.350000)
  addLink(14,38,0.350000)
  addLink(14,18,0.225000)
  addLink(14,43,0.225000)
  addLink(14,87,0.350000)
  addLink(14,62,0.225000)
  addLink(14,99,0.600000)
  addLink(14,73,0.475000)
  addLink(14,106,0.225000)
  addLink(14,105,0.225000)
  addLink(14,109,0.225000)
  addLink(14,93,0.225000)
  addLink(14,46,0.225000)
  addLink(15,0,0.600000)
  addLink(15,13,0.225000)
  addLink(15,14,0.225000)
  addLink(15,18,0.600000)
  addLink(15,25,0.350000)
  addLink(15,46,0.600000)
  addLink(15,61,0.350000)
  addLink(15,32,0.475000)
  addLink(15,1,0.225000)
  addLink(15,73,0.475000)
  addLink(15,4,0.225000)
  addLink(16,14,0.225000)
  addLink(16,7,0.225000)
  addLink(16,5,0.225000)
  addLink(16,36,0.350000)
  addLink(16,60,0.225000)
  addLink(16,91,0.225000)
  addLink(16,12,0.225000)
  addLink(17,2,0.225000)
  addLink(17,76,0.350000)
  addLink(17,77,0.350000)
  addLink(17,97,0.350000)
  addLink(18,3,0.350000)
  addLink(18,1,0.350000)
  addLink(18,15,0.600000)
  addLink(18,25,0.350000)
  addLink(18,38,0.225000)
  addLink(18,46,0.350000)
  addLink(18,61,0.225000)
  addLink(18,32,0.350000)
  addLink(18,0,0.225000)
  addLink(18,5,0.350000)
  addLink(18,43,0.225000)
  addLink(18,14,0.225000)
  addLink(18,2,0.225000)
  addLink(18,71,0.225000)
  addLink(18,37,0.225000)
  addLink(18,96,0.225000)
  addLink(18,87,0.225000)
  addLink(18,108,0.225000)
  addLink(18,73,0.350000)
  addLink(18,98,0.225000)
  addLink(18,50,0.225000)
  addLink(18,75,0.225000)
  addLink(18,99,0.225000)
  addLink(19,23,0.225000)
  addLink(20,21,0.350000)
  addLink(20,22,0.225000)
  addLink(20,14,0.225000)
  addLink(20,5,0.225000)
  addLink(20,11,0.350000)
  addLink(20,8,0.475000)
  addLink(20,60,0.225000)
  addLink(20,64,0.225000)
  addLink(20,65,0.225000)
  addLink(20,12,0.225000)
  addLink(20,115,0.225000)
  addLink(21,22,0.225000)
  addLink(21,20,0.350000)
  addLink(21,11,0.225000)
  addLink(22,21,0.225000)
  addLink(22,20,0.225000)
  addLink(22,26,0.225000)
  addLink(22,12,0.225000)
  addLink(23,19,0.225000)
  addLink(23,59,0.225000)
  addLink(24,53,0.350000)
  addLink(24,74,0.350000)
  addLink(24,88,0.350000)
  addLink(24,35,0.350000)
  addLink(25,15,0.350000)
  addLink(25,18,0.350000)
  addLink(26,12,0.225000)
  addLink(26,22,0.225000)
  addLink(27,14,0.225000)
  addLink(27,5,0.225000)
  addLink(27,4,0.225000)
  addLink(27,108,0.225000)
  addLink(27,13,0.225000)
  addLink(28,12,0.225000)
  addLink(29,8,0.600000)
  addLink(29,61,0.225000)
  addLink(29,5,0.225000)
  addLink(29,32,0.225000)
  addLink(29,10,0.350000)
  addLink(30,31,0.350000)
  addLink(31,30,0.350000)
  addLink(32,5,0.600000)
  addLink(32,61,0.475000)
  addLink(32,15,0.475000)
  addLink(32,46,0.600000)
  addLink(32,18,0.350000)
  addLink(32,0,0.600000)
  addLink(32,62,0.225000)
  addLink(32,1,0.475000)
  addLink(32,29,0.225000)
  addLink(32,8,0.225000)
  addLink(32,49,0.225000)
  addLink(32,82,0.475000)
  addLink(32,83,0.475000)
  addLink(32,84,0.475000)
  addLink(32,85,0.475000)
  addLink(32,14,0.350000)
  addLink(32,38,0.475000)
  addLink(32,73,0.475000)
  addLink(32,98,0.350000)
  addLink(32,105,0.350000)
  addLink(32,106,0.350000)
  addLink(32,4,0.225000)
  addLink(32,10,0.225000)
  addLink(32,108,0.225000)
  addLink(33,34,0.600000)
  addLink(33,35,0.600000)
  addLink(34,33,0.600000)
  addLink(34,35,0.600000)
  addLink(35,33,0.600000)
  addLink(35,34,0.600000)
  addLink(35,24,0.350000)
  addLink(35,88,0.350000)
  addLink(35,112,0.350000)
  addLink(35,113,0.225000)
  addLink(36,16,0.350000)
  addLink(37,71,0.350000)
  addLink(37,96,0.225000)
  addLink(37,18,0.225000)
  addLink(38,18,0.225000)
  addLink(38,82,0.350000)
  addLink(38,32,0.475000)
  addLink(38,83,0.350000)
  addLink(38,84,0.350000)
  addLink(38,85,0.350000)
  addLink(38,14,0.350000)
  addLink(38,0,0.350000)
  addLink(38,46,0.225000)
  addLink(38,106,0.225000)
  addLink(38,105,0.225000)
  addLink(40,41,0.350000)
  addLink(40,42,0.350000)
  addLink(41,40,0.350000)
  addLink(41,42,0.350000)
  addLink(42,40,0.350000)
  addLink(42,41,0.350000)
  addLink(43,2,0.350000)
  addLink(43,5,0.475000)
  addLink(43,18,0.225000)
  addLink(43,14,0.225000)
  addLink(43,44,0.225000)
  addLink(44,5,0.225000)
  addLink(44,43,0.225000)
  addLink(46,15,0.600000)
  addLink(46,18,0.350000)
  addLink(46,61,0.350000)
  addLink(46,32,0.600000)
  addLink(46,0,0.475000)
  addLink(46,1,0.225000)
  addLink(46,73,0.350000)
  addLink(46,38,0.225000)
  addLink(46,4,0.225000)
  addLink(46,93,0.225000)
  addLink(46,14,0.225000)
  addLink(47,48,0.350000)
  addLink(47,67,0.225000)
  addLink(47,69,0.225000)
  addLink(47,70,0.225000)
  addLink(48,47,0.350000)
  addLink(48,67,0.475000)
  addLink(48,68,0.350000)
  addLink(48,69,0.475000)
  addLink(48,70,0.475000)
  addLink(49,5,0.225000)
  addLink(49,32,0.225000)
  addLink(50,51,0.350000)
  addLink(50,52,0.350000)
  addLink(50,75,0.225000)
  addLink(50,73,0.225000)
  addLink(50,99,0.225000)
  addLink(50,5,0.225000)
  addLink(50,18,0.225000)
  addLink(51,50,0.350000)
  addLink(51,52,0.350000)
  addLink(52,50,0.350000)
  addLink(52,51,0.350000)
  addLink(53,24,0.350000)
  addLink(53,74,0.225000)
  addLink(54,55,0.350000)
  addLink(54,56,0.350000)
  addLink(54,57,0.350000)
  addLink(54,58,0.350000)
  addLink(55,54,0.350000)
  addLink(55,56,0.350000)
  addLink(55,57,0.350000)
  addLink(55,58,0.350000)
  addLink(56,54,0.350000)
  addLink(56,55,0.350000)
  addLink(56,57,0.350000)
  addLink(56,58,0.350000)
  addLink(57,54,0.350000)
  addLink(57,55,0.350000)
  addLink(57,56,0.350000)
  addLink(57,58,0.350000)
  addLink(58,54,0.350000)
  addLink(58,55,0.350000)
  addLink(58,56,0.350000)
  addLink(58,57,0.350000)
  addLink(59,23,0.225000)
  addLink(60,8,0.225000)
  addLink(60,20,0.225000)
  addLink(60,16,0.225000)
  addLink(61,15,0.350000)
  addLink(61,46,0.350000)
  addLink(61,32,0.475000)
  addLink(61,18,0.225000)
  addLink(61,0,0.350000)
  addLink(61,1,0.225000)
  addLink(61,29,0.225000)
  addLink(61,8,0.225000)
  addLink(61,5,0.225000)
  addLink(62,5,0.350000)
  addLink(62,32,0.225000)
  addLink(62,14,0.225000)
  addLink(64,65,0.350000)
  addLink(64,12,0.350000)
  addLink(64,20,0.225000)
  addLink(65,64,0.350000)
  addLink(65,12,0.350000)
  addLink(65,20,0.225000)
  addLink(66,12,0.225000)
  addLink(67,68,0.350000)
  addLink(67,48,0.475000)
  addLink(67,69,0.475000)
  addLink(67,70,0.475000)
  addLink(67,47,0.225000)
  addLink(68,67,0.350000)
  addLink(68,48,0.350000)
  addLink(68,69,0.350000)
  addLink(68,70,0.350000)
  addLink(69,67,0.475000)
  addLink(69,68,0.350000)
  addLink(69,48,0.475000)
  addLink(69,70,0.475000)
  addLink(69,47,0.225000)
  addLink(70,67,0.475000)
  addLink(70,68,0.350000)
  addLink(70,48,0.475000)
  addLink(70,69,0.475000)
  addLink(70,47,0.225000)
  addLink(71,37,0.350000)
  addLink(71,96,0.225000)
  addLink(71,18,0.225000)
  addLink(72,116,0.225000)
  addLink(73,15,0.475000)
  addLink(73,46,0.350000)
  addLink(73,1,0.475000)
  addLink(73,32,0.475000)
  addLink(73,98,0.475000)
  addLink(73,99,0.600000)
  addLink(73,14,0.475000)
  addLink(73,4,0.225000)
  addLink(73,0,0.350000)
  addLink(73,108,0.350000)
  addLink(73,18,0.350000)
  addLink(73,3,0.225000)
  addLink(73,10,0.225000)
  addLink(73,50,0.225000)
  addLink(73,75,0.225000)
  addLink(73,5,0.225000)
  addLink(74,24,0.350000)
  addLink(74,53,0.225000)
  addLink(75,50,0.225000)
  addLink(75,73,0.225000)
  addLink(75,99,0.225000)
  addLink(75,5,0.225000)
  addLink(75,18,0.225000)
  addLink(76,17,0.350000)
  addLink(76,77,0.225000)
  addLink(76,97,0.225000)
  addLink(76,107,0.225000)
  addLink(77,17,0.350000)
  addLink(77,76,0.225000)
  addLink(77,97,0.225000)
  addLink(78,102,0.475000)
  addLink(79,80,0.350000)
  addLink(79,81,0.475000)
  addLink(80,79,0.350000)
  addLink(80,81,0.350000)
  addLink(81,79,0.475000)
  addLink(81,80,0.350000)
  addLink(82,32,0.475000)
  addLink(82,83,0.475000)
  addLink(82,84,0.475000)
  addLink(82,85,0.475000)
  addLink(82,14,0.350000)
  addLink(82,38,0.350000)
  addLink(82,0,0.350000)
  addLink(82,105,0.350000)
  addLink(82,106,0.350000)
  addLink(83,82,0.475000)
  addLink(83,32,0.475000)
  addLink(83,84,0.475000)
  addLink(83,85,0.475000)
  addLink(83,14,0.350000)
  addLink(83,38,0.350000)
  addLink(83,0,0.350000)
  addLink(83,105,0.350000)
  addLink(83,106,0.350000)
  addLink(84,82,0.475000)
  addLink(84,32,0.475000)
  addLink(84,83,0.475000)
  addLink(84,85,0.475000)
  addLink(84,14,0.350000)
  addLink(84,38,0.350000)
  addLink(84,0,0.350000)
  addLink(84,105,0.350000)
  addLink(84,106,0.350000)
  addLink(85,82,0.475000)
  addLink(85,32,0.475000)
  addLink(85,83,0.475000)
  addLink(85,84,0.475000)
  addLink(85,14,0.350000)
  addLink(85,38,0.350000)
  addLink(85,0,0.350000)
  addLink(85,105,0.350000)
  addLink(85,106,0.350000)
  addLink(87,14,0.350000)
  addLink(87,18,0.225000)
  addLink(87,101,0.225000)
  addLink(87,5,0.225000)
  addLink(88,24,0.350000)
  addLink(88,35,0.350000)
  addLink(89,90,0.350000)
  addLink(90,89,0.350000)
  addLink(91,16,0.225000)
  addLink(93,46,0.225000)
  addLink(93,14,0.225000)
  addLink(94,110,0.225000)
  addLink(96,71,0.225000)
  addLink(96,37,0.225000)
  addLink(96,18,0.225000)
  addLink(97,76,0.225000)
  addLink(97,17,0.350000)
  addLink(97,77,0.225000)
  addLink(98,1,0.475000)
  addLink(98,73,0.475000)
  addLink(98,32,0.350000)
  addLink(98,108,0.350000)
  addLink(98,18,0.225000)
  addLink(98,3,0.225000)
  addLink(98,10,0.225000)
  addLink(98,0,0.225000)
  addLink(99,73,0.600000)
  addLink(99,14,0.600000)
  addLink(99,50,0.225000)
  addLink(99,75,0.225000)
  addLink(99,5,0.225000)
  addLink(99,18,0.225000)
  addLink(101,87,0.225000)
  addLink(102,78,0.475000)
  addLink(103,104,0.350000)
  addLink(104,103,0.350000)
  addLink(105,82,0.350000)
  addLink(105,83,0.350000)
  addLink(105,32,0.350000)
  addLink(105,84,0.350000)
  addLink(105,85,0.350000)
  addLink(105,106,0.350000)
  addLink(105,0,0.225000)
  addLink(105,14,0.225000)
  addLink(105,38,0.225000)
  addLink(106,82,0.350000)
  addLink(106,83,0.350000)
  addLink(106,32,0.350000)
  addLink(106,84,0.350000)
  addLink(106,85,0.350000)
  addLink(106,105,0.350000)
  addLink(106,0,0.225000)
  addLink(106,14,0.225000)
  addLink(106,38,0.225000)
  addLink(107,76,0.225000)
  addLink(108,13,0.225000)
  addLink(108,27,0.225000)
  addLink(108,18,0.225000)
  addLink(108,73,0.350000)
  addLink(108,3,0.225000)
  addLink(108,98,0.350000)
  addLink(108,1,0.350000)
  addLink(108,10,0.225000)
  addLink(108,32,0.225000)
  addLink(108,0,0.225000)
  addLink(109,14,0.225000)
  addLink(110,111,0.225000)
  addLink(110,94,0.225000)
  addLink(111,110,0.225000)
  addLink(112,113,0.225000)
  addLink(112,35,0.350000)
  addLink(113,112,0.225000)
  addLink(113,35,0.225000)
  addLink(115,20,0.225000)
  addLink(116,72,0.225000)


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