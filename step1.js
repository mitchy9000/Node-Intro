const fs = require("fs");

function cat(path) {
  // Read the file
  const contents = fs.readFileSync(path, "utf8");

  // Print the contents
  console.log(contents);
}

// Get the file path from the command line
const filePath = process.argv[2];

// Call the function
cat(filePath);
