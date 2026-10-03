/* AI-Generated: D3 Donut Chart (Ex 5.3) */

const drawDonutChart = data => {
    // 1. Setup dimensions and radius
    const width = 800;
    const height = 400;
    const padding = 20;
    
    // Radius is half of the shortest side minus some padding
    const radius = Math.min(width, height) / 2 - padding;

    // 2. Add SVG container
    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("border", "1px solid black");

    // 3. Create innerChart group
    // CRITICAL DIFFERENCE for Pie charts: We translate the group to the CENTER of the SVG, 
    // because d3.arc draws outwards from [0, 0] in a circle.
    const innerChart = svg.append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // 4. Create the Color Scale (Ordinal)
    // Maps discrete categories to specific colors
    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.sizeCategory))
        // Providing a nice palette: Green for large, Orange for medium, Blue for small
        .range(["#4daf4a", "#ff7f00", "#377eb8"]);

    // 5. Create the Pie Generator (Math Engine)
    const pieGenerator = d3.pie()
        .value(d => d.count)
        .sort(null); // Keep original dataset order

    // Calculate the angles for our data
    const pieData = pieGenerator(data);

    // 6. Create the Arc Generator (Drawing Engine)
    const arcGenerator = d3.arc()
        // innerRadius > 0 turns it into a Donut! (60% of outer radius)
        .innerRadius(radius * 0.45)
        .outerRadius(radius)
        // Bonus styling: padAngle adds gaps between slices, cornerRadius rounds the edges
        .padAngle(0.03)
        .cornerRadius(6);

    // 7. Draw the Arcs (Paths)
    innerChart.selectAll("path")
        .data(pieData)
        .join("path")
        .attr("d", arcGenerator)
        .attr("fill", d => colorScale(d.data.sizeCategory));

    // 8. Add Labels
    innerChart.selectAll("text")
        .data(pieData)
        .join("text")
        // arcGenerator.centroid(d) perfectly calculates the [x, y] of the exact middle of the slice!
        .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
        .attr("text-anchor", "middle")
        .style("font-size", "13px")`n        .style("text-shadow", "1px 1px 3px rgba(0,0,0,0.8)")
        .style("font-weight", "bold")
        .style("fill", "#fff")
        // Display the size category and its count
        .text(d => `${d.data.sizeCategory}: ${d.data.count}`);
};

// 9. Load Data
d3.csv("data/Data_exercise 5.3.csv", d => {
    return {
        // Read exact column names from the CSV
        sizeCategory: d.Screensize_Category.charAt(0).toUpperCase() + d.Screensize_Category.slice(1), // Capitalize first letter
        count: +d.Count
    };
}).then(data => {
    console.log("Loaded Donut Chart Data:", data);
    drawDonutChart(data);
});

