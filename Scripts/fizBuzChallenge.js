$(document).ready(function () {

    let fizBox = $("#fizBox")

    let errorHeader = $("#fizChallengeErrorHeader")

    let codeContainer = $("#codeFizChallenge")

    $("#showFizModal").click(function () {
        $("#fizModal").modal();
    });

    $("#generateForFizChallenge").click(generateString)

    $("#clearNumbersFizChallenge").click(clearAll)

    $("#toggleFizCode").click(toggleCode);

    function generateString() {
        fizBox.text("")
        let num1 = $("#num1FizInput").val()
        let num2 = $("#num2FizInput").val()
        let numbers = [num1, num2]

        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] != "") {
                if (numbers[i] == parseInt(numbers[i]).toString()) {
                    numbers[i] = parseInt(numbers[i])
                    errorHeader.text("")
                } else {
                    clearAnswers()
                    errorHeader.text("Please only enter whole numbers.")
                    break
                }
            } else {
                clearAnswers()
                errorHeader.text("Please fill each number slot.")
                break
            }
        }

        if (errorHeader.text() == "") {
            for (var i = 1; i <= 100; i++) {
                if (i % num1 == 0 && i % num2 == 0) {
                    fizBox.append("<span class='fizzBuzz'>FIZZ BUZZ </span>")
                } else if (i % num1 == 0) {
                    fizBox.append("<span class='fizz'>Fizz </span>")
                } else if (i % num2 == 0) {
                    fizBox.append("<span class='buzz'>Buzz </span>")
                } else {
                    fizBox.append(i + " ")
                }
            }
        }
    }

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