
    let a = [1,6,3,4,50,2,8,4]
    // 2,4,76,10,20 ==> 2,4,10,20,76
    // sort only even numbers in array
    
    a.sort(function(s,t){
        console.log(s,t);
        if (s%2 === 0 || t%2 === 0 ) {return (s-t);}
        
        else
        {
            return 0;   
        }

    })

