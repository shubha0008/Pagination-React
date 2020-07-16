import http from "../http-common";

const getAll = (params) => {
  return http.get("/tutorials", { params });
};

// other CRUD methods

export default {
  getAll,
  ...
};