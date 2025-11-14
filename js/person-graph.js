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
  addNode(17,"Xiaoning Bian", "person")
  addNode(18,"Louis Lemonnier", "person")
  addNode(19,"Renaud Vilmart", "person")
  addNode(20,"Cole Comfort", "person")
  addNode(21,"Alexander Cowtan", "person")
  addNode(22,"Will Simmons", "person")
  addNode(23,"Jonathan Gorard", "person")
  addNode(24,"Manojna Namuduri", "person")
  addNode(25,"Xerxes Arsiwalla", "person")
  addNode(26,"Chen Zhao", "person")
  addNode(27,"Marc de Visme", "person")
  addNode(28,"Lia Yeh", "person")
  addNode(29,"Dominic Horsman", "person")
  addNode(30,"Mateusz Kupper", "person")
  addNode(31,"Alex Townsend-Teague", "person")
  addNode(32,"Richie Yeung", "person")
  addNode(33,"Shahn Majid", "person")
  addNode(34,"Stefano Gogioso", "person")
  addNode(35,"Craig Gidney", "person")
  addNode(36,"Kostia Chardonnet", "person")
  addNode(37,"Beno\^it Valiron", "person")
  addNode(38,"Korbinian Staudacher", "person")
  addNode(39,"Mark Koch", "person")
  addNode(40,"Agustin Borgna", "person")
  addNode(41,"Margarita Veshchezerova", "person")
  addNode(42,"Robert Booth", "person")
  addNode(43,"Tobias Stollenwerk", "person")
  addNode(44,"Stuart Hadfield", "person")
  addNode(45,"Tom Peham", "person")
  addNode(46,"Lukas Burgholzer", "person")
  addNode(47,"Robert Wille", "person")
  addNode(48,"Tommy McElvanney", "person")
  addNode(49,"David Winderl", "person")
  addNode(50,"Adrian Lehmann", "person")
  addNode(51,"Ben Caldwell", "person")
  addNode(52,"Robert Rand", "person")
  addNode(53,"Tuomas Laakkonen", "person")
  addNode(54,"Julien Codsi", "person")
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
  addNode(83,"Julio Magdalena de la Fuente", "person")
  addNode(84,"Markus Kesselring", "person")
  addNode(85,"Kwok Ho Wan", "person")
  addNode(86,"Alejandro Villoria", "person")
  addNode(87,"Henning Basold", "person")
  addNode(88,"Alfons Laarman", "person")
  addNode(89,"Jonathan Ruhman", "person")
  addNode(90,"Matthew Sutcliffe", "person")
  addNode(91,"Grace Sommers", "person")
  addNode(92,"David Huse", "person")
  addNode(93,"Pavel Kos", "person")
  addNode(94,"Vivien Vandaele", "person")
  addNode(95,"Jens Eisert", "person")
  addNode(96,"Benjamin Rodatz", "person")
  addNode(97,"Liam Hurwitz", "person")
  addNode(98,"Wira Azmoon Ahmad", "person")
  addNode(99,"Zhenghao Zhong", "person")
  addNode(100,"Tobias Fischbach", "person")
  addNode(101,"Pierre Talbot", "person")
  addNode(102,"Andreas Bauer", "person")
  addLink(0,1,0.600000)
  addLink(0,2,0.350000)
  addLink(0,3,0.350000)
  addLink(0,29,0.225000)
  addLink(0,7,0.350000)
  addLink(0,14,0.600000)
  addLink(0,34,0.350000)
  addLink(0,70,0.350000)
  addLink(0,55,0.475000)
  addLink(0,28,0.600000)
  addLink(0,32,0.225000)
  addLink(0,10,0.225000)
  addLink(0,81,0.225000)
  addLink(1,0,0.600000)
  addLink(1,2,0.350000)
  addLink(1,3,0.475000)
  addLink(1,15,0.225000)
  addLink(1,16,0.225000)
  addLink(1,11,0.225000)
  addLink(1,32,0.225000)
  addLink(1,34,0.225000)
  addLink(1,55,0.225000)
  addLink(1,70,0.225000)
  addLink(1,28,0.350000)
  addLink(1,14,0.225000)
  addLink(1,81,0.225000)
  addLink(2,0,0.350000)
  addLink(2,1,0.350000)
  addLink(2,3,0.350000)
  addLink(2,6,0.225000)
  addLink(2,7,0.225000)
  addLink(2,31,0.225000)
  addLink(2,34,0.225000)
  addLink(2,53,0.350000)
  addLink(2,11,0.350000)
  addLink(2,32,0.225000)
  addLink(3,0,0.350000)
  addLink(3,1,0.475000)
  addLink(3,2,0.350000)
  addLink(3,32,0.225000)
  addLink(3,34,0.225000)
  addLink(4,5,0.475000)
  addLink(4,12,0.225000)
  addLink(4,27,0.225000)
  addLink(4,42,0.600000)
  addLink(4,18,0.225000)
  addLink(4,19,0.475000)
  addLink(4,69,0.225000)
  addLink(4,70,0.225000)
  addLink(4,11,0.225000)
  addLink(4,28,0.225000)
  addLink(4,20,0.350000)
  addLink(5,4,0.475000)
  addLink(5,27,0.225000)
  addLink(5,40,0.225000)
  addLink(5,37,0.225000)
  addLink(5,12,0.225000)
  addLink(5,41,0.225000)
  addLink(5,73,0.350000)
  addLink(5,74,0.350000)
  addLink(5,19,0.225000)
  addLink(5,75,0.225000)
  addLink(6,7,0.350000)
  addLink(6,2,0.225000)
  addLink(6,17,0.350000)
  addLink(6,14,0.350000)
  addLink(6,11,0.225000)
  addLink(6,10,0.225000)
  addLink(6,30,0.225000)
  addLink(6,29,0.225000)
  addLink(7,6,0.350000)
  addLink(7,2,0.225000)
  addLink(7,18,0.225000)
  addLink(7,11,0.600000)
  addLink(7,0,0.350000)
  addLink(7,29,0.225000)
  addLink(7,14,0.225000)
  addLink(7,15,0.225000)
  addLink(7,16,0.225000)
  addLink(7,20,0.225000)
  addLink(7,19,0.225000)
  addLink(7,28,0.225000)
  addLink(7,34,0.225000)
  addLink(7,32,0.225000)
  addLink(7,53,0.225000)
  addLink(7,90,0.350000)
  addLink(7,71,0.225000)
  addLink(7,96,0.350000)
  addLink(7,81,0.350000)
  addLink(8,9,0.225000)
  addLink(8,80,0.225000)
  addLink(8,49,0.225000)
  addLink(8,32,0.225000)
  addLink(9,8,0.225000)
  addLink(9,21,0.225000)
  addLink(9,22,0.225000)
  addLink(10,11,0.350000)
  addLink(10,6,0.225000)
  addLink(10,14,0.225000)
  addLink(10,55,0.225000)
  addLink(10,28,0.225000)
  addLink(10,81,0.225000)
  addLink(10,0,0.225000)
  addLink(11,10,0.350000)
  addLink(11,15,0.350000)
  addLink(11,16,0.350000)
  addLink(11,1,0.225000)
  addLink(11,18,0.225000)
  addLink(11,7,0.600000)
  addLink(11,19,0.225000)
  addLink(11,6,0.225000)
  addLink(11,28,0.600000)
  addLink(11,53,0.475000)
  addLink(11,2,0.350000)
  addLink(11,54,0.225000)
  addLink(11,71,0.350000)
  addLink(11,70,0.225000)
  addLink(11,42,0.225000)
  addLink(11,4,0.225000)
  addLink(11,58,0.225000)
  addLink(11,32,0.225000)
  addLink(12,4,0.225000)
  addLink(12,5,0.225000)
  addLink(12,41,0.225000)
  addLink(14,6,0.350000)
  addLink(14,17,0.350000)
  addLink(14,0,0.600000)
  addLink(14,29,0.225000)
  addLink(14,7,0.225000)
  addLink(14,32,0.600000)
  addLink(14,39,0.350000)
  addLink(14,55,0.600000)
  addLink(14,70,0.350000)
  addLink(14,28,0.475000)
  addLink(14,1,0.225000)
  addLink(14,81,0.475000)
  addLink(14,10,0.225000)
  addLink(15,16,0.350000)
  addLink(15,1,0.225000)
  addLink(15,11,0.350000)
  addLink(15,7,0.225000)
  addLink(15,48,0.350000)
  addLink(15,69,0.225000)
  addLink(16,15,0.350000)
  addLink(16,1,0.225000)
  addLink(16,11,0.350000)
  addLink(16,7,0.225000)
  addLink(17,6,0.350000)
  addLink(17,14,0.350000)
  addLink(18,11,0.225000)
  addLink(18,7,0.225000)
  addLink(18,4,0.225000)
  addLink(19,36,0.350000)
  addLink(19,37,0.225000)
  addLink(19,7,0.225000)
  addLink(19,11,0.225000)
  addLink(19,27,0.350000)
  addLink(19,4,0.475000)
  addLink(19,69,0.225000)
  addLink(19,73,0.225000)
  addLink(19,74,0.225000)
  addLink(19,5,0.225000)
  addLink(20,7,0.225000)
  addLink(20,42,0.350000)
  addLink(20,4,0.350000)
  addLink(21,22,0.225000)
  addLink(21,9,0.225000)
  addLink(21,33,0.225000)
  addLink(21,68,0.225000)
  addLink(22,21,0.225000)
  addLink(22,9,0.225000)
  addLink(23,24,0.350000)
  addLink(23,25,0.350000)
  addLink(24,23,0.350000)
  addLink(24,25,0.350000)
  addLink(25,23,0.350000)
  addLink(25,24,0.350000)
  addLink(27,4,0.225000)
  addLink(27,5,0.225000)
  addLink(27,36,0.225000)
  addLink(27,19,0.350000)
  addLink(28,11,0.600000)
  addLink(28,70,0.475000)
  addLink(28,14,0.475000)
  addLink(28,55,0.600000)
  addLink(28,32,0.225000)
  addLink(28,0,0.600000)
  addLink(28,71,0.225000)
  addLink(28,1,0.350000)
  addLink(28,42,0.225000)
  addLink(28,4,0.225000)
  addLink(28,58,0.225000)
  addLink(28,7,0.225000)
  addLink(28,34,0.350000)
  addLink(28,81,0.350000)
  addLink(28,10,0.225000)
  addLink(29,0,0.225000)
  addLink(29,7,0.225000)
  addLink(29,14,0.225000)
  addLink(29,30,0.225000)
  addLink(29,6,0.225000)
  addLink(30,29,0.225000)
  addLink(30,6,0.225000)
  addLink(31,2,0.225000)
  addLink(31,83,0.350000)
  addLink(31,84,0.350000)
  addLink(31,95,0.350000)
  addLink(32,3,0.225000)
  addLink(32,1,0.225000)
  addLink(32,14,0.600000)
  addLink(32,39,0.350000)
  addLink(32,34,0.225000)
  addLink(32,55,0.350000)
  addLink(32,70,0.225000)
  addLink(32,28,0.225000)
  addLink(32,0,0.225000)
  addLink(32,11,0.225000)
  addLink(32,53,0.225000)
  addLink(32,7,0.225000)
  addLink(32,2,0.225000)
  addLink(32,80,0.225000)
  addLink(32,49,0.225000)
  addLink(32,8,0.225000)
  addLink(32,90,0.225000)
  addLink(33,21,0.225000)
  addLink(34,2,0.225000)
  addLink(34,1,0.225000)
  addLink(34,3,0.225000)
  addLink(34,0,0.350000)
  addLink(34,32,0.225000)
  addLink(34,28,0.350000)
  addLink(34,7,0.225000)
  addLink(34,55,0.225000)
  addLink(36,37,0.225000)
  addLink(36,19,0.350000)
  addLink(36,27,0.225000)
  addLink(37,36,0.225000)
  addLink(37,19,0.225000)
  addLink(37,40,0.225000)
  addLink(37,5,0.225000)
  addLink(38,62,0.350000)
  addLink(38,82,0.350000)
  addLink(38,47,0.225000)
  addLink(39,14,0.350000)
  addLink(39,32,0.350000)
  addLink(40,5,0.225000)
  addLink(40,37,0.225000)
  addLink(41,12,0.225000)
  addLink(41,5,0.225000)
  addLink(42,4,0.600000)
  addLink(42,70,0.225000)
  addLink(42,11,0.225000)
  addLink(42,28,0.225000)
  addLink(42,20,0.350000)
  addLink(43,44,0.350000)
  addLink(44,43,0.350000)
  addLink(45,46,0.600000)
  addLink(45,47,0.600000)
  addLink(46,45,0.600000)
  addLink(46,47,0.600000)
  addLink(47,45,0.600000)
  addLink(47,46,0.600000)
  addLink(47,38,0.225000)
  addLink(48,15,0.350000)
  addLink(49,80,0.350000)
  addLink(49,8,0.225000)
  addLink(49,32,0.225000)
  addLink(50,51,0.350000)
  addLink(50,52,0.350000)
  addLink(51,50,0.350000)
  addLink(51,52,0.350000)
  addLink(52,50,0.350000)
  addLink(52,51,0.350000)
  addLink(53,2,0.350000)
  addLink(53,11,0.475000)
  addLink(53,32,0.225000)
  addLink(53,7,0.225000)
  addLink(54,11,0.225000)
  addLink(55,14,0.600000)
  addLink(55,32,0.350000)
  addLink(55,70,0.350000)
  addLink(55,28,0.600000)
  addLink(55,0,0.475000)
  addLink(55,1,0.225000)
  addLink(55,81,0.350000)
  addLink(55,34,0.225000)
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
  addLink(58,28,0.225000)
  addLink(59,60,0.350000)
  addLink(59,61,0.350000)
  addLink(60,59,0.350000)
  addLink(60,61,0.350000)
  addLink(61,59,0.350000)
  addLink(61,60,0.350000)
  addLink(62,38,0.350000)
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
  addLink(68,21,0.225000)
  addLink(69,4,0.225000)
  addLink(69,19,0.225000)
  addLink(69,15,0.225000)
  addLink(70,14,0.350000)
  addLink(70,55,0.350000)
  addLink(70,28,0.475000)
  addLink(70,32,0.225000)
  addLink(70,0,0.350000)
  addLink(70,1,0.225000)
  addLink(70,42,0.225000)
  addLink(70,4,0.225000)
  addLink(70,11,0.225000)
  addLink(71,11,0.350000)
  addLink(71,28,0.225000)
  addLink(71,7,0.225000)
  addLink(73,74,0.350000)
  addLink(73,5,0.350000)
  addLink(73,19,0.225000)
  addLink(74,73,0.350000)
  addLink(74,5,0.350000)
  addLink(74,19,0.225000)
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
  addLink(80,49,0.350000)
  addLink(80,8,0.225000)
  addLink(80,32,0.225000)
  addLink(81,14,0.475000)
  addLink(81,55,0.350000)
  addLink(81,1,0.225000)
  addLink(81,28,0.350000)
  addLink(81,96,0.350000)
  addLink(81,7,0.350000)
  addLink(81,10,0.225000)
  addLink(81,0,0.225000)
  addLink(82,38,0.350000)
  addLink(82,62,0.225000)
  addLink(83,31,0.350000)
  addLink(83,84,0.225000)
  addLink(83,95,0.225000)
  addLink(83,102,0.225000)
  addLink(84,31,0.350000)
  addLink(84,83,0.225000)
  addLink(84,95,0.225000)
  addLink(85,99,0.475000)
  addLink(86,87,0.350000)
  addLink(86,88,0.475000)
  addLink(87,86,0.350000)
  addLink(87,88,0.350000)
  addLink(88,86,0.475000)
  addLink(88,87,0.350000)
  addLink(90,7,0.350000)
  addLink(90,32,0.225000)
  addLink(90,98,0.225000)
  addLink(91,92,0.350000)
  addLink(92,91,0.350000)
  addLink(95,83,0.225000)
  addLink(95,31,0.350000)
  addLink(95,84,0.225000)
  addLink(96,81,0.350000)
  addLink(96,7,0.350000)
  addLink(98,90,0.225000)
  addLink(99,85,0.475000)
  addLink(100,101,0.350000)
  addLink(101,100,0.350000)
  addLink(102,83,0.225000)


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