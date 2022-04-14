var array = [

    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },

    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },

    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },

    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }

];

function getUsers(){
    var output =[];
    for(var i =0;i<array.length;i++){
        output = array[i].firstName + " "+ array[i].lastName + " is " + array[i].age + ", " + array[i].gender;
        console.log(output);
    }
    return output;
}



getUsers();

