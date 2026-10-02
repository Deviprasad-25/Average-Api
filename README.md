# Average API

A simple REST API built using Node.js and Express.js.

The API provides a single `POST /average` endpoint. It accepts a number and returns the average of all numbers submitted to the server so far.

---

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

You can verify the installation using:

1. Open your project

Make sure the VS Code terminal shows:

PS C:\Users\HP\average-api>

If not:

cd C:\Users\HP\average-api

2. Install dependencies

Only needed after cloning/downloading the project:

npm install

3. Start the API server

Run:

npm start

You should see:

> average-api@1.0.0 start
> node src/server.js

Average API is running on http://localhost:5000

Keep this terminal running.

4. Open a second terminal

In VS Code:

Terminal → New Terminal

You should still be inside:

C:\Users\HP\average-api

Now run the client:

node client/client.js 10

You should get:

Average: 10

Then:

node client/client.js 20

You should get:

Average: 15

Then:

node client/client.js 30

You should get:

Average: 20
5. Run the tests

In the second terminal:

npm test

You should see:

✔ should calculate the average of all submitted numbers
✔ should reject a request when number is missing
✔ should reject a non-numeric value

Terminal 1
───────────
npm start
      ↓
Server running on localhost:5000


Terminal 2
───────────
node client/client.js 10
node client/client.js 20
node client/client.js 30
      ↓
Average: 10
Average: 15
Average: 20

npm test
      ↓
All tests pass
