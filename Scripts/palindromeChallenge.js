$(document).ready(function () {

    let palAnswerHeader = $("#palAnswerHeader")

    let errorLabel = $("#palErrorHeader")

    let codeContainer = $("#codePalChallenge")

    let modal = $("#palModalDialog")

    $("#showPalModal").click(function () {
        $("#palModal").modal();
    });

    $("#generatePal").click(generatePalindrome)

    $("#clearForPalChallenge").click(clearAll)

    $("#togglePalCode").click(toggleCode);

    function generatePalindrome() {
        let enteredWord = $("#palInput").val().toLowerCase()
        if (enteredWord += "") {
            if (enteredWord != parseInt(enteredWord).toString()) {
                if (enteredWord.length >= 3) {
                    let reversedWord = enteredWord.split("").reverse().join("")
                    if (enteredWord == reversedWord) {
                        enteredWord = enteredWord.charAt(0).toUpperCase() + enteredWord.slice(1)
                        palAnswerHeader.text(`${enteredWord} is a palindrome.`)
                    } else {
                        enteredWord = enteredWord.charAt(0).toUpperCase() + enteredWord.slice(1)
                        palAnswerHeader.text(`${enteredWord} is not a plaindrome.`)
                    }
                    errorLabel.text("")
                } else {
                    palAnswerHeader.text("")
                    errorLabel.text("Please enter at least three letters.")
                }
            } else {
                palAnswerHeader.text("")
                errorLabel.text("Please only enter letters.")
            }
        } else {
            palAnswerHeader.text("")
            errorLabel.text("Please enter a word.")
        }
    }

    function clearAll() {
        $("#palInput").val("")
        palAnswerHeader.text("")
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