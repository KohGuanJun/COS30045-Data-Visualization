/* Ex 6.3: Scatterplot Drawing Logic */

const drawScatterplot = (data) => {
    // 1. Setup SVG container
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("border", "1px solid #ccc");

    // 2. Assign the inner chart to the shared variable innerChartS
    innerChartS = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // 3. Set up x and y scales
    // X-axis: Star Rating
    const maxStar = d3.max(data, d => d.star);
    xScaleS.domain([0, maxStar]).range([0, innerWidth]);

    // Y-axis: Energy Consumption
    const maxEnergy = d3.max(data, d => d.energyConsumption);
    yScaleS.domain([0, maxEnergy]).range([innerHeight, 0]);

    // 4. Draw the circles
    innerChartS.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScaleS(d.star))
        .attr("cy", d => yScaleS(d.energyConsumption))
        .attr("r", 4)
        .attr("fill", d => colorScale(d.screenTech))
        // Make circles less opaque to see overlapping dense data
        .attr("opacity", 0.5);

    // 5. Add Axes
    const bottomAxis = d3.axisBottom(xScaleS);
    innerChartS.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);

    const leftAxis = d3.axisLeft(yScaleS);
    innerChartS.append("g")
        .call(leftAxis);

    // 6. Labels
    // X-axis label
    innerChartS.append("text")
        .text("Star Rating")
        .attr("x", innerWidth / 2)
        .attr("y", innerHeight + 35)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold");

    // Y-axis label (Rotated vertically as instructed!)
    innerChartS.append("text")
        .text("Energy Consumption (kWh/year)")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold");

    // 7. Add Legend inside SVG (top right)
    const legendGroup = svg.append("g")
        .attr("transform", `translate(${width - 100}, 20)`);

    const categories = ["LCD", "LED", "OLED"];

    categories.forEach((category, i) => {
        // Group for each legend item
        const itemGroup = legendGroup.append("g")
            .attr("transform", `translate(0, ${i * 20})`); // Space out by 20px vertically

        // Coloured rectangle
        itemGroup.append("rect")
            .attr("width", 12)
            .attr("height", 12)
            .attr("fill", colorScale(category));

        // Label text
        itemGroup.append("text")
            .text(category)
            .attr("x", 20)
            .attr("y", 10)
            .style("font-size", "12px")
            .style("font-family", "Arial, sans-serif");
    });
};
