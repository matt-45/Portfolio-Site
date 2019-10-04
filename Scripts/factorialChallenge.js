$(document).ready(function () {

    let facAnswerHeader = $("#facAnswerHeader")

    let errorLabel = $("#facErrorHeader")

    let codeContainer = $("#codeFacChallenge")

    let modal = $("#facModalDialog")

    $("#showFacModal").click(function () {
        $("#facModal").modal();
    });

    $("#generateFac").click(generateNumbers)

    $("#clearNumbersFacChallenge").click(clearAll)

    $("#toggleFacCode").click(toggleCode);

    function generateNumbers() {
        let facInput = $("#facInput").val()

        if (facInput != "") {
            if (facInput == parseInt(facInput).toString()) {
                facInput = parseInt(facInput)
                if (facInput > 0) {
                    let answer = 1
                    for (var i = facInput; i > 0; i--) {
                        answer *= i
                    }
                    facAnswerHeader.text(`The factorial of ${facInput} is ${answer}.`)
                    errorLabel.text("")
                } else {
                    facAnswerHeader.text("")
                    errorLabel.text("Cannot find the factorial of a negative number.")
                } 
            } else {
                facAnswerHeader.text("")
                errorLabel.text("Please only enter whole numbers.")
            }
        } else {
            facAnswerHeader.text("")
            errorLabel.text("Please enter a number.")
        } 
    }

    function clearAll() {
        $("#facInput").val("")
        facAnswerHeader.text("")
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