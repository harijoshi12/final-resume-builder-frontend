import React from "react";
import styles from "./styles/auth.module.css";
const InputField = (props) => {
  const { inputRef, type, name, id_htmlFor, label, value, handleInputs } =
    props;
  return (
    <div className={styles.input_field}>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => handleInputs(e)}
        name={name}
        id={id_htmlFor}
      />
      <label htmlFor={id_htmlFor}>
        <span className={styles.label}>
          {label}
          <span className={styles.star}>*</span>
        </span>
      </label>
    </div>
  );
};

export default InputField;
