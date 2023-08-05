const url = 'https://api.jikan.moe/v4/anime';
const SEARCHAPI = 'https://api.jikan.moe/v4/anime?q=';

const main = document.querySelector("main")
const form = document.getElementById('form');
const search = document.getElementById('search');
const anime = document.getElementById('anime');
const anime_info = document.getElementById('anime-info');

getAnime(url)


async function getAnime(URL){
    const resp = await fetch(URL);
    const respData = await resp.json();
    
    console.log(respData);
    showAnimes(respData.data);

    // respData.data.forEach(){
    //     if(clicked){
    //         // details(respData.data);
    //     }

    // }


    return respData;
}

function showAnimes(animes){
    animes.forEach((anime,i) => {
        const animeEl = document.createElement("div");
        // animeEl.classList.add('anime');

        animeEl.innerHTML = `<div class="anime" id="${anime.mal_id}" onclick="clicked(this.id)">
                                <img src='${anime.images.jpg.image_url}' alt="${anime.score}">
                                <div class="anime-info">                
                                        <h3>${anime.title}</h3>
                                       <span><i class="fa-solid fa-star" style="color: #f3e11b;"></i>${anime.score}</span>
                                </div>
                            </div>`
        main.appendChild(animeEl);
    });

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm){
        main.innerHTML=""
        getAnime(SEARCHAPI+searchTerm);
        search.value = "";
    }
   
})

// function clicked(id){
//     console.log(id)
//     details(id);
// }

// async function details(clickedid){
//     const resp = await fetch(url);
//     const respData = await resp.json();

//     respData.data.forEach(()=>{
//         if(clickedid===respData.data.mal_id){
//             console.log(5)
//             document.body.innerHTML='';
//             document.body.innerHTML = ` <h1>Anime title</h1>
//             <header>

//                 <iframe width="700" height="415"
//                 src=${respData.data.trailer}>
//             </iframe>
            
//             <div class="info">
//                 <p>"When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences."
//                 </p>

//                 Genre:
//             </div>`
//         }

//     })
// }








