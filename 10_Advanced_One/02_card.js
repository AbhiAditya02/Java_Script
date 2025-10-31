const requestURL = "https://api.github.com/users/kunal-kushwaha";
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);

        const container = document.getElementById('card-container');
        
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = data.avatar_url;

        const info = document.createElement('div');
        info.classList.add('info');

        const name = document.createElement('h3');
        name.textContent = data.name;

        const followers = document.createElement('p');
        followers.textContent = `Followers: ${data.followers}`;

        info.appendChild(name);
        info.appendChild(followers);

        card.appendChild(img);
        card.appendChild(info);

        container.appendChild(card);
    }
}

xhr.send();