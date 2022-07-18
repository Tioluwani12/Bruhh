function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/htpViHxyk/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('Ear');
    img1 = document.getElementById('Cat');
    img2 = document.getElementById('Dog');
    img3 = document.getElementById('Cow');
    img4 = document.getElementById('Lion');


    if(results[0].label == "Meowing"){
        img1.src = 'https://www.theguardian.com/lifeandstyle/2020/sep/05/what-cats-mean-by-miaow-japans-pet-guru-knows-just-what-your-feline-friend-wants';
    } else if(results[0].label == "Barking"){
        img2.src = 'https://www.collinsdictionary.com/dictionary/english/dog';
    } else if(results[0].label == "Mooing"){
        img3.src = 'https://www.collinsdictionary.com/dictionary/english/cow';
    } else if(results[0].label == "Roar"){
        img4.src = 'https://www.istockphoto.com/photos/lion';
    } 
    else{
        img.src = 'https://s3-whjr-curriculum-uploads.whjr.online/dd5ed82b-b105-4b93-806f-1f9e718b56ec.png';
    }
    }
}