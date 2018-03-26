import { List } from "linqts"
import { RowOfBalls } from "./items/RowOfBalls";

export class MasterMind {
    constructor() {
        this.Play();
    }

    public ShowSolution(div: HTMLElement | null): void {
        div!.appendChild(MasterMind.Solution.Render());
    } 

    public Display(div: HTMLElement | null): void {
        div!.innerHTML = "";
        MasterMind.Rows.forEach(element => {
            div!.appendChild(element.Render());
        });
    }

    public Play(): void {
        MasterMind.Rows.forEach(element => {
            element.isClickable = false;
        });

        if (this.checkSolution() == true)
            alert('Yes... WON !');
        else
            MasterMind.Rows.push(new RowOfBalls(false, true));
    }

    private checkSolution(): boolean {
        let rows = new List(MasterMind.Rows);
        if (rows.Count() <= 0) return false;
        return rows.LastOrDefault().goodBalls == MasterMind.Solution.goodBalls;
    }
 
    public static Solution = new RowOfBalls(true, false);

    public static Rows = new Array<RowOfBalls>();
}

let mm = new MasterMind();
mm.ShowSolution(document.getElementById("solution"));
mm.Display(document.getElementById("game"));
document.getElementById("btnPlay")!.addEventListener("click", () => {
    mm.Play();
    mm.Display(document.getElementById("game"));
});