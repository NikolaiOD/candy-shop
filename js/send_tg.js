const TOKEN = "6108023984:AAG3UcdAKepkVgJV9vytNQkW421pYfFyyNY";
const CHAT_ID = "-1001822519546";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.querySelector(".form__success");

document.querySelector(".form").addEventListener("submit", function(e) {
    e.preventDefault();

    let message = `<b>Нове замовлення з сайту!</b>\n`;
    message += `<b>Ім'я замовника: </b> ${ this.name.value }\n`;
    message += `<b>Номер телефону замовника: </b> ${ this.phone.value }`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.phone.value = "";
        success.style.display = "block";
    })
})