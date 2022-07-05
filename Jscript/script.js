console.log("welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('Music/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementById('mastersongname');

let gif = document.getElementById('musicgif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songname: "Mainu Tu Le Ja",filepath: "Music/1.mp3",coverpath: "Images/1.jpg", duration: "3:13" },
    {songname: "Mere nishaan - Darshan Rawal",filepath: "Music/2.mp3",coverpath: "Images/2.jpg", duration: "3:13" },
    {songname: "O-Re-Piya - Rahat Fateh Ali Khan",filepath: "Music/3.mp3",coverpath: "Images/3.jpg", duration: "3:13" },
    {songname: "Tere Karib aa raha hun",filepath: "Music/4.mp3",coverpath: "Images/4.jpg", duration: "3:13" },
    {songname: "Tum pe Hum to",filepath: "Music/5.mp3",coverpath: "Images/5.jpg", duration: "3:13" },
    {songname: "Yeah baby",filepath: "Music/6.mp3",coverpath: "Images/6.jpg", duration: "3:13" },
    {songname: "Evergreen - (Official Song)",filepath: "Music/7.mp3",coverpath: "Images/7.jpg", duration: "3:13" },
    {songname: "Hai Apna Dil To Awara",filepath: "Music/8.mp3",coverpath: "Images/8.jpg", duration: "3:13" },
    {songname: "Musafir Song",filepath: "Music/9.mp3",coverpath: "Images/9.jpg", duration: "3:13" },
    {songname: "Ja rahe hai sanam",filepath: "Music/10.mp3",coverpath: "Images/10.jpg", duration: "3:13"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;



})

//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        // masterplay.remove();
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value= progress;
    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
    })

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id)
        makeAllPlays();
        audioElement.src = `Music/${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex-1].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    mastersongname.innerText = songs[songIndex-1].songname;
    audioElement.src = `Music/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<2){
        songIndex = 10
    }
    else{
        songIndex -= 1;
    }
    mastersongname.innerText = songs[songIndex-1].songname;
    audioElement.src = `Music/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
})



