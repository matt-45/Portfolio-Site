$(document).ready(function () {
    let leastNumLabel = $("#leastNum")
    let greatestNumLabel = $("#greatestNum")
    let meanNumLabel = $("#meanNum")
    let sumNumLabel = $("#sumNum")
    let productNumLabel = $("#productNum")

    let errorHeader = $("#numErrorHeader")

    let codeContainer = $("#codeNumChallenge")

    let modal = $("#numModalDialog")

    $("#showNumModal").click(function () {
        $("#numModal").modal();
    });

    $("#generateNumbersForNumChallenge").click(generateNumbers)

    $("#clearNumbersNumChallenge").click(clearAll);

    $("#toggleNumCode").click(toggleCode);

    function generateNumbers() {
        let n1Input = $("#num1Input").val()
        let n2Input = $("#num2Input").val()
        let n3Input = $("#num3Input").val()
        let n4Input = $("#num4Input").val()
        let n5Input = $("#num5Input").val()

        let numbers = [n1Input, n2Input, n3Input, n4Input, n5Input]

        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] != "") {
                if (numbers[i] == parseFloat(numbers[i]).toString()) {
                    numbers[i] = parseFloat(numbers[i])
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
            let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
            let mean = sum / 5
            let product = numbers[0] * numbers[1] * numbers[2] * numbers[3] * numbers[4]
            let least = Math.min.apply(null, numbers)
            let greatest = Math.max.apply(null, numbers)

            if (product.toString().length >= 8) {
                productNumLabel.text(product.toString().substring(0, 9 - "...".length) + "...")
            } else {
                productNumLabel.text(product)
            }
            sumNumLabel.text(sum)
            meanNumLabel.text(mean)
            greatestNumLabel.text(greatest)
            leastNumLabel.text(least)
        }
    }

    function clearAnswers() {
        sumNumLabel.text("0")
        meanNumLabel.text("0")
        greatestNumLabel.text("0")
        leastNumLabel.text("0")
        productNumLabel.text("0")
    }

    function clearAll() {
        clearAnswers()

        $("#num1Input").val("")
        $("#num2Input").val("")
        $("#num3Input").val("")
        $("#num4Input").val("")
        $("#num5Input").val("")

        errorHeader.text("")
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