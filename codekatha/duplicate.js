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

const array=[1,1,1,2,2,2,3,8,9,7]
const checkArray=[1,2,3,0,5]
const newArray=[]
array.sort((x,y)=>x-y)

for(let i=0;i<checkArray.length;i++)
{
  let count=0;
  for(let j=0;j<array.length;j++)
  {
    if(array[j]===checkArray[i])
    {
      count++;
    }
  }
  if(count===0)
      newArray.push("not Present")
  else
    newArray.push(count)

}
console.log(newArray)

