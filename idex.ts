type playListType = "Tamil" | "English";
let type="languages";
let vey={album: "Soorarai potru",
artist: "bala",
genre: "fock",
language: "Tamil",
musicDirector: "G.V.Prakash",
songName: "veyyon silli",
url: "veyyon.mp3"}

let fad={album: "faded",
artist: "AlanWalker",
genre: "Pop",
language: "English",
musicDirector: "AlanWalker",
songName: "faded",
url: "Faded.mp3"}

let mar={album: "maruthanayagam",
artist: "ilayaraja",
genre: "fock",
language: "Tamil",
musicDirector: "ilayaraja",
songName: "maruthanagayam",
url: "mar.mp3"}

let life={album: "96",
artist: "pradeepkumar",
genre: "melody",
language: "Tamil",
musicDirector: "govindvasanth",
songName: "The life of ram",
url: "life.mp3"}

let lsd={album: "LSD",
artist: "sia,diplo,labrinth",
genre: "jazz",
language: "English",
musicDirector: "sia",
songName: "LSD audio",
url: "lsd.mp3"}

class language{
    name:String;
    songs:songs[]=[];
    constructor(name:String){
        this.name=name;
    }
}
class playList {
  playListSongs: songs[] = [];
  languages:language[]=[{name:"Tamil",songs:[vey,mar,life]},
  {name:"English",songs:[fad,lsd]}];

  artists:artists[]=[{name:"bala",songs:[vey]},
  {name:"AlanWalker",songs:[fad]},
{name:"ilayaraja",songs:[mar]},
{name:"pradeepkumar",songs:[life]},
{name:"sia,diplo,labrinth",songs:[lsd]}];

  musicDirector:musicDirector[]=[{name:"G.V.Prakash",songs:[vey]},
  {name:"AlanWalker",songs:[fad]},
{name:"ilayaraja",songs:[mar]},
{name:"govindvasanth",songs:[life]},
{name:"sia",songs:[lsd]}];
  addSong(son: songs) {
    // console.log(son);
    this.playListSongs.push(son);
  }
}
let playLister=new playList();
// let tamil = new language("Tamil");
// playLister.languages.push(tamil);
// let english = new language("English");
// playLister.languages.push(english);
class songs {
  songName: String;
  language;
  artist;
  album;
  url;
  musicDirector;
  genre;
}

class artists {
  name: String;
  songs: songs[] = [];
  constructor(name) {
    this.name = name;
  }
}
class musicDirector {
    name: String;
    songs: songs[] = [];
    constructor(name) {
      this.name = name;
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
  song.artist=song.artist.split(" ").join("");
  song.genre = (<HTMLInputElement>document.getElementById("genre")).value;
  song.musicDirector = (<HTMLInputElement>(
    document.getElementById("musicDirectorName")
  )).value;
  song.musicDirector=song.musicDirector.split(" ").join("");
  song.url = (<HTMLInputElement>document.getElementById("url")).value;
  song.album = (<HTMLInputElement>document.getElementById("albumName")).value;
  song.language=(<HTMLInputElement>document.getElementById("playlist")).value;
//   switch (song.language) {
//     case "Tamil":
//       tamil.addSong(song);
//       break;
//     case "English":
//       english.addSong(song);
//       break;
//   }
  let flag=0;
  for(let i in playLister.artists){
      if(playLister.artists[i].name==song.artist){
        playLister.artists[i].songs.push(song);
        flag=1;
        console.log(playLister.artists[i].name);
      }
  }
  if(flag==0){
    artist = new artists(song.artist);
    artist.songs.push(song);
    playLister.artists.push(artist);
    console.log(artist);
  }
   flag=0;
  for(let i in playLister.musicDirector){
      if(playLister.musicDirector[i].name==song.musicDirector){
        playLister.musicDirector[i].songs.push(song);
        flag=1;
        console.log(playLister.musicDirector[i].name);
      }
  }
  if(flag==0){
   let  music = new musicDirector(song.musicDirector);
    music.songs.push(song);
    playLister.musicDirector.push(music);
    console.log(music);
  }
  flag=0;
  for(let i in playLister.languages){
      if(playLister.languages[i].name==song.language){
        playLister.languages[i].songs.push(song);
        flag=1;
        console.log(playLister.languages[i].name);
      }
  }
  if(flag==0){
   let  lang = new language(song.language);
    lang.songs.push(song);
    playLister.languages.push(lang);
    console.log(lang);

  }
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
  let selectedValue=(<HTMLSelectElement>document.getElementById("list")).value;
  console.log(type,selectedValue);
            displayDiv.innerHTML = "";
            let flag=0;
            for(let i in playLister[type]){
                if(selectedValue==playLister[type][i].name){
                    flag=1;
                    if(playLister[type][i].songs.length==0){
                        displayDiv.innerHTML = " No Songs in the list";
                        return;
                    }
                    playLister[type][i].songs.forEach((item) => {
                        let arg=JSON.stringify(item);
                        displayDiv.innerHTML += `<div class="row " >&emsp;<div class='col-8 col-lg-8 text-left text-capitalize'>${item.songName}</div>
                        <div class= 'col-3 col-lg-3 text-left'><button class='btn btn-light' onclick='play(${arg})' style="height:2.5em;"><span class="material-icons" style="font-size:2em;">
                        play_circle_outline
                        </span></button></div> </div><br>`;
                    });
                }
            }
            if(flag==0){
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
function changeSelect(types){
    type=types;
    let sel=(<HTMLSelectElement>document.getElementById("list"));
    sel.innerHTML="";
    if(playLister[type].length==0){
        let displayDiv = <HTMLElement>document.getElementById("listedSongs");
        displayDiv.innerHTML=`No options available in ${type}`;
    }
    for(let i in playLister[type]){
         console.log(playLister[type][i].name);
        if(Number(i)==0){
            sel.innerHTML+=`<option value=${playLister[type][i].name} selected>${playLister[type][i].name}</option>`;
        }
        else{
            sel.innerHTML+=`<option value=${playLister[type][i].name} >${playLister[type][i].name}</option>`;
        }
        
    }
    // console.log(type);
    updatePlayList();
}
console.log(type);
updatePlayList();





