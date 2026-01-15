import fetchStats from "./src/fetchers/stats.js";

async function test() {
  try {
    console.log("Attempting to fetch stats for 'medgougriz'...");
    const stats = await fetchStats("medgougriz");
    console.log("Stats fetched successfully:", stats);
  } catch (error) {
    console.error("Error caught during fetch:");
    console.error("Message:", error.message);
    if (error.secondaryMessage) {
        console.error("Secondary Message:", error.secondaryMessage);
    }
  }
}

test();
