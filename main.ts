import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTable: HTMLElement = document.getElementById('series-table')!;

renderSeriesTable(series);

function renderSeriesTable(seriesList: Serie[]): void 
{
    const tbody: HTMLElement = document.createElement('tbody');
    seriesList.forEach(serie => 
        {
        const row: HTMLElement = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tbody.appendChild(row);
        });

    const averageSeasons = calculateAverageSeasons(seriesList);
    const avgRow: HTMLElement = document.createElement('tr');
    avgRow.innerHTML = `<td scope="row" id="white-cell" colspan="12">Seasons average: ${averageSeasons}</td>`;
    tbody.appendChild(avgRow);

    seriesTable.appendChild(tbody);
}

function calculateAverageSeasons(seriesList: Serie[]): number 
{
    const totalSeasons = seriesList.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / seriesList.length;
}