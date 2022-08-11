import axios from "axios";
import { Settings } from "_app";

export const apiNext = axios.create({
  baseURL: Settings.Fetch.ApiNextURL,
});
