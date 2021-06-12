const fs = require('fs');

module.exports = {
  load: (path) => {
    let rawdata = fs.readFileSync(path)
    let jsonData = JSON.parse(rawdata);
    return jsonData
  }
}