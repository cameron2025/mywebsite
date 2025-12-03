document.getElementById("clickMe").addEventListener("click", function() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF33A6"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(135deg, ${randomColor}, #e0f7fa)`;
  alert("Background changed! 🎨");
});
