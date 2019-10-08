$(document).ready(function () {

    

    //let enteredNum = $("#fearNumInput")



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

    function findNumbers() {
        enteredNum = $("#fearNumInput").val() // error check for letters
        fearNumbers = $("#fearArrayInput").val() // convert to array and error check
        numberOfDigits = $("#fearAmountInput").val()
        fearNumbers = fearNumbers.replace(/\s/g, "");
        tempArray = fearNumbers.split(",")

        for (var i = 0; i < tempArray.length; i++) {
            array.push(parseInt(tempArray[i]))
        }
        //let index = 0
        //let num = 0
        //let hasLooped = false
        //let successfulCombo = []
        

        for (i = 0; i < array.length; i++) {
            if (twoDArray[array.length - 1] != array) {
                move0toBack(array)
            }
            console.log(twoDArray[i])
        }
        let value = 0
        let combo = []
        for (var i = 0; i < twoDArray.length; i++) {
            for (var x = 0; x < twoDArray[i].length; x++) {
                value += twoDArray[i][x] // left off at adding combos
                if (twoDArray[i][x] == enteredNum) {
                    console.log("This single number equlas the entered value")
                    // add this as a combo
                    
                }
                if (value == enteredNum) {
                    console.log("The value is equal to the entered number.")
                    // add this as a combo
                    
                }
                if (value > enteredNum) {
                    value -= twoDArray[i][x]
                }
            }
        }
        
    }

    function move0toBack(x) {
        let firstItem = x[0]
        x.push(firstItem)
        x.shift()
        twoDArray.push(x)
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