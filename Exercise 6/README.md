# Exercise 6 – Interactive Visualisations

## Overview
In this exercise you will build **interactive data visualisations using D3.js**. Interaction allows users to explore the data and gain deeper insights through features such as filtering and tooltips.

Use the **same repository you forked earlier for this unit** and complete this exercise inside the **Exercise 6 folder**.

---

## Exercise 6.1 – Interactive Histogram: Filtering

### Aim
Build a histogram and add **interactive filters**.

### Purpose
Interaction is one of the key advantages of visualisations on the web. In this exercise you will build a **histogram using the TV dataset** and allow users to filter the data.

Users should be able to explore energy consumption for different TV screen technologies such as:

- LCD
- LED
- OLED

### Preparation
Before starting, review:

- This week's lecture slides
- **Chapter 7 of Dufour and Meeks (2024)**

---

## Exercise 6.2 – Interactive Scatterplot: Tooltips

### Aim
Build a scatterplot and add **tooltips and colour coding**.

### Purpose
Tooltips are one of the most common interactive features in data visualisations. In this exercise you will create a **scatterplot using the TV dataset**.

The chart should allow users to explore the relationship between:

- Energy consumption
- Star rating
- Screen size
- Screen technology

Tooltips should display additional information such as **screen size**, and colours should represent **screen type**.

### Preparation
Before starting, review:

- This week's lecture slides
- **Chapter 7 of Dufour and Meeks (2024)**

---

## Instructions

1. Open your **existing forked repository**.
2. Navigate to the **Exercise 6 folder**.
3. Add the files needed to implement the histogram and scatterplot.
4. Implement the required interactive features using **D3.js**.
5. Commit and push your changes regularly to GitHub.

Your forked repository will serve as your **submission record**.

## Generative AI Reflection

- **Which tool(s) you used (if any)**: Gemini / ChatGPT
- **What you used GenAI for**: I used Generative AI to establish the multi-file architecture (`shared-constants.js`, `load-data.js`, `interactions.js`, `histogram.js`, `scatterplot.js`), construct the `d3.bin()` generator, and write the event listener logic for interactive buttons and tooltips.
- **What you changed or adapted after generation**: I filtered out extreme TV energy consumption outliers (>1800 kWh) to prevent graph distortion; prefixed scatterplot variables with "S" (`xScaleS`, `innerChartS`) to eliminate global scope collisions with the histogram; and replaced a fixed-width tooltip with dynamic text width measurement using `.node().getComputedTextLength()` so long TV model names would not bleed outside the box.
- **What you learned from using GenAI**: I learned the D3 Update pattern with smooth transitions (`.transition().duration().ease()`), how `d3.bin()` buckets continuous variables into discrete arrays, and how JavaScript event parameters differentiate between `e` (DOM event/target) and `d` (bound datum).
- **Any limitations or issues you encountered**: GenAI initially hardcoded the tooltip container width, resulting in text overflow for longer brand and model names. It also initially placed scales in chart files rather than `shared-constants.js`. I had to architect the code to share state and dynamically resize UI elements.
