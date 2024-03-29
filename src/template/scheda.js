import moment from "moment";

function template(data) {
  const html = `
<h1>Scheda di valutazione del signor: ${data.Valutato_NomeCognome}</h1>
<h2>Anno ${moment(data.DataAvvioSchedaValutatore).format("YYYY")} - campagna: ${
    data.PeriodoCampagna
  }</h2>
<table>
    <tr>
        <th>Valutatore</th>
        <th>Esito </th>
    </tr>
    <tr>
        <td>Manager</td>
        <td>${data.MediaTop}</td>
    </tr>
    <tr>
        <td>Peers</td>
        <td>${data.MediaPeer}</td>
    </tr>
    <tr>
        <td>Collaboratori</td>
        <td>${data.MediaBottom}</td>
    </tr>
    <tr>
    <td>Tot:</td>
    <td>${data.MediaTotale}
    </td></tr>
</table>

---

<h1>Pagina 2 !!</h1>
`;
  return html;
}

export default template;
