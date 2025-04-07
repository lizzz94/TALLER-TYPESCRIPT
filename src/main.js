import { series } from "./data.js";
const tableBody = document.getElementById("series");
function showSeries() {
    series.forEach((serie) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${serie.id}</td>
                     <td style="color:blue; cursor:pointer">${serie.name}</td>
                     <td>${serie.channel}</td>
                     <td>${serie.seasons}</td>`;
        tableBody.appendChild(row);
    });
}
showSeries();
