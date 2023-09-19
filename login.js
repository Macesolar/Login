function setformMessage(formelement, type, message) {
    const messageElement = formelement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add('form__message--${type}');
}
setformMessage(loginform,"success", "you are logged in!")


document.addEventListener("DOMContentLoaded", () =>{
    const loginform = document.querySelector("#login");
    const createaccountform = document.querySelector("#createaccount");

    document.querySelector("#linkcreateaccount").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.add("form--hidden");
        createaccountform.classList.remove("form--hidden");
    });

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.remove("form--hidden");
        createaccountform.classList.add("form--hidden");
    });

    loginform.addEventListener("submit", e => {
        e.preventDefault();

        //perform your AJAX/Fetch login

        setformMessage(loginform, "error", "invalid username/password combination");
    });

});
