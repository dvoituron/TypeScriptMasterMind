import { Tools } from "./Tools";
import { Colors } from "./Colors";
import { MasterMind } from "../MasterMind";
import { IRendering } from "./IRendering";

export class Ball implements IRendering {

    constructor();
    constructor(isDefaultRandomized: boolean);
    constructor(isDefaultRandomized: boolean, isClickable: boolean);
    constructor(isDefaultRandomized?: boolean, isClickable?: boolean) {
        this.isClickable = (isClickable == true);
        if (isDefaultRandomized)
            this.Color = Tools.randomColor();
        else
            this.Color = Colors.White; 
    }

    public Color: Colors;

    public isClickable: boolean = false;

    public Render(): HTMLImageElement {
        let img = new Image();
        img.src = this.Color;
        img.addEventListener("click", (ev) => {
            let nextColor = Tools.nextColor(this.Color);
            this.Color = nextColor;
            img.src = nextColor;
        });

        return img;
    }
} 