let speech = new SpeechSynthesisUtterance();
let voices = [];

let selectVoice = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    voices.forEach((voice, i) => {
        selectVoice.options[i] = new Option(voice.name, i);
    });

    speech.voice = voices[0];

    selectVoice.addEventListener("change", () => {
        speech.voice = voices[selectVoice.value];
    })
};

document.querySelector(".play-btn").addEventListener("click", () => {
    speech.text = document.querySelector(".textbox").value;
    window.speechSynthesis.speak(speech);
});
