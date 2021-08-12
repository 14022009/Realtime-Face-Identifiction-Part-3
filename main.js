function preload() {

}

function setup() {
    canvas = createCanvas(500, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    modelload = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-ouN2Qanm/model.json', modalloaded);
}

function draw() {
    image(video, 0, 0, 500, 350);
    modelload.classify(video, gotresult);
}

function modalloaded() {
    console.log("Model Loaded");
}

function gotresult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("face_name_holder").innerHTML = result[0].label;
        document.getElementById("confidence_value_holder").innerHTML = result[0].confidence.toFixed(3);
    }
}