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


let array1=[98,12]
let array2=[1,2,3,8,5,9]
let array3=[11]
const xy=(x,y)=>x-y
array1.sort(xy)
array2.sort(xy)
array3.sort(xy)

array1.push(...array2)
array1.push(...array3)

console.log(...array1)




