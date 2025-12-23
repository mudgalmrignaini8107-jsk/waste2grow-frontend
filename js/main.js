const calendar = document.getElementById("calendar")

for (let i = 0; i < 98; i++) {
  const day = document.createElement("div")
  const level = Math.floor(Math.random() * 4)

  day.classList.add("day", `level-${level}`)

  day.title = `🌱 Activity Level: ${level}\n🍌 Waste reused`

  calendar.appendChild(day)
}
