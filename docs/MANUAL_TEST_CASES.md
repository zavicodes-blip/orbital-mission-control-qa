# Manual Test Cases

## Overview

This document contains manual QA test cases for the Orbital Mission Control QA project. These test cases are designed to validate core user workflows before and alongside automated Playwright coverage.

The goal is to show how manual testing and automated regression testing can work together in a software QA process.

## Test Case Format

Each test case includes:

* Test case ID
* Title
* Preconditions
* Test steps
* Expected result
* Automation status

---

## Login Test Cases

### TC-LOGIN-001: Valid operator can access the dashboard

**Preconditions**

* Application is running
* User is on the Mission Operator Login page

**Test Steps**

1. Enter `operator@mission.local` in the Username field.
2. Enter `orbit123` in the Password field.
3. Click `Access Mission Control`.

**Expected Result**

The user should be taken to the Operations Dashboard.

**Automation Status**

Automated with Playwright.

---

### TC-LOGIN-002: Invalid credentials are rejected

**Preconditions**

* Application is running
* User is on the Mission Operator Login page

**Test Steps**

1. Enter an invalid username.
2. Enter an invalid password.
3. Click `Access Mission Control`.

**Expected Result**

The user should remain on the login page and see the message:

`Invalid username or password.`

**Automation Status**

Automated with Playwright.

---

### TC-LOGIN-003: Empty credentials show validation

**Preconditions**

* Application is running
* User is on the Mission Operator Login page

**Test Steps**

1. Leave the Username field blank.
2. Leave the Password field blank.
3. Click `Access Mission Control`.

**Expected Result**

The user should remain on the login page and see the message:

`Username and password are required.`

**Automation Status**

Automated with Playwright.

---

### TC-LOGIN-004: Missing username shows validation

**Preconditions**

* Application is running
* User is on the Mission Operator Login page

**Test Steps**

1. Leave the Username field blank.
2. Enter `orbit123` in the Password field.
3. Click `Access Mission Control`.

**Expected Result**

The user should remain on the login page and see the message:

`Username is required.`

**Automation Status**

Automated with Playwright.

---

### TC-LOGIN-005: Missing password shows validation

**Preconditions**

* Application is running
* User is on the Mission Operator Login page

**Test Steps**

1. Enter `operator@mission.local` in the Username field.
2. Leave the Password field blank.
3. Click `Access Mission Control`.

**Expected Result**

The user should remain on the login page and see the message:

`Password is required.`

**Automation Status**

Automated with Playwright.

---

## Dashboard Test Cases

### TC-DASH-001: Dashboard loads after successful login

**Preconditions**

* Application is running
* User has valid operator credentials

**Test Steps**

1. Log in with valid credentials.
2. Observe the dashboard page.

**Expected Result**

The Operations Dashboard should load successfully.

**Automation Status**

Automated with Playwright.

---

### TC-DASH-002: Dashboard metrics are visible and accurate

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Test Steps**

1. Review the dashboard metric cards.
2. Confirm that each expected metric is visible.

**Expected Result**

The dashboard should display:

* Active Missions: `4`
* Spacecraft Online: `12`
* Critical Alerts: `1`
* Average Fleet Health: `96%`

**Automation Status**

Automated with Playwright.

---

### TC-DASH-003: Spacecraft fleet cards show telemetry details

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Test Steps**

1. Review the Fleet Status section.
2. Confirm each spacecraft card is visible.
3. Confirm each card displays mission, status, altitude, velocity, fuel, and health.

**Expected Result**

The dashboard should display spacecraft telemetry details for:

* ARES-01
* ARES-02
* HELIOS-07

**Automation Status**

Automated with Playwright.

---

### TC-DASH-004: Mission queue displays mission details

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Test Steps**

1. Review the Mission Queue section.
2. Confirm each mission row is visible.
3. Confirm each row displays mission name, ID, priority, and status.

**Expected Result**

The Mission Queue should display:

* Sentinel Watch
* Orbital Reserve
* Telemetry Sweep

**Automation Status**

Automated with Playwright.

---

### TC-DASH-005: Operational alerts display severity and spacecraft details

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Test Steps**

1. Review the Operational Alerts section.
2. Confirm each alert is visible.
3. Confirm each alert displays title, severity, and related spacecraft.

**Expected Result**

The dashboard should display operational alert details including severity and spacecraft information.

**Automation Status**

Automated with Playwright.

---

## Mission Queue Filter Test Cases

### TC-FILTER-001: Filter mission queue by mission name

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Test Steps**

1. Locate the Filter missions input.
2. Enter `Telemetry`.

**Expected Result**

Only `Telemetry Sweep` should remain visible in the Mission Queue.

**Automation Status**

Automated with Playwright.

---

### TC-FILTER-002: Filter mission queue by mission ID

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Test Steps**

1. Locate the Filter missions input.
2. Enter `M-1043`.

**Expected Result**

Only `Orbital Reserve` should remain visible in the Mission Queue.

**Automation Status**

Automated with Playwright.

---

### TC-FILTER-003: Filter mission queue with no matching result

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Test Steps**

1. Locate the Filter missions input.
2. Enter `not-real`.

**Expected Result**

The Mission Queue should show the empty-state message:

`No missions match the current filter.`

**Automation Status**

Automated with Playwright.