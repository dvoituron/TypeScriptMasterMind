import { Colors } from "./Colors";
import { Ball } from "./Ball";
import { RowOfBalls } from "./RowOfBalls";

export class Tools {
    public static fromString(value: string): Colors {
        if (value.endsWith(Colors.Red)) return Colors.Red;
        if (value.endsWith(Colors.Blue)) return Colors.Blue;
        if (value.endsWith(Colors.Green)) return Colors.Green;
        if (value.endsWith(Colors.Yellow)) return Colors.Yellow;
        return Colors.Red;
    }

    public static nextColor(value: Colors): Colors {
        if (value == Colors.Red) return Colors.Blue;
        if (value == Colors.Blue) return Colors.Green;
        if (value == Colors.Green) return Colors.Yellow;
        if (value == Colors.Yellow) return Colors.Red;
        return Colors.Red;
    }

    public static fromIndex(value: number): Colors {
        if (value == 0) return Colors.Red;
        if (value == 1) return Colors.Blue;
        if (value == 2) return Colors.Green;
        if (value == 3) return Colors.Yellow;
        return Colors.Red;
    }

    public static randomColor(): Colors {
        let numberOfColors = Object.keys(Colors).length
        let randomIndex = Tools.getRandomInt(0, numberOfColors);
        return Tools.fromIndex(randomIndex);
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
    private static getRandomInt(min: number, max: number): number {
        // The maximum is inclusive and the minimum is inclusive 
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}