/* AI-Generated: D3 Scaling implementation for Exercise 4.6 */

// 1. Setup the SVG Canvas
// Shrunk viewBox width to 500, and height to 800 so it's not unreasonably long
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 500 800")
  .style("border", "1px solid black");

// 2. Function to build the scaled chart
const drawBarChart = data => {

    // Step 1: Add Linear scale for count data (X-Axis)
    const xScale = d3.scaleLinear()
      .domain([0, 1200]) // True data range (0 to ~1200)
      .range([0, 400]);  // Pixel range (leaving 100px for labels later)

    // Step 2: Use a band scale for categories (Y-Axis)
    const yScale = d3.scaleBand()
      .domain(data.map(d => d.brand)) // List of all brands
      .range([0, 800])                // Pixel range (matching viewBox height)
      .paddingInner(0.1);             // Adds spacing between bars

    // Bind data and draw scaled rectangles
    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class", d => "bar-" + d.count)
      
      // Layout using SCALES instead of hardcoded math
      .attr("x", 0)
      .attr("y", d => yScale(d.brand))        // yScale automatically calculates the Y coordinate
      .attr("width", d => xScale(d.count))    // xScale automatically calculates the safe width
      .attr("height", yScale.bandwidth())     // yScale automatically calculates the bar thickness
      .attr("fill", "#20B2AA");
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
