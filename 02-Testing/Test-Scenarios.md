# Metro PIDS/PAS Test Scenarios

## TS-PIDS-001 — Verify Train Information Display

### Objective

Verify that the PIDS correctly displays train information received
from the ATS system.

### Systems Involved

ATS → PIDS/PAS Software → PIDS Display

### Information to Verify

- Train destination
- Arrival information
- Departure information

### Expected Behaviour

When valid train information is received from ATS, the PIDS/PAS
software should process the information correctly and the appropriate
PIDS display should show the corresponding passenger information.

### Related Test Cases

Detailed test cases will be created for:

1. Normal train information
2. Train destination change
3. Arrival information update
4. Departure information update
5. Multiple train information
6. Missing or invalid train information
7. ATS communication failure