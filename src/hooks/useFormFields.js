import { useState } from "react";

export function useFormFields(initialValues) {
  const [fields, setFields] = useState(initialValues);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFields((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetFields = () => setFields(initialValues);

  return { fields, handleChange, resetFields };
}
