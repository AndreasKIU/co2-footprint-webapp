document.addEventListener("DOMContentLoaded", () => {
  const data = [
    { land: "Deutschland", unternehmen: "AutoCorp", emissionen: 45.2 },
    { land: "USA", unternehmen: "OilMax", emissionen: 120.4 },
    { land: "China", unternehmen: "SteelWorks", emissionen: 200.9 },
    { land: "Frankreich", unternehmen: "EcoPower", emissionen: 30.1 },
    { land: "Brasilien", unternehmen: "AgroFuel", emissionen: 78.3 }
  ];

  const tableBody = document.querySelector("#emissionTable tbody");
  const filterInput = document.getElementById("filter");

  function renderTable(filteredData) {
    tableBody.innerHTML = "";
    filteredData.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${sanitize(entry.land)}</td>
        <td>${sanitize(entry.unternehmen)}</td>
        <td>${entry.emissionen}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  function sanitize(input) {
    const element = document.createElement("div");
    element.textContent = input;
    return element.innerHTML;
  }

  filterInput.addEventListener("input", () => {
    const search = filterInput.value.toLowerCase();
    const filtered = data.filter(entry =>
      entry.land.toLowerCase().includes(search) ||
      entry.unternehmen.toLowerCase().includes(search)
    );
    renderTable(filtered);
  });

  renderTable(data);
});
