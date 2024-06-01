import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { getSingleBookAction } from "../../features/books/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { inputFields } from "../../assets/formInputs";
import useForm from "../../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { updateABook } from "../../features/books/bookAxios";

const EditBook = () => {
  const {_id} = useParams();
  const dispatch = useDispatch()
  const {form, handleOnChange, setForm} = useForm({})

  const {selectedBook} = useSelector((state)=> state.bookInfo);
  


  useEffect(()=>{
    //fetch single book
    if(_id !==form?._id ){
      dispatch (getSingleBookAction(_id));
    setForm(selectedBook);
    } 

  }, [dispatch, _id, selectedBook, setForm, form])

  const handleOnSubmit=(e)=>{ 
    e.preventDefault();
    const {__v, createdAt, updatedAt, ...rest}= form;

    if(window.confirm("Are you sure you want to confirm?"))
   updateABook(rest)
  }

  console.log(form);

  const inputFieldsWithValues = inputFields.map(item=>{
    return {...item, value: selectedBook[item.name]};
  })


   
  return <UserLayout pageTitle={"Update book"}> <div className="mt-5">
  {/* form here  */}

  <h4 className="py-4">Update the new books</h4>

  <Form onSubmit={handleOnSubmit}>

  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        name="status"
        onChange={handleOnChange}
        label={form?.status?.toUpperCase()} className={form?.status === 'active'
        ? "mb-3 text-success"
        :"mb-3 text-danger"}
      />
    {inputFields.map((input, i) => (
      <CustomInput disabled= {input.name ==="isbn"} key={i} {...input} onChange={handleOnChange} value={form[input.name]} />
    ))}

    <div className="d-grid">
      <Button type="submit">Update Book</Button>
    </div>
  </Form>
</div></UserLayout>;
};

export default EditBook;
