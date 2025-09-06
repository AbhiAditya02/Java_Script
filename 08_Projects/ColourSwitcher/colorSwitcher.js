const button = document.querySelectorAll('button'); // returns NodeList
const body = document.querySelector('body');
console.log(body.style.backgroundColor);


button.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'black'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'Default'){
            location.reload();
        }


    })
});