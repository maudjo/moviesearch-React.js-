import { IMovie } from "./model";
import movies from "./schema";

export default class UserService {
  public filterUser(query: any, callback: any) {
    movies.find(query, callback).limit(24);
    //fetches out 20 movies
  }

  public filterUser1(query: any, callback: any) {
    movies.findOne(query, callback);
    //fetches out 20 movies
  }

  public updateUser(movie_params: IMovie, callback: any) {
    const query = { _id: movie_params._id };
    movies.findOneAndUpdate(query, movie_params, callback);
}
}
