const jokeButton = document.getElementById("joke-button")
const jokeContainer = document.getElementById("joke-container");
const punchlineContainer = document.getElementById("punchline-container")

jokeButton.addEventListener("click", async () => {
    try {
      // Make a request to the Official Joke API
      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
      
      // Check if the request was successful (status code 200)
      if (response.ok) {
        // Parse the JSON response
        const jokeData = await response.json();
        
        // Display the joke in the HTML container
        jokeContainer.textContent = `${jokeData.setup}`;
        punchlineContainer.textContent = `${jokeData.punchline}`
      } else {
        // Log an error message if the request was not successful
        console.error(`Failed to fetch joke. Status: ${response.status}`);
      }
    } catch (error) {
      // Log an error message if an exception occurs during the fetch
      console.error("Error fetching joke:", error);
    }
  });