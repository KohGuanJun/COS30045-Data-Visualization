/* AI-Generated: D3 Scatter Plot and Line Chart (Ex 5.2) */

const drawLineChart = data => {
    // 1. Setup margins and dimensions (same as Ex 5.1 for consistency)
    const margin = { top: 40, right: 40, bottom: 60, left: 60 };
    const width = 600;
    const height = 500;
    
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // 2. Add SVG container
    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("border", "1px solid black");

    // 3. Create innerChart group
    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // 4. Create Scales
    // X-Axis (Time/Years) -> scaleLinear (using d3.extent to find min and max year automatically)
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);

    // Y-Axis (Price) -> scaleLinear (from 0 to max price, inverted for SVG)
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.averagePrice)])
        .range([innerHeight, 0]);

    // 5. Setup and Add Axes
    // Force year to be interpreted as an integer (e.g. 2000, not 2,000)
    const bottomAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    innerChart.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis)
        .selectAll("text")
        .style("font-size", "14px");

    const leftAxis = d3.axisLeft(yScale);
    innerChart.append("g")
        .call(leftAxis)
        .selectAll("text")
        .style("font-size", "12px");

    // Y-Axis Label
    innerChart.append("text")
        .text("Average Price ($ / MWh)")
        .attr("y", -15)
        .attr("x", 0)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold");

    // 6. Draw Scatter Plot (Circles)
    innerChart.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.averagePrice))
        .attr("r", 4) // Radius of 4px
        .attr("fill", "#FF6B6B"); // A nice red/coral color for dots

    // 7. Draw Line
    // Setup line generator
    const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.averagePrice))
        .curve(d3.curveMonotoneX); // Makes the line slightly smooth and stylish!

    // Append a single path using datum() instead of data()
    innerChart.append("path")
        .datum(data)
        .attr("fill", "none") // Lines shouldn't be filled, or they become ugly polygons
        .attr("stroke", "#FF6B6B")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator);
};

// 8. Load Data
d3.csv("data/ARE_Spot_Prices.csv", d => {
    return {
        // Read year as a number (+), exact column name "Year"
        year: +d.Year,
        // Exact column name from CSV
        averagePrice: +d["Average Price (notTas-Snowy)"]
    };
}).then(data => {
    console.log("Loaded Line Chart Data:", data);
    drawLineChart(data);
});
