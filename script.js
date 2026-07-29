const ideas = [
  "An AI-powered campus study planner",
  "A real-time bus tracking app for students",
  "A smart resource sharing platform",
  "An automated resume reviewer",
  "A mental health check-in bot"
];

function generateIdea() {
  // Pick a random number based on the length of the ideas list
  const randomIndex = Math.floor(Math.random() * ideas.length);
  
  // Display the idea on the screen
  document.getElementById("ideaDisplay").innerText = ideas[randomIndex];
}