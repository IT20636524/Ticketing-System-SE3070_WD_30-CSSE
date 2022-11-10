var chai = require("chai");
var mongoose = require("mongoose");
var assert = chai.assert;
import {
  getTransportRoutes,
  createTransportRoute,
  updateTransportRouteById,
  getTransportRoute,
  deleteTransportRoute,
} from "../services/transportRoute";
/*
  This will do the api testing TimeTable service layer functions

*/
describe("TransportRoute", () => {
//   it("getTransportRoute should return a promise of a given object id", () => {
//     assert.typeOf(
//       getTimeTable(mongoose.Types.ObjectId("6363754db2763c9f2a9c4918")),
//       "promise"
//     );
//   });

  it("getTransportRoute should return a transport route promise which includes timeTable object for the given object id 6363754db2763c9f2a9c4920", () => {
    var result = undefined;
    getTransportRoute(mongoose.Types.ObjectId("6363754db2763c9f2a9c4920"))
      .then((value) => {
        result = value;
        var timeTable = result.timeTable;
        assert.typeOf(timeTable, "object");
      })
      .catch((err) => {
        console.log(err);
      });
  });

//   it("Time table id should not  be Ttid-002 for the given object id 6363754db2763c9f2a9c4918", () => {
//     var result = undefined;
//     getTimeTable(mongoose.Types.ObjectId("6363754db2763c9f2a9c4918"))
//       .then((value) => {
//         result = value;
//         var tableId = result.timeTableId;
//         assert.notEqual(tableId, "Ttid-002", "The object id's are not equal");
//         console.log(value);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
});
