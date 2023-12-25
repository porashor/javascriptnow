const a = [3, 4 ,2, 78, 98 ,12];



function myfunction(total, value, index, array){
    console.log(total);
    return total + value;
}
let newarry = a.reduce(myfunction);
//console.log(newarry)



