const container = document.querySelector("#container");

let url = "../db/dashboard-data.json";
function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let { scoreBoard, onlineTutorials } = data;

      scoreBoard.forEach((element) => {
        container.innerHTML += `
                <div class="exam">
                <div><img class="card-image" src="./assests/images/Tiny students learning online lesson via laptop 1.svg"
                        alt=""></div>
                <div class="card-info">
                    <div class="exam-info">
                        <div class="question-number">25 sual</div>
                        <div class="teacher-name">${element.fullName}</div>
                    </div>
                    <div class="exam-name">9-cu sinif buraxılış</div>
                    <small class="question-data">23/24</small>
                    <div class="input">
                        <div>
                            <span id="rangeValue">${element.grade}</span>
                            <input class="range" type="range" name="" value="${element.grade}" min="0" max="100"
                            >
                        </div>
                    </div>
                    <div class="range"></div>
                </div>
                <div class="card-buttons">
                    <button class="more-details">Daha ətraflı</button>
                </div>
            </div>            
            `;

        let inputsdiv = container.querySelectorAll(".input div");
        console.log(inputsdiv);
        inputsdiv.forEach((div) => {
          let input = div.querySelector("input");
          let span = div.querySelector("#rangeValue");
          input.addEventListener("change", (e) => {
            span.innerHTML = e.target.value;
          });
        });
      });
    });
}

getData();
