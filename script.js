const btn = document.getElementById('btn');
const validMessage = document.getElementById('valid-mail-message');
const mainSection = document.getElementById('main-section');
const confirmSection = document.getElementById('confirmSec');
const emailText = document.getElementById('email-text');

confirmSection.style.display = 'none';

btn.addEventListener('click', ()=>{
    const inputField = document.getElementById('input-field').value;

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      }
      
      if(isValidEmail(inputField))
      {
        validMessage.style.display = 'none';
        mainSection.style.display = 'none';
        confirmSection.style.display = 'block';
        confirmSection.style.display = 'flex';

        emailText.innerHTML = document.getElementById('input-field').value;

      }
      else{
        validMessage.style.display = 'block';
        document.getElementById('input-field').style.border = '1px solid hsl(4, 100%, 67%)';
        document.getElementById('input-field').style.color = 'hsl(4, 100%, 67%)';
      }

})