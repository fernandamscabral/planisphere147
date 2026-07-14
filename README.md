# Playwright BDD Tests – Hotel Planisphere

This repository contains end-to-end test automation for the [Hotel Planisphere](https://hotel-example-site.takeyaqa.dev/en-US/index.html) web application, using Playwright with Cucumber and Gherkin.

The project was developed during an extra web automation class from the *Formação em Teste de Software e QA* at [Iterasys](https://iterasys.com.br/) (class 147).

The main goal of this project is to practice BDD-style test automation with a focus on automating a hotel reservation flow that involves a dynamic date picker.



## 📚 Context
This was a short guided project developed during a single extra class focused on web test automation.

Instead of building a large test suite, the exercise focused on one common challenge in real-world E2E testing: interacting with a dynamic calendar component.

The implementation was developed alongside instructor guidance as part of the course exercises.



## 🛠️ Tech Stack

- JavaScript
- Playwright
- Cucumber
- Gherkin
- BDD
- HTML report



## 🌐 Application Under Test

- Application: Hotel Planisphere
- URL: https://hotel-example-site.takeyaqa.dev/en-US/index.html
- Type: sandbox web application for test automation practice



## 🧠 Testing Approach

This project uses BDD with Gherkin to describe the hotel reservation flow in a readable format.

The main scenario simulates a user reserving a hotel room by selecting a plan, choosing a check-in date, filling in reservation details, and validating the confirmation page.

A key part of this project is the interaction with the dynamic date picker. Instead of filling the date input directly, the test interacts with the calendar as a real user would: it opens the date picker, calculates a future check-in date, navigates through the calendar months, and selects the correct day.

This approach is important because date pickers often include dynamic behavior, validation rules, disabled dates, month navigation, or JavaScript events that may not be triggered by simply typing a date into the input field.

The scenario covers:

1. Access the Hotel Planisphere home page
2. Open the reservation plans page
3. Select the recommended plan
4. Open the dynamic date picker
5. Navigate to the correct month and year
6. Select a future check-in date
7. Fill in reservation details
8. Confirm the reservation
9. Validate the reservation confirmation page

## 📌 Test Coverage

The project includes one reservation scenario using Scenario Outline with example data.

Covered validations include:

- home page visibility
- plans page visibility
- reservation form visibility
- dynamic check-in date selection
- reservation form filling
- reservation confirmation page validation

## 🗂️ Project Structure

```text
reports/
  cucumber-reports.html

tests/
  features/
    reservar.feature

    steps/
      reservar.steps.js

cucumber.json
package.json
playwright.config.js
```

### Structure overview

- **tests/features/** → Gherkin feature file describing the reservation scenario
- **tests/features/steps/** → Cucumber step definitions implemented with Playwright
- **reports/** → generated Cucumber HTML report
- **cucumber.json** → Cucumber runner configuration
- **package.json** → project dependencies and execution scripts
- **playwright.config.js** → Playwright configuration file

## ▶️ How to Run the Tests

Install dependencies:

```bash
npm install
```

Run the tests:

```bash
npx cucumber-js
```

After execution, the HTML report can be generated according to the Cucumber configuration.

## 📌 Project Status

This repository represents the final state of a short extra web automation exercise developed during QA training at Iterasys.

It is maintained as a study and portfolio project focused on BDD test automation and dynamic calendar interaction with Playwright and Cucumber.


## 📚 Notes

Hotel Planisphere is a sandbox web application used for learning and practicing test automation.

This project does not aim to provide full application coverage. Its purpose is to demonstrate how to automate a reservation flow involving a dynamic date picker, a common component in booking, scheduling, reporting, and backoffice systems.