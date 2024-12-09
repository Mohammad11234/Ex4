// mohammad atamneh 208036764
const fs = require('fs');
const path = require('path');
function main() {
  const folderPath = "./text";
  let groupFiles = fs.readdirSync(folderPath);
  groupFiles = groupFiles.sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });
  if (groupFiles.length < 10) {
    console.error(
      "Error : you have least 10 files in the 'text' folder"
    );
    return;
  }
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    const filePath = path.join(folderPath, groupFiles[i]);
    const textContent = fs.readFileSync(filePath, "utf-8").split("\n");
    const rowsToCopy = i + 1;
    for (let j = 0; j < rowsToCopy; j++) {
      if (j < textContent.length) {
        newArray.push(textContent[j]);
      }
    }
  }
  console.log("\nThe new Array:");
  console.log(newArray , main);

  fs.writeFileSync("./output.txt", newArray.join("\n"));
  console.log("\nResult save to 'output.txt'.");
}
main();
