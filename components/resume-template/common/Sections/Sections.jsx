import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import AddItems from '../AddItem/AddItem'
import SecItem from '../Items/Items'
import SecTitle from '../SectionTitles/SectionTitles'

// custom style
import styles from '../Resume.module.css'

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
      
      {items.map(d => <SecItem secId={secId} className={className} secTitleName={secTitleName} itemData1={itemData1} itemData2={itemData2} itemData3={itemData3}   key={d.id} data={d} dataArray={items} setDataArray={setItems} addNewItem={addNewItem} setPlusEl={setPlusEl} />)}
      {
        plusEl?(
          <AddItems addNewItemHandler={addNewItemHandler} />
        ):null
      }
    </div>
  )
}

export default Section