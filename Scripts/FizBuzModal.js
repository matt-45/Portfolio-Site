$(document).ready(function () {
    $("#showNumberChallengeModal").click(function() {
        $("#numberChallengeModal").modal();
    });

    $("#generateNumbersForNumberChallenge").click(function () {
        // find numbers

        let leastNumber = document.getElementById("leastNumberLabel");
        let greatestNumber = document.getElementById("greatestNumberLabel");
        let meanNumber = document.getElementById("meanNumberLabel");
        let sumNumber = document.getElementById("sumNumberLabel");
        let productNumber = document.getElementById("productNumberLabel");

        let errorLabel = document.getElementById("numberChallengeErrorHeader")

        //let numberOne = document.getElementById("numberOneTF");
        let numberOne = document.getElementById("numberOneTF").value;
        let numberTwo = document.getElementById("numberTwoTF").value;
        let numberThree = document.getElementById("numberThreeTF").value;
        let numberFour = document.getElementById("numberFourTF").value;
        let numberFive = document.getElementById("numberFiveTF").value;
        

        if (numberOne == parseInt(numberOne).toString()) {
            numberOne = parseInt(numberOne)
            console.log(numberOne)
            errorLabel.innerText = ""
        } else {
            errorLabel.innerText = "Please only enter numbers."
        }

        if (numberTwo == parseInt(numberTwo).toString()) {
            numberTwo = parseInt(numberTwo)
            console.log(numberTwo)
            errorLabel.innerText = ""
        } else {
            errorLabel.innerText = "Please only enter numbers."
        }

        if (numberThree == parseInt(numberThree).toString()) {
            numberThree = parseInt(numberThree)
            console.log(numberThree)
            errorLabel.innerText = ""
        } else {
            errorLabel.innerText = "Please only enter numbers."
        }

        if (numberFour == parseInt(numberFour).toString()) {
            numberFour = parseInt(numberFour)
            console.log(numberFour)
            errorLabel.innerText = ""
        } else {
            errorLabel.innerText = "Please only enter numbers."
        }

        if (numberFive == parseInt(numberFive).toString()) {
            numberFive = parseInt(numberFive)
            console.log(numberFive)
            errorLabel.innerText = ""
        } else {
            errorLabel.innerText = "Please only enter numbers."
        }

        if (errorLabel.innerText == "") {
            let numbers = [numberOne, numberTwo, numberThree, numberFour, numberFive]
            let sum = numberOne + numberTwo + numberThree + numberFour + numberFive
            let mean = sum / 5
            let product = numberOne * numberTwo * numberThree * numberFour * numberFive
            let lowest = Math.min.apply(null, numbers)
            let greatest = Math.max.apply(null, numbers)

            sumNumber.innerText = sum.toString()
            meanNumber.innerText = mean.toString()
            productNumber.innerText = product.toString()
            greatestNumber.innerText = greatest.toString()
            leastNumber.innerText = lowest.toString()

            console.log("this should be working")
        }

    })
});