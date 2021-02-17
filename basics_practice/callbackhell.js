//1. after  2sec fetch student rool Number,
//2. after 2 sec fetch name and age of rool number 2,
//3. then after 2 sec find the gender of roll number 2


const getRollNo = () => {
    setTimeout(() => {
        console.log('API getting roll number');
        let roll_no = [1, 2, 3, 4, 5];
        console.log(roll_no);

        setTimeout((rollno) => {
            const biodata = {
                name: "vandana",
                age: 30
            }
            console.log(`My roll number is ${rollno} My name is ${biodata.name} anf age is ${biodata.age}`);

            setTimeout((name) => {
                biodata.gender = "Female";
                console.log(`${name} gender is ${biodata.gender}`);

            }, 2000, biodata.name);

        }, 2000, roll_no[1]);

    }, 2000);
}

getRollNo();
