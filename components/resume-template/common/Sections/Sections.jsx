import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import AddItems from '../AddItem/AddItem'
import SecItem from '../Items/Items'
import SecTitle from '../SectionTitles/SectionTitles'
// Higher Order Component


// custom style
import styles from '../Resume.module.css'

// items
import {NewContactDetail, NewPersonalInfo, NewEdu, NewLang, NewProgLang, NewProject, NewTechnicalSkill, NewMyJourney, NewInterest} from '../Items/Items'
const Section = (props)=>{
  const {secId,  secTitleName, itemData1, itemData2, itemData3, data, className} = props
  const [plusEl, setPlusEl] = useState(false)
  const [items, setItems] = useState(data)
  const [addNewItem, setAddNewItem] = useState(false)

  const addNewItemHandler = ()=>{
    const itemsarr = items.map(d=> ({...d, isLast: false }))
    setItems([...itemsarr, {id:uuidv4(), title: `${itemData1}`, isLast: true}])
    setAddNewItem(true)
  }

  return(
    <div className={`${styles[className]} ${styles.resumeSec}`}>
      {
        secId === "1" || secId === "5" ? null : <SecTitle setPlusEl={setPlusEl}  secTitleName={secTitleName}/>
      }
      
      {items.map(data => <SecItem secId={secId} className={className} secTitleName={secTitleName} itemData1={itemData1} itemData2={itemData2} itemData3={itemData3} data={data}  key={data.id}  dataArray={items} setDataArray={setItems} addNewItem={addNewItem} setPlusEl={setPlusEl} />)}
      {
        plusEl?(
          // <div  onMouseDown={()=>{addNewItemHandler()}}></div>
          <AddItems addNewItemHandler={addNewItemHandler} />
        ):null
      }
    </div>
  )
}

export default Section