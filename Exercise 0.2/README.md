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

- **Which tool(s) you used (if any)**: Gemini / ChatGPT
- **What you used GenAI for**: I used Generative AI to scaffold the complex pure CSS Grid layout (the "Bento Box" design on the Televisions page) and to write the core logic for the interactive Energy Calculator in JavaScript.
- **What you changed or adapted after generation**: The AI initially used the Tailwind CSS framework, which violated the assignment constraints. I had to identify this and prompt the AI to completely rewrite the layout into 100% Vanilla CSS. I also manually adapted the CSS to fix UI bugs, such as removing the duplicate native dropdown arrow in the select menu using `appearance: none;`.
- **What you learned from using GenAI**: By reviewing the generated code, I learned how to use CSS Grid (`grid-template-columns` and `grid-column: span 2`) to create asymmetrical responsive layouts. In JavaScript, I learned how to safely handle user input validation (checking for `isNaN`) and how to format output as currency using `Intl.NumberFormat`.
- **Any limitations or issues you encountered**: A major limitation is that AI often ignores specific project constraints (like "no external CSS frameworks") unless explicitly reminded. It focuses on the quickest solution rather than the required academic approach, meaning human code-review and iterative prompting are absolutely essential to avoid losing marks.
