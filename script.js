Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
       function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    document.getElementById("result_object_name").innerHTML = results[0].label;

    gesture = results[0].label;
    
    toSpeak = "";
    
    if(gesture == "Good")
    {
      toSpeak = "All the best";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
    }
     if(gesture == "Bravo")
    {
      toSpeak = "Wonderful";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128079;";
    }
    if(gesture == "Victory")
    {
      toSpeak = "That was an amazing victory!";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
    }
    if(gesture == "Okay")
    {
      toSpeak = "I understand";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
    }
    if(gesture == "Dislike")
    {
      toSpeak = "I don't like that";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128078;";
    }
    if(gesture == "Rock")
    {
      toSpeak = "You're amazing!";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#129304;";
    }
     if(gesture == "Luck")
    {
      toSpeak = "Greetings";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128075;";
    }

    speak();
  }
}

