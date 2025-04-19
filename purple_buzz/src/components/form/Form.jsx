import React from "react";
import styles from "./Form.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short").required("Name is required"),
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
      email: "",
      phone: "",
      companyName: "",
      subject: "",
      message: "",
    },
    validationSchema,

    onSubmit: (values) => {
      axios.post("https://northwind.vercel.app/api/categories", values);
      formik.resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        
        <div className={styles.inp}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            {...formik.getFieldProps("name")}
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            {...formik.getFieldProps("email")}
          />
        </div>

        <div className={styles.inp}>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Home"
            onChange={formik.handleChange}
            value={formik.values.phone}
            {...formik.getFieldProps("phone")}
          />

          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Company Name"
            onChange={formik.values.companyName}
            {...formik.getFieldProps("companyName")}
          />
        </div>

        <div className={styles.subject}>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={formik.values.subject}
            {...formik.getFieldProps("subject")}
          />
        </div>

        <div className={styles.message}>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            onChange={formik.values.message}
            {...formik.getFieldProps("message")}
          ></textarea>
        </div>

        <div className={styles.button}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
