// When the contact-thankyou.html is loaded displays email form memory
window.addEventListener('load', () => {
    const email = sessionStorage.getItem('email');
    console.log(email);
    
    document.getElementById('email').innerHTML = email;

/*     let params = new URLSearchParams(window.location.search);

    document.getElementById('email').innerText = params.get('email'); */
})

//Saves email to memory
function CacheMail(){
    const email = document.getElementById('email').value;

    sessionStorage.setItem('email', email);
}