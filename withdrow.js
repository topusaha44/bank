document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrowAmount = getInputFieldValueById('withdrow-field')
    
    const previousWithdrowTotal = getElementValueByid('withdraw-total')
    
   const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount
    setTextElementValueById('withdraw-total', newWithdrowTotal)
    const previousBalanceTotal = getElementValueByid('balace-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount
    setTextElementValueById('balace-total', newBalanceTotal)

})