function searchMenu(){

    const searchInput = document.querySelector("input");

    searchInput.addEventListener("keyup", function(){

        let data = this.value.toLocaleUpperCase();
        let teacher = document.querySelector(".teacher-name");
        // console.log(teacher)
        

        for(let i = 0; i < teacher.length; i++){
            console.log(teacher[i].innerHTML);
            if(li[i].innerHTML.toUpperCase().indexOf(data) > -1)
            {
                teacher[i].style.display = "";
            }
            else{
                teacher[i].style.display = "none"
            }
                        
        }
    });
}

searchMenu();