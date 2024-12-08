var arr=[1,2,3,4,5,6,100]
let arr1=[200,300]
let arr2=[5000]
let arr3=arr.concat(arr1,arr2);
let arr4=[...arr,...arr1,...arr2]
console.log(arr3,arr4)
