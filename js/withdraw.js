document.getElementById('btn-withdraw').addEventListener('click', function(){
         const newWithdrawAmount = inputFieldValue('withdraw-field');
         if(isNaN(newWithdrawAmount)){
            alert('please give valid input number:');
            return;
        } 
         const previousWithdrawTotal = getElementValue('withdraw-total');
         const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

         setInnerText('withdraw-total', currentWithdrawTotal);

         const previousBalanceTotal = getElementValue('balance-total');
         const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

         setInnerText('balance-total', currentBalanceTotal);
         
})