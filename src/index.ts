import { Camera } from "./Camera";
import { Color } from "./Color"
import { GameMap } from "./GameMap"
import { Renderer } from "./Renderer"
import { Vec2 } from "./Vec2";

console.log("I am working");
let intMap = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 2, 2, 0, 1],
    [1, 0, 2, 2, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]];

let id = new Map<number, Color>([
    [1, new Color(242, 61, 61)],
    [2, new Color(255, 235, 102)]
]);

const gameMap: GameMap = new GameMap(intMap, id);
const camera: Camera = new Camera(
    new Vec2(.782, -1),
    new Vec2(0, 0)
)
const renderer: Renderer = new Renderer(camera, gameMap);
renderer.computeFrame();