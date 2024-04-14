const express = require("express");
const path = require("path");

const app = express();

// Serve the Quasar frontend files from the 'dist/spa' directory
app.use(express.static(path.join(__dirname, "frontend/dist/spa")));

// Handle all other routes by serving the Quasar index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/spa/index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Quasar app running at http://localhost:${port}`);
});
