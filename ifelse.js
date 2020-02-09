// == :check the values
// === :check the values and datatype

var x=20;
var y='20';

if(x === y)
{
    console.log('both are same');
}
else
{
    console.log('both are not same');
}

if(x == y)
{
    console.log('both are same');
}
else
{
    console.log('both are not same');
}

//ternary operator
var age=12;
age >=18 ? console.log("eligible to apply driving license") : console.log("not eligible");

//switch case and break statement

var job='operator';
switch(job) 
{
    case 'teacher':
    case 'farmer':
        console.log("agriculture");
        break;
    case 'operator':
        console.log("operates");
        break;
    default:
        console.log("sorry");
}

//falsy values:undefined,null,0,'',Nan
//Truthy values:not falsy values

var height='NaN';
if(height || height=='NaN')
{
    console.log('true');
}else
{
    console.log('false');
}