
var b = document.body;
b.style.backgroundImage = "url('https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/858387/4b8a92b93fc6b6a5a91175fdc7692d3c-700.jpg')";

var show = document.createElement('div');
show.setAttribute('id','show');
document.body.append(show);

var count = 0;

async function getMovies(){

    var movie = document.getElementById('in').value.split(" ").join("+");

    document.getElementById('in').value = "";
    try{
        let res = await fetch(`http://www.omdbapi.com/?apikey=4096a672&t=${movie}`);

        let movies = await res.json();
        
        console.log(movies);
    
        if(movies.Response === "False"){
            printError();
        }
        else if(movie !== ""){
            printData(movies);
        }
    }
    catch(err){
        console.log(err);
    }
}

function printError(){
    if(count == 1){
        show.removeChild(show.firstChild);
        count = 0;
    }
    var img = document.createElement('img');
    img.style.width = "600px";
    img.style.height = "500px";
    img.style.marginLeft = "180px";
    img.src = "https://www.myphukettravel.com/assets/front-end/images/404.gif";
    show.append(img);
    count++;
}

function printData(d){

    if(count == 1){
        show.removeChild(show.firstChild);
        count = 0;
    }

    var showMovie = document.createElement('showMovie');
    showMovie.setAttribute('id','showMovie');

    show.append(showMovie);

    var imgDiv = document.createElement('div');
    imgDiv.setAttribute('id','imgDiv');

    var img = document.createElement('img');
    img.src = d.Poster;

    imgDiv.append(img);

    if(Number(d.imdbRating) > 8.5){
        var recom = document.createElement('div');
        recom.setAttribute('id','recom');
        recom.textContent = "Recommended";
        imgDiv.append(recom);
    }

    var textDiv = document.createElement('div');
    textDiv.setAttribute('id','textDiv');

    var h1 = document.createElement('h1');
    h1.textContent = d.Title;
    h1.style.color = "white";
    h1.style.textShadow = "0 0 5px black";

    var year = document.createElement('h2');
    year.textContent = "Year : " + d.Released;
    year.style.color = "white";
    year.style.textShadow = "0 0 5px black";

    var imdb = document.createElement('h2');
    imdb.textContent = "IMDB rating : " + d.imdbRating;
    imdb.style.color = "white";
    imdb.style.textShadow = "0 0 5px black";

    var actors = document.createElement('h3');
    actors.textContent = "Actors : " + d.Actors;
    actors.style.color = "white";
    actors.style.textShadow = "0 0 5px black";

    var dir = document.createElement('h3');
    dir.textContent = "Director : " + d.Director;
    dir.style.color = "white";
    dir.style.textShadow = "0 0 5px black";

    var genre = document.createElement('h3');
    genre.textContent = "Genre : " + d.Genre;
    genre.style.color = "white";
    genre.style.textShadow = "0 0 5px black";

    var plot = document.createElement('h4');
    plot.textContent = d.Plot;
    plot.style.color = "white";
    plot.style.textShadow = "0 0 7px black";


    textDiv.append(h1, year, imdb, actors, dir, genre, plot);

    showMovie.append(imgDiv, textDiv);
    
    count++;
}

