import Link from 'next/link'
import React from 'react'
import styles from './HeaderEditor.module.css'
import logo from '../../media/images/logo/logo.png'
const HeaderEditor = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><a><span style={{ background: `url(${logo})` }}></span><span>metaresume</span></a></Link>
      </div>
      <nav className={styles.middle}>

      </nav>
      <nav className={styles.last}>

      </nav>
    </header>
  )
}

export default HeaderEditor