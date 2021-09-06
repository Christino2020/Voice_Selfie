var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML = ""

    Recognition.start()

}
Recognition.onresult = function (event) {
    console.log(event)

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content

    console.log(Content)

    if (Content == "take my selfie") {
        console.log("taking Selfie____")
        speak()
    }
}

function speak() {
    var synth = window.speechSynthesis
    speakData = "Taking Selfie in 5 seconds"
    var UtterThis = new SpeechSynthesisUtterance(speakData)
    synth.speak(UtterThis)
    Webcam.attach(camera)
    setTimeout(function () {
        takeSnapshot()
        save()

    }, 5000)



}
camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 70
})

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Result").innerHTML = '<img id = "Selfie_Image" src = "' + data_uri + '">'
    })
}

function save() {
    link = document.getElementById("Link")
    image = document.getElementById("Selfie_Image").src
    link.href = image
    link.click()

}