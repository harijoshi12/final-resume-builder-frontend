import React, { useEffect, useRef, useState } from "react";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { resumeInputCodes } from "../../../../constants/constants";
import { useAuth } from "../../../../contexts/AuthContext";
import { updateItem, updateResumeAsync } from "../../../../features/resume/resumeSlice";
// custom styles
import styles from '../styles/Template1.module.css';

const SecTitle = (props) => {
  const { setPlusEl, secTitleName, secTitlePlaceholder, secName, showTitle } = props
  const [edit, setEdit] = useState(false);
  const [secTitle, setSecTitle] = useState(secTitleName);

  useEffect(() => {
    if (edit) {
      setPlusEl?.(true);
    } else {
      setPlusEl?.(false);
    }
  }, [edit, setPlusEl]);

  const handleClickSecTitle = () => {
    setEdit(!edit);
  };

  const inputRef = useRef(null);

  const dispatch = useDispatch()

  const onChangeHandler = (secName, type, value) => {
    dispatch(updateItem({
      secName: secName,
      type: type,
      value: value
    }))
  }

  const { currentToken, currentUser } = useAuth();

  const handleEditFinish = (e) => {
    e.preventDefault();
    setEdit(!edit);
    if (secTitleName === "") {
      onChangeHandler(secName, "secTitle", secTitlePlaceholder)
    }
    dispatch(updateResumeAsync(currentToken))
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  if (showTitle) {
    return (
      <>
        {edit ? (
          <form
            className={styles.secTitleInput}
            onSubmit={(e) => {
              handleEditFinish(e);
            }}
            onBlur={(e) => {
              handleEditFinish(e);
            }}
          >
            <input
              name={resumeInputCodes.SECTITLE}
              ref={inputRef}
              value={secTitleName}
              placeholder={secTitlePlaceholder}
              onChange={(e) => onChangeHandler(secName, "secTitle", e.target.value)}
            />
            <span className={styles.icon} onClick={(e) => handleEditFinish(e)}>
              <MdDone />
            </span>
          </form>
        ) : (
          <h1 className={styles.secTitle} onClick={handleClickSecTitle}>
            {secTitleName}
          </h1>
        )}
      </>
    );
  }
};

export default SecTitle;
