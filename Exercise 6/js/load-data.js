/* Ex 6: Load Data */

d3.csv("DATA/Ex6_TVdata_withStar.csv", d => {
    return {
        brand: d.brand,
        model: d.model,
        screenSize: +d.screenSize,
        screenTech: d.screenTech,
        star: +d.star,
        energyConsumption: +d.energyConsumption
    };
}).then(data => {
    console.log("Loaded TV Data (Raw):", data);
    
    // As per instruction: "exclude this data point which is not visible on the chart" (>1800)
    const filteredData = data.filter(d => d.energyConsumption <= 1800);
    console.log("Data after removing >1800 outliers:", filteredData);
    
    drawHistogram(filteredData);
    
    // Call the interaction function to setup buttons and listeners
    populateFilters(filteredData);
});

