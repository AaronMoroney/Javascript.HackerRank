function staircase(n) {
    // malke a printString n.length and fill with #
    let printString = "#".repeat(n);
    // loop backwards from n
    for(let i = n; i > 0; i--) {
        // remove 
        let tag = printString.slice(i - 1);
        //pad
        let repeat = " ".repeat(i -1);
        // concat
        console.log(repeat + tag);
    }
}