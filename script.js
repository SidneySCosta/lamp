const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


//busca pela palavra "standby""
//maior que -1 para ser verdadeiro 
function isLampStandBy() {
    return lamp.src.indexOf('standby') > -1
};

function lampOn() {
    if (!isLampStandBy()) {
        lamp.src = './img/ligada.jpg';
    }
};

function lampOff() {
    if (!isLampStandBy()) {
        lamp.src = './img/desligada.jpg';
    }
};

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);