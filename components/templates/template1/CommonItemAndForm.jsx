import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../contexts/AuthContext";
import { updateItem, updateResume, updateResumeAsync } from "../../../features/resume/resumeSlice";

const CommonItemAndForm = (props) => {
  const { id, InputItem, ViewItem, setPlusEl, secId, addNewItem, newItem } = props
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()
  const inputRef = useRef(null);

  const editFinishHandler = () => {
    setEdit(!edit);
    setPlusEl(false);
  };

  // useEffect(() => {
  //   // console.log("props= ", props)
  //   // console.log("id= ", id, "newItem id= ", newItem)
  //   if (addNewItem) {
  //     setEdit(true);
  //   } else {
  //     editFinishHandler()
  //   }
  //   if (props?.isLast) {
  //     console.log("newItem= ", newItem)
  //   }
  // }, [addNewItem]);

  const handleClickItem = () => {
    setEdit(!edit);
    setPlusEl(true);
  };

  useEffect(() => {
    setPlusEl(edit);
  }, [edit]);

  const { currentToken, currentUser } = useAuth();

  const onChangeHandler = (secName, arrayName, objId, objName, value) => {
    dispatch(updateItem({
      secName: secName,
      arrayName: arrayName,
      objId: objId,
      objName: objName,
      value: value
    }))
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  if (secId === "1") {
    return (
      <ViewItem {...props} inputRef={inputRef} onChangeHandler={onChangeHandler} />
    )
  }

  if (secId === "3") {
    return (
      <ViewItem {...props} inputRef={inputRef} edit={edit} editFinishHandler={editFinishHandler} handleClickItem={handleClickItem} onChangeHandler={onChangeHandler} />
    )
  }

  return (
    <>
      {edit ? <InputItem {...props} inputRef={inputRef} editFinishHandler={editFinishHandler} onChangeHandler={onChangeHandler} /> : <ViewItem {...props} handleClickItem={handleClickItem} />}
    </>
  )
}

export default CommonItemAndForm