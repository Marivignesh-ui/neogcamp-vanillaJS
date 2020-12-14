var txtin = document.querySelector(".inputtxt");
var btn = document.querySelector(".bt1");
var txtout = document.querySelector(".outputtxt");
btn.addEventListener("click", transfun);

var url;

function buildurl(txtinp) {
        console.log("testing");
        url = "https://api.funtranslations.com/translate/minion.json?text=" + txtinp;
        console.log(url);
}

function errorhandler(error) {
        alert("error occured" + error);
}

function transfun() {
        var txtinp = txtin.value;
        if (txtinp != "") {
                buildurl(txtinp);
                fetch(url).then(function responsehandler(response) {
                        return response.json()
                }).then(function jsonparsing(json) {
                        txtout.innerText = json.contents.translated
                }).catch(errorhandler);
        } else {
                alert("Type something to translate");
                txtin.style.borderColor = "red";

        }
}