"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
  filterMovie(query, callback) {
    schema_1.default.find(query, callback).limit(24);
    //fetches out 24 movies
    filterUser(query, callback);
    {
      if (query.length > 0) {
        let filterlist = query.map((value) => ({
          Genre: { $regex: new RegExp(value, "i") },
        }));
        schema_1.default.find({ $and: filterlist }, callback).limit(24);
      } else {
        schema_1.default.find({}, callback).limit(24);
      }
      //movies
      // .find({ Genre: { $regex: new RegExp("Adventure", "i") } }, callback)
      //  .limit(24);
      //fetches out 20 movies
    }
    movieSearch(query, callback);
    {
      schema_1.default.find(query, callback).limit(24);
    }
  }
}

exports.default = UserService;
