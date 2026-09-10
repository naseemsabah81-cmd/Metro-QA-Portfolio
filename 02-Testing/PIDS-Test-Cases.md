# PIDS Test Cases

## TC-PIDS-001 — Verify Train Information Display

### Objective

Verify that PIDS displays the correct train information received from ATS.

### Precondition

1. ATS simulator is running.
2. PIDS/PAS application is running.
3. PIDS display is connected and operational.
4. Communication between ATS and PIDS/PAS is available.

### Test Data

- Train: T101
- Destination: Airport
- Arrival Information: 10:30
- Departure Information: 10:32

### Test Steps

1. Start the ATS simulator.
2. Enter the test train information.
3. Send the train information from ATS.
4. Observe the PIDS/PAS application.
5. Observe the corresponding PIDS display.

### Expected Result

The PIDS/PAS application should receive and process the
train information correctly.

The PIDS display should show the corresponding train
destination and configured arrival/departure information.

### Actual Result

To be recorded during test execution.

### Status

Not Executed

### Remarks

Initial portfolio test case for ATS-to-PIDS integration testing.