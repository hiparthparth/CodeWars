function digital_root(n) {
while(n > 9){
    n=sum(n);
}
return n;
function sum(n){
    var sum=n.toString().split("")
                 .reduce(function(a,b) {
                    return a+parseInt(b);
                  },0);
    return sum;
}
}
