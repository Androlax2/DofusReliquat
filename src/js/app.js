'use strict';
import Reliquat from './Reliquat';
import RunesWeightFR from "./runes/RunesWeightFR";

const reliquatCalc = new Reliquat(new RunesWeightFR());

reliquatCalc
    .add('-1 PA, +reliquat', '5 Vitalité');

console.log(reliquatCalc.calc());