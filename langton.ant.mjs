// @ts-check
/** @typedef {import("../js/lib").World} World */

import { ant } from "../js/lib.mjs"

/** @type {World} */
const world = {
	cfg: {
		width: 64,
		height: 64,
		speed: 64,
		looping: false,
		border_mode: "despawn",
		starting_pos: "center",
		color_mode: "binary",
		hide_title: false,
		description: "Langton's Ant",
	},
	ants: {
		1: ant("main", (C2) => ({
			CC: true,
			C2: !C2,
			D1: true,
			D2: C2,
		})),
	},
}

console.log(JSON.stringify(world, null, '\t'))
