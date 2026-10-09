/* AI-Generated: D3 Scaling (Ex 4.6) + Grouping & Labels (Ex 4.7) */

// 1. Setup the SVG Canvas
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 500 800")
  .style("border", "1px solid black");

// 2. Function to build the fully labeled chart
const drawBarChart = data => {

    // Scales (4.6)
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .range([0, 350]);

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.brand))
      .range([0, 800])
      .paddingInner(0.15);

    // Step 2 (4.7): Create a group container for our labels and rectangles
    const barAndLabel = svg.selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

    // Step 3 (4.7): Add back the rectangles inside the group
    barAndLabel.append("rect")
      .attr("class", d => "bar-" + d.count)
      .attr("x", 100)
      .attr("y", 0)
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("fill", "#20B2AA");

    // Step 4 (4.7): Add the column category text (Brand Name)
    barAndLabel.append("text")
      .text(d => d.brand)
      .attr("x", 90)
      .attr("y", yScale.bandwidth() / 2 + 4) 
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      .style("font-family", "sans-serif")
      .style("fill", "#333");

    // Step 5 (4.7): Add the value number (Count)
    barAndLabel.append("text")
      .text(d => d.count)
      .attr("x", d => 100 + xScale(d.count) + 5)
      .attr("y", yScale.bandwidth() / 2 + 4)
      .style("font-size", "11px")
      .style("font-family", "sans-serif")
      .style("fill", "#666");
};

// 3. Load CSV Data
d3.csv("data/tvBrandCount.csv", d => {
    return {
        brand: d.brand,
        count: +d.count
    };
}).then(data => {
    data.sort((a, b) => b.count - a.count);
    drawBarChart(data);
});
