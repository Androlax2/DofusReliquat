/**
 * Handle when we can't calculate the reliquat (missing data)
 *
 * @constructor
 */
function CantCalculateReliquatException() {
    this.name = "CantCalculateReliquatException";
    this.message = `CAN'T CALCULATE THIS RELIQUAT. MISSING DATA`;
    this.stack = new Error().stack;
}

CantCalculateReliquatException.prototype = Object.create(Error.prototype);
CantCalculateReliquatException.prototype.constructor = CantCalculateReliquatException;

module.exports = CantCalculateReliquatException;
