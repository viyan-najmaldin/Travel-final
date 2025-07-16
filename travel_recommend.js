async function fetchData() {
  try {
    const response = await fetch('travel_api.json');
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error loading JSON:", error);
    return {};
  }
}

async function searchKeyword() {
  const keyword = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (!keyword) {
    resultsContainer.innerHTML = "<p>Please enter a keyword.</p>";
    return;
  }

  const data = await fetchData();
  const matchedResults = [];

 

  if (keyword.includes("temple") || keyword === "temples") {
    data.temples.forEach(temple => matchedResults.push({
      name: temple.name,
      imageUrl: temple.imageUrl,
      description: temple.description
    }));
  } else {
    data.temples.forEach(temple => {
      if (temple.name.toLowerCase().includes(keyword)) {
        matchedResults.push({
          name: temple.name,
          imageUrl: temple.imageUrl,
          description: temple.description
        });
      }
    });
  }

  if (keyword.includes("beach") || keyword === "beaches") {
    data.beaches.forEach(beach => matchedResults.push({
      name: beach.name,
      imageUrl: beach.imageUrl,
      description: beach.description
    }));
  } else {
    data.beaches.forEach(beach => {
      if (beach.name.toLowerCase().includes(keyword)) {
        matchedResults.push({
          name: beach.name,
          imageUrl: beach.imageUrl,
          description: beach.description
        });
      }
    });
  }

  if (matchedResults.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  matchedResults.forEach(place => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${place.name}</h3>
      <img src="${place.imageUrl}" width="300" alt="${place.name}">
      <p>${place.description}</p>
    `;
    resultsContainer.appendChild(card);
  });
}

function clearResults() {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
}

function showTimeIn(timeZone, label) {
  const options = {
    timeZone,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const currentTime = new Date().toLocaleTimeString('en-US', options);
  console.log(`Current time in ${label}:`, currentTime);
}
