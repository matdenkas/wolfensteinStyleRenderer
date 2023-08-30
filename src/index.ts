import { Camera } from "./Camera";
import { Color } from "./Color";
import { GameMap } from "./GameMap";
import { Renderer } from "./Renderer";
import { Vec2 } from "./Vec2";
import { degreesToCartesian, cartesianToDegree, cartesianToRadian } from "./Utility";


console.log("I am working");
let intMap = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]];

let intMap2 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 2, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]];
    
let id = new Map<number, Color>([
    [1, new Color(242, 61, 61)],
    [2, new Color(255, 235, 102)]
]);

const gameMap: GameMap = new GameMap(intMap, id);
const camera: Camera = new Camera(
    new Vec2(4, 4), //pos
    new Vec2(0, 0)  //rot
)

console.log(`X: ${intMap[3][4]}`)


const renderer: Renderer = new Renderer(camera, gameMap);
renderer.computeFrame();

let i = 0;
setInterval(() => {

    i = ((i + 1) % 360)
    camera.rotation = degreesToCartesian(i);
    console.log(`I: ${i}  X: ${camera.rotation.x}  Y: ${camera.rotation.y} ?: ${cartesianToDegree(camera.rotation)}`);
    renderer.computeFrame();
}, 1000/15);

let degrees = 0
let cart = degreesToCartesian(degrees)
console.log(`Degrees: ${degrees}  X: ${cart.x}  Y: ${cart.y} ?: ${cartesianToDegree(cart)}`);

degrees = 90
cart = degreesToCartesian(degrees)
console.log(`Degrees: ${degrees}  X: ${cart.x}  Y: ${cart.y} ?: ${cartesianToDegree(cart)}`);

degrees = 180
cart = degreesToCartesian(degrees)
console.log(`Degrees: ${degrees}  X: ${cart.x}  Y: ${cart.y} ?: ${cartesianToDegree(cart)}`);

degrees = 360
cart = degreesToCartesian(degrees)
console.log(`Degrees: ${degrees}  X: ${cart.x}  Y: ${cart.y} ?: ${cartesianToDegree(cart)}`);

degrees = 30
cart = degreesToCartesian(degrees)
console.log(`Degrees: ${degrees}  X: ${cart.x}  Y: ${cart.y} ?: ${cartesianToDegree(cart)}`);

degrees = 60
cart = degreesToCartesian(degrees)
console.log(`Degrees: ${degrees}  X: ${cart.x}  Y: ${cart.y} ?: ${cartesianToDegree(cart)}`);

// let j = true
// setInterval(() => {
//     if (j) { gameMap.IntMap = intMap; j = false; }
//     else   { gameMap.IntMap = intMap2; j = true; }
//     console.log('switched')
// }, 5000)

