
export class StyleFunctions {

    static singleView(div) {
        div.style.display = "grid";
        div.style.gridTemplateRows = "2fr, 2fr, 1fr, 1fr, 1fr";
        div.style.gridTemplate = "";
    }

    static multiView(div) {
        div.style.display = "grid";
        div.style.gridTemplate = "repeat(4, 1fr) / repeat(4, 1fr)";
    }
}