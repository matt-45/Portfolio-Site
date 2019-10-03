$(document).ready(function () {

    let factorialAnswerLabel = $("#factorialAnswerLabel")

    let errorLabel = $("#factorialChallengeErrorHeader")

    let codeContainer = $("#codeContainerForFacChallenge")

    let modal = $("#facModalDialog")

    $("#showFacModal").click(function () {
        $("#facModal").modal();
    });

    $("#generateNumForFacChallenge").click(generateNumbers)

    $("#clearNumbersFacChallenge").click(clearNumbers)

    $("#toggleFacCode").click(toggleCode);

    function generateNumbers() {
        let factorialInput = $("#factorialInput").val()

        if (factorialInput != "") {
            if (factorialInput == parseInt(factorialInput).toString()) {
                factorialInput = parseInt(factorialInput)
                if (factorialInput > 0) {
                    let answer = 1
                    for (var i = factorialInput; i > 0; i--) {
                        answer *= i
                    }
                    factorialAnswerLabel.text("The factorial of " + factorialInput + " is " + answer + ".")
                    errorLabel.text("")
                } else {
                    factorialAnswerLabel.text("")
                    errorLabel.text("Cannot find the factorial of a negative number.")
                } 
            } else {
                factorialAnswerLabel.text("")
                errorLabel.text("Please only enter whole numbers.")
            }
        } else {
            factorialAnswerLabel.text("")
            errorLabel.text("Please enter a number.")
        } 
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