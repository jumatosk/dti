import {AxiosResponse} from 'axios';
import Api from './api';

class Movies extends Api {
  public static getMoviesData = async (url: string): Promise<AxiosResponse> => {
    let responseValue: any;

    try {
      const request = await Api.getRequest();
      const response = await request.get(url);

      responseValue = response.data;
    } catch (error) {
      responseValue = error;
    }
    return responseValue;
  };
}

export default Movies;
