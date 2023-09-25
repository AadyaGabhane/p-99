var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    Webcam.attach(camera);
}


Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");