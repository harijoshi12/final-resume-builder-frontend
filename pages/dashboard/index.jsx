import React from "react";
import Layout from "../../UI/Layout";
import styles from "../../styles/Dashboard.module.css";
import Resume from "../../components/resume-template/common/Resume";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, []);
  return (
    <Layout>
      <main className={styles.dashboardPage}>
        <div className={styles.desktopView}>
          <Resume />
        </div>
        <button className={styles.downloadBtn}>Downlaod Resme</button>
      </main>
    </Layout>
  );
}

export default Dashboard;
