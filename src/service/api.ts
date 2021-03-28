import axios, {AxiosInstance} from 'axios';

class Rest {
  public static getRequest = async (): Promise<AxiosInstance> => {
    return axios.create({
      baseURL: 'http://www.omdbapi.com/',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
  };
}

export default Rest;
