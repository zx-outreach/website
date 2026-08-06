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
  addNode(9,"Hector Miller-Bakewell", "person")
  addNode(10,"Jonathan Gorard", "person")
  addNode(11,"Manojna Namuduri", "person")
  addNode(12,"Xerxes Arsiwalla", "person")
  addNode(13,"Chen Zhao", "person")
  addNode(14,"Cole Comfort", "person")
  addNode(15,"Marc de Visme", "person")
  addNode(16,"Simon Perdrix", "person")
  addNode(17,"Dominic Horsman", "person")
  addNode(18,"Aleks Kissinger", "person")
  addNode(19,"Quanlong Wang", "person")
  addNode(20,"Miriam Backens", "person")
  addNode(21,"Alex Townsend-Teague", "person")
  addNode(22,"Richie Yeung", "person")
  addNode(23,"Shahn Majid", "person")
  addNode(24,"Renaud Vilmart", "person")
  addNode(25,"Kostia Chardonnet", "person")
  addNode(26,"Beno\^it Valiron", "person")
  addNode(27,"Alexander Cowtan", "person")
  addNode(28,"Korbinian Staudacher", "person")
  addNode(29,"Mark Koch", "person")
  addNode(30,"Agustin Borgna", "person")
  addNode(31,"Niel de Beaudrap", "person")
  addNode(32,"Margarita Veshchezerova", "person")
  addNode(33,"Robert Booth", "person")
  addNode(34,"Tobias Stollenwerk", "person")
  addNode(35,"Stuart Hadfield", "person")
  addNode(36,"Lia Yeh", "person")
  addNode(37,"Tom Peham", "person")
  addNode(38,"Lukas Burgholzer", "person")
  addNode(39,"Robert Wille", "person")
  addNode(40,"Tommy McElvanney", "person")
  addNode(41,"David Winderl", "person")
  addNode(42,"Stefano Gogioso", "person")
  addNode(43,"Craig Gidney", "person")
  addNode(44,"Adrian Lehmann", "person")
  addNode(45,"Ben Caldwell", "person")
  addNode(46,"Robert Rand", "person")
  addNode(47,"Tuomas Laakkonen", "person")
  addNode(48,"Julien Codsi", "person")
  addNode(49,"Alexandru Paler", "person")
  addNode(50,"Razin Shaikh", "person")
  addNode(51,"Daniel Litinski", "person")
  addNode(52,"Naomi Nickerson", "person")
  addNode(53,"Patrick Roy", "person")
  addNode(54,"Andrey Boris Khesin", "person")
  addNode(55,"Jonathan Lu", "person")
  addNode(56,"Peter Shor", "person")
  addNode(57,"Tobias Guggemos", "person")
  addNode(58,"Christian Ufrecht", "person")
  addNode(59,"Maniraman Periyasamy", "person")
  addNode(60,"Daniel Scherer", "person")
  addNode(61,"Axel Plinge", "person")
  addNode(62,"Christopher Mutschler", "person")
  addNode(63,"Simon Burton", "person")
  addNode(64,"Thomas Perez", "person")
  addNode(65,"Boldizsár Poór", "person")
  addNode(66,"Neil Ross", "person")
  addNode(67,"Leo Colisson", "person")
  addNode(68,"Alexandre Clement", "person")
  addNode(69,"Noe Delorme", "person")
  addNode(70,"Nicolas Heurtel", "person")
  addNode(71,"Hector Bombin", "person")
  addNode(72,"Chris Dawson", "person")
  addNode(73,"Fernando Pastawski", "person")
  addNode(74,"Sam Roberts", "person")
  addNode(75,"Qunsheng Huang", "person")
  addNode(76,"Boldizsar Poor", "person")
  addNode(77,"Karl Fürlinger", "person")
  addNode(78,"Sarah Meng Li", "person")
  addNode(79,"Julio Magdalena de la Fuente", "person")
  addNode(80,"Markus Kesselring", "person")
  addNode(81,"Kwok Ho Wan", "person")
  addNode(82,"Alejandro Villoria", "person")
  addNode(83,"Henning Basold", "person")
  addNode(84,"Alfons Laarman", "person")
  addNode(85,"Selma Dundar-Coecke", "person")
  addNode(86,"Caterina Puca", "person")
  addNode(87,"Muhammad Hamza Waseem", "person")
  addNode(88,"Thomas Cervoni", "person")
  addNode(89,"Jonathan Ruhman", "person")
  addNode(90,"Matthew Sutcliffe", "person")
  addNode(91,"Ludwig Schmid", "person")
  addNode(92,"Grace Sommers", "person")
  addNode(93,"David Huse", "person")
  addNode(94,"Piotr Mitosek", "person")
  addNode(95,"Pavel Kos", "person")
  addNode(96,"Dichuan Gao", "person")
  addNode(97,"Nathanan Tantivasadakarn", "person")
  addNode(98,"Vivien Vandaele", "person")
  addNode(99,"Arianne Meijer-van de Griend", "person")
  addNode(100,"Jens Eisert", "person")
  addNode(101,"William Cashman", "person")
  addNode(102,"Benjamin Rodatz", "person")
  addNode(103,"Liam Hurwitz", "person")
  addNode(104,"Wira Azmoon Ahmad", "person")
  addNode(105,"Zhenghao Zhong", "person")
  addNode(106,"Tobias Fischbach", "person")
  addNode(107,"Pierre Talbot", "person")
  addNode(108,"Peter Sigrist", "person")
  addNode(109,"Ferdi Tomassini", "person")
  addNode(110,"Andreas Bauer", "person")
  addNode(111,"Mateusz Kupper", "person")
  addNode(112,"Fedor Kuyanov", "person")
  addNode(113,"Da-Chuan Lu", "person")
  addNode(114,"Yi-Zhuang You", "person")
  addNode(115,"Laura Herzog", "person")
  addNode(116,"Aleksander Kubica", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.225000)
  addLink(0,3,0.225000)
  addLink(0,17,0.225000)
  addLink(0,18,0.475000)
  addLink(0,19,0.600000)
  addLink(0,65,0.350000)
  addLink(0,50,0.475000)
  addLink(0,36,0.600000)
  addLink(0,22,0.225000)
  addLink(0,85,0.350000)
  addLink(0,86,0.350000)
  addLink(0,87,0.350000)
  addLink(0,88,0.350000)
  addLink(0,42,0.350000)
  addLink(0,4,0.225000)
  addLink(0,76,0.350000)
  addLink(0,109,0.225000)
  addLink(0,108,0.225000)
  addLink(0,14,0.225000)
  addLink(0,111,0.225000)
  addLink(0,101,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.225000)
  addLink(1,3,0.475000)
  addLink(1,22,0.350000)
  addLink(1,50,0.225000)
  addLink(1,65,0.225000)
  addLink(1,36,0.475000)
  addLink(1,19,0.225000)
  addLink(1,76,0.475000)
  addLink(1,101,0.475000)
  addLink(1,111,0.350000)
  addLink(1,14,0.350000)
  addLink(2,0,0.225000)
  addLink(2,1,0.225000)
  addLink(2,3,0.225000)
  addLink(2,21,0.225000)
  addLink(2,47,0.350000)
  addLink(2,5,0.350000)
  addLink(2,22,0.225000)
  addLink(3,0,0.225000)
  addLink(3,1,0.475000)
  addLink(3,2,0.225000)
  addLink(3,22,0.350000)
  addLink(3,111,0.225000)
  addLink(3,76,0.225000)
  addLink(3,101,0.225000)
  addLink(4,5,0.350000)
  addLink(4,6,0.350000)
  addLink(4,31,0.225000)
  addLink(4,19,0.225000)
  addLink(4,50,0.225000)
  addLink(4,36,0.225000)
  addLink(4,76,0.225000)
  addLink(4,0,0.225000)
  addLink(5,4,0.350000)
  addLink(5,6,0.225000)
  addLink(5,20,0.225000)
  addLink(5,18,0.600000)
  addLink(5,9,0.225000)
  addLink(5,24,0.225000)
  addLink(5,31,0.225000)
  addLink(5,36,0.600000)
  addLink(5,47,0.475000)
  addLink(5,2,0.350000)
  addLink(5,48,0.225000)
  addLink(5,66,0.350000)
  addLink(5,65,0.225000)
  addLink(5,33,0.225000)
  addLink(5,7,0.225000)
  addLink(5,53,0.225000)
  addLink(5,22,0.350000)
  addLink(5,54,0.225000)
  addLink(5,78,0.225000)
  addLink(5,76,0.225000)
  addLink(5,102,0.225000)
  addLink(6,4,0.350000)
  addLink(6,5,0.225000)
  addLink(7,8,0.225000)
  addLink(7,15,0.225000)
  addLink(7,16,0.350000)
  addLink(7,33,0.600000)
  addLink(7,24,0.475000)
  addLink(7,64,0.225000)
  addLink(7,65,0.225000)
  addLink(7,5,0.225000)
  addLink(7,36,0.225000)
  addLink(7,14,0.350000)
  addLink(8,7,0.225000)
  addLink(8,16,0.225000)
  addLink(8,32,0.225000)
  addLink(9,20,0.225000)
  addLink(9,18,0.225000)
  addLink(9,5,0.225000)
  addLink(10,11,0.350000)
  addLink(10,12,0.350000)
  addLink(11,10,0.350000)
  addLink(11,12,0.350000)
  addLink(12,10,0.350000)
  addLink(12,11,0.350000)
  addLink(14,18,0.225000)
  addLink(14,33,0.350000)
  addLink(14,7,0.350000)
  addLink(14,1,0.350000)
  addLink(14,76,0.225000)
  addLink(14,36,0.225000)
  addLink(14,111,0.225000)
  addLink(14,101,0.225000)
  addLink(14,0,0.225000)
  addLink(15,7,0.225000)
  addLink(15,16,0.225000)
  addLink(15,25,0.225000)
  addLink(15,24,0.350000)
  addLink(16,7,0.350000)
  addLink(16,15,0.225000)
  addLink(16,30,0.225000)
  addLink(16,26,0.225000)
  addLink(16,8,0.225000)
  addLink(16,32,0.225000)
  addLink(16,68,0.350000)
  addLink(16,69,0.350000)
  addLink(16,24,0.225000)
  addLink(16,70,0.225000)
  addLink(17,0,0.225000)
  addLink(17,18,0.225000)
  addLink(17,19,0.225000)
  addLink(17,111,0.225000)
  addLink(17,31,0.225000)
  addLink(18,0,0.475000)
  addLink(18,17,0.225000)
  addLink(18,19,0.225000)
  addLink(18,20,0.225000)
  addLink(18,9,0.225000)
  addLink(18,5,0.600000)
  addLink(18,14,0.225000)
  addLink(18,24,0.225000)
  addLink(18,31,0.225000)
  addLink(18,85,0.350000)
  addLink(18,36,0.350000)
  addLink(18,86,0.350000)
  addLink(18,87,0.350000)
  addLink(18,88,0.350000)
  addLink(18,42,0.350000)
  addLink(18,22,0.225000)
  addLink(18,47,0.225000)
  addLink(18,90,0.350000)
  addLink(18,66,0.225000)
  addLink(18,102,0.600000)
  addLink(18,76,0.475000)
  addLink(18,109,0.225000)
  addLink(18,108,0.225000)
  addLink(18,112,0.225000)
  addLink(18,96,0.225000)
  addLink(18,50,0.225000)
  addLink(19,0,0.600000)
  addLink(19,17,0.225000)
  addLink(19,18,0.225000)
  addLink(19,22,0.600000)
  addLink(19,29,0.350000)
  addLink(19,50,0.600000)
  addLink(19,65,0.350000)
  addLink(19,36,0.475000)
  addLink(19,1,0.225000)
  addLink(19,76,0.475000)
  addLink(19,4,0.225000)
  addLink(20,18,0.225000)
  addLink(20,9,0.225000)
  addLink(20,5,0.225000)
  addLink(20,40,0.350000)
  addLink(20,64,0.225000)
  addLink(20,94,0.225000)
  addLink(21,2,0.225000)
  addLink(21,79,0.350000)
  addLink(21,80,0.350000)
  addLink(21,100,0.350000)
  addLink(22,3,0.350000)
  addLink(22,1,0.350000)
  addLink(22,19,0.600000)
  addLink(22,29,0.350000)
  addLink(22,42,0.225000)
  addLink(22,50,0.350000)
  addLink(22,65,0.225000)
  addLink(22,36,0.350000)
  addLink(22,0,0.225000)
  addLink(22,5,0.350000)
  addLink(22,47,0.225000)
  addLink(22,18,0.225000)
  addLink(22,2,0.225000)
  addLink(22,75,0.225000)
  addLink(22,41,0.225000)
  addLink(22,99,0.225000)
  addLink(22,90,0.225000)
  addLink(22,111,0.225000)
  addLink(22,76,0.350000)
  addLink(22,101,0.225000)
  addLink(22,54,0.225000)
  addLink(22,78,0.225000)
  addLink(22,102,0.225000)
  addLink(23,27,0.225000)
  addLink(24,25,0.350000)
  addLink(24,26,0.225000)
  addLink(24,18,0.225000)
  addLink(24,5,0.225000)
  addLink(24,15,0.350000)
  addLink(24,7,0.475000)
  addLink(24,64,0.225000)
  addLink(24,68,0.225000)
  addLink(24,69,0.225000)
  addLink(24,16,0.225000)
  addLink(25,26,0.225000)
  addLink(25,24,0.350000)
  addLink(25,15,0.225000)
  addLink(26,25,0.225000)
  addLink(26,24,0.225000)
  addLink(26,30,0.225000)
  addLink(26,16,0.225000)
  addLink(27,23,0.225000)
  addLink(27,63,0.225000)
  addLink(28,57,0.350000)
  addLink(28,77,0.350000)
  addLink(28,91,0.350000)
  addLink(28,39,0.350000)
  addLink(29,19,0.350000)
  addLink(29,22,0.350000)
  addLink(30,16,0.225000)
  addLink(30,26,0.225000)
  addLink(31,18,0.225000)
  addLink(31,5,0.225000)
  addLink(31,4,0.225000)
  addLink(31,111,0.225000)
  addLink(31,17,0.225000)
  addLink(32,8,0.225000)
  addLink(32,16,0.225000)
  addLink(33,7,0.600000)
  addLink(33,65,0.225000)
  addLink(33,5,0.225000)
  addLink(33,36,0.225000)
  addLink(33,14,0.350000)
  addLink(34,35,0.350000)
  addLink(35,34,0.350000)
  addLink(36,5,0.600000)
  addLink(36,65,0.475000)
  addLink(36,19,0.475000)
  addLink(36,50,0.600000)
  addLink(36,22,0.350000)
  addLink(36,0,0.600000)
  addLink(36,66,0.225000)
  addLink(36,1,0.475000)
  addLink(36,33,0.225000)
  addLink(36,7,0.225000)
  addLink(36,53,0.225000)
  addLink(36,85,0.475000)
  addLink(36,86,0.475000)
  addLink(36,87,0.475000)
  addLink(36,88,0.475000)
  addLink(36,18,0.350000)
  addLink(36,42,0.475000)
  addLink(36,76,0.475000)
  addLink(36,101,0.350000)
  addLink(36,108,0.350000)
  addLink(36,109,0.350000)
  addLink(36,4,0.225000)
  addLink(36,14,0.225000)
  addLink(36,111,0.225000)
  addLink(37,38,0.600000)
  addLink(37,39,0.600000)
  addLink(38,37,0.600000)
  addLink(38,39,0.600000)
  addLink(39,37,0.600000)
  addLink(39,38,0.600000)
  addLink(39,28,0.350000)
  addLink(39,91,0.350000)
  addLink(39,115,0.350000)
  addLink(39,116,0.225000)
  addLink(40,20,0.350000)
  addLink(41,75,0.350000)
  addLink(41,99,0.225000)
  addLink(41,22,0.225000)
  addLink(42,22,0.225000)
  addLink(42,85,0.350000)
  addLink(42,36,0.475000)
  addLink(42,86,0.350000)
  addLink(42,87,0.350000)
  addLink(42,88,0.350000)
  addLink(42,18,0.350000)
  addLink(42,0,0.350000)
  addLink(42,50,0.225000)
  addLink(42,109,0.225000)
  addLink(42,108,0.225000)
  addLink(44,45,0.350000)
  addLink(44,46,0.350000)
  addLink(45,44,0.350000)
  addLink(45,46,0.350000)
  addLink(46,44,0.350000)
  addLink(46,45,0.350000)
  addLink(47,2,0.350000)
  addLink(47,5,0.475000)
  addLink(47,22,0.225000)
  addLink(47,18,0.225000)
  addLink(47,48,0.225000)
  addLink(48,5,0.225000)
  addLink(48,47,0.225000)
  addLink(50,19,0.600000)
  addLink(50,22,0.350000)
  addLink(50,65,0.350000)
  addLink(50,36,0.600000)
  addLink(50,0,0.475000)
  addLink(50,1,0.225000)
  addLink(50,76,0.350000)
  addLink(50,42,0.225000)
  addLink(50,4,0.225000)
  addLink(50,96,0.225000)
  addLink(50,18,0.225000)
  addLink(51,52,0.350000)
  addLink(51,71,0.225000)
  addLink(51,73,0.225000)
  addLink(51,74,0.225000)
  addLink(52,51,0.350000)
  addLink(52,71,0.475000)
  addLink(52,72,0.350000)
  addLink(52,73,0.475000)
  addLink(52,74,0.475000)
  addLink(53,5,0.225000)
  addLink(53,36,0.225000)
  addLink(54,55,0.350000)
  addLink(54,56,0.350000)
  addLink(54,78,0.225000)
  addLink(54,76,0.225000)
  addLink(54,102,0.225000)
  addLink(54,5,0.225000)
  addLink(54,22,0.225000)
  addLink(55,54,0.350000)
  addLink(55,56,0.350000)
  addLink(56,54,0.350000)
  addLink(56,55,0.350000)
  addLink(57,28,0.350000)
  addLink(57,77,0.225000)
  addLink(58,59,0.350000)
  addLink(58,60,0.350000)
  addLink(58,61,0.350000)
  addLink(58,62,0.350000)
  addLink(59,58,0.350000)
  addLink(59,60,0.350000)
  addLink(59,61,0.350000)
  addLink(59,62,0.350000)
  addLink(60,58,0.350000)
  addLink(60,59,0.350000)
  addLink(60,61,0.350000)
  addLink(60,62,0.350000)
  addLink(61,58,0.350000)
  addLink(61,59,0.350000)
  addLink(61,60,0.350000)
  addLink(61,62,0.350000)
  addLink(62,58,0.350000)
  addLink(62,59,0.350000)
  addLink(62,60,0.350000)
  addLink(62,61,0.350000)
  addLink(63,27,0.225000)
  addLink(64,7,0.225000)
  addLink(64,24,0.225000)
  addLink(64,20,0.225000)
  addLink(65,19,0.350000)
  addLink(65,50,0.350000)
  addLink(65,36,0.475000)
  addLink(65,22,0.225000)
  addLink(65,0,0.350000)
  addLink(65,1,0.225000)
  addLink(65,33,0.225000)
  addLink(65,7,0.225000)
  addLink(65,5,0.225000)
  addLink(66,5,0.350000)
  addLink(66,36,0.225000)
  addLink(66,18,0.225000)
  addLink(68,69,0.350000)
  addLink(68,16,0.350000)
  addLink(68,24,0.225000)
  addLink(69,68,0.350000)
  addLink(69,16,0.350000)
  addLink(69,24,0.225000)
  addLink(70,16,0.225000)
  addLink(71,72,0.350000)
  addLink(71,52,0.475000)
  addLink(71,73,0.475000)
  addLink(71,74,0.475000)
  addLink(71,51,0.225000)
  addLink(72,71,0.350000)
  addLink(72,52,0.350000)
  addLink(72,73,0.350000)
  addLink(72,74,0.350000)
  addLink(73,71,0.475000)
  addLink(73,72,0.350000)
  addLink(73,52,0.475000)
  addLink(73,74,0.475000)
  addLink(73,51,0.225000)
  addLink(74,71,0.475000)
  addLink(74,72,0.350000)
  addLink(74,52,0.475000)
  addLink(74,73,0.475000)
  addLink(74,51,0.225000)
  addLink(75,41,0.350000)
  addLink(75,99,0.225000)
  addLink(75,22,0.225000)
  addLink(76,19,0.475000)
  addLink(76,50,0.350000)
  addLink(76,1,0.475000)
  addLink(76,36,0.475000)
  addLink(76,101,0.475000)
  addLink(76,102,0.600000)
  addLink(76,18,0.475000)
  addLink(76,4,0.225000)
  addLink(76,0,0.350000)
  addLink(76,111,0.350000)
  addLink(76,22,0.350000)
  addLink(76,3,0.225000)
  addLink(76,14,0.225000)
  addLink(76,54,0.225000)
  addLink(76,78,0.225000)
  addLink(76,5,0.225000)
  addLink(77,28,0.350000)
  addLink(77,57,0.225000)
  addLink(78,54,0.225000)
  addLink(78,76,0.225000)
  addLink(78,102,0.225000)
  addLink(78,5,0.225000)
  addLink(78,22,0.225000)
  addLink(79,21,0.350000)
  addLink(79,80,0.225000)
  addLink(79,100,0.225000)
  addLink(79,110,0.225000)
  addLink(80,21,0.350000)
  addLink(80,79,0.225000)
  addLink(80,100,0.225000)
  addLink(81,105,0.475000)
  addLink(82,83,0.350000)
  addLink(82,84,0.475000)
  addLink(83,82,0.350000)
  addLink(83,84,0.350000)
  addLink(84,82,0.475000)
  addLink(84,83,0.350000)
  addLink(85,36,0.475000)
  addLink(85,86,0.475000)
  addLink(85,87,0.475000)
  addLink(85,88,0.475000)
  addLink(85,18,0.350000)
  addLink(85,42,0.350000)
  addLink(85,0,0.350000)
  addLink(85,108,0.350000)
  addLink(85,109,0.350000)
  addLink(86,85,0.475000)
  addLink(86,36,0.475000)
  addLink(86,87,0.475000)
  addLink(86,88,0.475000)
  addLink(86,18,0.350000)
  addLink(86,42,0.350000)
  addLink(86,0,0.350000)
  addLink(86,108,0.350000)
  addLink(86,109,0.350000)
  addLink(87,85,0.475000)
  addLink(87,36,0.475000)
  addLink(87,86,0.475000)
  addLink(87,88,0.475000)
  addLink(87,18,0.350000)
  addLink(87,42,0.350000)
  addLink(87,0,0.350000)
  addLink(87,108,0.350000)
  addLink(87,109,0.350000)
  addLink(88,85,0.475000)
  addLink(88,36,0.475000)
  addLink(88,86,0.475000)
  addLink(88,87,0.475000)
  addLink(88,18,0.350000)
  addLink(88,42,0.350000)
  addLink(88,0,0.350000)
  addLink(88,108,0.350000)
  addLink(88,109,0.350000)
  addLink(90,18,0.350000)
  addLink(90,22,0.225000)
  addLink(90,104,0.225000)
  addLink(91,28,0.350000)
  addLink(91,39,0.350000)
  addLink(92,93,0.350000)
  addLink(93,92,0.350000)
  addLink(94,20,0.225000)
  addLink(96,50,0.225000)
  addLink(96,18,0.225000)
  addLink(97,113,0.225000)
  addLink(99,75,0.225000)
  addLink(99,41,0.225000)
  addLink(99,22,0.225000)
  addLink(100,79,0.225000)
  addLink(100,21,0.350000)
  addLink(100,80,0.225000)
  addLink(101,1,0.475000)
  addLink(101,76,0.475000)
  addLink(101,36,0.350000)
  addLink(101,111,0.350000)
  addLink(101,22,0.225000)
  addLink(101,3,0.225000)
  addLink(101,14,0.225000)
  addLink(101,0,0.225000)
  addLink(102,76,0.600000)
  addLink(102,18,0.600000)
  addLink(102,54,0.225000)
  addLink(102,78,0.225000)
  addLink(102,5,0.225000)
  addLink(102,22,0.225000)
  addLink(104,90,0.225000)
  addLink(105,81,0.475000)
  addLink(106,107,0.350000)
  addLink(107,106,0.350000)
  addLink(108,85,0.350000)
  addLink(108,86,0.350000)
  addLink(108,36,0.350000)
  addLink(108,87,0.350000)
  addLink(108,88,0.350000)
  addLink(108,109,0.350000)
  addLink(108,0,0.225000)
  addLink(108,18,0.225000)
  addLink(108,42,0.225000)
  addLink(109,85,0.350000)
  addLink(109,86,0.350000)
  addLink(109,36,0.350000)
  addLink(109,87,0.350000)
  addLink(109,88,0.350000)
  addLink(109,108,0.350000)
  addLink(109,0,0.225000)
  addLink(109,18,0.225000)
  addLink(109,42,0.225000)
  addLink(110,79,0.225000)
  addLink(111,17,0.225000)
  addLink(111,31,0.225000)
  addLink(111,22,0.225000)
  addLink(111,76,0.350000)
  addLink(111,3,0.225000)
  addLink(111,101,0.350000)
  addLink(111,1,0.350000)
  addLink(111,14,0.225000)
  addLink(111,36,0.225000)
  addLink(111,0,0.225000)
  addLink(112,18,0.225000)
  addLink(113,114,0.225000)
  addLink(113,97,0.225000)
  addLink(114,113,0.225000)
  addLink(115,116,0.225000)
  addLink(115,39,0.350000)
  addLink(116,115,0.225000)
  addLink(116,39,0.225000)


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