var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 
var Textbox = document.getElementById("textbox");
function start(){
Textbox.innerHTML = "";
recognition.start();
}

recognition.onresult = function (event) {
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if (Content == "Toma mi selfie") { 
console.log("toma mi selfie---");
speak(); }
if (Content == "arriba arriba abajo abajo izquierda derecha izquierda derecha A B Start") { 
console.log("toma mi selfie-2--");
speak(); }
}
function speak(){
var synth = window.speechSynthesis;
speak_data = "Tomando tu selfie en 5 segundos";
var utterThis = new SpeechSynthesisUtterance(speak_data); 
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function () { take_selfie(); save(); }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({ width: 360, height: 250, image_format: 'png', png_quality: 90 });
function take_selfie() { 
Webcam.snap(function (data_uri) { 
document.getElementById("result").innerHTML = '<img id="selfie_image" src="' +data_uri+ '"/>'; }); }
function save() { link = document.getElementById("link"); image = document.getElementById("logo_img").scr; link.href = image; 
//guarda en automático la imagen que acabamos de tomar 
link.click(); }