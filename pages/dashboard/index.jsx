import React from 'react'
import Link from 'next/link'
import Layout from '../../UI/Layout'
import styles from '../../styles/Dashboard.module.css'
function Dashboard() {
  return (
    <Layout>
      <main>
        <section className={`${styles.sec} ${styles.hero}`}>
          <div className={styles.container}>
            <div className={styles.content}>
              Dashboard page
              <Link href='/dashboard/2'><a>Editor</a></Link>
            </div>
          </div>
        </section>
      </main>  
    </Layout>
  )
}

export default Dashboard