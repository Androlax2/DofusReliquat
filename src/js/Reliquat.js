/**
 * This object calculate the reliquat of the game DOFUS
 * (used in "Forgemagie")
 */
import CantCalculateReliquatException from "./CantCalculateReliquatException";

export default class Reliquat {

    /**
     * Create an object to calculate the reliquat.
     * Initialize reliquat to 0
     *
     * @param RunesWeight class to manage runes weight in different languages
     */
    constructor(RunesWeight)
    {
        this.runesWeight = RunesWeight;
        this.reliquat = 0;
    }

    /**
     * Break a line into an array
     *
     * @param line string like "-15 Vitalité, +15 Sagesse, +reliquat"
     * @private
     */
    _breakLine(line)
    {
        let lineSplitted = line.split(', '),
            lineValues = [];

        lineSplitted.forEach(line => lineValues.push([line]));

        return lineValues;
    }

    /**
     *
     * Get the reliquat type (-reliquat or +reliquat)
     *
     * @param lineValues array of a line like : [["5 vitalité"], ["-15 Sagesse"], ["+reliquat"]]
     * @returns {string} nothing or addReliquat (for +reliquat) or removeReliquat (for -reliquat)
     * @private
     */
    _reliquatType(lineValues)
    {
        let end = lineValues[lineValues.length -1];

        if (end != '-reliquat' && end != '+reliquat') return; // Don't process to reliquat calculation if there's no line with reliquat
        if (end == '+reliquat') return 'addReliquat';
        if (end == '-reliquat') return 'removeReliquat';
    }

    /**
     * Calculate the reliquat of the line
     *
     * @param lineValues array of a line like : [["5 vitalité"], ["-15 Sagesse"], ["+reliquat"]]
     * @returns {boolean|number}
     * @private
     */
    _lineReliquat(lineValues)
    {
        if (lineValues.length > 1) lineValues.pop(); // Remove the +reliquat or -reliquat

        let loses = 0,
            wins = 0,
            lineReliquat = 0;

        lineValues.forEach(lineValue => {
            let value = parseInt(lineValue),
                stat = lineValue.toString().replace(new RegExp('[0-9-]+'), '').toLowerCase().trim(),
                weightOfStat = this.runesWeight.getWeightOf(stat);

            if (value < 0 && weightOfStat > 0) loses += weightOfStat * Math.abs(value);
            else if (value > 0) wins += weightOfStat * Math.abs(value);

            if (value !== 0 && weightOfStat > 0) lineReliquat = loses - wins;
        });

        if (wins === 0 || loses === 0) throw new CantCalculateReliquatException();
        return lineReliquat;
    }

    /**
     * Add a line in the reliquat calculation
     *
     * @param line string like "-15 Vitalité, +15 Sagesse, +reliquat"
     * @param addValue string add missed data to the calculation
     */
    add(line, addValue)
    {
        if (line === null || typeof line === 'undefined') return;
        if (addValue) line = `${addValue}, ${line}`; // Add the value to the line (rune used by the user)

        const lineSplitted = this._breakLine(line);
        const reliquatType = this._reliquatType(lineSplitted);
        let lineReliquat = this._lineReliquat(lineSplitted);

        switch (reliquatType) {
            case 'addReliquat':
                this.reliquat += lineReliquat;
                break;
            case 'removeReliquat':
                this.reliquat -= lineReliquat;
                break;
        }
    }

    /**
     * Return the reliquat
     */
    calc()
    {
        return this.reliquat;
    }

}