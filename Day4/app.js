let newsListUL = document.getElementById("newsListUL")

news.articles.forEach((object) =>{
    for(key in object) {
        if(object[key] == null)
            object[key] = '';
    }
});

let newsItems = news.articles.map((newsItem) =>{
   return  `<li class="list-group-item">
        <img src="${newsItem.urlToImage}" class="imgSize"/>
        <p><b><i>${newsItem.author}</i></b></p>
        <a href="${newsItem.url}" target=”_blank”><u><b>${newsItem.title}</b></u></a>
        <i>${newsItem.description}</i>
        <p>${newsItem.publishedAt.replace('T',' ').replace('Z',' ')}</p>
    </li>
`
})

newsListUL.insertAdjacentHTML('beforeend', newsItems.join(" "))

//Hard Mode
let sourcesUL = document.getElementById("sourcesUL")


let sourceItems = sources.sources.map((sourceItem) => {
    return `    <div>
                <li class="list-group-item">
                <a class="btn btn-link" data-toggle="collapse" href="#${sourceItem.id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                    ${sourceItem.name}
                </a>    
                <ul class="list-group collapse" id="${sourceItem.id}"></ul>
                </div>
    `       
})

sourcesUL.insertAdjacentHTML('beforeend', sourceItems.join(" "))

let div = sourcesUL.getElementsByTagName("div");

for (let i = 0; i < div.length; i++ ){
    let ul = div[i].getElementsByTagName("ul")
    let elementID = ul[0].id
    let articleIDList = document.getElementById(elementID)
    for (let i=0; i<news.articles.length; i++){
        let sameIDArticle = []
        if (news.articles[i].source.id == elementID){
            sameIDArticle.push(news.articles[i])
            let newsItemsByID = sameIDArticle.map((newsItem) =>{
                return  `<li class="list-group-item">
                <img src="${newsItem.urlToImage}" class="imgSize"/>
                <p><b><i>${newsItem.author}</i></b></p>
                <a href="${newsItem.url}" target=”_blank”><u><b>${newsItem.title}</b></u></a>
                <i>${newsItem.description}</i>
                <p>${newsItem.publishedAt.replace('T',' ').replace('Z',' ')}</p>
                </li>
             `
            })
        articleIDList.insertAdjacentHTML('beforeend', newsItemsByID)
    
        }
    }

    if(articleIDList.innerText == ""){
        articleIDList.innerHTML = "No News Found"
    }
    console.log(articleIDList.innerText)
}