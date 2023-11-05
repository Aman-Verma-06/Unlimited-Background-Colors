const randomHexCode = function(){
    const hex = '0123456789ABCDEF';
    let hexId = '#';
    for(let i = 0; i < 6; i++){
        hexId += hex[Math.floor(Math.random() * 10)];
    }
    return hexId;
};

let intervalId;
const startChangingColor = function(){

    intervalId = setInterval(backgroundColor, 1000);

    function backgroundColor(){
        document.body.style.backgroundColor = randomHexCode();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
};

document.querySelector('#Start').addEventListener('click', startChangingColor);

document.querySelector('#Stop').addEventListener('click', stopChangingColor);