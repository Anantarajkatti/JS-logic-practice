// Output Description:
// Print the hollow rectangle using stars with R rows and C columns.

// Sample Input :
// 3 5
// Sample Output :
// * * * * *
// *       *
// * * * * *

function printRectangle(row, column)
{
    for(let i=1;i<=row;i++)
    {
        let string=""
        for(j=1;j<=column;j++)
        {
           if(i===1 || i=== row)
            string=string+"* "
           else{
            if(j===1 || j===column)
                string= string+"* "
            else
                string=string+"  "
           }
        }
        console.log(string)
    }
}

printRectangle(3,5)