"use strict";
class ResistorColor {
    constructor(colors) {
        this.palhetaDeColors = [
            "black",
            "brown",
            "red",
            "orang",
            "yello",
            "green",
            "blue",
            "viole",
            "grey",
            "white"
        ];
        this.value = () => parseInt(`${this.palhetaDeColors.indexOf(this.colors[0])}${this.palhetaDeColors.indexOf(this.colors[1])}`);
        this.colors = colors;
    }
}
//# sourceMappingURL=desafioTypescript.js.map