/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
*/

var getRow = function(rowIndex) {
    var res = []
    while (res.length <= rowIndex) {
        res.unshift(1)
        for (let i=1; i<res.length-1; i++) {
            res[i] += res[i+1]
        }
    }
    return res
}

var result = getRow(4)
console.log(result)