$(document).ready(function () {
    //640608a9-9cc9-4928-89b9-ba7170d9e216

    $("#submitButton").on('click', function () {
        var userEmail = $("#email").val();
        var userMessage = $("#message").val();
        var userName = $("#name").val()
        console.log(userName)
        console.log(userEmail)
        console.log(userMessage)
        Email.send({
            SecureToken: "168159af-9124-4e40-b207-2026d7c66e77",
            To: "mattpark102@outlook.com",
            From: "mattpark102@outlook.com",
            Subject: "Message from portfolio.",
            Body: "Name:" + userName + "Email:" + userEmail + "Message" + userMessage
        }).then(
            message => alert(message)
        );

    })
});