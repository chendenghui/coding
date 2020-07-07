

var f = function(str) {
    return str.replace(/-\w/g,function(x){
        console.log('5:',  x)

        return x.slice(1).toUpperCase();
    })
}
console.log(f('sfas-ssee-nn'));
