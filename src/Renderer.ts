import { Camera } from "./Camera"
import { GameMap } from "./GameMap"
import { Vec2 } from "./Vec2"
import { Screen } from "./Screen"
import { Color } from "./Color"

export class Renderer {
  private camera: Camera;
  private screen: Screen;
  private map: GameMap

  constructor(camera: Camera, map: GameMap) {
    this.camera = camera;
    this.map = map;
    this.screen = new Screen();
  }

  public computeFrame() {

    this.screen.clear();

    for(var i = 0; i < this.screen.width; i++){
      let [hitDist, hitId, isNSSide] = this.raycast(i);
      
      let lineHeight = Math.round(this.screen.height / Number(hitDist));

      let start = Math.round(-lineHeight / 2 + this.screen.height / 2);
      if(start < 0) { start = 0 }

      let end = Math.round(lineHeight / 2 + this.screen.height / 2);
      if(end >= this.screen.height) { end = this.screen.height - 1 }

      let color = this.map.idMappings.get(Number(hitId));      
      
      this.screen.drawLine(
        new Vec2(i, start),
        new Vec2(i, end),
        color === undefined ? new Color(0,0,0) : color,
        Boolean(isNSSide)
      );
    }
  }

  private raycast(x: number,) {

    const cameraX: number = 2 * x / this.screen.width - 1; //x-cord, rationalized between -1 and 1? "camera space"
    
    //The direction of our ray.
    const rayDir: Vec2 = new Vec2(
      this.camera.position.x + this.camera.rotation.x + cameraX,
      this.camera.position.y + this.camera.rotation.y + cameraX
    );

    //The position on the map we are in
    const mapPos: Vec2 = new Vec2(
      Math.floor(this.camera.position.x),
      Math.floor(this.camera.position.y)
    );

    //Distance from one side (x || y) to next side
    const deltaDist: Vec2 = new Vec2(
      Math.abs(1 / rayDir.x),
      Math.abs(1/rayDir.y)
    );

    let hit: number = 0; //If/what we hit
    let isNSSide: boolean = false; //For sudo shading later and fixing fisheye effect?

    const step: Vec2 = new Vec2(0, 0) //If we are stepping forwards, back for x, or left right, for y
    const sideDist: Vec2 = new Vec2(-1, -1); //Vector from our position to the next side (nulled to start out)

    if(rayDir.x < 0) {
      step.x = -1;
      sideDist.x = (this.camera.position.x - mapPos.x) * deltaDist.x; //get it from the left side
    }
    else {
      step.x = 1;
      sideDist.x = (mapPos.x + 1 - this.camera.position.x) * deltaDist.x; //get it from the right side
    }
    if(rayDir.y < 0) { //Why do we need Y dir? If we are computing everything on X?
      step.y = -1;
      sideDist.y = (this.camera.position.y - mapPos.y * deltaDist.y);
    }
    else {
      step.y = 1;
      sideDist.y = (mapPos.x + 1 + - this.camera.position.y) * deltaDist.y;
    }

    //Actually preform the DDA
    while(hit === 0) {
      
      //Jump to next map square
      if(sideDist.x < sideDist.y) {
        sideDist.x += deltaDist.x; //Calculate total distance
        mapPos.x += step.x; //move either left or right on the map
        isNSSide = false; //if we hit, its a EW side
      }
      else {
        sideDist.y += deltaDist.y; //Calculate total distance
        mapPos.y += step.y; //move either up or down on the map
        isNSSide = true; //if we hit, its a NS side
      }


      let x = this.map.IntMap[mapPos.x][mapPos.y]
      if(x > 0) {
        hit = x;
      }
    }

    //prevent fisheye effect
    let wallDistance: number;
    if(!isNSSide) {
      wallDistance = (sideDist.x - deltaDist.x)
    }
    else {
      wallDistance = (sideDist.y - deltaDist.y)
    }

    return [wallDistance, hit, isNSSide]
  }
}