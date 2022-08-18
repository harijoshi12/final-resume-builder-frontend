import React from 'react'
import Layout from '../../UI/Layout'
import styles from '../../styles/Dashboard.module.css'
import Resume from '../../components/resume-template/common/Resume'
function Dashboard() {
  return (
    <Layout>
      <main className={styles.dashboardPage}>
        <div className={styles.desktopView}>
          <Resume/>
        </div>
        <button className={styles.downloadBtn}>Downlaod Resme</button>
      </main>  
    </Layout>
  )
}

export default Dashboard