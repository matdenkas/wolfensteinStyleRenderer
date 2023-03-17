import { Vec2 } from "./Vec2";
import { Color } from "./Color";

export class Screen {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public height: number;
    public width: number;

    public backgroundColor: Color;
    
    constructor() {
        this.canvas = document.getElementById('screen') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.context.globalCompositeOperation = 'source-over';
        this.context.globalAlpha = 1;

        this.height = this.canvas.height;
        this.width = this.canvas.width;

        this.backgroundColor = new Color(220, 220, 220);
    }

    public drawLine(from: Vec2, to: Vec2, color: Color, isShaded: boolean) {
        
        if(isShaded) { this.context.fillStyle = color.toShadedCSSColor(2); }
        else { this.context.fillStyle = color.toCSSColor(); }
        
        this.context.fillRect(from.x, from.y, 1, to.y - from.y);
    }

    public clear() {

        let halfHeight = this.height / 2;

        this.context.fillStyle = this.backgroundColor.toCSSColor();
        this.context.fillRect(0, 0, this.width, halfHeight);

        this.context.fillStyle = this.backgroundColor.toShadedCSSColor(2);
        this.context.fillRect(0, halfHeight, this.width, halfHeight);
    }


}