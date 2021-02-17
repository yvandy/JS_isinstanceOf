obj = {
    name: "vandana",
    age: 30,
    salutation: function () {
        console.log("my name is " + this.name + "and  Iam " + this.age);
    }
}

obj.salutation();