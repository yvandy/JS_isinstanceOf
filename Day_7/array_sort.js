let a = ["ant", "Bug", "cat", "Dog"];
//a.sort(); 
a.sort(function(s,t) {
 let a = s.toLowerCase(); 
 let b = t.toLowerCase();
 console.log(s,t);
 console.log(a,b);
 
 if (a < b) return -1;
 if (a > b) return 1;
 return 0;
})
