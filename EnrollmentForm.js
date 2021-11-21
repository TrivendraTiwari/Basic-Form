import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Theme, ThemeProvider } from "@chakra-ui/react";
export default function EnrollmentForm() {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "javaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="email"
                name="email"
              />
              <FormikControl control="textarea" label="bio" name="bio" />
              <FormikControl
                control="select"
                label="course"
                name="course"
                options={dropdownOptions}
              />
              <FormikControl
                control="checkbox"
                label="Your skillset"
                name="skills"
                options={checkboxOptions}
              />
              <FormikControl
                control="date"
                label="control date"
                name="courseDate"
              />
              <button type="submit" disabled={!formik.isValid}>
                submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </ThemeProvider>
  );
}
