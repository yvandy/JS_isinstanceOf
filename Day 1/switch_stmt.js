
function convert(x){

switch (typeof x){
    case "number":
        return x.toString(16);
        
    case "string":
        return '"' + x +'"';

    default:
        return String(x);

}
}
convert(5+4);