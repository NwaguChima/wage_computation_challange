const fs = require("fs");

const input = fs
  .readFileSync("./details.txt", { encoding: "utf8" })
  .split("\n");

function wageComputer(workdetail) {
  let store = {
    S: {
      1: 30,
      2: 30,
      3: 30,
      4: 30,
      5: 30,
      6: 30,
      7: 30,
      8: 30,
      9: 30,
      10: 20,
      11: 20,
      12: 20,
      13: 20,
      14: 20,
      15: 20,
      16: 20,
      17: 20,
      18: 20,
      19: 25,
      20: 25,
      21: 25,
      22: 25,
      23: 25,
      0: 25,
    },
    O: {
      1: 25,
      2: 25,
      3: 25,
      4: 25,
      5: 25,
      6: 25,
      7: 25,
      8: 25,
      9: 25,
      10: 15,
      11: 15,
      12: 15,
      13: 15,
      14: 15,
      15: 15,
      16: 15,
      17: 15,
      18: 15,
      19: 20,
      20: 20,
      21: 20,
      22: 20,
      23: 20,
      0: 20,
    },
  };

  let vals = workdetail.split("=");
  let name = vals[0];
  let daysWork = vals[1].split(",");
  let totalCost = 0;

  for (let day of daysWork) {
    let d = day[0];
    let s = day.substr(2);
    let fromAndTo = s.split("-");
    let from = fromAndTo[0].split(":")[0];
    let to = fromAndTo[1].split(":")[0];
    if (d === "S") {
      let weekend = store[d];
      for (let i = +from; i < +to; i++) {
        totalCost += weekend[i];
      }
    } else {
      let weekday = store["O"];
      for (let i = +from; i < +to; i++) {
        totalCost += weekday[i];
      }
    }
  }

  return `"The amount to pay ${name} is: ${totalCost} USD"`;
}

module.exports = {
  wageComputer,
  input,
};
