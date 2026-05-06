/**
 * Returns a random number in a set range.
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 */
window.randomNumber = function randomNumber(min, max) {
    if (min == max) {
        return min;
    }
    else {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}