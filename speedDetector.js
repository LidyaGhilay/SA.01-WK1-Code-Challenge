function speedDetector (speed){
const speedlimit =70 
let points = 0
//Only values which are in number form and not negatives
if(isNaN(speed)) return "invalid speed input"

if(speed <= speedlimit + 4) return "Ok"

points = Math.floor((speed - speedlimit)/5)
//If the points haves exceeded 12 the your licesnce is suspended
if(points > 12) return "License Suspended"

return  `Demerit Points ${points}`

}
console.log(speedDetector( 60))