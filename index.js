var speechRecognition = window.webkitspeechRecognition;
var Recognition = new speechRecognition;

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start()
}

Recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take photo")
    {
        console.log("tirando selfie --- ");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "photo in 5 secs";

    var utterThis = new speechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:300,
    height:250,
    image_format:'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="photo_image" src="'+data_uri+'"/>';
    });
}

function save()
{
 link = document.getElementById("link");
 image = document.getElementById("photo_image").src ;
 link.href = image;
 link.click();
}