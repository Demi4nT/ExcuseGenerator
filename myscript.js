
window.onload = function() {
        document.querySelector('#btn').addEventListener("click", () => {
        document.getElementById('excuse').innerHTML= generateExcuse();
    })
};
let generateExcuse = () => {

    let who = ['My teacher','My friend','My mother','My brother'];
    let action = ['deleted','changed','put a virus on','broke'];
    let what = ['my homework', 'the code', 'the files'];
    let when = ['before the class','right before i arrived','when I finished','when i was out buying manga','just when it started working'];


    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];
};
