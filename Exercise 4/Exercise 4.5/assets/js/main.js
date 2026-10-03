/* AI-Generated: D3 Data Binding and Drawing for Exercise 4.5 */

// 1. Setup the SVG Canvas
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

// 2. Function to build the chart
const drawBarChart = data => {
    // Define layout constants
    const barHeight = 25;
    const barSpacing = 5;

    // Step 1: Bind the data to DOM elements
    svg.selectAll("rect")
      .data(data)
      .join("rect")
      // Assign a class based on the count data
      .attr("class", d => "bar-" + d.count)
      
      // Step 2 & 3: Make data visible and space them out
      // x is always 0 (start at the left edge)
      .attr("x", 0)
      // y uses the index 'i' to space the bars vertically
      .attr("y", (d, i) => i * (barHeight + barSpacing))
      // width is directly driven by the data value
      .attr("width", d => d.count)
      // height is fixed
      .attr("height", barHeight)
      // Give the bars a fill color
      .attr("fill", "#20B2AA");
};

// 3. Load CSV Data
d3.csv("data/tvBrandCount.csv", d => {
    // Row conversion
    return {
        brand: d.brand,
        count: +d.count
    };
}).then(data => {
    // Sort data (descending order by count) for a better looking chart
    data.sort((a, b) => b.count - a.count);
    
    // Pass the cleaned, sorted data to our drawing function
    drawBarChart(data);
});
