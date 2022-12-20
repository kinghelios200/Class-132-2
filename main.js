prediction_1 = ""

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H-ghSElhr/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model was successfully imported");
}

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 

//define function modelLoaded

//define function check() 
function check(){
    ksi = document.getElementById("captured_image");
    classifier.classify(ksi, gotResult);
}

//define function gotResult(error, results)

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("status").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        if (results[0].label == "Proper") {
            document.getElementById("status").innerHTML = "You are wearing a mask";
        }
        if (results[0].label == "Improper") {
            document.getElementById("status").innerHTML = "You are wearing a mask, but not properly";
        }
        if (results[0].label == "Not there") {
            document.getElementById("status").innerHTML = "You are not wearing a mask";
        }
    }
}   