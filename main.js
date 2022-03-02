

  function start(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V1TTnlfcy/model.json', modelReady );
}

   function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("sound_hearing_span").innerHTML="I can hear - "+results[0].label;
    document.getElementById("accuracy_span").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2);
    img=document.getElementById("alien-1");
    img1=document.getElementById("alien-2");
    img2=document.getElementById("alien-3");
    if(results[0].label== "clap"){
      img.src="aliens-01.gif";
      img1.src="aliens-02.png";
      img2.src="aliens-03.png";
    }
    else if(results[0].label== "snap"){
      img.src="aliens-01.png";
      img1.src="aliens-02.gif";
      img2.src="aliens-03.png";
    }
    else{
      img.src="aliens-01.png";
      img1.src="aliens-02.png";
      img2.src="aliens-03.gif";
    }
  }

}