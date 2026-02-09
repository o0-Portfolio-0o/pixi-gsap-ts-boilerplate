import { Text, Container } from "pixi.js"

export interface styleText {
	fill: string;
	fontSize: number;
	fontFamily: string;
}

export default function createText(text: string, style: styleText, container: Container, x: number, y: number) {
	const textObj = new Text({text , style});
	container.addChild(textObj);
	textObj.anchor.set(0.5);
	textObj.x = x;
	textObj.y = y;

	return textObj;
}