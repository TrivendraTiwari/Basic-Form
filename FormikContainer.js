import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
export default function FormikContainer() {
  const dropdownContainer = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "roption1" },
    { key: "option 2", value: "roption2" },
    { key: "option 3", value: "roption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "coption1" },
    { key: "option 2", value: "coption2" },
    { key: "option 3", value: "coption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOptionss: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    description: Yup.string().required("required"),
    selectOption: Yup.string().required("required"),
    radioOption: Yup.string().required("required"),
    checkboxOptionss: Yup.array().required("required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownContainer}
          />
          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="checkboxOptions"
            name="checkboxOptionss"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="pick a date" name="birthDate" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
