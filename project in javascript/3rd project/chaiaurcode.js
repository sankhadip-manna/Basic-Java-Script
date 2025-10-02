const clocks = document.getElementById('clock')

setInterval(function(){
    let data = new Date()

    clocks.innerHTML = data.toLocaleTimeString()
})


