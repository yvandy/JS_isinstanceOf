console.log("this is tutorial");

class Employee{

    constructor(givenName,givenExp,givenDivision){
        this.name = givenName;
        this.experience = givenExp;
        this.division = givenDivision;
    }

    joiningYear(){
        return 2020-this.experience;
    }
    slogan(){
        return `Iam  ${this.name} and this company is the best`;
    }

    static add(a,b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(givenName,givenExp,givenDivision,language,github){
        super(givenName,givenExp,givenDivision);
        this.language = language;
        this.github = github;
}

favoriteLanguage(){
    if(this.language == "python"){
        return 'python';
    }
    else {
        return "javascript";
    }
}
static multiply(a,b){

    return a*b;
}
}
obj1 = new Employee("vandana",1,"B");
console.log(obj1.slogan());
console.log(obj1.joiningYear());
console.log(Employee.add(34,5));