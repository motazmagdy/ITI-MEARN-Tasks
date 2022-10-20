// TMDB
const api_key = 'api_key=f373eec3ff7835e3a80eacafaac28bdc';                     
const base_url ='https://api.themoviedb.org/3' ;                                
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&'+api_key;  
const img_url = 'https://image.tmdb.org/t/p/w500';                             
const main = document.getElementById("main");                            
const movieDetailsData = document.getElementById("MovieData");

function getMovies(url){                                                               
    fetch(url).then(res => res.json()).then(data => {   
        console.log(data.results)                                         
        showMovies(data.results)
    })
}
        function showMovies(data){
            main.innerHTML="";

            data.forEach(movie => {
                const {title,overview,poster_path,vote_average,id}=movie;
                const newElem = document.createElement("div");
                newElem.classList.add("movie");
                newElem.innerHTML = `
                <a href="./MovieDetails.html?id=${id}" style="text-decoration:none;" >
                <img src="${img_url+poster_path}" alt="${title}">
                <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${getColor(vote_average)}">${vote_average}</span>
                        </div>
                    <div class="overview">
                        ${overview}
                        </div>
                        
                         </a>`

                        main.appendChild(newElem);
                    })
        }
        
function getColor(vote){
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}
getMovies(api_url);

////////////////////////////////////---Details Page---//////////
let movieId = location.search.split("=")[1];
console.log(movieId);

function getMoviesDetails(url){
    fetch(url).then((res)=>res.json()).then((data) => {
        data.results.forEach((movie)=>
        {
            if(movie.id == movieId){
                const {title,overview,poster_path,vote_average} = movie;
                const nElement = document.createElement("div");
                nElement.classList.add("container");
                nElement.innerHTML=`
                <img src="${img_url+poster_path}" alt="${title}"/>
                <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${getColor(vote_average)}">${vote_average}</span>
                        </div><br/>
                    <div class="overview2">
                        ${overview}
                        </div>
                `;
                movieDetailsData.appendChild(nElement);
            }
        }
     );
});}
getMoviesDetails(api_url);