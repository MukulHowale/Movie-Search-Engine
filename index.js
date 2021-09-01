var show = document.createElement('div');
show.setAttribute('id','show');
document.body.append(show);

var count = 0;

async function getMovies(){

    var movie = document.getElementById('in').value.split(" ").join("+");

    document.getElementById('in').value = "";

    let res = await fetch(`http://www.omdbapi.com/?apikey=4096a672&t=${movie}`);

    let movies = await res.json();
    
    console.log(movies);

    if(movie !== ""){
        printData(movies);
    }
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

    var textDiv = document.createElement('div');
    textDiv.setAttribute('id','textDiv');

    var h1 = document.createElement('h1');
    h1.textContent = d.Title;
    h1.style.color = "grey";

    var year = document.createElement('h2');
    year.textContent = "Year : " + d.Released;
    year.style.color = "grey";

    var imdb = document.createElement('h2');
    imdb.textContent = "IMDB rating : " + d.imdbRating;
    imdb.style.color = "grey";

    textDiv.append(h1, year, imdb);

    showMovie.append(imgDiv, textDiv);
    
    count++;
}

"https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/858387/4b8a92b93fc6b6a5a91175fdc7692d3c-700.jpg"