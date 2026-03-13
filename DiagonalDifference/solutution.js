// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let counter = 0;

    for(let i = 0; i < arr.length; i++) {
        primaryDiagonal += arr[i][i];
    }

    for(let i = arr.length - 1; i >= 0; i--)  {
        secondaryDiagonal += arr[i][counter++];
    }

    // use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}