
var svgData = [{
    type: 'svg',
    data: {
      viewBox: "0 0 500 100"
    }
  },
  {
    type: 'polyline',
    data: {
      fill: "none",
      stroke: "#e9be3d",
      strokeWidth: "2",
      points: "1,5 6,9 14,1"
    }
  },
];
function getNode(n, v) {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    for (var p in v) {
      n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) {
        return "-" + m.toLowerCase();
      }), v[p]);
    }
    return n
  }
  
  function makeSVG(data) {
    var result;
    data.forEach(
      function(elem, index, array) {
        if (index)
          result.appendChild(getNode(elem.type, elem.data));
        else
          result = getNode(elem.type, elem.data);
      }
    );
    return result;
  }
export {makeSVG, svgData};