import { series } from './data.js';
var seriesTable = document.getElementById('series-table');
renderSeriesTable(series);
function renderSeriesTable(seriesList) {
    var tbody = document.createElement('tbody');
    seriesList.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        tbody.appendChild(row);
    });
    var averageSeasons = calculateAverageSeasons(seriesList);
    var avgRow = document.createElement('tr');
    avgRow.innerHTML = "<td scope=\"row\" id=\"white-cell\" colspan=\"12\">Seasons average: ".concat(averageSeasons, "</td>");
    tbody.appendChild(avgRow);
    seriesTable.appendChild(tbody);
}
function calculateAverageSeasons(seriesList) {
    var totalSeasons = seriesList.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / seriesList.length;
}
