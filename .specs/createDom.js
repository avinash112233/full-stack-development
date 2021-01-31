const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const readData = path => {
    return new Promise((res, rej) => {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          rej("Error in reading");
        } else {
          res(data);
        }
      });
    });
};

/**
 * Create DOM object by reading file
 * @param filepath Path of file
 */
async function createDOM (filepath){
    const fileData = await readData(filepath)
    const DomObject = new JSDOM(fileData);
    return (DomObject)
}





module.exports = {
  createDOM: createDOM,
  readFile: readData
}