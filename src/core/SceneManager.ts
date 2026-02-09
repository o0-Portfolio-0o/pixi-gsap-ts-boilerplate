import { Application } from "pixi.js";
import { BaseScene } from "./BaseScene";

export class SceneManager {
	private static app: Application;
	private static currentScene: BaseScene | null = null;

	static init(app: Application) {
		this.app = app;
	}

	static changeScene(newScene: BaseScene) {
		if (this.currentScene) {
			this.currentScene.destroy();
			this.app.stage.removeChild(this.currentScene);
		}

		this.currentScene = newScene;
		this.currentScene.setApp(this.app);
		this.currentScene.init();
		this.app.stage.addChild(this.currentScene);
	}

	static update(dt: number) {
		if (this.currentScene) {
			this.currentScene.update(dt);
		}
	}
}