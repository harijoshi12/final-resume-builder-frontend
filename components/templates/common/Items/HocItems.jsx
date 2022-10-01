import { useEffect, useRef, useState } from "react"




const HocItems = (SecItem) => {
  const NewSecItem = (props) => {
    const { secTitle, itemData1, itemData2, itemData3, data, dataArray, setDataArray, addNewItem, setPlusEl } = props

    const [edit, setEdit] = useState(false)
    const [singleItem, setSingleItem] = useState({})
    const itemData1Ref = useRef(null)

    useEffect(() => {
      if (data.isLast) {
        if (addNewItem) {
          setEdit(true)
        } else {
          setEdit(false)
        }
      }
    }, [addNewItem])

    useEffect(() => {
      setPlusEl(edit)
    }, [edit])

    const handleClickItemTitle = () => {
      setEdit(!edit)
      setPlusEl(true)
    }

    const onChangeHandler = (e) => {
      setSingleItem(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
      if (e.target.value === "") {
        itemData1Ref.current.placeholder = itemData1
      }
    }

    const handleEditItem = (e) => {
      e.preventDefault()
      setPlusEl(false)
      setEdit(!edit)
      if (singleItem.s_itemData1 === "") {
        setSingleItem(prev => ({ ...prev, s_itemData1: itemData1 }))
      } else {
        setDataArray(dataArray.map(d => d.id === data.id ? { ...d, s_itemData1: singleItem.s_itemData1 } : d))
      }
    }

    return (
      <SecItem {...props} edit={edit} setEdit={setEdit} />
    )
  }
  return NewSecItem
}

export default HocItems