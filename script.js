const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const word = document.querySelector(".input")
const search = document.querySelector(".search-btn")

async function dict(w){
    const response = await fetch(url + `${w}`)
    const data =await response.json()
    console.log(data[0].phonetics[0].audio)
    document.querySelector(".name").innerHTML = data[0].word
    document.querySelector(".meaning").innerHTML = data[0].meanings[0].definitions[0].definition
    document.querySelector(".pos").innerHTML = data[0].meanings[0].partOfSpeech
    document.querySelector(".syn").innerHTML = data[0].meanings[0].synonyms[0]
    

}
// dict("hello")
search.addEventListener("click",()=>{
    dict(word.value)
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".aud").setAttribute("src", `https:${data[0].phonetics[0].audio}`);
})

document.getElementById("sound-btn").addEventListener("click", function() {
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.playsound();
});


