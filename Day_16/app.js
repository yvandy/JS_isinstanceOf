//Named Import

import{Nokia, show,a} from "./Named_export.js"; //------  this line can also be written as (import * as device from "./mobile.js" )------//
const n =new Nokia;    // const n = new device.Nokia();
n.volumeUp();           // n.volumeUp();
show();                 // device.show();
console.log(a);         //console.log(device.a);