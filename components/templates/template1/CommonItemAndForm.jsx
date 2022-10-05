import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../../features/resume/resumeSlice";

const CommonItemAndForm = (props) => {
  const { InputItem, ViewItem, setPlusEl, secId } = props

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch()

  const inputRef = useRef(null);

  const editFinishHandler = () => {
    setEdit(!edit);
    setPlusEl(false);
  };

  const handleClickItem = () => {
    setEdit(!edit);
    setPlusEl(true);
  };

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

  if (secId === "1" || secId === "3") {
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