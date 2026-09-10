# PIDS Defect Examples

## DEF-PIDS-001 — Incorrect Train Destination Displayed

### Defect Summary

PIDS displays an incorrect train destination when train information
is received from ATS.

### Environment

- System: Metro PIDS/PAS
- Interface: ATS to PIDS/PAS
- Test Case: TC-PIDS-001

### Steps to Reproduce

1. Start the ATS simulator.
2. Enter train number T101.
3. Enter destination as Airport.
4. Send the train information.
5. Observe the corresponding PIDS display.

### Expected Result

The PIDS display should show:

Destination: Airport

### Actual Result

The PIDS display shows:

Destination: City Centre

### Severity

High

### Priority

High

### Status

Open

### Remarks

The displayed passenger information is incorrect and may
mislead passengers.