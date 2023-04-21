let apiURL = `https://api.tradingeconomics.com/calendar?c=guest:guest&f=json`;

fetch(apiURL)
  .then((data) => {
    return data.json(); //converted to obj
  })
  .then((objectData) => {
    //console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
      tableData += `<tr>
      <td>${values.CalendarId}</td>
      <td>${values.Category}</td>
      <td>${values.Country}</td>
      <td>${values.Date}</td>
      <td>${values.DateSpan}</td>
      <td>${values.Event}</td>
      <td>${values.Importance}</td>
      <td>${values.LastUpdate}</td>
      <td>${values.ReferenceDate}</td>
      <td>${values.Ticker}</td>
      <td>${values.URL}</td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((error) => {
    console.log(error);
  });
