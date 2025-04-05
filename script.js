// Function to Open Lyrics popup
function openLyrics() {
    document.getElementById("lyrics").style.display = "flex";
}

// Function to Open Explanation popup
function openExplanation() {
    document.getElementById("explanation").style.display = "flex";
}

// Function to Close Lyrics Popup
function closeLyrics() {
    document.getElementById("lyrics").style.display = "none";
}

// Function to Close Lyrics Popup
function closeExplanation() {
    document.getElementById("explanation").style.display = "none";
}

// Function to Play The Song
function playSong() {
    const audio = document.getElementById("song-audio");
    audio.play();
  }