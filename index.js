
$(document).ready(() => {
    const to = Math.floor(new Date("2022-07-08 00:00:00").getTime());
    const from = Math.floor(new Date("2022-07-07 00:00:00").getTime());
    $.ajax("https://qa2.ismartroad.com/rest/report/product/columns/all/" + from + "/" + to).done(data => {
        display(data.collectionList);
    });
});

function display(reports) {
    console.log(reports);

    $(".title").append(` (${reports.length} relevés)`);

    const $table = $(".reports_table");
    $table.append(`
        <tr>
            <th>Code</th>
            <th>Flux</th>
            <th>PAV</th>
            <th>Vehicule/Capteur</th>
            <th>Date</th>
            <th>Remplissage</th>
        </tr>
    `);

    for (const id in reports) {
        const report = reports[id];
        $table.append(`
            <tr>
                <td>${report.container_code}</td>
                <td>${report.product_label}</td>
                <td>${report.collectable_code}. ${report.collectable_name}</td>
                <td>${report.ismartroad_id}</td>
                <td>${new Date(report.timestamp_date * 1000).toLocaleString("fr-FR")}</td>
                <td>${report.data}%</td>
            </tr>
        `);
    }
}