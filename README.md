# Playwright-e2e
# Playwright End-to-End Automation Framework

## Project Overview

This project contains automated end-to-end tests developed using Playwright and TypeScript.

The framework automates a complete customer booking journey on the application under test and validates critical functionality including:

- Check Availability
- Booking process
- Guest information submission
- Price validation
- Booking confirmation

---

## Tech Stack

- Playwright
- TypeScript
- Node.js

---

## Framework Design

This automation solution is implemented using Playwright with TypeScript.

For the scope of this assignment, a straightforward test structure was used to focus on automating a complete end-to-end customer booking journey and validating critical business functionality.

Key design considerations:

Playwright Test Runner for test execution and reporting.
TypeScript for improved readability and type safety.
End-to-end test coverage of the booking workflow.
Assertions added throughout the journey to validate UI behavior and booking outcomes.
Reusable constants and test data separated where appropriate.
HTML reports generated through Playwright for test execution results.

---

## Prerequisites

- Node.js v18+
- npm

Verify installation:

node -v
npm -v

---

## Installation

Clone repository:

git clone <repository-url>

Navigate to project:

cd playwright-e2e-automation

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

---

## Running Tests

Run all tests:

npx playwright test

Run specific test:

npx playwright test tests/booking.spec.ts

Run in headed mode:

npx playwright test --headed

Run in UI mode:

npx playwright test --ui

---

## Generate Report

npx playwright show-report

---

## Test Scenario Covered

### End-to-End Room Booking

1. Launch application
2. Verify homepage loads successfully
3. Verify the page title
4. Check availability of the rooms
5. Verify room details
6. Enter booking dates
7. Enter guest details
8. Validate booking price summary
9. Complete booking
10. Verify booking confirmation

---

## Automated Decisions

The room booking journey was selected because it is the primary business-critical workflow of the application. This is the main action that users perform on the platform and directly impacts customer experience and business value.

Automating this flow validates multiple application components in a single test, including:

Room availability and selection
Booking form functionality
Customer information capture
Reservation creation
Booking confirmation

A failure in any of these steps could prevent customers from completing a booking, making it a high-priority scenario for automation.

---

## Assumptions
- Test environment contains at least one available room.
- Booking data can be reused.
- Environment remains stable during execution.

---

## Risks Identified 
- Booking confirmation succeeds but reservation is not created
- Room shows as available when already booked
- Guest details saved incorrectly
- UI layout issues
---

## Assertions Implemented

### Home Page

- Page title validation
- Room cards visibility

### Room Details Page

- Room information displayed
- Price displayed

### Booking Form

- Name field validation
- Email field validation
- Booking date validation

### Price Summary

- Total price displayed
- Price greater than zero
- Price matches expected booking value

### Confirmation Page

- Booking success message displayed
- Confirmation details visible

---

## Reporting

Playwright HTML reports are generated automatically after execution.

Location:

playwright-report/index.html

---

## Author

Navneet Rai
Quality Engineer | Test Automation Engineer
