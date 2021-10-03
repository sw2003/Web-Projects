window.onload = function(){
    const start_btn = document.querySelectorAll(".start-stop-btn")
    const display_text = document.querySelector(".display-text")

    let start_id 
    let counter = 0

    start_btn.forEach(function(i){
        i.addEventListener("click", function(){

            if (i.id == "Start"){
                if (start_id == undefined){
                    start_id = setInterval(function(){
                        counter += 1
                        display_text.textContent = counter
                        console.log(counter)

                    }, 1000)
                }
            }
            else if (i.id == "Stop"){
                if (start_id){
                    clearInterval(start_id)
                    start_id = undefined
                }
            }
            else if (i.id == "Reset"){
                counter = 0
                display_text.textContent = counter
            }
        })
    })
}