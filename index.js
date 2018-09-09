var songs = ["forest..mp3", "rain rain rain.mp3", "waves.mp3", "wind.mp3"];
var poster =["forest.jpg", "rain2.jpg", "waves.jpg", "wind.jpg"];

var song = new Audio();

function playForest(){
	song.src = "music/forest..mp3";
	song.play();
	document.getElementById()
}
function PlayOrPauseSong(){
	song.src = "music/forest..mp3";
	song.play();
	return song.paused ? song.play() : song.pause();
}

function playWaves(){
	song.src = "music/waves.mp3";
	song.play();
	document.getElementById("jumbotron").setAttribute("id", "Wave");
}

function playRain(){
	song.src = "music/rain rain rain.mp3";
	song.play();
	document.getElementById("jumbotron").setAttribute("id", "Rain");
}

function playWind(){
	song.src = "music/wind.mp3";
	song.play();
	document.getElementById("jumbotron").setAttribute("id", "Wind");
}

