# Test Strategy

## Overview

This project uses Playwright to validate the core workflows of the Orbital Mission Control application. The test suite is designed to simulate how a QA engineer would approach a production-facing mission operations dashboard: start with critical user access, verify important page loads, and protect core dashboard content from regressions.

The current focus is on reliable end-to-end coverage for login behavior and dashboard visibility.

## Testing Goals

The main goals of the test suite are to:

* Confirm the application loads successfully
* Verify that a valid mission operator can access the dashboard
* Validate that invalid login attempts are rejected
* Confirm that empty or incomplete login forms show clear validation messages
* Verify that critical dashboard sections remain visible after login
* Organize tests in a maintainable structure using the Page Object Model

## Test Coverage

The current Playwright suite covers the following scenarios:

### Smoke Coverage

The smoke test confirms that the mission operator login page loads correctly. This provides a fast signal that the app is reachable and rendering the expected starting screen.

### Positive Login Coverage

The positive login test verifies that a valid operator can sign in using the approved demo credentials and reach the operations dashboard.

Valid demo credentials:

```text
Username: operator@mission.local
Password: orbit123
```

### Negative Login Coverage

The negative login tests verify that the application blocks failed authentication attempts and keeps the user on the login page.

Covered scenarios:

* Invalid username and password
* Empty username and password
* Missing username
* Missing password

These tests are important because authentication failures are common regression points in real applications.

### Dashboard Regression Coverage

The dashboard regression tests verify that core mission operation sections are visible after login, including mission overview information, fleet status, mission queue content, and operational alerts.

The detailed dashboard regression tests now validate:

* Dashboard metric values
* Spacecraft fleet cards
* Spacecraft telemetry details
* Mission queue names, IDs, priorities, and statuses
* Operational alert titles, severities, and related spacecraft

This protects the most important dashboard UI elements and mission data from accidental changes.

## Test Architecture

The Playwright tests are organized using a maintainable QA automation structure:

```text
tests
│   app.spec.ts
│   dashboard.spec.ts
│   login.spec.ts
│
├───data
│       users.ts
│
└───pages
        DashboardPage.ts
        LoginPage.ts
```

## Page Object Model

The project uses the Page Object Model to keep locators and reusable page actions separate from test files.

Benefits of this approach:

* Test files stay easier to read
* Locators are centralized in one place
* Reusable actions reduce duplication
* Future UI changes are easier to update
* The project structure better reflects real-world QA automation practices

Current page objects:

* `LoginPage.ts`
* `DashboardPage.ts`

## Test Data Separation

Test users are stored separately in:

```text
tests/data/users.ts
```

This keeps credentials and test input data out of the test logic. Separating data from test behavior makes the suite easier to maintain as more users, roles, or authentication scenarios are added.

## Current Test Suite Result

The current full Playwright suite result is:

```text
11 passed
```

## How to Run Tests

Run the full Playwright suite:

```bash
npx playwright test
```

Run only login tests:

```bash
npx playwright test tests/login.spec.ts
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```

## Future Test Improvements

Planned future improvements include:

* Additional dashboard regression checks
* Mission queue state validation
* Operational alert severity validation
* Accessibility-focused assertions
* CI test execution with GitHub Actions or GitLab CI
* More advanced reporting and failure artifact review
