var jone=0;
var jtwo=94;
var jthree=123;
var javg=jone+jtwo+jthree/3;
var Mone=0;
var Mtwo=94;
var Mthree=123;
var Mavg=Mone+Mtwo+Mthree/3;
var MMone=97;
var MMtwo=134;
var MMthree=105;
var MMavg=MMone+MMtwo+MMthree/3;
console.log("avg of jhon team"+javg);
console.log("avg of mark team"+Mavg);
console.log("avg of marry team"+MMavg);
if(MMavg==Mavg && MMavg==javg)
{
    console.log("match is draw");
}
if(MMavg>Mavg && MMavg>javg)
{
    console.log("marry team win the match");
}
if(MMavg<Mavg && MMvag<javg)
{
    console.log("marry team lost the match");
}

//defining a function
function funname()
{
    console.log("hello world");
}
funname();//calling a function


function calculateAge(birthYear)
{
    console.log(2018-birthYear);
    //"return" will take out the value outside which is generated within function
    //It will simply,return the value where it has been called
    return 2018 - birthYear;
}
var ageJhon = calculateAge(1990);
console.log(ageJhon);

//reusing the function
function calculateAge(birthYear)
{
 
}

function yearsUntilRetirement(year,firstName)
{
    var age=calculateAge(year);
    var retirement=65-age;
    if(retirement>0)
    {
      console.log(firstName + 'retires in' +retirement+'years');

    }else{
        console.log(firstName+'already retired');

    }
}
yearsUntilRetirement(1993,'chai');

//function expression
var whatDoYouDo = function(job,firstName)
{
    //return;
    switch(job)
    {
        case 'teacher':
            return firstName + 'teaches kids how to code';
        case 'driver':
            return firstName + 'drives a cab';
        default:
            return firstName+' does something else';

    }
}
console.log(whatDoYouDo('teacher','jhon'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));

//two ways to Initializing an array
var names=['Jhon','mark','Jane'];
var years=new Array(1990,1969);

console.log(names[2]);
console.log(names.length);
names[1]='Ben';
names[names.length]='mary';
console.log(names);
//Differnt data types
var jhon=['Jhon','Smith',1990,'designer',false];
jhon.push('roi');
console.log(jhon);

console.log(jhon.indexOf(1990));//2

var isDesigner=jhon.indexOf('designer')===-1 ? 'Jhon is Not a Designer' : 'Jhon is a Designer';
console.log(isDesigner);