# Project Walkthrough

## Overview

Orbital Mission Control QA is a space-themed QA automation portfolio project built with React, TypeScript, Vite, Playwright, Git, and GitHub Actions.

The project simulates a mission-operations dashboard used to monitor spacecraft fleet status, mission queues, operational alerts, and dashboard metrics. It was built to demonstrate both automated and manual QA skills in a realistic software testing workflow.

## Why This Project Was Built

This project was created to demonstrate practical QA engineering skills in a portfolio-ready application.

The goal was not only to write automated tests, but to show how a QA engineer can:

* Understand application behavior
* Improve testable product functionality
* Validate positive and negative user flows
* Write maintainable Playwright tests
* Organize automation with the Page Object Model
* Separate test data from test logic
* Document manual test cases and defect reports
* Run tests automatically through GitHub Actions CI

## Application Features

The application includes:

* Mission operator login page
* Login validation for valid, invalid, and empty credentials
* Operations dashboard
* Fleet Status section
* Mission Queue section
* Mission Queue filtering
* Operational Alerts section
* Dashboard metrics
* Space-themed UI with spacecraft assets

## QA Automation Coverage

The Playwright test suite currently includes 14 passing tests covering:

* Login page smoke test
* Successful operator login
* Invalid credential validation
* Empty credential validation
* Missing username validation
* Missing password validation
* Dashboard loading after login
* Dashboard metric validation
* Spacecraft fleet telemetry validation
* Mission queue validation
* Operational alert validation
* Mission queue filtering by mission name
* Mission queue filtering by mission ID
* Mission queue empty-state validation

## Test Architecture

The automation suite uses the Page Object Model to keep tests maintainable.

The test structure is organized as:

```text
tests
│   app.spec.ts
│   dashboard.spec.ts
│   login.spec.ts
│
├───data
│       dashboardData.ts
│       users.ts
│
└───pages
        DashboardPage.ts
        LoginPage.ts