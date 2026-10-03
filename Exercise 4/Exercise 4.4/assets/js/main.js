/* AI-Generated: D3 setup and CSV data loading for Exercise 4.4 */

// 1. Setup the SVG Canvas (from Ex 4.3)
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

// 2. Placeholder function for the next exercise
function drawBarChart(data) {
    console.log("Success! Data has been passed to drawBarChart() ready for Exercise 4.5.");
    console.log(data);
}

// 3. Load CSV Data
d3.csv("data/tvBrandCount.csv", d => {
    // Row conversion: turn the string 'count' into a number using '+'
    return {
        brand: d.brand,
        count: +d.count
    };
}).then(data => {
    // Step 3: Finding information about the data set
    console.log("=== RAW DATA ARRAY ===");
    console.log(data);
    console.log("Number of rows:", data.length);
    console.log("Max count:", d3.max(data, d => d.count));
    console.log("Min count:", d3.min(data, d => d.count));
    console.log("Extent (Min & Max):", d3.extent(data, d => d.count));

    // Sort data (descending order by count)
    data.sort((a, b) => b.count - a.count);
    console.log("=== SORTED DATA ARRAY ===");
    console.log(data);

    // Pass data to build the visualization
    drawBarChart(data);
});
