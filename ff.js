var rock={
    name:'rock',
    yearofbirth:1990,
    calculateAge: function()
    {
        console.log(this);
        console.log(2016 - this.yearofbirth);

        function innerfunction()
        {
            console.log(this);

        }
      
    }
}
rock.calculateAge();