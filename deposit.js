
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field')
    
    const previousDepositTotal = getElementValueByid('deposit-total')
    
   const newDepositTotal = previousDepositTotal + newDepositAmount
    setTextElementValueById('deposit-total', newDepositTotal)
    const previousBalanceTotal = getElementValueByid('balace-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount
    setTextElementValueById('balace-total', newBalanceTotal)

})