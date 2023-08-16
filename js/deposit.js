
document.getElementById('btn-deposit').addEventListener('click', function(){
           const newDepositAmount = inputFieldValue('deposit-field');
           if(isNaN(newDepositAmount)){
            alert('please give valid input number:');
            return;
        } 
           const previousDepositTotal = getElementValue('deposit-total');
          

           const currentDepositTotal = previousDepositTotal + newDepositAmount;
           setInnerText('deposit-total', currentDepositTotal);

           const previousBalanceTotal = getElementValue('balance-total');
           const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

           setInnerText('balance-total', currentBalanceTotal);

           
})