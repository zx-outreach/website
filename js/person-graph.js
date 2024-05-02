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

  var addLink = function (a, b) {
    data.links.push({
      source: a,
      target: b
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
  addNode(12,"Nicholas Chancellor", "person")
  addNode(13,"Emmanuel Jeandel", "person")
  addNode(14,"Marta Estarellas", "person")
  addNode(15,"Quanlong Wang", "person")
  addNode(16,"Cole Comfort", "person")
  addNode(17,"Craig Gidney", "person")
  addNode(18,"Austin Fowler", "person")
  addNode(19,"Miriam Backens", "person")
  addNode(20,"Hector Miller-Bakewell", "person")
  addNode(21,"Renaud Vilmart", "person")
  addNode(22,"Dominic Horsman", "person")
  addNode(23,"Xiaoning Bian", "person")
  addNode(24,"Amar Hadzihasanovic", "person")
  addNode(25,"Kang Feng Ng", "person")
  addNode(26,"Louis Lemonnier", "person")
  addNode(27,"Sal Wolffs", "person")
  addNode(28,"Alexander Cowtan", "person")
  addNode(29,"Will Simmons", "person")
  addNode(30,"Jonathan Gorard", "person")
  addNode(31,"Manojna Namuduri", "person")
  addNode(32,"Xerxes Arsiwalla", "person")
  addNode(33,"Stefano Gogioso", "person")
  addNode(34,"William Zeng", "person")
  addNode(35,"Marc de Visme", "person")
  addNode(36,"Lia Yeh", "person")
  addNode(37,"Alex Townsend-Teague", "person")
  addNode(38,"Richie Yeung", "person")
  addNode(39,"Shahn Majid", "person")
  addNode(40,"Kostia Chardonnet", "person")
  addNode(41,"Beno\^it Valiron", "person")
  addNode(42,"Korbinian Staudacher", "person")
  addNode(43,"Mark Koch", "person")
  addNode(44,"Agustin Borgna", "person")
  addNode(45,"Margarita Veshchezerova", "person")
  addNode(46,"Robert Booth", "person")
  addNode(47,"Tobias Stollenwerk", "person")
  addNode(48,"Stuart Hadfield", "person")
  addNode(49,"Tom Peham", "person")
  addNode(50,"Lukas Burgholzer", "person")
  addNode(51,"Robert Wille", "person")
  addNode(52,"Tommy McElvanney", "person")
  addNode(53,"David Winderl", "person")
  addNode(54,"Adrian Lehmann", "person")
  addNode(55,"Ben Caldwell", "person")
  addNode(56,"Robert Rand", "person")
  addNode(57,"Tuomas Laakkonen", "person")
  addNode(58,"Julien Codsi", "person")
  addNode(59,"Razin Shaikh", "person")
  addNode(60,"Daniel Litinski", "person")
  addNode(61,"Naomi Nickerson", "person")
  addNode(62,"Patrick Roy", "person")
  addNode(63,"Tobias Guggemos", "person")
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
  addNode(74,"Boldizsar Poor", "person")
  addNode(75,"Matthew Sutcliffe", "person")
  addLink(0,7)
  addLink(0,3)
  addLink(0,64)
  addLink(0,22)
  addLink(0,1)
  addLink(0,2)
  addLink(0,36)
  addLink(0,15)
  addLink(0,59)
  addLink(0,38)
  addLink(0,9)
  addLink(0,33)
  addLink(1,3)
  addLink(1,24)
  addLink(1,64)
  addLink(1,20)
  addLink(1,11)
  addLink(1,25)
  addLink(1,2)
  addLink(1,36)
  addLink(1,19)
  addLink(1,15)
  addLink(1,59)
  addLink(1,38)
  addLink(1,33)
  addLink(2,7)
  addLink(2,37)
  addLink(2,3)
  addLink(2,11)
  addLink(2,6)
  addLink(2,38)
  addLink(2,33)
  addLink(2,57)
  addLink(3,38)
  addLink(3,33)
  addLink(4,64)
  addLink(4,16)
  addLink(4,22)
  addLink(4,13)
  addLink(4,11)
  addLink(4,36)
  addLink(4,26)
  addLink(4,35)
  addLink(4,21)
  addLink(4,46)
  addLink(4,5)
  addLink(5,44)
  addLink(5,7)
  addLink(5,67)
  addLink(5,41)
  addLink(5,22)
  addLink(5,13)
  addLink(5,11)
  addLink(5,35)
  addLink(5,45)
  addLink(5,19)
  addLink(5,69)
  addLink(5,6)
  addLink(5,68)
  addLink(5,15)
  addLink(5,21)
  addLink(5,9)
  addLink(6,7)
  addLink(6,22)
  addLink(6,11)
  addLink(6,15)
  addLink(6,10)
  addLink(6,9)
  addLink(6,23)
  addLink(7,8)
  addLink(7,16)
  addLink(7,22)
  addLink(7,20)
  addLink(7,11)
  addLink(7,36)
  addLink(7,26)
  addLink(7,75)
  addLink(7,19)
  addLink(7,65)
  addLink(7,12)
  addLink(7,15)
  addLink(7,21)
  addLink(7,38)
  addLink(7,9)
  addLink(7,27)
  addLink(7,33)
  addLink(7,57)
  addLink(8,9)
  addLink(9,28)
  addLink(9,22)
  addLink(9,11)
  addLink(9,15)
  addLink(9,29)
  addLink(10,11)
  addLink(10,12)
  addLink(11,64)
  addLink(11,20)
  addLink(11,58)
  addLink(11,36)
  addLink(11,26)
  addLink(11,19)
  addLink(11,65)
  addLink(11,12)
  addLink(11,62)
  addLink(11,21)
  addLink(11,38)
  addLink(11,46)
  addLink(11,27)
  addLink(11,57)
  addLink(12,22)
  addLink(13,45)
  addLink(13,15)
  addLink(13,21)
  addLink(15,24)
  addLink(15,74)
  addLink(15,64)
  addLink(15,22)
  addLink(15,25)
  addLink(15,36)
  addLink(15,43)
  addLink(15,19)
  addLink(15,59)
  addLink(15,21)
  addLink(15,38)
  addLink(15,23)
  addLink(16,46)
  addLink(17,18)
  addLink(19,20)
  addLink(19,27)
  addLink(19,52)
  addLink(20,27)
  addLink(21,67)
  addLink(21,41)
  addLink(21,40)
  addLink(21,35)
  addLink(21,68)
  addLink(24,25)
  addLink(28,39)
  addLink(28,29)
  addLink(30,31)
  addLink(30,32)
  addLink(31,32)
  addLink(33,36)
  addLink(33,38)
  addLink(33,34)
  addLink(35,40)
  addLink(36,64)
  addLink(36,65)
  addLink(36,62)
  addLink(36,59)
  addLink(36,38)
  addLink(36,46)
  addLink(38,64)
  addLink(38,43)
  addLink(38,59)
  addLink(38,57)
  addLink(40,41)
  addLink(41,44)
  addLink(42,51)
  addLink(42,63)
  addLink(46,64)
  addLink(47,48)
  addLink(49,50)
  addLink(49,51)
  addLink(50,51)
  addLink(54,55)
  addLink(54,56)
  addLink(55,56)
  addLink(59,64)
  addLink(60,72)
  addLink(60,70)
  addLink(60,61)
  addLink(60,73)
  addLink(61,71)
  addLink(61,72)
  addLink(61,70)
  addLink(61,73)
  addLink(67,68)
  addLink(70,71)
  addLink(70,72)
  addLink(70,73)
  addLink(71,72)
  addLink(71,73)
  addLink(72,73)


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
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody().strength(-700))
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

  var labels1 = node.append("text")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.text;
    })
    .attr('x', 6)
    .attr('y', 3);


  function getTextBox(selection) {
    selection.each(function (d) {
      d.bbox = this.getBBox();
    })
  }

  node.call(getTextBox)
    .append("rect")
    .attr("x", function (d) {
      return d.bbox.x
    })
    .attr("y", function (d) {
      return d.bbox.y
    })
    .attr("width", function (d) {
      return d.bbox.width
    })
    .attr("height", function (d) {
      return d.bbox.height
    })
    .attr("fill", d => color(d.type))
    .attr("opacity", "0.2")


  var labels2 = node.append("text")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.text;
    })
    .attr('x', 6)
    .attr('y', 3);



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