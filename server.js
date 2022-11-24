const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
