$(document).ready(function () {

    let errorLabel = $("#fearErrorHeader")

    let codeContainer = $("#codeFearChallenge")

    let modal = $("#fearModalDialog")

    $("#showFearModal").click(function () {
        $("#fearModal").modal();
    });

    $("#generateFear").click(findNumbers)

    $("#clearForFearChallenge").click(clearAll)

    $("#toggleFearCode").click(toggleCode);

    let enteredNum = $("#fearNumInput").val() // error check for letters
    let fearNumbers = $("#fearArrayInput").val() // convert to array and error check
    let numberOfDigits = $("#fearAmountInput").val()
    fearNumbers = fearNumbers.replace(/\s/g, "");
    let tempArray = fearNumbers.split(",")
    let twoDArray = []
    let array = []
    let successfulCombos = []

    function findNumbers() {
        enteredNum = $("#fearNumInput").val() // error check for letters
        fearNumbers = $("#fearArrayInput").val() // convert to array and error check
        numberOfDigits = $("#fearAmountInput").val()
        fearNumbers = fearNumbers.replace(/\s/g, "");
        tempArray = fearNumbers.split(",")

        for (var i = 0; i < tempArray.length; i++) { // pull numbers out of array
            array.push(parseInt(tempArray[i]))
        }

        for (i = 0; i < array.length; i++) { // creates 2d array
            let newShiftedArray = returnNewArray()
            twoDArray.push(newShiftedArray)

            console.log(newShiftedArray)
            if (twoDArray[array.length - 1] != array) {
                
            }
        }
        
        console.log(twoDArray)

        let value = 0
        for (var i = 0; i < twoDArray.length; i++) {
            for (var x = 0; x < twoDArray[i].length; x++) {
                value += twoDArray[i][x]
                
                if (twoDArray[i][x] == enteredNum) {
                    console.log("This single number equlas the entered value")

                } else if (value == enteredNum) {
                    console.log("The value is equal to the entered number.")

                } else if (value > enteredNum) {
                    value -= twoDArray[i][x]
                    console.log("Value is too large")

                } else {
                    console.log("this array does not have a successful combo")
                }
            }
        }    
    }

    function returnNewArray() {
        var firstItem = array.shift()
        array.push(firstItem)
        return array
    }

    function clearAll() {
        //$("#palInput").val("") Clear all inputs here. Maybe set defaults for numbers array
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

    //$.getScript("challengeMethods.js")

});