import { Vec2 } from "./Vec2";

export class Camera {
    public position: Vec2;
    public rotation: Vec2;
    public plane: Vec2;

    constructor(position: Vec2, rotation: Vec2) {
        this.position = position;
        this.rotation = rotation;
        this.plane = new Vec2(0, 0.66)
    }
}