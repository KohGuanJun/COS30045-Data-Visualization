/* Ex 6: Shared Constants */

// 1. Chart Dimensions
const margin = { top: 40, right: 40, bottom: 60, left: 60 };
const width = 800;
const height = 400;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// 2. Colours
const barColor = "#20B2AA"; // Matches the website's primary theme
const bodyBackgroundColor = "#f9f9f9"; // Matches the background container for the gap

// 3. Shared Scales
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// 4. Bin Generator
const binGenerator = d3.bin()
    .value(d => d.energyConsumption);

// 5. Filter State Array
const filters = [
    { id: "all", label: "All", isActive: true },
    { id: "LCD", label: "LCD", isActive: false },
    { id: "LED", label: "LED", isActive: false },
    { id: "OLED", label: "OLED", isActive: false }
];
