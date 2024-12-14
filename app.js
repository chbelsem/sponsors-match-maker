const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const path = require("path");

// use of express
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(parser.urlencoded({ extended: true }));

// Configure the static folder
app.use(express.static(path.join(__dirname, "public")));

// Example route

// require Routes
const creationRoute = require("./Routes/Creation");
app.use("/api/creation", creationRoute);

app.get("/landing", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "landingpage.html"));
});
app.get("/investor", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "investorpage.html"));
});
app.get("/business", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "businesspage.html"));
  });
  app.get("/investorprofile", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "investor-profile.html"));
  });
  app.get("/businessprofile", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "business-profile.html"));
  });

app.get("/", (req, res) => {
  res.status(500).json("error");
});

//lunching server with app.listen definit
let Port = 3000;
app.listen(Port, console.log(`Server is running on port ${Port}...`));


/*Database Connection
const DBurl = process.env.mongodb//localhost:27017;
mongoose.connect(
  DBurl,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  async () => {
    await console.log(`Successfully conncted to mongoDB database`.cyan.bold);
  }
);*/
