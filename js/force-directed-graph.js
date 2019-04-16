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

  addNode(30,"Nancy", "place")
  addNode(1,"London", "place")
  addNode(44,"Cambridge", "place")
  addNode(38,"Kyoto", "place")
  addNode(24,"Piza", "place")
  addNode(5,"Grenoble", "place")
  addNode(28,"Glasgow", "place")
  addNode(20,"Durham", "place")
  addNode(14,"Nijmegen", "place")
  addNode(11,"Oxford", "place")
  addNode(17,"Stach Kuijpers", "person")
  addNode(41,"Fabio Zanasi", "person")
  addNode(39,"Vladimir Zamziev", "person")
  addNode(37,"Amar Hadjihasanovic", "person")
  addNode(45,"Will Simons", "person")
  addNode(10,"Niel de Beaudrap", "person")
  addNode(22,"John van de Wetering", "person")
  addNode(23,"Philipe Borehi", "person")
  addNode(32,"Giovanni de Felice", "person")
  addNode(27,"Joe Collins", "person")
  addNode(48,"Titouan Carette", "person")
  addNode(13,"Aleks Kissinger", "person")
  addNode(0,"Hector Miller-Bakewell", "person")
  addNode(40,"Richard East", "person")
  addNode(43,"Ross Duncan", "person")
  addNode(18,"Sal Wolffs", "person")
  addNode(47,"Quanlong Wang", "person")
  addNode(35,"Renaud Vilmart", "person")
  addNode(46,"Kang Feng Ng", "person")
  addNode(4,"Dominic Horsman", "person")
  addNode(29,"Simon Perdrix", "person")
  addNode(21,"Bob Coecke", "person")
  addNode(19,"Nicholas Chancellor", "person")
  addNode(42,"Emmanuel Jeandel", "person")
  addNode(7,"Error correcting codes", "field")
  addNode(36,"ΔZX", "field")
  addNode(15,"PyZX", "field")
  addNode(26,"String diagrams", "field")
  addNode(2,"Completeness", "field")
  addNode(9,"Mixed ZX", "field")
  addNode(25,"Hopf algebras", "field")
  addNode(33,"ZW", "field")
  addNode(12,"Circuit optimisation", "field")
  addNode(8,"Scalable ZX", "field")
  addNode(3,"ZH", "field")
  addNode(6,"Surface codes", "field")
  addNode(34,"Fermionic QC", "field")
  addNode(16,"Quantomatic", "field")
  addNode(31,"MBQC", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(5,4)
  addLink(6,4)
  addLink(7,4)
  addLink(8,4)
  addLink(9,4)
  addLink(11,10)
  addLink(12,10)
  addLink(14,13)
  addLink(3,13)
  addLink(15,13)
  addLink(12,13)
  addLink(7,13)
  addLink(16,13)
  addLink(14,17)
  addLink(3,17)
  addLink(14,18)
  addLink(3,18)
  addLink(20,19)
  addLink(7,19)
  addLink(11,21)
  addLink(2,21)
  addLink(12,21)
  addLink(14,22)
  addLink(3,22)
  addLink(15,22)
  addLink(12,22)
  addLink(24,23)
  addLink(25,23)
  addLink(26,23)
  addLink(28,27)
  addLink(25,27)
  addLink(30,29)
  addLink(2,29)
  addLink(31,29)
  addLink(6,29)
  addLink(9,29)
  addLink(11,32)
  addLink(33,32)
  addLink(34,32)
  addLink(30,35)
  addLink(2,35)
  addLink(36,35)
  addLink(9,35)
  addLink(38,37)
  addLink(33,37)
  addLink(34,37)
  addLink(30,39)
  addLink(16,39)
  addLink(5,40)
  addLink(6,40)
  addLink(8,40)
  addLink(9,40)
  addLink(1,41)
  addLink(25,41)
  addLink(26,41)
  addLink(30,42)
  addLink(2,42)
  addLink(9,42)
  addLink(44,43)
  addLink(12,43)
  addLink(31,43)
  addLink(16,43)
  addLink(44,45)
  addLink(12,45)
  addLink(14,46)
  addLink(33,46)
  addLink(2,46)
  addLink(8,46)
  addLink(11,47)
  addLink(2,47)
  addLink(12,47)
  addLink(30,48)
  addLink(2,48)
  addLink(9,48)
  addLink(8,48)


  // Event handling


  drag = simulation => {

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
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
    return Math.max(-size * 0.9, Math.min(x, size * 0.9))
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
      var str = 200;
      node.vx -= str*k * Math.pow(1.1*node.x / size, 3);
      node.vy -= str*k * Math.pow(1.1*node.y / size, 3);
    }
  }

  const categoryForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      if (node.type == "field") {
        node.y -= k * (node.y - 0.9 * size);
      }
      if (node.type == "place") {
        node.x -= k * (node.x - 0.9 * size);
      }
    }
  }

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("mid", midForce)
    .force("center", d3.forceCenter(0, 0))
    .force("constrain", constrainForce)
    //.force("category", categoryForce)

    
    /*
    */


  const size = 700

  const svg = d3.select("#map").append("svg")
    .attr("width", "90%")
    .attr("height", "90%")
    .attr('viewBox', `-${size} -${size} ${2*size} ${2*size}`)

  const link = svg.append("g")
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

  var node = svg.append("g")
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