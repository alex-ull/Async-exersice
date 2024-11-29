let out = document.getElementById("out");
window.onload = launch()

function launch() {
    fetch(`countries.json`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.map((nation) => {out.innerHTML += `
            <div class="card">
                <img src="${nation.flag}">
                <h2>${nation.name}</h2>
                <p>Capital: ${nation.capital}</p>
                <p>Population: ${nation.population}</p>
            </div>
        `;})
    })  
}
