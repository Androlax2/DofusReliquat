/**
 * FRENCH
 *
 * This object get the weight of each runes of DOFUS
 * (used in "Forgemagie")
 */
const MissingRuneWeightException = require('./MissingRuneWeightException');

class RunesWeightFR {

    /**
     * Create an object with all the runes weight in french
     */
    constructor()
    {
       this.runesWeight = {
            'vitalité' : 0.2,
            'sagesse' : 3,
            'force' : 1,
            'chance' : 1,
            'agilité' : 1,
            'intelligence' : 1,
            'initiative' : 0.1,
            'prospection' : 3,
            'portée' : 51,
            'po' : 51,
            'pm' : 90,
            'pa' : 100,
            'dommage': 20,
            'soins' : 10,
            'soin': 10,
            'puissance' : 2,
            'résistance air' : 2,
            'résistance neutre': 2,
            'résistance feu': 2,
            'résistance eau': 2,
            'résistance terre': 2,
            'résistance critiques': 2,
            'dommages eau' : 5,
            'dommage eau': 5,
            'dommages critiques' : 5,
            'dommage critiques': 5,
            'dommages terre' : 5,
            'dommage terre': 5,
            'dommages neutre': 5,
            'dommage neutre': 5,
            'dommages feu': 5,
            'dommage feu': 5,
            'dommages air' : 5,
            'dommage air': 5,
            '% résistance terre' : 6,
            '% résistance eau' : 6,
            '% résistance feu' : 6,
            '% résistance air' : 6,
            '% résistance neutre' : 6,
            '% critique' : 10,
            'fuite' : 4,
            'invocations' : 30,
            'dommages' : 20,
            'tacle' : 4,
            'esquive pm': 7,
            'retrait pa': 7,
            'retrait pm': 7
        };
    }

    /**
     * Return the weight of the stat
     *
     * @param stat string like "vitalité"
     * @returns {boolean|*} false if the stat doesn't exist in the array. The weight if it exists
     */
    getWeightOf(stat)
    {
        if (!this.runesWeight.hasOwnProperty(stat)) throw new MissingRuneWeightException(stat);
        return this.runesWeight[stat];
    }

}

module.exports = RunesWeightFR;