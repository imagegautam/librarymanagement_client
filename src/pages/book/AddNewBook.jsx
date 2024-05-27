import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { inputFields } from "../../assets/formInputs";

const initialState = {};

const AddNewBook = () => {
  const { form, handleOnChange, handleOnSubmit } = useForm();

  return (
    <UserLayout pageTitle="New Book">
      <div>
        <Link to="/admin/books">
          <Button variant="secondary">&lt;Back</Button>
        </Link>
      </div>

      <div className="mt-5">
        <h4>Fill up the form to add new books</h4>

        <Form onSubmit={handleOnSubmit}>
          {inputFields.map((input, i) => (
            <CustomInput key={i} {...input} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button type="submit">Submit new book</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default AddNewBook;
