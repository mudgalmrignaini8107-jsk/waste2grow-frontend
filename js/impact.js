const calendar = document.getElementById("calendar")

const days = 140

for (let i = 0; i < days; i++) {
  const cell = document.createElement("div")
  const level = Math.floor(Math.random() * 4)

  cell.className = `day level-${level}`

  cell.title = `🌱 Growth level: ${level}
🍌 Waste reused
🪴 Plants grown`

  calendar.appendChild(cell)
}
