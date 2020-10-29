import { IMovie } from "./model";
import movies from "./schema";
import { MovieRoutes } from "routes/movie_routes";
import { Request, Response } from "express";

export default class UserService {
  /*
  public filterMovie(query: any, callback: any) {
    movies.find(query, callback).limit(24);
    //fetches out 24 movies
*/

  public filterMovie(query: any, page: number, callback: any) {
    const perPage = 24;

    if (query.length > 0) {
      //if there are some genres that are requested
      let filterlist = query.map((value) => ({
        Genre: { $regex: new RegExp(value, "i") },
      }));
      //makes a list for every genre object. Checks the Genre-field in the database

      movies
        .find({ $and: filterlist }, callback)
        .skip(perPage * (page - 1))
        .limit(perPage);

      //.then((movies) => res.json(movies));
      //finds every object that satisfies all the genre objects, AND operator
    } else {
      movies
        .find({}, callback)
        .skip(perPage * (page - 1))
        .limit(perPage);
      //if not, finds all the movies
    }

    //movies
    // .find({ Genre: { $regex: new RegExp("Adventure", "i") } }, callback)
    //  .limit(24);
    //fetches out 20 movies
  }

  public movieSearch(query: any, page: number, callback: any) {
    const perPage = 24;

    movies
      .find(query, callback)
      .skip(perPage * (page - 1))
      .limit(perPage);
    /*
    try {
      const movies = await Movie.paginate }*/
  }


  public sortMovies(req: any, callback: any) {
    if(req.params.sort == "Rating"){
      movies.find({}, callback).sort({ Ratings: -1 }).limit(24);
      console.log("dette funker")
    }else if(req.params.sort == "Year"){
      movies.find({}, callback).sort({Year: -1}).limit(24);
    }else if(req.params.sort =="Alphabetic"){
      movies.find({}, callback).sort({Title : -1}).limit(24); 
    } else {
      movies.find({}, callback).sort({ Ratings: -1 }).limit(24);
    

    }
    
  }
}
