import React from "react";
import Layout from "../../UI/Layout";
import styles from "../../styles/Dashboard.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { baseUrl } from "../../constants/constants";
import Template1 from "../../components/templates/template1/edit/Template1";
function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();
  // useEffect(() => {
  //   if (!currentUser) {
  //     router.push("/login");
  //   }
  // }, [currentUser]);
  function downloadResume() {
    function closePrint() {
      document.body.removeChild(this.__container__);
    }

    function setPrint() {
      this.contentWindow.__container__ = this;
      this.contentWindow.onbeforeunload = closePrint;
      this.contentWindow.onafterprint = closePrint;
      this.contentWindow.focus(); // Required for IE
      this.contentWindow.print();
    }

    function printPage(sURL = `http://localhost:3000/dashboard`) {
      var oHideFrame = document.createElement("iframe");
      oHideFrame.onload = setPrint;
      oHideFrame.style.position = "fixed";
      oHideFrame.style.right = "0";
      oHideFrame.style.bottom = "0";
      oHideFrame.style.width = "0";
      oHideFrame.style.height = "0";
      oHideFrame.style.border = "0";
      oHideFrame.src = sURL;
      document.body.appendChild(oHideFrame);
    }
    printPage()
  }

  const downloadResume2 = () => {
    router.push("/view-resume")
  }
  return (
    <Layout>
      <main className={styles.dashboardPage}>
        <div className={styles.desktopView}>
          <Template1 />
        </div>
        {/* <button className={styles.downloadBtn} onClick={downloadResume2}>Downlaod Resme</button> */}
      </main>
    </Layout>
  );
}

export default Dashboard;
