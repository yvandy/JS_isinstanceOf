let name1 = {
    firstname : "vandana",
    lastname : "sharma",
    
}

let name2 = {
    firstname : "sachin",
    lastname :"tendlkar",
}

let printFullName=function(hometown,state){

        console.log(this.firstname+ " "+this.lastname + "from " + hometown + "," + state);
    }

// function borrowing in CALL()
printFullName.call(name1,"shimal","himachal");
printFullName.apply(name2,["pune","maharashtra"]);

// bind method ( it binds this method with the object and returns the copy of the method)

let printMyName = printFullName.bind(name2,"pune","maharashtra")
console.log(printMyName);
printMyName();

