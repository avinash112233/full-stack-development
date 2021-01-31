const fs = require("fs");
const chai = require("chai");
const expect = chai.expect;
const path = require("path")

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

describe("HTML Module test01  #start_test", () => {
    it("should contain single heading", async () => {
        let pathToFile = path.join(__dirname , "../index.html");
        let file_data = await readData(pathToFile);
        const dom = new JSDOM(file_data)
        expect(dom.window.document.getElementsByTagName("H1").length).to.be.greaterThan(0)
        expect(dom.window.document.getElementsByTagName("H1").item(0).textContent.length).to.be.greaterThan(0)
    });
});