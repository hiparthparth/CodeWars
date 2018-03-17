function findUniq(arr) {
 return arr.filter(function(elem){
  return arr.indexOf(elem)===arr.lastIndexOf(elem)
 })[0] 
 
}
