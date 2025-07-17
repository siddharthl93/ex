const trace = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

Plotly.newPlot('plot', [trace], {
  title: 'Simple Interactive Plot'
});
