function checkAnswer() {
    const correctDate = "14/11/2024"; // Replace this with the real date!
    const userAnswer = document.getElementById("answer").value.trim();

    if (userAnswer === correctDate) {
      document.getElementById("feedback").innerHTML = "🎉 Correct!! Click below to continue.";
      // Create a link to the next page
      const nextButton = document.createElement("a");
      nextButton.href = "love-letter.html"; // Replace with your actual next page
      nextButton.innerText = "Click hapa to read the story!";
      nextButton.className = "next-link";
      document.getElementById("feedback").appendChild(document.createElement("br"));
      document.getElementById("feedback").appendChild(nextButton);
    } else {
      document.getElementById("feedback").innerHTML = "❌ Oops! Try again.";
    }
  }