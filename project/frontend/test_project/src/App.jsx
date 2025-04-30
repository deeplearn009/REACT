import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooksThunk, getBooksThunk, postBooksThunk } from "./redux/reducers/bookReducer";
import { useFormik } from "formik";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(getBooksThunk());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      author: "",
    },
    onSubmit: (values) => {
      dispatch(postBooksThunk(values));
    },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Something went wrong...</span>;

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="author">author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        <label htmlFor="price">price</label>
        <input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <button type="submit">Submit</button>
      </form>
        {data && data.map(item => {
          return (
            <div>
              <span>{item.name}</span><br/>
              <span>{item.author}</span><br />
              <span>{item.price}</span><br />
              <button onClick={() => dispatch(deleteBooksThunk(item._id))}>delete</button>
            </div>
          )
        })}
    </div>
  );
};

export default App;
