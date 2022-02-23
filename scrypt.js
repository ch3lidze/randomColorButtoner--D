function changeBgClick(){
    let color = '#'
    let symbol = '12345567890abcdef'
    let textColor = document.getElementById('text')

    for (var i = 0; i < 6; i++){
        color = color + symbol[Math.floor(Math.random()*16)]
    }
    document.body.style.backgroundColor = color
    document.querySelector('span').innerHTML = color

    document.getElementById('textColor').style.color = color
}


