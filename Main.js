const AddBtn1 = document.getElementById("AddBtn1");
const AddBtn2 = document.getElementById("AddBtn2");
const FileInp = document.getElementById("FileInp");
const URLInp = document.getElementById("URLInp");
const Vid = document.getElementById("Vid");
const StartBtn = document.getElementById("StartBtn");

const Playlist = []
IndexHolder = 0

AddBtn1.addEventListener("click", function(event){
    event.preventDefault();
    const ffile = FileInp.files[0];
    offile = URL.createObjectURL(ffile);
    Playlist.push(offile);
    alert("A video is uploaded successfully.");
})

AddBtn2.addEventListener("click", function(event){
    event.preventDefault
    const url = URLInp.value
    Playlist.push(url)
    alert("A video is uploaded successfully.");
})

function PlayVid(srcfile){
    Vid.src = srcfile
    Vid.play();
}

StartBtn.addEventListener("click", function(event){
    event.preventDefault();
        PlayVid(Playlist[IndexHolder])
        IndexHolder += 1
        Vid.addEventListener("ended", function(event){
            event.preventDefault();
            PlayVid(Playlist[IndexHolder])
        })
    //}
})