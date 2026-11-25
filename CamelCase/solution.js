function camelcase(s) {
    let wordCount = 1;
    
    for(let char of s) {
        let hasCapital = /[A-Z]/.test(char);
        if(hasCapital) {
          wordCount++;
        }
    }
    return wordCount;
}