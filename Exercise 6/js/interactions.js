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
