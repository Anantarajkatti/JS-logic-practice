// Print the number half pyramid pattern with the size R.

// Sample Input :
// 5
// Sample Output :
// 55555
// 4444
// 333
// 22
// 1


function printPyramid(inputNum){
    let n=inputNum
    for(let i=1;i<=n;i++)
    {
        let str=""
        for(j=1;j<=inputNum;j++)
        {
           str=str+inputNum
        }
        console.log(str)
        inputNum--
    }
}

printPyramid(7)