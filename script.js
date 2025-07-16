const destinations = [
  "Paris, France",
  "Rome, Italy",
  "Kyoto, Japan",
  "Cairo, Egypt",
  "Machu Picchu, Peru",
  "New York, USA",
  "Santorini, Greece",
  "Istanbul, Turkey"
];

function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("searchResults");

  if (!input) {
    resultsContainer.innerHTML = "<p>Please enter a destination.</p>";
    return;
  }

  const filtered = destinations.filter(place =>
    place.toLowerCase().includes(input)
  );

  if (filtered.length > 0) {
    resultsContainer.innerHTML = `<p>Results:</p><ul>${filtered
      .map(item => `<li>${item}</li>`)
      .join("")}</ul>`;
  } else {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  }
}
