var Mark={
    fullname: 'chaitanya',
    mass: 50,
    height: 5.7,
    bmi: function() {
        this.bmi=this.mass/(this.height*this.height);
        return this.Mark.bmi();
    }
};
var John={
    fullname: 'reddy',
    mass: 60,
    height: 5.9,
    bmi: function() {
        this.bmi=this.mass/(this.height*this.height);
    }
};
if(John.bmi()>Mark.bmi())
{
    console.log(John.fullname + 'has a higher bmi of' + John.bmi);

}
else if(Mark.bmi()>John.bmi())
{
    console.log(Mark.fullname + 'has a higher bmi of' + Mark.bmi);

}