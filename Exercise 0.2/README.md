# Appliance Energy Consumption Website

A multi-page static website built using HTML, CSS, and JavaScript. This project aims to demonstrate web development fundamentals while providing a tool and information about appliance energy usage.

## Folder Structure

The project has been refactored into the following clean structure:

```
/
  index.html
  televisions.html
  about.html
  assets/
    css/
      style.css
    js/
      scripts.js
      tailwind-config.js
    img/
      PowerIcon.png
  README.md
```

## Features

- **Home Page**: Overview of appliance energy consumption with an interactive FAQ accordion.
- **Televisions Page**: A deep dive into television panel technologies and energy impacts.
- **About Us & Calculator**: An interactive real-time JavaScript calculator estimating daily, monthly, and yearly costs of standard and custom appliances.
- **External CSS/JS**: Extracted logic and styling to cleanly separate structural code, presentation, and logic.

## Generative AI Reflection

- **Which tool(s) you used (if any)**: ChatGPT/GitHub Copilot/Gemini
- **What you used GenAI for**: Used Generative AI models for restructuring the website, refactoring inline code into external CSS and JavaScript files, and scaffolding boilerplate HTML structural code.
- **What you changed or adapted after generation**: Extracted the Tailwind configuration object into a standalone file `tailwind-config.js` to ensure the CDN properly loads the theme across all pages. Adjusted path routing and linked the local `PowerIcon.png` logo correctly in headers.
- **What you learned from using GenAI**: Generative AI significantly speeds up the grunt work of moving code around and establishing proper HTML5 multi-page foundations, while still requiring architectural guidance.
- **Any limitations or issues you encountered**: GenAI initially tends to keep all CSS and scripts inline because it processes one file at a time; explicit prompting is required to restructure scattered files into standard `assets/` subdirectories.
