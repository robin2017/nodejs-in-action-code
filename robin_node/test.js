/**
 * Created by robin on 2017/9/24.
 */

var fs = require('fs');
fs.readFile('./resource.json',function(er,data){
    console.log(data)
});