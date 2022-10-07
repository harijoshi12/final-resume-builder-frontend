import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../contexts/AuthContext";
import { deleteItem, updateItem, updateResumeAsync } from "../../../features/resume/resumeSlice";

const CommonItemAndForm = (props) => {
  const { id, idx, secData, secName, arrayName, InputItem, ViewItem, setPlusEl, secId, addNewItem, newItem } = props
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()
  const inputRef = useRef(null);

  const editFinishHandler = () => {
    setEdit(false);
    setPlusEl(false);
  };

  useEffect(() => {
    if (idx === (secData?.length - 1)) {
      if (addNewItem) {
        setEdit(true);
      } else {
        setEdit(false)
      }
    }
  }, [addNewItem]);

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

  const handleDeleteItem = () => {
    dispatch(deleteItem({
      secName,
      arrayName,
      objId: id
    }))
    setPlusEl(false);
    dispatch(updateResumeAsync(currentToken))
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
      <ViewItem {...props} inputRef={inputRef} edit={edit} handleDeleteItem={handleDeleteItem} editFinishHandler={editFinishHandler} handleClickItem={handleClickItem} onChangeHandler={onChangeHandler} />
    )
  }

  return (
    <>
      {edit ? <InputItem {...props} inputRef={inputRef} handleDeleteItem={handleDeleteItem} editFinishHandler={editFinishHandler} onChangeHandler={onChangeHandler} /> : <ViewItem {...props} handleClickItem={handleClickItem} />}
    </>
  )
}

export default CommonItemAndForm