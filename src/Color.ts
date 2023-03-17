export class Color {
    public red: number;
    public green: number;
    public blue: number;
    public alpha: number;

    constructor(r: number, g: number, b: number) {
        this.red = this.clampColorValue(r);
        this.green = this.clampColorValue(g);
        this.blue = this.clampColorValue(b);
        this.alpha = 1;
    }

    public clampColorValue(colorValue: number) {
        if(colorValue > 255) { return 255 }
        else if(colorValue < 0) { return  0}
        else return colorValue;
    }

    public toCSSColor() {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    public toShadedCSSColor(devisionGradient: number) {
        return `rgb(${this.red / devisionGradient}, ${this.green / devisionGradient}, ${this.blue / devisionGradient}, ${this.alpha})`;
    }
}