var chai = require("chai");

var assert = chai.assert;

import {
  getTimeTables,
  createTimeTable,
  updateTimeTableById,
  getTimeTable,
  deleteTimeTable,
} from "../services/timeTable";
var mongoose = require("mongoose");

/*
 This will do the api testing TimeTable service layer functions

*/
describe("TimeTable", () => {
  it("Time table objects tableRows should return an array", () => {
        var result = undefined;
        getTimeTable(mongoose.Types.ObjectId("6363754db2763c9f2a9c4918"))
          .then((value) => {
            result = value;
            assert.typeOf(value.tableRows, "array");

          })
          .catch((err) => {
            console.log(err);
          });
    assert.typeOf(
      getTimeTable(mongoose.Types.ObjectId("6363754db2763c9f2a9c4918")),
      "promise"
    );
  });

  it("Time table id should be Ttid-001 for the given object id 6363754db2763c9f2a9c4918 ", () => {
    var result = undefined;
    getTimeTable(mongoose.Types.ObjectId("6363754db2763c9f2a9c4918"))
      .then((value) => {
        result = value;
        var tableId = result.timeTableId;
        assert.equal(tableId, "Ttid-001");
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it("Time table id should not  be Ttid-002 for the given object id 6363754db2763c9f2a9c4918", () => {
    var result = undefined;
    getTimeTable(mongoose.Types.ObjectId("6363754db2763c9f2a9c4918"))
      .then((value) => {
        result = value;
        var tableId = result.timeTableId;
        assert.notEqual(tableId, "Ttid-002", "The object id's are not equal");
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
