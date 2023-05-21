function calculate(){
    let loanAmount = document.getElementById("loan").value;
    let interestRate  = document.getElementById("interest").value;
    let month = document.getElementById("period").value;
    let p = loanAmount;
    let n = month;
    let r = interestRate/12/100;
    let emi  = p * r * (1+r)^n / [(1+r)^n-1]
    let totalInterestPayable = (p*interestRate*n)/1000
    let totalAmountToPay = parseInt(loanAmount)+parseInt(totalInterestPayable)
    document.getElementById("emi").innerHTML = emi;
    document.getElementById("totalIpay").innerHTML = totalInterestPayable;
    document.getElementById("totalApay").innerHTML = totalAmountToPay;
    // document.getElementById("totalAmountReturn").innerHTML = totalInterestPayable;
    // document.write(emi+"\n"+totalInterestPayable+"\n"+totalAmountToPay)
    // emi = loanAmount + interest
    // interestRate = loanAmount*interestRate*month
}