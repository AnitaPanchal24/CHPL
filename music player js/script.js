let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;

//store music list and detais 
const music_list = [
    {
        img : 'images/shiva.jpg',
        name : 'Shiva',
        artist : 'Shiv bhakt',
        music : 'music/shiva.mp3'
    },
    {
        img : 'images/krishna.jpg',
        name : 'Krishna',
        artist : 'krishna bhakt',
        music : 'music/krishna.mp3'
    },
    {
        img : 'images/krishna2.jpg',
        name : 'Radhe Krishna ',
        artist : 'radha krishna bhakt',
        music : 'music/hare krishna.mp3'
    },
    {
        img : 'images/ram.jpg',
        name : 'Shree Ram ',
        artist : 'ram bhakt',
        music : 'music/shree ram.mp3'
    }
];
//first what music is loading 
function loadTrack(track_index){
    curr_track.src = music_list[track_index].music;
    //Use load() when you dynamically update the src attribute of <audio> or <video> elements media element reinitializes with the new source.
    curr_track.load();

    track_art.style.backgroundImage = `url(" ${music_list[track_index].img} ")`;
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = `Playing music ${track_index + 1} of ${music_list.length}`;
    curr_track.addEventListener('ended', nextTrack);
}
loadTrack(track_index);

//repeat same music to click repeat button
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
//play or pause control if click on play button 
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
//play music if you click on play button
function playTrack(){
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<button class="fa fa-pause-circle fa-5x"></button>';
}
//pause music if you click on play button
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<button class="fa fa-play-circle fa-5x"></button>';
}
//next music is show if you click next button
function nextTrack(){
    if(track_index < music_list.length - 1){
        track_index += 1;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
//previous music is show if you click previous button 
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}