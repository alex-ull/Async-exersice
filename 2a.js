let out = document.getElementById("out");
window.onload = launch()

function launch() {
    fetch(`https://jsonplaceholder.typicode.com/comments/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.map((info) => {out.innerHTML += `
                <div class="post">
                    <h3>${info.name}</h3>
                    <p class="email">${info.email}</p>
                    <p class="comment">${info.body}</p>
                </div>
            `;})
        })
}