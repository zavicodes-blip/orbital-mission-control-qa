# Defect Reports

## Overview

This document contains resolved defect reports and QA findings from the Orbital Mission Control QA project.

The purpose of this document is to show how defects can be documented clearly with reproduction steps, expected behavior, actual behavior, severity, and resolution notes.

These examples are based on issues discovered or addressed during project development.

---

## DEFECT-001: Login accepts invalid credentials

**Status**

Resolved

**Severity**

High

**Area**

Authentication / Login

**Description**

The Mission Operator Login page allowed users to access the Operations Dashboard even when incorrect username and password values were entered.

**Preconditions**

* Application is running
* User is on the Mission Operator Login page

**Steps to Reproduce**

1. Navigate to the login page.
2. Enter an invalid username.
3. Enter an invalid password.
4. Click `Access Mission Control`.

**Expected Result**

The user should remain on the login page and see an error message.

**Actual Result**

The user was allowed to access the Operations Dashboard.

**Resolution**

Login validation was added so only the valid demo operator credentials are accepted:

* Username: `operator@mission.local`
* Password: `orbit123`

Invalid credentials now display:

`Invalid username or password.`

**Regression Coverage**

Automated Playwright coverage was added for invalid credential validation.

---

## DEFECT-002: Empty login form allows dashboard access

**Status**

Resolved

**Severity**

High

**Area**

Authentication / Form Validation

**Description**

The login form allowed users to access the Operations Dashboard without entering a username or password.

**Preconditions**

* Application is running
* User is on the Mission Operator Login page

**Steps to Reproduce**

1. Navigate to the login page.
2. Leave the Username field empty.
3. Leave the Password field empty.
4. Click `Access Mission Control`.

**Expected Result**

The user should remain on the login page and see a validation message.

**Actual Result**

The user was allowed to access the Operations Dashboard.

**Resolution**

Required-field validation was added to the login form.

The empty form now displays:

`Username and password are required.`

**Regression Coverage**

Automated Playwright coverage was added for empty username and password validation.

---

## DEFECT-003: Mission queue had no way to narrow visible missions

**Status**

Resolved

**Severity**

Medium

**Area**

Dashboard / Mission Queue

**Description**

The Mission Queue displayed all missions at once but did not provide a way for an operator to quickly narrow the list by mission name, mission ID, priority, or status.

**Preconditions**

* User is logged in
* User is on the Operations Dashboard

**Steps to Reproduce**

1. Log in with valid operator credentials.
2. Review the Mission Queue section.
3. Attempt to locate a specific mission quickly.

**Expected Result**

The operator should have a way to filter the Mission Queue to find a specific mission.

**Actual Result**

All missions were displayed without filtering controls.

**Resolution**

A Mission Queue filter input was added.

The filter supports searching by:

* Mission name
* Mission ID
* Priority
* Status

An empty-state message was also added when no missions match the filter.

**Regression Coverage**

Automated Playwright coverage was added for:

* Filtering by mission name
* Filtering by mission ID
* Empty-state validation