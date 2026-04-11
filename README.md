# Genderize Classifier API

A simple REST API that classifies the gender of a given name using the Genderize.io API. It provides probability, sample size, and a confidence indicator for each prediction.

## Features

- Classifies gender based on a given name
- Returns probability and sample size
- Includes confidence indicator (`is_confident`)
- Handles invalid and missing inputs gracefully
- Timestamped responses for tracking

## Tech Stack

- Node.js
- Express.js
- Axios

## Installation

Clone the repository:

```bash
git clone https://github.com/Chavon007/genderize-classifier-api.git
```

Navigate into the project directory:

```bash
cd genderize-classifier-api
```

Install dependencies:

```bash
npm install
```

## Run Locally

Start the server:

```bash
npm start
```

Server runs on:

```
http://localhost:4000
```

## API Endpoints

### Classify a Name

```
GET /api/classify?name={name}
```

### Example Request

```
GET /api/classify?name=chavon
```

### Example Success Response

```json
{
  "status": "success",
  "data": {
    "name": "chavon",
    "gender": "female",
    "probability": 0.63,
    "sample_size": 112,
    "is_confident": false,
    "processed_at": "2026-04-11T07:24:00.389Z"
  }
}
```

## Error Responses

| Status Code | Message                                       |
| ----------- | --------------------------------------------- |
| 400         | Missing or empty name parameter               |
| 422         | Name must be a valid string                   |
| 404         | No prediction available for the provided name |
| 500         | Server or upstream error                      |

## Live API

Base URL:

```
https://genderize-classifier-api.vercel.app
```

Example:

```
https://genderize-classifier-api.vercel.app/api/classify?name=chavon
```

## Author

Salvation Azuh
GitHub: https://github.com/Chavon007
