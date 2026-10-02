let total = 0;
let count = 0;

/**
 * Adds a number to the running collection and calculates its average.
 *
 * @param {number} value - The number received by the API.
 * @returns {number} The average of all numbers received so far.
 */
function addNumber(value) {
    total += value;
    count += 1;

    return total / count;
}

/**
 * Resets the stored values.
 * This is mainly useful for automated tests.
 *
 * @returns {void}
 */
function reset() {
    total = 0;
    count = 0;
}

module.exports = {
    addNumber,
    reset
};