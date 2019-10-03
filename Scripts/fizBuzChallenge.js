$(document).ready(function () {

    let fizBox = $("#fizBox")

    let errorLabel = $("#fizChallengeErrorHeader")

    let codeContainer = $("#codeContainerFizFactorialChallenge")

    let modal = $("#fizModalDialog")

    $("#showFizModal").click(function () {
        $("#fizModal").modal();
    });

    $("#generateForFizChallenge").click(generateString)

    $("#clearNumbersFizChallenge").click(clearNumbers)

    $("#toggleFizCode").click(toggleCode);

    function generateString() {
        let mainString = ""
        let num1 = $("#num1FizInput").val()
        let num2 = $("#num2FizInput").val()
        console.log(num1)
        console.log(num2)
        for (var i = 1; i < 100; i++) {
            if (i % num1 == 0 && i % num2 == 0) {
                mainString += "FIZ BUZ ".bold()
            } else if (i % num1 == 0) {
                mainString += "Fiz ".bold()
            } else if (i % num2 == 0) {
                mainString += "Buz ".bold() + " "
                console.log("should write buz")
            } else {
                mainString += i + " "
            }
        }
        fizBox.text(mainString)
    }

    function clearNumbers() {
        $("#factorialInput").val("")
        factorialAnswerLabel.text("")
        errorLabel.text("")
    }

    function toggleCode() {
        if (codeContainer.css("display") == "none") {
            codeContainer.css("display", "block")
            modal.attr("class", "modal-dialog modal-lg")
            this.innerText = "Hide Code"
            this.className = "btn btn-danger pull-left"
        } else {
            codeContainer.css("display", "none")
            modal.attr("class", "modal-dialog modal-md")
            this.className = "btn btn-white pull-left"
            this.innerText = "Show Code"
        }
    }

});