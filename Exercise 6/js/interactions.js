/* Ex 6.2: Interactions - Filters */

const populateFilters = (data) => {
    // 1. Build the User Interface (Buttons)
    const filterContainer = d3.select("#filters_screen");

    const buttons = filterContainer.selectAll("button")
        .data(filters)
        .join("button")
        .text(d => d.label)
        .attr("class", "filter-btn")
        .classed("active", d => d.isActive); // Initially set the active class

    // 2. Add Interactivity (Click Event)
    buttons.on("click", (event, d) => {
        // Update the state: only the clicked button is active
        filters.forEach(f => f.isActive = (f.id === d.id));

        // Re-apply the active class based on the updated state
        buttons.classed("active", f => f.isActive);

        // Trigger the histogram update
        updateHistogram(d.id);
    });

    // 3. Update Histogram Function
    const updateHistogram = (selectedId) => {
        // Filter the data based on screen tech
        let updatedData = data;
        if (selectedId !== "all") {
            updatedData = data.filter(tv => tv.screenTech === selectedId);
        }

        // Re-generate the bins with the filtered data
        const updatedBins = binGenerator(updatedData);

        // Select the existing bars and apply transitions
        d3.select("#histogram-chart").select("g").selectAll("rect.bar")
            .data(updatedBins)
            // Start the transition animation
            .transition()
            .duration(800) // 800 milliseconds for a smooth animation
            .ease(d3.easeCubicOut) // Start fast, then slow down smoothly
            .attr("y", d => yScale(d.length))
            .attr("height", d => innerHeight - yScale(d.length));
    };
};

// Ex 6.4 Tooltips and Mouse Events

const createTooltip = () => {
    // 1. Append tooltip group to innerChartS (hidden by default)
    const tooltip = innerChartS.append("g")
        .attr("class", "tooltip")
        .style("opacity", 0)
        // VERY IMPORTANT: prevents the tooltip itself from triggering mouseleave on circles
        .style("pointer-events", "none"); 

    // 2. Background rectangle
    tooltip.append("rect")
        .attr("width", tooltipWidth)
        .attr("height", tooltipHeight)
        .attr("fill", barColor)
        .attr("opacity", 0.9) // slightly transparent
        .attr("rx", 5) // curved corners
        .attr("ry", 5);

    // 3. Text Line 1: Brand and Model (Extension feature!)
    tooltip.append("text")
        .attr("class", "tooltip-text-line1")
        .attr("x", 10)
        .attr("y", 22)
        .style("fill", "white")
        .style("font-size", "14px")
        .style("font-weight", "bold");

    // 4. Text Line 2: Screen Size and Tech
    tooltip.append("text")
        .attr("class", "tooltip-text-line2")
        .attr("x", 10)
        .attr("y", 42)
        .style("fill", "white")
        .style("font-size", "12px");
};

const handleMouseEvents = () => {
    // Select all circles in the scatter plot
    innerChartS.selectAll("circle")
        .on("mouseenter", (e, d) => {
            // Update tooltip text using the bound data (d)
            const brandName = d.brand.charAt(0).toUpperCase() + d.brand.slice(1);
            
            const line1 = d3.select(".tooltip-text-line1");
            line1.text(`${brandName} (${d.model})`);
            
            const line2 = d3.select(".tooltip-text-line2");
            line2.text(`${d.screenSize}-inch ${d.screenTech} TV`);

            // DYNAMIC WIDTH CALCULATION:
            // Get the pixel length of both lines of text to ensure the box fits perfectly
            const textWidth1 = line1.node().getComputedTextLength();
            const textWidth2 = line2.node().getComputedTextLength();
            const dynamicWidth = Math.max(textWidth1, textWidth2) + 20; // 20px for left/right padding

            // Update the background rectangle's width
            d3.select(".tooltip rect").attr("width", dynamicWidth);

            // Get circle coordinates using the event target (e)
            const cx = parseFloat(e.target.getAttribute("cx"));
            const cy = parseFloat(e.target.getAttribute("cy"));

            // Move the tooltip and make it visible with a smooth transition
            d3.select(".tooltip")
                .attr("transform", `translate(${cx + 10}, ${cy - tooltipHeight - 10})`)
                .transition()
                .duration(200)
                .style("opacity", 1);
            
            // Highlight the hovered circle
            d3.select(e.target)
                .attr("stroke", "#333")
                .attr("stroke-width", 2)
                .attr("opacity", 1);
        })
        .on("mouseleave", (e, d) => {
            // Hide tooltip and move it far away
            d3.select(".tooltip")
                .transition()
                .duration(200)
                .style("opacity", 0)
                .attr("transform", "translate(-999, -999)");
            
            // Revert circle style
            d3.select(e.target)
                .attr("stroke", "none")
                .attr("opacity", 0.5);
        });
};

