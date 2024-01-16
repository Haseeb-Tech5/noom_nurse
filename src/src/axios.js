const axios = require("axios");

axios
  .post(
    "https://nmapi.drnaiz.com/contact.php",
    {
      subject: "dasd",
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need
      },
    }
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
