'use strict';
import Reliquat from './Reliquat';
import RunesWeightFR from "./runes/RunesWeightFR";

const reliquatCalc = new Reliquat(new RunesWeightFR());

reliquatCalc.add('-1 PA, +reliquat', '1 résistance terre');
reliquatCalc.add('1 résistance terre, -reliquat');
reliquatCalc.add('-reliquat', '15 sagesse');

console.log(reliquatCalc.calc());