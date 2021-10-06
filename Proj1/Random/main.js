function squareArray(arr){
    return arr.map(num=>num*num)
}

const input1 = [1, 2, 3, 4, 5];
console.log(input1, squareArray(input1));

function sumPositive(arr){
    return arr.length>0?arr.reduce(((acc,val,)=>val>0?acc+val:acc),0):0
}

const input2 = [1, -4, 12, 0, -3, 29, -150];
console.log(input2, sumPositive(input2));

function calcMedianMean(arr){
    return {mean: arr.reduce((acc,num)=>acc+num)/arr.length, 
        median:arr.sort((a,b)=>a-b)[Math.floor((arr.length/2+0.5)-1)]}
}
const input3 = [12, 46, 32, 64];
console.log(input3, calcMedianMean(input3));

function getNameInitials(string){
    return string.split(" ").reduce(((acc,val)=>acc+val[0]),"")
}
const input4 = 'George Raymond Richard Martin';
console.log(input4, getNameInitials(input4));

function findAgeDiff(arr){
    let sortedArr = arr.sort((a,b)=>a.age-b.age)
    return [sortedArr[0].age, sortedArr[sortedArr.length-1].age, sortedArr[sortedArr.length-1].age-sortedArr[0].age]
}

const input5 = [
    {
      name: 'John',
      age: 13,
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    },
  ];
console.log(input5, findAgeDiff(input5))

function abbreviate(string){
    return string.split(" ").map(val=>val.length>=4?""+val[0]+(val.length-2).toString()+val[val.length-1]:val).join(" ")
}

const input6 = 'Every developer likes to mix kubernetes and javascript';
console.log(input6, abbreviate(input6))

function factorial(num){
    return num===0?1: new Array(num).fill(null).map((curr,idx)=>idx+1).reduce(((acc,val)=>acc*=val),1)
}

const input7 = 0;
console.log(input7, factorial(input7))
