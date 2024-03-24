function CalculateNetSalary(basicSalary,benefits){
    //constants that dont change in any circumstances
    const payeRate=0.15
    const NHIFRate=0.01
    const NSSFRate = 0.06
    let grossSalary=0
    //check if the basic salary is greater than 24000
    if (basicSalary > 24000) 
       //if yes
     grossSalary = basicSalary + benefits

     const payee = grossSalary * payeRate
const NHIFdeductions= grossSalary * NHIFRate
const NSSFdeductions= grossSalary * NSSFRate
    //Caculating the net salary
netSalary = Math.max(grossSalary- payee - NHIFdeductions - NSSFdeductions) 

console.log("The NHIF Deduction is- " + "" +NHIFdeductions)
console.log("The NSSF Deduction is - " + NSSFdeductions)
console.log("The GrossSalary is - "+ grossSalary)
console.log("Payee is - "+ payee)
    
}
console.log(CalculateNetSalary())
