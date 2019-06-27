// add firebase info 


    var trainName = $("#train-name-input").val();
    var destination = $("#destination-input").val();
    var firstTrain = $("#first-train-input").val();
    var frequency = $("#frequency-input").val();
    // making it so all train info must be entered or it gives an alert
        if (trainName != "" &&
            destination != "" &&
            firstTrain != "" &&
            frequency != "") {

            database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency
            });

        } else {

        alert ("enter train information");
        $("input").val("");
        return false;
        }
