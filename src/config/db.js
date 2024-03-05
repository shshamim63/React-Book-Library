import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const ServerClient = axios.create({
  baseURL: SERVER_URL,
});

export default ServerClient;
