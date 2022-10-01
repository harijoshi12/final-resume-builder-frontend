import { useState } from "react"


const HocSections = (Section)=>{
  const NewSection = (props)=>{
    const [plusEl, setPlusEl] = useState(false)
    const [addNewItem, setAddNewItem] = useState(false)

    const addNewItemHandler = ()=>{
      const itemsarr = items.map(d=> ({...d, isLast: false }))
      setItems([...itemsarr, {id:uuidv4(), title:"Technical Skill", isLast: true}])
      setAddNewItem(true)
    }

    return(
      <Section {...props} addNewItemHandler={addNewItemHandler} plusEl={plusEl} setPlusEl={setPlusEl} addNewItem={addNewItem} />
    )

  }
  return NewSection
}

export default HocSections