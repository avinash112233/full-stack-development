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

describe("HTML Module test04  #start_test", () => {
  
  it("should contain required number of headings", async () => {
    let pathToFile = path.join(__dirname , "../brownBear.html");
    let file_data = await readData(pathToFile);
    
    const dom = new JSDOM(file_data);
    let document = dom.window.document.body.children
    
    let count1 = 0, count2 = 0, count3 = 0
    
    for(let i=0; i<document.length; i++){
      if(document.item(i).children.length){
        
        for(let j=0; j<document.item(i).children.length; j++){
          if(document.item(i).children.item(j).nodeName==="H1") count1++
          else if(document.item(i).children.item(j).nodeName==="H2") count2++
          else if(document.item(i).children.item(j).nodeName==="H3") count3++
        }
        
      }else if(document.item(i).nodeName==="H1") count1++
      else if(document.item(i).nodeName==="H2") count2++
      else if(document.item(i).nodeName==="H3") count3++
    }

    expect(count1).to.be.equal(1)
    expect(count2).to.be.equal(3)
    expect(count3).to.be.equal(4)
    
    expect(file_data).to.include("<h2>Habitat</h2>")
    expect(file_data).to.include("<h3>Countries with Large Brown Bear Populations</h3>")
    expect(file_data).to.include("<h3>Countries with Small Brown Bear Populations</h3>")
    expect(file_data).to.include("<h2>Media</h2>")
  });
  
  /*
  *******************************************
  Yhn ek test case aur likho jisme sabhi 4 new headings ke innertext check ho rhe ho
  For referrence, test03 ka last test case dekh lena
  *******************************************
  */
  
});