prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
})
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image',modelLoaded
    );
    function modelLoaded()
    {
        console.log('Model Loaded!');
    }

    function speak()
    {
        var synth= window.speechSynthesis;
        speak_data_1 = "The first prediction is " + prediction_1;
        speak_data_2 = "and the second prediction is " + prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
        synth.speak(utterThis);
    }

    function check()
    {
        img = document.getElementById('captured_image');
        classifier.classify(img, gotResult);

    }

    function gotResult(error, results)
    {
        if(error){
            console.error(error); 
        }
        else{
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML = results[0].label;
            
            gesture = results[0].label;
            

            toSpeak = "";
            
            if(gesture == "excellent")
    {
      toSpeak = "This is looking excellent";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
    }
    else if(gesture == "great")
    {
      toSpeak = "Great job";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
    }
    else if(gesture == "victory")
    {
      toSpeak = "That was the marvelous victory";
      document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
    }

    speak();
  }
}
         


















































































































































            if(gesture == "excellent")
            {
                document.getElementById("update_emoji").innerHTML = "&#128076;";
                
            }
            if(results[0].label == "sad")
            {
                document.getElementById("update_emoji").innerHTML = "&#128546;";
            }
            if(results[0].label == "angry")
            {
                document.getElementById("update_emoji").innerHTML = "&#128548;";
            }
            if(results[1].label == "happy")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128512;";
            }
            if(results[1].label == "sad")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128546;";
            }
            if(results[1].label == "angry")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128548;";
            }
        }
    }