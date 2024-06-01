import { toast } from "react-toastify";
import { fetchASingleBook, fetchBooks, postNewBook } from "./bookAxios";
import { setBooks, setSelectedBook } from "./bookSlice";


export const postNewBookAction = (obj) => async (dispatch) => {
  // call axios to send data

  const pending = postNewBook(obj);
  toast.promise(pending, {
    pending: "Please wait ...",
    success: pending.message,
  });

  const { status, message } = await pending;
  toast[status](message);
  console.log(status, message);
  // then call function to fetch all the data
};

export const getAllBooksAction = (isPrivate) =>async(dispatch)=>{
const {status, books}= await fetchBooks(isPrivate);
if(status){
  dispatch(setBooks(books));
}
}

export const getSingleBookAction = (_id) =>async(dispatch)=>{
  const {status, books}= await fetchASingleBook(_id);
  if(status){
    dispatch(setSelectedBook(books));
  }
  }

  export const UpdateSingleBookAction = (obj) =>async(dispatch)=>{
    const {status, message}= await updateABook(obj);
    if(status){
      dispatch(setSelectedBook(books));
    }
    }


