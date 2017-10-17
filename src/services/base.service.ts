import axios from 'axios'
import { Options } from '../models/option';

axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api'

export class BaseService  {
    axios: any = axios;
    options: Options = new Options;
}