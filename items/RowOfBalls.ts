/// <reference path="IRendering.ts" />
/// <reference path="Ball.ts" />
/// <reference path="../MasterMind.ts" />

class RowOfBalls implements IRendering {
    private NUMBER_OF_BALLS: number = 4; 
    private _balls: Ball[] = new Array<Ball>();

    constructor()
    constructor(isDefaultRandomized: boolean)
    constructor(isDefaultRandomized: boolean, isClickable: boolean)
    constructor(isDefaultRandomized?: boolean, isClickable?: boolean) {
        for (let index = 0; index < this.NUMBER_OF_BALLS; index++) {
            this._balls.push(new Ball(isDefaultRandomized == true, isClickable == true));
        }
    } 
    
    public get Balls() : Ball[] {
        return this._balls;
    }    
    
    public get isClickable() : boolean {
        return this.Balls[0].isClickable;
    }
    public set isClickable(value : boolean) {
        this.Balls.forEach(ball => {
            ball.isClickable = value;
        });
    }

    public get goodBalls() : number {
        let solution: RowOfBalls = MasterMind.Solution;
        let goodColors = 0;

        for (let index = 0; index < solution.Balls.length; index++) {
            if (this.Balls[index].Color == solution.Balls[index].Color) goodColors++;
        }

        return goodColors;
    }

    public Render(): HTMLElement {
        let div = document.createElement("div");
        this.Balls.forEach(element => {
            div.appendChild(element.Render())
        });

        let good = document.createElement("span");
        good.innerText = "Good balls = " + this.goodBalls;
        div.appendChild(good);

        return div;
    }
} 