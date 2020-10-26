"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/movies/service");
class movieController {
    constructor() {
        this.movie_service = new service_2.default();
    }
    get_movie(req, res) {
        if (req.query.filter) {
            let filters = req.query.filter.toString().split(",");
            this.movie_service.filterUser(filters, (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
        else {
            //console.log("without filter");
            this.movie_service.filterUser([], (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
        /*
            } else {
                insufficientParameters(res);
            }*/
    }
    get_id(req, res) {
        if (req.params.id) {
            const movie_filter1 = { _id: req.params.id };
            this.movie_service.filterUser1({}, (err, id_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get id successfull", id_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.movieController = movieController;
