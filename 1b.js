let out = document.getElementById("out");
window.onload = launch()

async function launch() {
    let res = await fetch(`countries.json`)
    let data = await res.json()
    console.log(data);
    data.map((nation) => {out.innerHTML += `
        <div class="card">
            <img src="${nation.flag}">
            <h2>${nation.name}</h2>
            <p>Capital: ${nation.capital}</p>
            <p>Population: ${nation.population}</p>
        </div>
    `;})
}