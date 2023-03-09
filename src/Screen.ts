import { Vec2 } from "./Vec2";
import { Color } from "./Color";

export class Screen {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public height: number;
    public width: number;
    
    constructor() {
        this.canvas = document.getElementById('screen') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.height = this.canvas.height;
        this.width = this.canvas.width;
    }

    public drawLine(from: Vec2, to: Vec2, color: Color, isShaded: boolean) {

        if(isShaded) { this.context.strokeStyle = color.toShadedCSSColor(2); }
        else { this.context.strokeStyle = color.toCSSColor(); }
        
        this.context.lineWidth = 1
        this.context.beginPath();
        this.context.moveTo(from.x, from.y);
        this.context.lineTo(to.x, to.y);
        this.context.stroke();
        this.context.closePath();
    }


}