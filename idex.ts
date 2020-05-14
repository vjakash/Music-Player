type playListType = "Tamil" | "English";

class playList {
  playListName: playListType;
  playListSongs: songs[] = [];
  constructor(name) {
    this.playListName = name;
  }

  addSong(son: songs) {
    // console.log(son);
    this.playListSongs.push(son);
  }
}
let tamil = new playList("Tamil");
let english = new playList("English");
class songs {
  songName: String;
  artist;
  album;
  url;
  musicDirector;
  genre;
}

class artists {
  artistName: String;
  songs: songs[] = [];
  constructor(name) {
    this.artistName = name;
  }
}
class musicDirector {
    artistName: String;
    songs: songs[] = [];
    constructor(name) {
      this.artistName = name;
    }
  }
class album {
  albumName;
  songs;
}

let artist;
function add() {
  let song = new songs();
  song.songName = (<HTMLInputElement>document.getElementById("songName")).value;
  song.artist = (<HTMLInputElement>document.getElementById("artistName")).value;
  song.genre = (<HTMLInputElement>document.getElementById("genre")).value;
  song.musicDirector = (<HTMLInputElement>(
    document.getElementById("musicDirectorName")
  )).value;
  song.url = (<HTMLInputElement>document.getElementById("url")).value;
  song.album = (<HTMLInputElement>document.getElementById("albumName")).value;
  switch ((<HTMLInputElement>document.getElementById("playlist")).value) {
    case "Tamil":
      tamil.addSong(song);
      break;
    case "English":
      english.addSong(song);
      break;
  }
  artist = new artists(song.artist);

  (<HTMLInputElement>document.getElementById("songName")).value = "";
  (<HTMLInputElement>document.getElementById("artistName")).value = "";
  (<HTMLInputElement>document.getElementById("genre")).value = "";
  (<HTMLInputElement>document.getElementById("musicDirectorName")).value = "";
  (<HTMLInputElement>document.getElementById("url")).value = "";
  (<HTMLInputElement>document.getElementById("albumName")).value = "";
  updatePlayList();
}
function updatePlayList() {
  let displayDiv = <HTMLElement>document.getElementById("listedSongs");
  switch ((<HTMLSelectElement>document.getElementById("list")).value) {
    case "Tamil":
      displayDiv.innerHTML = "";
      if(tamil.playListSongs.length==0){
        displayDiv.innerHTML = " No Songs in the list";
        return;
      }
      tamil.playListSongs.forEach((item) => {
          let arg=JSON.stringify(item);
          displayDiv.innerHTML += `<div class="row " >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>${item.songName}</div>
          <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(${arg})' style="height:2.5em;"><span class="material-icons" style="font-size:2em;">
          play_circle_outline
          </span></button></div> </div><br>`;
      });
      break;
    case "English":
      displayDiv.innerHTML = "";
      if(english.playListSongs.length==0){
        displayDiv.innerHTML = " No Songs in the list";
        return;
      }
      english.playListSongs.forEach((item) => {
        let arg=JSON.stringify(item);

        displayDiv.innerHTML += `<div class="row " >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>${item.songName}</div>
                            <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(${arg})' style="height:2.5em;"><span class="material-icons" style="font-size:2em;">
                            play_circle_outline
                            </span></button></div> </div><br>`;
      });
      break;
  }
}
function play(obj) {
// obj=JSON.parse(obj);
    console.log(obj);
  (<HTMLElement>document.getElementById("player")).innerHTML = "";
  (<HTMLElement>document.getElementById("player")).innerHTML = `<div class="row">
    <div class="col-lg-12 bg-white border border-white">
        <br>
        <div class="row ">
            <div class="col-1 col-lg-3"></div>
            <div class="col-6 col-lg-6">
                <img src="record.png" style="height:20rem;width:20rem" id="record" />
            </div>
            <div class=" col-lg-3"></div>
            <br>
        </div>
        <br>
        <div class="row bg-dark text-white">
            <div class="col-lg-12 text-center">
                <h1 class="text-capitalize text-center" style="font-size:5vw;">${obj.songName}</h1>
                <p class="text-capitalize">Artists: ${obj.artist}&emsp;&emsp;Gengre: ${obj.genre}&emsp;&emsp;Music Director: ${obj.musicDirector}</p>
                <h3 class="text-capitalize">Album: ${obj.album}</h3>
            </div>
        </div>
        <div class="row bg-dark">
            <div class="col-lg-12">
                <br>
                <audio controls autoplay style="width: 100%;">
                    <source src=${obj.url} type="audio/ogg">
                    <source src=${obj.url} type="audio/mpeg">
                    Your browser does not support the audio element.
                  </audio>
                <br><br>
            </div>
        </div>
    </div>
</div>`;
}
