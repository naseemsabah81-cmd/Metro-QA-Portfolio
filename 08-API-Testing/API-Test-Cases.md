# API Test Cases

## API-TC-001 — Verify Train Information API

### Objective

Verify that the Metro Train API returns the expected train
information for a valid GET request.

### API Details

- Method: GET
- Endpoint: `/trains`
- Base URL: `http://localhost:3000`

### Precondition

1. Metro Train API server is running.
2. The API is accessible on port 3000.

### Test Data

```json
{
  "train": "T101"
}