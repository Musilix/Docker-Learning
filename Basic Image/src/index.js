const app = require("express")();

app.get("/", (req, res) => {
  res.json({
    msg: "Docker is a piece of 🎂",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App started");
});