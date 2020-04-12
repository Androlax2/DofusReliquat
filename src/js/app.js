'use strict';
import Reliquat from './Reliquat';
import RunesWeightFR from "./runes/RunesWeightFR";

const reliquatCalc = new Reliquat(new RunesWeightFR());

reliquatCalc
    .add('-1 PA +reliquat');

console.log(reliquatCalc.calc());