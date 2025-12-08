document.getElementById("button1").addEventListener("click", function() {
    alert("Button Clicked!");
});

<script>
function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  let christmas = new Date(year, 11, 25); // December 25

  // If Christmas has passed this year, set next year's date
  if (now > christmas) {
    christmas = new Date(year + 1, 11, 25);
  };

  const diff = christmas - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `🎄 ${days}d ${hours}h ${minutes}m ${seconds}s until Christmas!`;
};

// Run immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
</script>
