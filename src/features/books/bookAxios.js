import { apiProcesser } from "../../helpers/axiosHelper";

const bookEP = import.meta.env.VITE_APP_ROOT_SERVER + "/api/v1/books";

export const postNewBook = async (obj) => {
  const axiosObj = {
    method: "post",
    url: bookEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const fetchBooks = async (isPrivate) => {
  console.log(bookEP)
  const axiosObj = {
    method: "get",
    url: isPrivate ? bookEP + "/all" : bookEP,
    isPrivate: true,
  };
  return await apiProcesser(axiosObj);
};

export const fetchASingleBook = async (_id) => {
  console.log(bookEP)
  const axiosObj = {
    method: "get",
    url:  bookEP + "/" + _id,
   
  };
  return await apiProcesser(axiosObj);
};


export const updateABook = async (obj) => {
  const axiosObj = {
    method: "put",
    url: bookEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};