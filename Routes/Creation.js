const router = require("express").Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { json } = require("body-parser");

router.post("/register", (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/prompt", async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBot9j9yJJZ8U5wFo2dxx0P65KGMwxsbGU"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Explain how AI works";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    const resp = { message: result.response.text() };
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
