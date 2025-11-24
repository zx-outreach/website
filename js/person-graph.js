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
  addNode(12,"Emmanuel Jeandel", "person")
  addNode(13,"Marta Estarellas", "person")
  addNode(14,"Quanlong Wang", "person")
  addNode(15,"Miriam Backens", "person")
  addNode(16,"Hector Miller-Bakewell", "person")
  addNode(17,"Louis Lemonnier", "person")
  addNode(18,"Renaud Vilmart", "person")
  addNode(19,"Cole Comfort", "person")
  addNode(20,"Alexander Cowtan", "person")
  addNode(21,"Will Simmons", "person")
  addNode(22,"Jonathan Gorard", "person")
  addNode(23,"Manojna Namuduri", "person")
  addNode(24,"Xerxes Arsiwalla", "person")
  addNode(25,"Chen Zhao", "person")
  addNode(26,"Marc de Visme", "person")
  addNode(27,"Lia Yeh", "person")
  addNode(28,"Dominic Horsman", "person")
  addNode(29,"Mateusz Kupper", "person")
  addNode(30,"Alex Townsend-Teague", "person")
  addNode(31,"Richie Yeung", "person")
  addNode(32,"Shahn Majid", "person")
  addNode(33,"Stefano Gogioso", "person")
  addNode(34,"Craig Gidney", "person")
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
  addNode(54,"Razin Shaikh", "person")
  addNode(55,"Daniel Litinski", "person")
  addNode(56,"Naomi Nickerson", "person")
  addNode(57,"Patrick Roy", "person")
  addNode(58,"Andrey Boris Khesin", "person")
  addNode(59,"Jonathan Lu", "person")
  addNode(60,"Peter Shor", "person")
  addNode(61,"Tobias Guggemos", "person")
  addNode(62,"Christian Ufrecht", "person")
  addNode(63,"Maniraman Periyasamy", "person")
  addNode(64,"Daniel Scherer", "person")
  addNode(65,"Axel Plinge", "person")
  addNode(66,"Christopher Mutschler", "person")
  addNode(67,"Simon Burton", "person")
  addNode(68,"Thomas Perez", "person")
  addNode(69,"Boldizsár Poór", "person")
  addNode(70,"Neil Ross", "person")
  addNode(71,"Leo Colisson", "person")
  addNode(72,"Alexandre Clement", "person")
  addNode(73,"Noe Delorme", "person")
  addNode(74,"Nicolas Heurtel", "person")
  addNode(75,"Hector Bombin", "person")
  addNode(76,"Chris Dawson", "person")
  addNode(77,"Fernando Pastawski", "person")
  addNode(78,"Sam Roberts", "person")
  addNode(79,"Qunsheng Huang", "person")
  addNode(80,"Boldizsar Poor", "person")
  addNode(81,"Karl Fürlinger", "person")
  addNode(82,"Julio Magdalena de la Fuente", "person")
  addNode(83,"Markus Kesselring", "person")
  addNode(84,"Kwok Ho Wan", "person")
  addNode(85,"Alejandro Villoria", "person")
  addNode(86,"Henning Basold", "person")
  addNode(87,"Alfons Laarman", "person")
  addNode(88,"Jonathan Ruhman", "person")
  addNode(89,"Matthew Sutcliffe", "person")
  addNode(90,"Grace Sommers", "person")
  addNode(91,"David Huse", "person")
  addNode(92,"Pavel Kos", "person")
  addNode(93,"Vivien Vandaele", "person")
  addNode(94,"Jens Eisert", "person")
  addNode(95,"Benjamin Rodatz", "person")
  addNode(96,"Liam Hurwitz", "person")
  addNode(97,"Wira Azmoon Ahmad", "person")
  addNode(98,"Zhenghao Zhong", "person")
  addNode(99,"Tobias Fischbach", "person")
  addNode(100,"Pierre Talbot", "person")
  addNode(101,"Andreas Bauer", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.350000)
  addLink(0,3,0.350000)
  addLink(0,28,0.225000)
  addLink(0,7,0.350000)
  addLink(0,14,0.600000)
  addLink(0,33,0.350000)
  addLink(0,69,0.350000)
  addLink(0,54,0.475000)
  addLink(0,27,0.600000)
  addLink(0,31,0.225000)
  addLink(0,10,0.225000)
  addLink(0,80,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.350000)
  addLink(1,3,0.475000)
  addLink(1,15,0.225000)
  addLink(1,16,0.225000)
  addLink(1,11,0.225000)
  addLink(1,31,0.225000)
  addLink(1,33,0.225000)
  addLink(1,54,0.225000)
  addLink(1,69,0.225000)
  addLink(1,27,0.350000)
  addLink(1,14,0.225000)
  addLink(1,80,0.225000)
  addLink(2,0,0.350000)
  addLink(2,1,0.350000)
  addLink(2,3,0.350000)
  addLink(2,6,0.225000)
  addLink(2,7,0.225000)
  addLink(2,30,0.225000)
  addLink(2,33,0.225000)
  addLink(2,52,0.350000)
  addLink(2,11,0.350000)
  addLink(2,31,0.225000)
  addLink(3,0,0.350000)
  addLink(3,1,0.475000)
  addLink(3,2,0.350000)
  addLink(3,31,0.225000)
  addLink(3,33,0.225000)
  addLink(4,5,0.475000)
  addLink(4,12,0.225000)
  addLink(4,26,0.225000)
  addLink(4,41,0.600000)
  addLink(4,17,0.225000)
  addLink(4,18,0.475000)
  addLink(4,68,0.225000)
  addLink(4,69,0.225000)
  addLink(4,11,0.225000)
  addLink(4,27,0.225000)
  addLink(4,19,0.350000)
  addLink(5,4,0.475000)
  addLink(5,26,0.225000)
  addLink(5,39,0.225000)
  addLink(5,36,0.225000)
  addLink(5,12,0.225000)
  addLink(5,40,0.225000)
  addLink(5,72,0.350000)
  addLink(5,73,0.350000)
  addLink(5,18,0.225000)
  addLink(5,74,0.225000)
  addLink(6,7,0.350000)
  addLink(6,2,0.225000)
  addLink(6,14,0.225000)
  addLink(6,11,0.225000)
  addLink(6,10,0.225000)
  addLink(6,29,0.225000)
  addLink(6,28,0.225000)
  addLink(7,6,0.350000)
  addLink(7,2,0.225000)
  addLink(7,17,0.225000)
  addLink(7,11,0.600000)
  addLink(7,0,0.350000)
  addLink(7,28,0.225000)
  addLink(7,14,0.225000)
  addLink(7,15,0.225000)
  addLink(7,16,0.225000)
  addLink(7,19,0.225000)
  addLink(7,18,0.225000)
  addLink(7,27,0.225000)
  addLink(7,33,0.225000)
  addLink(7,31,0.225000)
  addLink(7,52,0.225000)
  addLink(7,89,0.350000)
  addLink(7,70,0.225000)
  addLink(7,95,0.475000)
  addLink(7,80,0.475000)
  addLink(8,9,0.225000)
  addLink(8,79,0.225000)
  addLink(8,48,0.225000)
  addLink(8,31,0.225000)
  addLink(9,8,0.225000)
  addLink(9,20,0.225000)
  addLink(9,21,0.225000)
  addLink(10,11,0.350000)
  addLink(10,6,0.225000)
  addLink(10,14,0.225000)
  addLink(10,54,0.225000)
  addLink(10,27,0.225000)
  addLink(10,80,0.225000)
  addLink(10,0,0.225000)
  addLink(11,10,0.350000)
  addLink(11,15,0.350000)
  addLink(11,16,0.350000)
  addLink(11,1,0.225000)
  addLink(11,17,0.225000)
  addLink(11,7,0.600000)
  addLink(11,18,0.225000)
  addLink(11,6,0.225000)
  addLink(11,27,0.600000)
  addLink(11,52,0.475000)
  addLink(11,2,0.350000)
  addLink(11,53,0.225000)
  addLink(11,70,0.350000)
  addLink(11,69,0.225000)
  addLink(11,41,0.225000)
  addLink(11,4,0.225000)
  addLink(11,57,0.225000)
  addLink(11,31,0.225000)
  addLink(12,4,0.225000)
  addLink(12,5,0.225000)
  addLink(12,40,0.225000)
  addLink(14,6,0.225000)
  addLink(14,0,0.600000)
  addLink(14,28,0.225000)
  addLink(14,7,0.225000)
  addLink(14,31,0.600000)
  addLink(14,38,0.350000)
  addLink(14,54,0.600000)
  addLink(14,69,0.350000)
  addLink(14,27,0.475000)
  addLink(14,1,0.225000)
  addLink(14,80,0.475000)
  addLink(14,10,0.225000)
  addLink(15,16,0.350000)
  addLink(15,1,0.225000)
  addLink(15,11,0.350000)
  addLink(15,7,0.225000)
  addLink(15,47,0.350000)
  addLink(15,68,0.225000)
  addLink(16,15,0.350000)
  addLink(16,1,0.225000)
  addLink(16,11,0.350000)
  addLink(16,7,0.225000)
  addLink(17,11,0.225000)
  addLink(17,7,0.225000)
  addLink(17,4,0.225000)
  addLink(18,35,0.350000)
  addLink(18,36,0.225000)
  addLink(18,7,0.225000)
  addLink(18,11,0.225000)
  addLink(18,26,0.350000)
  addLink(18,4,0.475000)
  addLink(18,68,0.225000)
  addLink(18,72,0.225000)
  addLink(18,73,0.225000)
  addLink(18,5,0.225000)
  addLink(19,7,0.225000)
  addLink(19,41,0.350000)
  addLink(19,4,0.350000)
  addLink(20,21,0.225000)
  addLink(20,9,0.225000)
  addLink(20,32,0.225000)
  addLink(20,67,0.225000)
  addLink(21,20,0.225000)
  addLink(21,9,0.225000)
  addLink(22,23,0.350000)
  addLink(22,24,0.350000)
  addLink(23,22,0.350000)
  addLink(23,24,0.350000)
  addLink(24,22,0.350000)
  addLink(24,23,0.350000)
  addLink(26,4,0.225000)
  addLink(26,5,0.225000)
  addLink(26,35,0.225000)
  addLink(26,18,0.350000)
  addLink(27,11,0.600000)
  addLink(27,69,0.475000)
  addLink(27,14,0.475000)
  addLink(27,54,0.600000)
  addLink(27,31,0.225000)
  addLink(27,0,0.600000)
  addLink(27,70,0.225000)
  addLink(27,1,0.350000)
  addLink(27,41,0.225000)
  addLink(27,4,0.225000)
  addLink(27,57,0.225000)
  addLink(27,7,0.225000)
  addLink(27,33,0.350000)
  addLink(27,80,0.350000)
  addLink(27,10,0.225000)
  addLink(28,0,0.225000)
  addLink(28,7,0.225000)
  addLink(28,14,0.225000)
  addLink(28,29,0.225000)
  addLink(28,6,0.225000)
  addLink(29,28,0.225000)
  addLink(29,6,0.225000)
  addLink(30,2,0.225000)
  addLink(30,82,0.350000)
  addLink(30,83,0.350000)
  addLink(30,94,0.350000)
  addLink(31,3,0.225000)
  addLink(31,1,0.225000)
  addLink(31,14,0.600000)
  addLink(31,38,0.350000)
  addLink(31,33,0.225000)
  addLink(31,54,0.350000)
  addLink(31,69,0.225000)
  addLink(31,27,0.225000)
  addLink(31,0,0.225000)
  addLink(31,11,0.225000)
  addLink(31,52,0.225000)
  addLink(31,7,0.225000)
  addLink(31,2,0.225000)
  addLink(31,79,0.225000)
  addLink(31,48,0.225000)
  addLink(31,8,0.225000)
  addLink(31,89,0.225000)
  addLink(32,20,0.225000)
  addLink(33,2,0.225000)
  addLink(33,1,0.225000)
  addLink(33,3,0.225000)
  addLink(33,0,0.350000)
  addLink(33,31,0.225000)
  addLink(33,27,0.350000)
  addLink(33,7,0.225000)
  addLink(33,54,0.225000)
  addLink(35,36,0.225000)
  addLink(35,18,0.350000)
  addLink(35,26,0.225000)
  addLink(36,35,0.225000)
  addLink(36,18,0.225000)
  addLink(36,39,0.225000)
  addLink(36,5,0.225000)
  addLink(37,61,0.350000)
  addLink(37,81,0.350000)
  addLink(37,46,0.225000)
  addLink(38,14,0.350000)
  addLink(38,31,0.350000)
  addLink(39,5,0.225000)
  addLink(39,36,0.225000)
  addLink(40,12,0.225000)
  addLink(40,5,0.225000)
  addLink(41,4,0.600000)
  addLink(41,69,0.225000)
  addLink(41,11,0.225000)
  addLink(41,27,0.225000)
  addLink(41,19,0.350000)
  addLink(42,43,0.350000)
  addLink(43,42,0.350000)
  addLink(44,45,0.600000)
  addLink(44,46,0.600000)
  addLink(45,44,0.600000)
  addLink(45,46,0.600000)
  addLink(46,44,0.600000)
  addLink(46,45,0.600000)
  addLink(46,37,0.225000)
  addLink(47,15,0.350000)
  addLink(48,79,0.350000)
  addLink(48,8,0.225000)
  addLink(48,31,0.225000)
  addLink(49,50,0.350000)
  addLink(49,51,0.350000)
  addLink(50,49,0.350000)
  addLink(50,51,0.350000)
  addLink(51,49,0.350000)
  addLink(51,50,0.350000)
  addLink(52,2,0.350000)
  addLink(52,11,0.475000)
  addLink(52,31,0.225000)
  addLink(52,7,0.225000)
  addLink(53,11,0.225000)
  addLink(54,14,0.600000)
  addLink(54,31,0.350000)
  addLink(54,69,0.350000)
  addLink(54,27,0.600000)
  addLink(54,0,0.475000)
  addLink(54,1,0.225000)
  addLink(54,80,0.350000)
  addLink(54,33,0.225000)
  addLink(54,10,0.225000)
  addLink(55,56,0.350000)
  addLink(55,75,0.225000)
  addLink(55,77,0.225000)
  addLink(55,78,0.225000)
  addLink(56,55,0.350000)
  addLink(56,75,0.475000)
  addLink(56,76,0.350000)
  addLink(56,77,0.475000)
  addLink(56,78,0.475000)
  addLink(57,11,0.225000)
  addLink(57,27,0.225000)
  addLink(58,59,0.350000)
  addLink(58,60,0.350000)
  addLink(59,58,0.350000)
  addLink(59,60,0.350000)
  addLink(60,58,0.350000)
  addLink(60,59,0.350000)
  addLink(61,37,0.350000)
  addLink(61,81,0.225000)
  addLink(62,63,0.350000)
  addLink(62,64,0.350000)
  addLink(62,65,0.350000)
  addLink(62,66,0.350000)
  addLink(63,62,0.350000)
  addLink(63,64,0.350000)
  addLink(63,65,0.350000)
  addLink(63,66,0.350000)
  addLink(64,62,0.350000)
  addLink(64,63,0.350000)
  addLink(64,65,0.350000)
  addLink(64,66,0.350000)
  addLink(65,62,0.350000)
  addLink(65,63,0.350000)
  addLink(65,64,0.350000)
  addLink(65,66,0.350000)
  addLink(66,62,0.350000)
  addLink(66,63,0.350000)
  addLink(66,64,0.350000)
  addLink(66,65,0.350000)
  addLink(67,20,0.225000)
  addLink(68,4,0.225000)
  addLink(68,18,0.225000)
  addLink(68,15,0.225000)
  addLink(69,14,0.350000)
  addLink(69,54,0.350000)
  addLink(69,27,0.475000)
  addLink(69,31,0.225000)
  addLink(69,0,0.350000)
  addLink(69,1,0.225000)
  addLink(69,41,0.225000)
  addLink(69,4,0.225000)
  addLink(69,11,0.225000)
  addLink(70,11,0.350000)
  addLink(70,27,0.225000)
  addLink(70,7,0.225000)
  addLink(72,73,0.350000)
  addLink(72,5,0.350000)
  addLink(72,18,0.225000)
  addLink(73,72,0.350000)
  addLink(73,5,0.350000)
  addLink(73,18,0.225000)
  addLink(74,5,0.225000)
  addLink(75,76,0.350000)
  addLink(75,56,0.475000)
  addLink(75,77,0.475000)
  addLink(75,78,0.475000)
  addLink(75,55,0.225000)
  addLink(76,75,0.350000)
  addLink(76,56,0.350000)
  addLink(76,77,0.350000)
  addLink(76,78,0.350000)
  addLink(77,75,0.475000)
  addLink(77,76,0.350000)
  addLink(77,56,0.475000)
  addLink(77,78,0.475000)
  addLink(77,55,0.225000)
  addLink(78,75,0.475000)
  addLink(78,76,0.350000)
  addLink(78,56,0.475000)
  addLink(78,77,0.475000)
  addLink(78,55,0.225000)
  addLink(79,48,0.350000)
  addLink(79,8,0.225000)
  addLink(79,31,0.225000)
  addLink(80,14,0.475000)
  addLink(80,54,0.350000)
  addLink(80,1,0.225000)
  addLink(80,27,0.350000)
  addLink(80,95,0.475000)
  addLink(80,7,0.475000)
  addLink(80,10,0.225000)
  addLink(80,0,0.225000)
  addLink(81,37,0.350000)
  addLink(81,61,0.225000)
  addLink(82,30,0.350000)
  addLink(82,83,0.225000)
  addLink(82,94,0.225000)
  addLink(82,101,0.225000)
  addLink(83,30,0.350000)
  addLink(83,82,0.225000)
  addLink(83,94,0.225000)
  addLink(84,98,0.475000)
  addLink(85,86,0.350000)
  addLink(85,87,0.475000)
  addLink(86,85,0.350000)
  addLink(86,87,0.350000)
  addLink(87,85,0.475000)
  addLink(87,86,0.350000)
  addLink(89,7,0.350000)
  addLink(89,31,0.225000)
  addLink(89,97,0.225000)
  addLink(90,91,0.350000)
  addLink(91,90,0.350000)
  addLink(94,82,0.225000)
  addLink(94,30,0.350000)
  addLink(94,83,0.225000)
  addLink(95,80,0.475000)
  addLink(95,7,0.475000)
  addLink(97,89,0.225000)
  addLink(98,84,0.475000)
  addLink(99,100,0.350000)
  addLink(100,99,0.350000)
  addLink(101,82,0.225000)


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