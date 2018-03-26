/// <reference path="items/RowOfBalls.ts" />

class MasterMind {
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
        if (MasterMind.Rows.length <= 0) return false;

        let lastRow: RowOfBalls = MasterMind.Rows[MasterMind.Rows.length - 1];
        let solution: RowOfBalls = MasterMind.Solution;

        return lastRow.goodBalls == solution.goodBalls;
    }
 
    public static Solution = new RowOfBalls(true, false);

    public static Rows = new Array<RowOfBalls>();
}

let mm = new MasterMind();
mm.ShowSolution(document.getElementById("solution"));
document.getElementById("btnPlay")!.addEventListener("click", () => {
    mm.Play();
    mm.Display(document.getElementById("game"));
});