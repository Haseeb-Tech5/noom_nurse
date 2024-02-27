require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mailgun = require("mailgun-js");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const API_KEY = process.env.API;
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

app.post("/nomad/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  const data = {
    from: "haseebqureshi77786@gmail.com",
    to,
    subject,
    text,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to send email", error: error.message });
    } else {
      console.log(body);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
