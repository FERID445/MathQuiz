const root = document.querySelector(':root');

let icon=document.querySelector('.arrow');

icon.addEventListener('click', () =>{
    icon.classList.toggle('active');
});

let inputsdiv = document.querySelectorAll('.input div');
inputsdiv.forEach((div) => {
    let input = div.querySelector('input');
    let span = div.querySelector('#rangeValue');
    input.addEventListener('change', (e) =>{
    span.innerHTML = e.target.value;
    })
});

toggle.onclick = function(){
    toggle.classList.toggle("active");
    
    if (toggle.classList.contains("active")){
        root.style.setProperty("--text-color","white");
        root.style.setProperty("--title-color","white");
        root.style.setProperty("--data-color","white");
        root.style.setProperty("--main-bg","#3B323C");
        root.style.setProperty("--container-bg","#2B2A2A");
    }

    else{
        root.style.setProperty("--text-color","black");
        root.style.setProperty("--title-color","#675AF0");
        root.style.setProperty("--data-color","red");
        root.style.setProperty("--main-bg","#F6F6F6");
        root.style.setProperty("--container-bg","white");
    }
}
