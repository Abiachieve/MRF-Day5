//Example 1
// const arr=[1,3,4,7,9];


// function double(values){
//    return values*2
// }
// const output= arr.map(double);
// console.log(output)


// const num=[56,67,89,21];
// function array(element)
// {
//     var z= element*2;
//     return z;
// }
// const output=num.map(array);
// console.log(output);

//Example 2

// const arr=[3,5,6,4,2];
// const output=arr.map((x)=>x*2);
// console.log(output);

// const num=[45,78,90,100,102];
// const output1=num.map((y)=>y*8);
// console.log(output1);

// const num1=[34,45,67,88,90];
// const arrout=num1.map((d)=>d*5);
// console.log(arrout);
//Example 3
// const arr=[3,5,7,2,9];

// const output= arr.map(function(x){
//     return x*2;
// })
// console.log(output);

//Filter odd
// const arr=[5,6,21,9,3];

// function ele(odd){
//    return odd%2 !=0;
// }
// const output= arr.filter(ele);
// console.log(output);

// const arr=[4,2,1,98,76];
//  const output=arr.filter((x)=>x%2!=0);
//  console.log(output);

//Filter even

// const arr=[2,53,54,68,90,100];

// const output=arr.filter(function(even){
//     return even%2==0;
// });
// console.log(output);

// const arr=[23,42,46,44,69,70];

// const output= arr.filter(even=>even%2==0);
// console.log(output);

//filter to print greater than 20 in array

// const arr=[4,1,2,77,65,43];

// const greaternumber=arr.filter((x)=>x>20);
// console.log(greaternumber);

//Filter to print smaller than 35 in an array

// const s=[22,44,5,90,6,21,33];

// const smallernumber=s.filter((y)=>y<35);
// console.log(smallernumber);

//Example of sum of array without using reduce function

// let a=[2,3,4,56,7];

// for(let i=0;i<a.length;i++)
// {
//     a=a+i;
   
// }
// console.log(a);

//Reduce function used to add the values of array
// const array=[32,33,45,67,78];

// const addoutput=array.reduce(function(accu,curr){   //accu=0 initialised near end curly braces and curr=32,33,45,67,78
// accu=accu+curr;  //0+32=32(stored in accu),32+33=65(stored in accu),65+45.....
// return accu;
// },0);

// console.log(addoutput);

//Reduce function to print the maximum value in an array

// const array=[3,4,56,57,90,255];

// const output=array.reduce(function(max,val){       //arrayname.reduce(function(x,y)) here x=initialisation and y=fetch the values from array
// if(val>max){
//     max=val;
// }
// return max;
// },0)//initialisation

// console.log(output)

//lets take example like data from API
// const users = [
//     {firstName: "Saran",lastName: "Kisan",age:40, country: "India",designation: "Admin"},
//     {firstName: "Joseph",lastName: "Khan",age:70,country: "Sweden",designation: "Developer"},
//     {firstName: "Karthi",lastName: "Selvam",age:50,country: "Korea",designation: "Designer"},
//     {firstName: "Shruthi",lastName: "Kumar",age:40,country: "America",designation: "Business Analyst"},
//     ];

    // const output=users.map((x=>x.firstName+" "+x.lastName));
    // console.log(output)

    // var output=users.filter((x)=>x.age>30).map((x)=>x.firstName+" "+x.lastName+" ,"+x.designation+" ,"+x.country);
    // console.log(output);

    //finding ages example {40:2 , 70:1 , 50:1} // {}
    // var output = users.reduce(function(acc,curr){
    //     if(acc[curr.age]){
    //         acc[curr.age]= ++acc[curr.age];
    //     }
    //     else{
    //         acc[curr.age]=1;
    //     }
    //     return acc;
    // },{});
    // console.log(output);

    // var output = users.reduce(function(acc,curr){
    //     if(acc[curr.firstName]){
    //         acc[curr.firstName]= ++acc[curr.firstName];
    //     }
    //     else{
    //         acc[curr.firstName]=1;
    //     }
    //     return acc;
    // },{});
    // console.log(output);

    // var output=users.reduce(function(acc,curr){
    // if(acc[curr.designation]){
    // acc[curr.designation]= ++acc[curr.designation];

//     }
//     else{
//     acc[curr.designation]=1;
//     }
//     return acc;
//     },{});
//     console.log(output);

//     var output=users.reduce(function(acc,curr){
//       if(acc[curr.country]) {
//     acc[curr.country]= ++acc[curr.country];
//    }
//    else{
//     acc[curr.country]=1;
//    }
//    return acc;
//     },{});
//     console.log(output)