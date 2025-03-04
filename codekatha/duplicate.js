//remove duplicate in an array

const array= [1,2,1,4,5,4,4,6,5,7,5,]
array.sort((x,y)=>x-y)
console.log(array)
let prevele=0
const newArray=[]
let count=0
array.forEach(element => {
    if(element===prevele){

      console.log("same")
      return}
    else{
    newArray.push(element)
    prevele=element
    }
});
console.log(newArray)


// how many elements are duplicate
