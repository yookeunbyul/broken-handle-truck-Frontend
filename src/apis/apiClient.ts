import axios from "axios";

const service = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
  withCredentials: true,
  timeout: 10000,
});

export const http = {
  get: function get<T, P = undefined>(url: string, params?: P): Promise<T> {
    return service.get(url, { params }).then((res) => res.data);
  },
  post: function post<T, D>(url: string, data: D): Promise<T> {
    return service.post(url, { ...data });
  },
  delete: function remove<T>(url: string): Promise<T> {
    return service.delete(url);
  },
};
