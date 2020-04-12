'use strict';
import Reliquat from './Reliquat';
import RunesWeightFR from "./runes/RunesWeightFR";

const reliquatCalc = new Reliquat(new RunesWeightFR());

reliquatCalc.add('-1 Sagesse, 1 Résistance Feu, +reliquat');
reliquatCalc.add('1 Résistance Terre');
reliquatCalc.add('-1 PA, +reliquat', '1 résistance air');

console.log(reliquatCalc.calc());