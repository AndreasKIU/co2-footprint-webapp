document.addEventListener("DOMContentLoaded", () => {
  // Sprachrichtung erkennen
  const dir = document.documentElement.getAttribute("dir") || "ltr";
  document.body.classList.add(dir);

  const data = [
    { land: "Deutschland", unternehmen: "AutoCorp", emissionen: 45.2 },
    { land: "USA", unternehmen: "OilMax", emissionen: 120.4 },
    { land: "China", unternehmen: "SteelWorks", emissionen: 200.9 },
    { land: "Frankreich", unternehmen: "EcoPower", emissionen: 30.1 },
    { land: "Brasilien", unternehmen: "AgroFuel", emissionen: 78.3 },
    { land: "Indien", unternehmen: "TextilGlobal", emissionen: 88.5 },
    { land: "Kanada", unternehmen: "NorthEnergy", emissionen: 56.7 },
    { land: "Japan", unternehmen: "TechNova", emissionen: 66.3 },
    { land: "Russland", unternehmen: "GazPlus", emissionen: 150.0 },
    { land: "Australien", unternehmen: "MineCore", emissionen: 95.1 },
    { land: "Südafrika", unternehmen: "CarbonSA", emissionen: 70.4 },
    { land: "Mexiko", unternehmen: "PetroMex", emissionen: 82.2 },
    { land: "Vereinigtes Königreich", unternehmen: "BritPower", emissionen: 48.9 },
    { land: "Italien", unternehmen: "GreenItalia", emissionen: 32.8 },
    { land: "Südkorea", unternehmen: "KoreaEnergy", emissionen: 58.6 }
  ];

  const tableBody = document.querySelector("#emissionTable tbody");
  const filterInput = document.getElementById("filter");

  function sanitize(input) {
    const element = document.createElement("div");
    element.textContent = input;
    return element.innerHTML;
  }

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
