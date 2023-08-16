const container = document.querySelector("#container");

let url = "./db/scoareBoard.json"
function getData(){
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        let {scoreBoard, onlineTutorials} = data;

        scoreBoard.forEach(element => {
            container.innerHTML+=`
            <div class="cards-container">
            <div class="card">
                <div><img  class="card-image" src="${element.image}" alt=""></div>
                <div class="card-info">
                    <div class="exam-info">
                        <div class="question-number">${element.qtn} sual</div>
                        <div class="teacher-name" id="searchBar">${element.fullName}</div>
                    </div>
                    <div class="exam-name">9-cu sinif buraxılış</div>
                    <div class="exam-price">Pulsuz</div>
                    <div class="card-buttons">
                        <button class="start-test"><a href="/imtahan-seh1.html">Testə başla</a></button>
                        <button class="more-details"><a href="/dahaEtfImt.html">Daha ətraflı</a></button>
                    </div>
                </div>
            </div>       
            `
        });
    })
}

getData()
