

import axios from "axios";
import { count } from "console";



export async function fetchData() {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=ethereum&apiKey=${process.env.MY_API_KEY}`
  );
  return response.data.articles;

}