# Exercise 4 – Introduction to D3.js

In this exercise, you will learn the basics of **D3.js**, a JavaScript library used to create interactive data visualisations on the web.

The exercises in this folder guide you through the fundamental concepts needed to build visualisations using D3.

## Exercises

- **Exercise 4.1 – Draw SVGs**  
  Learn how to create SVG elements that are used to draw graphics on a webpage.

- **Exercise 4.3 – D3 setup**  
  Set up the D3 library in your webpage.

- **Exercise 4.4 – Load data from CSV**  
  Learn how to load and read data from a CSV file using D3.

- **Exercise 4.5 – D3 binding and drawing with data**  
  Bind data to visual elements and draw graphics based on the data.

- **Exercise 4.6 – Scaling charts**  
  Use D3 scales to map data values to positions in a chart.

## Generative AI Reflection

- **Which tool(s) you used (if any)**: Gemini / ChatGPT
- **What you used GenAI for**: I used Generative AI to assist in calculating SVG coordinates for custom shapes (such as the house polygon roof, chimney, and bezier curve paths), scaffolding the SVG property comparison table, and setting up initial D3 scale definitions (`d3.scaleLinear` and `d3.scaleBand`).
- **What you changed or adapted after generation**: I restructured the SVG comparison table to strictly isolate raw code attributes into separate columns from explanations to improve readability. I also adjusted SVG label positioning, added missing elements (cloud, fence, apples, sun rays), and verified responsive viewBox dimensions.
- **What you learned from using GenAI**: I learned how SVG coordinate spaces work (origin at top-left 0,0), how `d3.scaleBand` maps discrete categories with `.bandwidth()`, and how `d3.scaleLinear` normalizes data domains into pixel ranges.
- **Any limitations or issues you encountered**: GenAI initially mixed descriptive English explanations into code columns and generated hardcoded coordinates that caused text to overlap. Careful manual code review and iterative prompting were required to ensure academic compliance and clean layout.
