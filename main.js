function setup(){
    canvas = createCanvas(300,200);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oli2cqfwj/model.json')
}

function modelloaded(){
    console.log("it works!")
}

function draw(){
    image(video, 0, 0, 300,200);
    classifier.classify(video,getresult)
}

function getresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("name_object").innerHTML= results[0].label;
        document.getElementById("accuracy_object").innerHTML= results[0].confidence.toFixed(3);
    }
}