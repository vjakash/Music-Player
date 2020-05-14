var playList = /** @class */ (function () {
    function playList(name) {
        this.playListSongs = [];
        this.artists = [];
        this.musicDirector = [];
        this.playListName = name;
    }
    playList.prototype.addSong = function (son) {
        // console.log(son);
        this.playListSongs.push(son);
    };
    return playList;
}());
var tamil = new playList("Tamil");
var english = new playList("English");
var songs = /** @class */ (function () {
    function songs() {
    }
    return songs;
}());
var artists = /** @class */ (function () {
    function artists(name) {
        this.songs = [];
        this.artistName = name;
    }
    return artists;
}());
var musicDirector = /** @class */ (function () {
    function musicDirector(name) {
        this.songs = [];
        this.artistName = name;
    }
    return musicDirector;
}());
var album = /** @class */ (function () {
    function album() {
    }
    return album;
}());
var artist;
function add() {
    var song = new songs();
    song.songName = document.getElementById("songName").value;
    song.artist = document.getElementById("artistName").value;
    song.genre = document.getElementById("genre").value;
    song.musicDirector = (document.getElementById("musicDirectorName")).value;
    song.url = document.getElementById("url").value;
    song.album = document.getElementById("albumName").value;
    switch (document.getElementById("playlist").value) {
        case "Tamil":
            tamil.addSong(song);
            break;
        case "English":
            english.addSong(song);
            break;
    }
    artist = new artists(song.artist);
    document.getElementById("songName").value = "";
    document.getElementById("artistName").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("musicDirectorName").value = "";
    document.getElementById("url").value = "";
    document.getElementById("albumName").value = "";
    updatePlayList();
}
function updatePlayList() {
    var displayDiv = document.getElementById("listedSongs");
    switch (document.getElementById("list").value) {
        case "Tamil":
            displayDiv.innerHTML = "";
            if (tamil.playListSongs.length == 0) {
                displayDiv.innerHTML = " No Songs in the list";
                return;
            }
            tamil.playListSongs.forEach(function (item) {
                var arg = JSON.stringify(item);
                displayDiv.innerHTML += "<div class=\"row \" >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>" + item.songName + "</div>\n          <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(" + arg + ")' style=\"height:2.5em;\"><span class=\"material-icons\" style=\"font-size:2em;\">\n          play_circle_outline\n          </span></button></div> </div><br>";
            });
            break;
        case "English":
            displayDiv.innerHTML = "";
            if (english.playListSongs.length == 0) {
                displayDiv.innerHTML = " No Songs in the list";
                return;
            }
            english.playListSongs.forEach(function (item) {
                var arg = JSON.stringify(item);
                displayDiv.innerHTML += "<div class=\"row \" >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>" + item.songName + "</div>\n                            <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(" + arg + ")' style=\"height:2.5em;\"><span class=\"material-icons\" style=\"font-size:2em;\">\n                            play_circle_outline\n                            </span></button></div> </div><br>";
            });
            break;
    }
}
function play(obj) {
    // obj=JSON.parse(obj);
    console.log(obj);
    document.getElementById("player").innerHTML = "";
    document.getElementById("player").innerHTML = "<div class=\"row\">\n    <div class=\"col-lg-12 bg-white border border-white\">\n        <br>\n        <div class=\"row \">\n            <div class=\"col-1 col-lg-3\"></div>\n            <div class=\"col-6 col-lg-6\">\n                <img src=\"record.png\" style=\"height:20rem;width:20rem\" id=\"record\" />\n            </div>\n            <div class=\" col-lg-3\"></div>\n            <br>\n        </div>\n        <br>\n        <div class=\"row bg-dark text-white\">\n            <div class=\"col-lg-12 text-center\">\n                <h1 class=\"text-capitalize text-center\" style=\"font-size:5vw;\">" + obj.songName + "</h1>\n                <p class=\"text-capitalize\">Artists: " + obj.artist + "&emsp;&emsp;Gengre: " + obj.genre + "&emsp;&emsp;Music Director: " + obj.musicDirector + "</p>\n                <h3 class=\"text-capitalize\">Album: " + obj.album + "</h3>\n            </div>\n        </div>\n        <div class=\"row bg-dark\">\n            <div class=\"col-lg-12\">\n                <br>\n                <audio controls autoplay style=\"width: 100%;\">\n                    <source src=" + obj.url + " type=\"audio/ogg\">\n                    <source src=" + obj.url + " type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                  </audio>\n                <br><br>\n            </div>\n        </div>\n    </div>\n</div>";
}
