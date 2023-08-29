/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    let results = [];
    const sorty = arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    
    for(let i = 0; i < sorty.length - 1; i++) {
        let curDiff = Math.abs(sorty[i] - sorty[i + 1]);
        if(curDiff < minDiff) {
            minDiff = curDiff;
        }
    }
    
    for(let i = 0; i < sorty.length - 1; i++) {
        let curDiff = Math.abs(sorty[i] - sorty[i + 1]);
        if(curDiff === minDiff) {
            results.push(sorty[i], sorty[i + 1]);
        }
    }
    
    return results;
}
