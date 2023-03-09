import { Color } from "./Color";

export class GameMap {
    public IntMap: number[][]
    public idMappings: Map<number, Color>;

    constructor(IntMap: number[][], idMappings: Map<number, Color>) {
        this.IntMap = IntMap;
        this.idMappings = idMappings;
    }    
}
  
  
