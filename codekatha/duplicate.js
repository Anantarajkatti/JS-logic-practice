//remove duplicate in an array

// const array= [1,2,1,4,5,4,4,6,5,7,5,]
// array.sort((x,y)=>x-y)
// console.log(array)
// let prevele=0
// const newArray=[]
// let count=0
// array.forEach(element => {
//     if(element===prevele){

//       console.log("same")
//       return}
//     else{
//     newArray.push(element)
//     prevele=element
//     }
// });
// console.log(newArray)


// how many elements are duplicate
// Sample Input :
// 10
// 1 1 1 2 2 2 3 8 9 7
// 5
// 1 2 3 0 5
// Sample Output :
// 3 3 1 Not Present Not Present

// const array=[1,1,1,2,2,2,3,8,9,7]
// const checkArray=[1,2,3,0,5]
// const newArray=[]
// array.sort((x,y)=>x-y)

// for(let i=0;i<checkArray.length;i++)
// {
//   let count=0;
//   for(let j=0;j<array.length;j++)
//   {
//     if(array[j]===checkArray[i])
//     {
//       count++;
//     }
//   }
//   if(count===0)
//       newArray.push("not Present")
//   else
//     newArray.push(count)

// }
// console.log(newArray)

//Sample Input :
// 3 3
// 87 21 34
// 89 32 78
// 12 23 45
// Sample Output :
// 12 21 23
// 32 34 45
// 78 87 89

// let n=3
// let m=3

// const matrix=[[87,21, 34],[89, 32 ,78],[12, 23, 45]]
// const newMatrix=matrix.flat().sort((x,y)=>x-y)
// console.log(newMatrix)



// for(let i=0;i<n;i++)
// {
//      for(let j=0;j<matrix[i].length;j++)
//      {

//       matrix[i][j]=newMatrix.shift()
//      }
// }
// console.log(matrix)

// Input Description:
// First line contains the number of arrays. Subsequent lines contain the size of the array followed by the elements of the array.

// Output Description:
// An array containing the sorted elements of k sorted arrays

// Sample Input :
// 3
// 2
// 98 12
// 6
// 1 2 3 8 5 9
// 1
// 11
// Sample Output :
// 12 98 1 2 3 5 8 9 11


// let array1=[98,12]
// let array2=[1,2,3,8,5,9]
// let array3=[11]
// const xy=(x,y)=>x-y
// array1.sort(xy)
// array2.sort(xy)
// array3.sort(xy)

// array1.push(...array2)
// array1.push(...array3)

// console.log(...array1)

// given index array elements sorted in ascending order

// Sample Input :
// 5
// 3 9 1 44 6
// Sample Output :
// 1 9 3 44 6

// const array=[3,9,1,44,6]
// let temp=0
// for(let i=0;i<array.length;i=i+2)
// {
//    if(i>array.length)
//       break
//    console.log(i)
//    if(array[i]>array[i+2]){
//       console.log("greater")
//     temp=array[i]
//     array[i]=array[i+2]
//     array[i+2]=temp
//    }
// } 

// console.log(array)

//Input Description:
// You are given two numbers ‘n’ and ‘w’ n representing size of array and ‘w’ size of window

// Output Description:
// Print the index of first 0(1 basedindexing),if there is no index with 0 print -1

// Sample Input :
// 7 2
// 1 0 6 7 4 0 9
// Sample Output :
// 2 2 -1 -1 6 6

const array=[1,0,6,7,4,0,9]
const newArray=[]
let m=7
let n=2

for(let i=0;i<array.length;i++)
{
   console.log("i -- ",i)
   let flag=false
   for(let j=i;j<i+n;j++)
   {
      
      console.log("j=",j)
      console.log("array[j]",array[j])
      if(array[j]=== 0)
      {
         console.log("pushed",j+1)
         flag=true
         newArray.push(j+1)
      }
   }
   if(flag===false)
   {
      newArray.push(-1)
      console.log("pushed -1")
   }
   console.log("-----------------------------")
}

console.log(newArray)






