import { series } from "./data.js";
const tableBody = document.getElementById("series");
const container = document.querySelector(".container");
function showSeries() {
    let totalSeasons = 0;
    series.forEach((serie) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${serie.id}</td>
                     <td style="color:blue; cursor:pointer">${serie.name}</td>
                     <td>${serie.channel}</td>
                     <td>${serie.seasons}</td>`;
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });
    let average = totalSeasons / series.length;
    const averageElement = document.createElement("p");
    averageElement.innerHTML = `<strong>Seasons average: ${average.toFixed(2)}</strong>`;
    container.appendChild(averageElement);
}
showSeries();
