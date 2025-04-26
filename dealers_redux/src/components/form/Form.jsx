import React from "react";
import styles from "./Form.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postProductThunk } from "../../redux/reducers/dashReducer";

const Form = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short").required("Name is required"),
    description: Yup.string().required("Description is required"),
    // You may need to adjust these fields based on what your API actually expects
    // The following fields might not be needed for the categories API
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    companyName: Yup.string().required("Company name required"),
    subject: Yup.string().required("Subject required"),
    message: Yup.string().required("Dont leave blank"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      email: "",
      phone: "",
      companyName: "",
      subject: "",
      message: "",
    },
    validationSchema,

    onSubmit: (values) => {
      // Dispatch the Redux action instead of direct axios call
      dispatch(postProductThunk(values));
      formik.resetForm();
    },
  });

  // Function to display error messages
  const renderError = (fieldName) => {
    return formik.touched[fieldName] && formik.errors[fieldName] ? (
      <div className={styles.errorMessage}>{formik.errors[fieldName]}</div>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inp}>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Category Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              {...formik.getFieldProps("name")}
            />
            {renderError("name")}
          </div>

          <div>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
              {...formik.getFieldProps("description")}
            />
            {renderError("description")}
          </div>
        </div>

        <div className={styles.inp}>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              {...formik.getFieldProps("email")}
            />
            {renderError("email")}
          </div>

          <div>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              {...formik.getFieldProps("phone")}
            />
            {renderError("phone")}
          </div>
        </div>

        <div className={styles.inp}>
          <div>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Company Name"
              onChange={formik.handleChange}
              value={formik.values.companyName}
              {...formik.getFieldProps("companyName")}
            />
            {renderError("companyName")}
          </div>

          <div>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              {...formik.getFieldProps("subject")}
            />
            {renderError("subject")}
          </div>
        </div>

        <div className={styles.message}>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            onChange={formik.handleChange}
            value={formik.values.message}
            {...formik.getFieldProps("message")}
          ></textarea>
          {renderError("message")}
        </div>

        <div className={styles.button}>
          <button type="submit">Add Category</button>
        </div>
      </form>
    </div>
  );
};

export default Form;