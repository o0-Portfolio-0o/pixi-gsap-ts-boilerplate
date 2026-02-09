import { Application } from "pixi.js";
import { SceneManager } from "./core/SceneManager";
import { MainMenuScene } from "./scenes/MainMenu/MainMenuScene";
import { FPSStatus } from "./core/FPSStatus";

async function start() {
	const app = new Application();

	await app.init({
		background: 0x000000,
		resizeTo: window,
		autoDensity: true,
		resolution: window.devicePixelRatio,
	});

	SceneManager.init(app);

	SceneManager.changeScene(new MainMenuScene("Main Menu"));

	document.body.appendChild(app.canvas);

	const fpsStatus = new FPSStatus(app, 30, 10, 60);
	app.stage.addChild(fpsStatus);

	console.log("Hello, world 🐣!");
}

start();