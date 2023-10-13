/**
 * Handle missing data exception for runes weights
 *
 * @param stat
 * @constructor
 */
function MissingRuneWeightException(stat)
{
    this.name = "MissingRuneWeightException";
    this.message = `DATA ARE MISSING FOR ${stat}`;
    this.stack = (new Error()).stack;
}
MissingRuneWeightException.prototype = Object.create(Error.prototype);
MissingRuneWeightException.prototype.constructor = MissingRuneWeightException;

module.exports = MissingRuneWeightException;