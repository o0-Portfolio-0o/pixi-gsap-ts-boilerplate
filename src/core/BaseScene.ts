import { Application, Container } from "pixi.js";

export abstract class BaseScene extends Container {
	protected app!: Application;
	constructor(label: string){
		super();
		this.label = label;
	}

	public setApp(app: Application) {
		this.app = app;
	}

	abstract init(): void;
	abstract update(dt: number): void;
	abstract destroy(): void;
}