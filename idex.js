var type = "languages";
var vey = { album: "Soorarai potru",
    artist: "bala",
    genre: "fock",
    language: "Tamil",
    musicDirector: "G.V.Prakash",
    songName: "veyyon silli",
    url: "veyyon.mp3" };
var fad = { album: "faded",
    artist: "AlanWalker",
    genre: "Pop",
    language: "English",
    musicDirector: "AlanWalker",
    songName: "faded",
    url: "Faded.mp3" };
var mar = { album: "maruthanayagam",
    artist: "ilayaraja",
    genre: "fock",
    language: "Tamil",
    musicDirector: "ilayaraja",
    songName: "maruthanagayam",
    url: "mar.mp3" };
var life = { album: "96",
    artist: "pradeepkumar",
    genre: "melody",
    language: "Tamil",
    musicDirector: "govindvasanth",
    songName: "The life of ram",
    url: "life.mp3" };
var lsd = { album: "LSD",
    artist: "sia,diplo,labrinth",
    genre: "jazz",
    language: "English",
    musicDirector: "sia",
    songName: "LSD audio",
    url: "lsd.mp3" };
var language = /** @class */ (function () {
    function language(name) {
        this.songs = [];
        this.name = name;
    }
    return language;
}());
var playList = /** @class */ (function () {
    function playList() {
        this.playListSongs = [];
        this.languages = [{ name: "Tamil", songs: [vey, mar, life] },
            { name: "English", songs: [fad, lsd] }];
        this.artists = [{ name: "bala", songs: [vey] },
            { name: "AlanWalker", songs: [fad] },
            { name: "ilayaraja", songs: [mar] },
            { name: "pradeepkumar", songs: [life] },
            { name: "sia,diplo,labrinth", songs: [lsd] }];
        this.musicDirector = [{ name: "G.V.Prakash", songs: [vey] },
            { name: "AlanWalker", songs: [fad] },
            { name: "ilayaraja", songs: [mar] },
            { name: "govindvasanth", songs: [life] },
            { name: "sia", songs: [lsd] }];
    }
    playList.prototype.addSong = function (son) {
        // console.log(son);
        this.playListSongs.push(son);
    };
    return playList;
}());
var playLister = new playList();
// let tamil = new language("Tamil");
// playLister.languages.push(tamil);
// let english = new language("English");
// playLister.languages.push(english);
var songs = /** @class */ (function () {
    function songs() {
    }
    return songs;
}());
var artists = /** @class */ (function () {
    function artists(name) {
        this.songs = [];
        this.name = name;
    }
    return artists;
}());
var musicDirector = /** @class */ (function () {
    function musicDirector(name) {
        this.songs = [];
        this.name = name;
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
    song.artist = song.artist.split(" ").join("");
    song.genre = document.getElementById("genre").value;
    song.musicDirector = (document.getElementById("musicDirectorName")).value;
    song.musicDirector = song.musicDirector.split(" ").join("");
    song.url = document.getElementById("url").value;
    song.album = document.getElementById("albumName").value;
    song.language = document.getElementById("playlist").value;
    //   switch (song.language) {
    //     case "Tamil":
    //       tamil.addSong(song);
    //       break;
    //     case "English":
    //       english.addSong(song);
    //       break;
    //   }
    var flag = 0;
    for (var i in playLister.artists) {
        if (playLister.artists[i].name == song.artist) {
            playLister.artists[i].songs.push(song);
            flag = 1;
            console.log(playLister.artists[i].name);
        }
    }
    if (flag == 0) {
        artist = new artists(song.artist);
        artist.songs.push(song);
        playLister.artists.push(artist);
        console.log(artist);
    }
    flag = 0;
    for (var i in playLister.musicDirector) {
        if (playLister.musicDirector[i].name == song.musicDirector) {
            playLister.musicDirector[i].songs.push(song);
            flag = 1;
            console.log(playLister.musicDirector[i].name);
        }
    }
    if (flag == 0) {
        var music = new musicDirector(song.musicDirector);
        music.songs.push(song);
        playLister.musicDirector.push(music);
        console.log(music);
    }
    flag = 0;
    for (var i in playLister.languages) {
        if (playLister.languages[i].name == song.language) {
            playLister.languages[i].songs.push(song);
            flag = 1;
            console.log(playLister.languages[i].name);
        }
    }
    if (flag == 0) {
        var lang = new language(song.language);
        lang.songs.push(song);
        playLister.languages.push(lang);
        console.log(lang);
    }
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
    var selectedValue = document.getElementById("list").value;
    console.log(type, selectedValue);
    displayDiv.innerHTML = "";
    var flag = 0;
    for (var i in playLister[type]) {
        if (selectedValue == playLister[type][i].name) {
            flag = 1;
            if (playLister[type][i].songs.length == 0) {
                displayDiv.innerHTML = " No Songs in the list";
                return;
            }
            playLister[type][i].songs.forEach(function (item) {
                var arg = JSON.stringify(item);
                displayDiv.innerHTML += "<div class=\"row \" >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>" + item.songName + "</div>\n                        <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(" + arg + ")' style=\"height:2.5em;\"><span class=\"material-icons\" style=\"font-size:2em;\">\n                        play_circle_outline\n                        </span></button></div> </div><br>";
            });
        }
    }
    if (flag == 0) {
        displayDiv.innerHTML = " No Songs in this section";
        return;
    }
    //   switch () {
    //     case "Tamil":
    //       displayDiv.innerHTML = "";
    //       if(tamil.playListSongs.length==0){
    //         displayDiv.innerHTML = " No Songs in the list";
    //         return;
    //       }
    //       tamil.playListSongs.forEach((item) => {
    //           let arg=JSON.stringify(item);
    //           displayDiv.innerHTML += `<div class="row " >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>${item.songName}</div>
    //           <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(${arg})' style="height:2.5em;"><span class="material-icons" style="font-size:2em;">
    //           play_circle_outline
    //           </span></button></div> </div><br>`;
    //       });
    //       break;
    //     case "English":
    //       displayDiv.innerHTML = "";
    //       if(english.playListSongs.length==0){
    //         displayDiv.innerHTML = " No Songs in the list";
    //         return;
    //       }
    //       english.playListSongs.forEach((item) => {
    //         let arg=JSON.stringify(item);
    //         displayDiv.innerHTML += `<div class="row " >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>${item.songName}</div>
    //                             <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(${arg})' style="height:2.5em;"><span class="material-icons" style="font-size:2em;">
    //                             play_circle_outline
    //                             </span></button></div> </div><br>`;
    //       });
    //       break;
    //   }
}
function play(obj) {
    // obj=JSON.parse(obj);
    console.log(obj);
    document.getElementById("player").innerHTML = "";
    document.getElementById("player").innerHTML = "<div class=\"row\">\n    <div class=\"col-lg-12 bg-white border border-white\">\n        <br>\n        <div class=\"row \">\n            <div class=\"col-1 col-lg-3\"></div>\n            <div class=\"col-6 col-lg-6\">\n                <img src=\"record.png\" style=\"height:20rem;width:20rem\" id=\"record\" />\n            </div>\n            <div class=\" col-lg-3\"></div>\n            <br>\n        </div>\n        <br>\n        <div class=\"row bg-dark text-white\">\n            <div class=\"col-lg-12 text-center\">\n                <h1 class=\"text-capitalize text-center\" style=\"font-size:5vw;\">" + obj.songName + "</h1>\n                <p class=\"text-capitalize\">Artists: " + obj.artist + "&emsp;&emsp;Gengre: " + obj.genre + "&emsp;&emsp;Music Director: " + obj.musicDirector + "</p>\n                <h3 class=\"text-capitalize\">Album: " + obj.album + "</h3>\n            </div>\n        </div>\n        <div class=\"row bg-dark\">\n            <div class=\"col-lg-12\">\n                <br>\n                <audio controls autoplay style=\"width: 100%;\">\n                    <source src=" + obj.url + " type=\"audio/ogg\">\n                    <source src=" + obj.url + " type=\"audio/mpeg\">\n                    Your browser does not support the audio element.\n                  </audio>\n                <br><br>\n            </div>\n        </div>\n    </div>\n</div>";
}
function changeSelect(types) {
    type = types;
    var sel = document.getElementById("list");
    sel.innerHTML = "";
    if (playLister[type].length == 0) {
        var displayDiv = document.getElementById("listedSongs");
        displayDiv.innerHTML = "No options available in " + type;
    }
    for (var i in playLister[type]) {
        console.log(playLister[type][i].name);
        if (Number(i) == 0) {
            sel.innerHTML += "<option value=" + playLister[type][i].name + " selected>" + playLister[type][i].name + "</option>";
        }
        else {
            sel.innerHTML += "<option value=" + playLister[type][i].name + " >" + playLister[type][i].name + "</option>";
        }
    }
    // console.log(type);
    updatePlayList();
}
console.log(type);
updatePlayList();
