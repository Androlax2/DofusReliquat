'use strict';
import Reliquat from './Reliquat';
import RunesWeightFR from "./runes/RunesWeightFR";

const ReliquatCalc = new Reliquat(new RunesWeightFR());

reliquatCalc
    .add('5 Vitalité, -15 Sagesse, +reliquat')
    .add('15 Vitalité, -15 Dommages, -reliquat')
    .add('-15 Vitalité, +reliquat')
    .add('15 yolo')
    .add('15 dommages, -15 Vitalité, +reliquat');

console.log(reliquatCalc.calc());