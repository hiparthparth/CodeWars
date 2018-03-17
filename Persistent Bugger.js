const prod = (n) => (n+'').split('').reduce((p,v)=>p*v,1)

function persistence(num) {
   let p = 0; 
   while( num>9 ){ num = prod(num); p++ }
   return p
}
