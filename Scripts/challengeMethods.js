$(document).ready(function () {
    function clearAnswers() {
        fizBox.text("")
        errorHeader.text("")
    }

    function clearAll() {
        clearAnswers()
        $("#num1FizInput").val("")
        $("#num2FizInput").val("")
    }

    function toggleCode() {
        console.log("toggle code button pressed")
        if (codeContainer.css("display") == "none") {
            codeContainer.css("display", "block")
            this.innerText = "Hide Code"
            this.className = "btn btn-danger pull-left"
            console.log("Code should be hidden")
        } else {
            codeContainer.css("display", "none")
            this.className = "btn btn-white pull-left"
            this.innerText = "Show Code"
            console.log("code should be showing")
        }
    }
});