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
  addNode(12,"Emmanuel Jeandel", "person")
  addNode(13,"Quanlong Wang", "person")
  addNode(14,"Cole Comfort", "person")
  addNode(15,"Craig Gidney", "person")
  addNode(16,"Austin Fowler", "person")
  addNode(17,"Miriam Backens", "person")
  addNode(18,"Hector Miller-Bakewell", "person")
  addNode(19,"Renaud Vilmart", "person")
  addNode(20,"Xiaoning Bian", "person")
  addNode(21,"Louis Lemonnier", "person")
  addNode(22,"Dominic Horsman", "person")
  addNode(23,"Sal Wolffs", "person")
  addNode(24,"Alexander Cowtan", "person")
  addNode(25,"Will Simmons", "person")
  addNode(26,"Jonathan Gorard", "person")
  addNode(27,"Manojna Namuduri", "person")
  addNode(28,"Xerxes Arsiwalla", "person")
  addNode(29,"Stefano Gogioso", "person")
  addNode(30,"Marc de Visme", "person")
  addNode(31,"Lia Yeh", "person")
  addNode(32,"Richie Yeung", "person")
  addNode(33,"Shahn Majid", "person")
  addNode(34,"Kostia Chardonnet", "person")
  addNode(35,"Korbinian Staudacher", "person")
  addNode(36,"Beno{\^i}t Valiron", "person")
  addNode(37,"Margarita Veshchezerova", "person")
  addNode(38,"Tom Peham", "person")
  addNode(39,"Lukas Burgholzer", "person")
  addNode(40,"Robert Wille", "person")
  addNode(41,"Tommy McElvanney", "person")
  addNode(42,"David Winderl", "person")
  addNode(43,"Tuomas Laakkonen", "person")
  addNode(44,"Julien Codsi", "person")
  addNode(45,"Razin Shaikh", "person")
  addNode(46,"Daniel Litinski", "person")
  addNode(47,"Naomi Nickerson", "person")
  addNode(48,"Boldizs{\'a}r Po{\'o}r", "person")
  addNode(49,"Alexandre Cl{\'e}ment", "person")
  addNode(50,"Fernando Pastawski", "person")
  addNode(51,"Sam Roberts", "person")
  addLink(0,7)
  addLink(0,3)
  addLink(0,48)
  addLink(0,22)
  addLink(0,1)
  addLink(0,2)
  addLink(0,31)
  addLink(0,13)
  addLink(0,45)
  addLink(0,32)
  addLink(0,29)
  addLink(1,3)
  addLink(1,48)
  addLink(1,18)
  addLink(1,11)
  addLink(1,2)
  addLink(1,31)
  addLink(1,17)
  addLink(1,13)
  addLink(1,45)
  addLink(1,32)
  addLink(1,29)
  addLink(2,7)
  addLink(2,3)
  addLink(2,11)
  addLink(2,6)
  addLink(2,29)
  addLink(2,43)
  addLink(3,32)
  addLink(3,29)
  addLink(4,22)
  addLink(4,12)
  addLink(4,21)
  addLink(4,30)
  addLink(4,19)
  addLink(4,5)
  addLink(5,7)
  addLink(5,49)
  addLink(5,36)
  addLink(5,22)
  addLink(5,12)
  addLink(5,11)
  addLink(5,30)
  addLink(5,37)
  addLink(5,6)
  addLink(5,19)
  addLink(5,9)
  addLink(6,7)
  addLink(6,22)
  addLink(6,11)
  addLink(6,13)
  addLink(6,10)
  addLink(6,9)
  addLink(6,20)
  addLink(7,8)
  addLink(7,14)
  addLink(7,22)
  addLink(7,18)
  addLink(7,11)
  addLink(7,21)
  addLink(7,17)
  addLink(7,13)
  addLink(7,19)
  addLink(7,9)
  addLink(7,23)
  addLink(8,9)
  addLink(9,24)
  addLink(9,22)
  addLink(9,11)
  addLink(9,25)
  addLink(10,11)
  addLink(11,18)
  addLink(11,44)
  addLink(11,31)
  addLink(11,21)
  addLink(11,17)
  addLink(11,19)
  addLink(11,23)
  addLink(11,43)
  addLink(12,37)
  addLink(12,19)
  addLink(13,48)
  addLink(13,22)
  addLink(13,31)
  addLink(13,45)
  addLink(13,32)
  addLink(13,20)
  addLink(15,16)
  addLink(17,18)
  addLink(17,23)
  addLink(17,41)
  addLink(18,23)
  addLink(19,49)
  addLink(19,34)
  addLink(19,30)
  addLink(24,33)
  addLink(24,25)
  addLink(26,27)
  addLink(26,28)
  addLink(27,28)
  addLink(29,32)
  addLink(30,34)
  addLink(31,48)
  addLink(31,45)
  addLink(31,32)
  addLink(32,48)
  addLink(32,45)
  addLink(36,49)
  addLink(38,39)
  addLink(38,40)
  addLink(39,40)
  addLink(45,48)
  addLink(46,50)
  addLink(46,47)
  addLink(46,51)
  addLink(47,50)
  addLink(47,51)
  addLink(50,51)


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