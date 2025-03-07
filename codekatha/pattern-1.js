// Print the number half pyramid pattern with the size R.

// Sample Input :
// 5
// Sample Output :
// 55555
// 4444
// 333
// 22
// 1


// function printPyramid(inputNum){
//     let n=inputNum
//     for(let i=1;i<=n;i++)
//     {
//         let str=""
//         for(j=1;j<=inputNum;j++)
//         {
//            str=str+inputNum
//         }
//         console.log(str)
//         inputNum--
//     }
// }

// printPyramid(7)

// Given an integer R indicates number of rows.

// Where 1<=R<=100.

// Output Description:
// Print the star pyramid with the given integer R.

// Sample Input :
// 5
// Sample Output :
// *
// * *
// * * *
// * * * *
// * * * * *

// function patternBuild(number)
// {
//     for(i=1;i<=number;i++)
//     {
//         let string=""
//         for(j=1;j<=i;j++)
//             string=string+"* "
//         console.log(string)
//     }
// }
// patternBuild(7)

//     *
//    **
//   ***
//  ****
// *****


// function patterBuildTwo(number)
// {
//     for(i=1;i<=number;i++){
//          let string=""
//          for(j=1;j<=number;j++)
//          {
//             if(j<=number-i)
//                 string=string+" "
//             else
//                 string= string+"*"
//          }
//         console.log(string)
//     }
       
// }
// patterBuildTwo(5)

// Sample Output :
// *  *  *  *  *
// *  *  *  *
// *  *  *
// *  *
// *


function invertedPyramid(number)
{
    for(i=0;i<number;i++)
    {
        let string=""
        for(j=1;j<=number-i;j++)
                string=string+"* "
        console.log(string)
    }
    
}
 
invertedPyramid(5)

