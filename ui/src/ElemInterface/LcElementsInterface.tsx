import {sensorListElem} from "./ElementsInterface";

// LogicCore(lc) interface
export interface numRange {
	min: number;
	max: number;
}
export interface timeRange {
	start: string;
	end: string;
}

export interface logicElem {
	elem: string;
	arg: lcValueArg | lcTimeArg | lcGroupArg | lcActionArg | lcActuator;
}

export interface lcValueArg {
	value: string;
	range: Array<numRange>;
}

export interface lcTimeArg {
	range: Array<timeRange>;
}

export interface lcGroupArg {
	group: Array<string>;
}

export interface lcActionArg {
	text: string;
}

export interface lcActuator {
	elem: string;
	value: number;
	sleep: number;
}

export interface logicListElem {
	id: string; // request: undefined, receive: number
	logic_name: string;
	elems: Array<logicElem>;
	sensor_id: number;
	sensor: sensorListElem;
}
