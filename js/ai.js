function showGuide(type) {
  const box = document.getElementById("guide-output")
  box.style.animation = "none"
  void box.offsetWidth
  box.style.animation = "pop 0.5s ease"

  const guides = {
    banana: "🍌 Banana peels can be composted or used to clean plants and polish leaves.",
    tea: "☕ Tea leaves enrich soil and work great as natural compost.",
    veg: "🥬 Vegetable scraps are perfect for home composting and bio-waste bins.",
    rice: "🍚 Rice water can be reused for plants or cleaning floors naturally.",
    egg: "🥚 Egg shells provide calcium and are excellent for gardening.",
    citrus: "🍊 Citrus peels act as natural cleaners and insect repellents.",
    coffee: "☕ Coffee grounds deodorize spaces and enrich soil.",
    bread: "🍞 Bread waste can be composted or used as animal feed."
  }

  box.innerHTML = guides[type]
}
