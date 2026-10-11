# Exercise 5 – Multi-Chart Webpage

## Aim
Create a variety of different chart types using **D3.js**.

## Purpose
In previous exercises, we created simple charts such as a horizontal bar chart. In this exercise, you will extend your skills by building multiple chart types and presenting them on a webpage.

This activity focuses on using **D3 to visualise different types of data** and understanding when different charts are appropriate.

## Charts to Create

Using the provided **TV energy consumption dataset** (or your own dataset), your webpage must include the following chart types:

- **Scatter Plot**  
  Energy consumption vs star rating.

- **Donut Chart**  
  Energy consumption for different screen technologies across all TVs combined.

- **Bar Chart**  
  Energy consumption for different screen technologies for **55-inch TVs only**.

- **Line Chart**  
  Spot power prices from **1998 to 2024** (either plot the average or include a line for each state).

You may use the **provided datasets** or your **own dataset**, but your webpage must include **one example of each chart type**.

## Preparation

Before starting this exercise, it is recommended that you:

- Review this week's **lecture slides**
- Review **Chapter 4 and Chapter 5 of Dufour and Meeks (2024)**

## Instructions

Use the **forked repository that you created earlier for this unit**.

1. Open your existing **forked repository**.
2. Navigate to the **Exercise 5 folder**.
3. Add your code and files for this exercise inside that folder.
4. Build a webpage that displays the required charts using **D3.js**.
5. Commit and push your changes regularly to your GitHub repository.

## Submission

Your **forked repository** will serve as your submission.

Ensure that:
- All Exercise 5 files are inside the **Exercise 5 folder**
- Your code is pushed to GitHub
- Your repository link is submitted through the submission system.

## Generative AI Reflection

- **Which tool(s) you used (if any)**: Gemini / ChatGPT
- **What you used GenAI for**: I used Generative AI to scaffold multiple D3.js v7 chart types across separate modular files: a vertical bar chart with margin conventions, a time-series line chart with smooth interpolation (`d3.curveMonotoneX`), and a donut chart using `d3.pie()` and `d3.arc()`.
- **What you changed or adapted after generation**: I resolved text clipping on the Spot Prices line chart Y-axis by re-anchoring labels to "start"; fine-tuned the donut chart's inner radius (`radius * 0.45`) and applied CSS text shadows to ensure white slice labels remained legible against varied colored segments; and adapted chart dimensions to fit cleanly within my custom portfolio template.
- **What you learned from using GenAI**: I learned the standard D3 margin convention using `innerChart` groups, how `d3.pie()` computes segment angles while `arc.centroid()` calculates center points for slice labels, and how `d3.scaleOrdinal` maps categorical data to distinct color hues.
- **Any limitations or issues you encountered**: GenAI initially outputted overlapping axis text that clipped against the SVG boundary and produced code with potential namespace collisions. I had to manually modularize the scripts into separate files (`barChart.js`, `line-chart.js`, `donut-chart.js`) and integrate them cleanly into the unified website layout.
