var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(event);
    //1
    if(content == "take my selfie")
    {
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    //2
    speak_data = "Taking your Selfie in 5 Seconds";
    var utterValue = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterValue);
    Webcam.attach(camera);
    
    //4
    setTimeout(function(){
        takeSnap();
        save();
    },5000);
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

//3
function takeSnap()
{
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML = "<img id='selfie_img' src="+data_URI+">"
    });
}

//5
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}