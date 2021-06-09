import dotenv from 'dotenv';
import httpsProxyAgent from 'https-proxy-agent';
import axios from 'axios';

dotenv.config();

const url: string = 'https://jsonplaceholder.typicode.com/users/';

// 'http[s]://<auth_username>:<auth_password>@<host>:<port>/'
const httpsAgent = new httpsProxyAgent.HttpsProxyAgent(process.env.PROXY || '');

axios.get(url, { httpsAgent }).then(function (response) {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

  const data: User[] = response.data;
  console.log(data);
});
