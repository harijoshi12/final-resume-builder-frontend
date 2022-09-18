import React, { useEffect, useRef, useState } from "react";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { resumeInputCodes } from "../../../../constants/constants";
import { resumeActions } from "../../../../features/resume/resumeSlice";
// custom styles
import styles from "../Resume.module.css";
let i = true;
const SecTitle = ({ setPlusEl, secTitleObj }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  i ? console.log('idn13 , secTitleObj 1st time  : ', secTitleObj) : null;
  const [secTitle, setSecTitle] = useState(secTitleObj?.secTitle);

  // TODO: Dispatch statechange action with payload of { id: ' ' , newValue: '' , type: 'setTitle'}

  console.log('secTitleObj in Sectitle :', secTitleObj);
  console.log('secTitle state in  sectitle:  ', secTitle);
  
  useEffect(()=>{
    if(!secTitleObj?.id){
      return;
    }
    dispatch(resumeActions.changeState({
      id: secTitleObj.id,
      type: 'setTitle',
      newValue: secTitle
    }))
  }, [secTitle]);

  useEffect(() => {
    if (edit) {
      setPlusEl(true);
    } else {
      setPlusEl(false);
    }
  }, [edit, setPlusEl]);

  const handleClickSecTitle = () => {
    setEdit(!edit);
  };

  const inputRef = useRef(null);
  const onChangeHandler = (e) => {
    setSecTitle(e.target.value);
    if (e.target.value === "") {
      inputRef.current.placeholder = secTitleName;
    }
  };

  const handleEditSecTitle = (e) => {
    e.preventDefault();
    setEdit(!edit);
    if (secTitle === "") {
      setSecTitle(secTitleName);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <>
      {edit ? (
        <form
          className={styles.secTitleInput}
          onSubmit={(e) => {
            handleEditSecTitle(e);
          }}
          onBlur={(e) => {
            handleEditSecTitle(e);
          }}
        >
          <input
            name={resumeInputCodes.SECTITLE}
            ref={inputRef}
            value={secTitle}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={styles.icon} onClick={(e) => handleEditSecTitle(e)}>
            <MdDone />
          </span>
        </form>
      ) : (
        <h1 className={styles.secTitle} onClick={handleClickSecTitle}>
          {secTitle}
        </h1>
      )}
    </>
  );
};

export default SecTitle;
