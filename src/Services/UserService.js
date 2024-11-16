import axios from "axios";

const Url = "http://localhost:8080/api/users"

export const ListUsers = () => axios.get(url)