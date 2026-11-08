// Exercise 11: Sum File Sizes in Folder
// Goal: list the entries in data-folder and sum the size of the files (ignore folders).
// Required:
//   fs.readdir(directoryPath, callback)  - get the entries
//   fs.lstat(filePath, callback)         - is it a file? (stats.isFile()) and its size (stats.size)
//   path.join(directoryPath, entryName)  - build the full path
// Print the total ONCE - only after all the lstat callbacks have finished.
//
// Expected output:
//   Total size: 2345 bytes
//
// Run: node ex11.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "data-folder");
let size=0;
// write your code here

fs.readdir(directoryPath, (err, entryNames) => {
    if (err) {
        console.log(err);
        return;
    }

    let count = 0;

    if (entryNames.length === 0) {
        console.log(`Total size: ${size} bytes`);
        return;
    }

    entryNames.forEach(entryName => {
        const filePath = path.join(directoryPath, entryName);

        fs.lstat(filePath, (err, stats) => {
            if (err) {
                console.log(err);
                return;
            }

            if (stats.isFile()) {
                size += stats.size;
            }

            count++;

            if (count === entryNames.length) {
                console.log(`Total size: ${size} bytes`);
            }
        });
    });
});