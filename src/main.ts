import { Application } from "pixi.js";

async function start() {
	const app = new Application();

	await app.init({
		background: 0x000000,
		resizeTo: window,
		autoDensity: true,
		resolution: window.devicePixelRatio,
	});

	document.body.appendChild(app.canvas);
	console.log("Hello, world 🐣!");
}

start();