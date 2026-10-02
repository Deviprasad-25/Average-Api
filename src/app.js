const express = require("express");
const { addNumber } = require("./averageService");

const app = express();

app.use(express.json());

/**
 * Accepts a number and returns the average of all numbers
 * received by the server so far.
 *
 * @route POST /average
 * @param {number} req.body.number - Number to include in the average.
 * @returns {Object} JSON response containing the calculated average.
 */
app.post("/average", (req, res) => {
    const { number } = req.body;

    if (typeof number !== "number" || !Number.isFinite(number)) {
        return res.status(400).json({
            error: "The request body must contain a valid number."
        });
    }

    const average = addNumber(number);

    return res.status(200).json({
        average
    });
});

module.exports = app;