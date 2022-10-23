import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Template1 from '../../../components/templates/template1/edit/Template1'
import Template2 from '../../../components/templates/template2/edit/Template2'
import Template3 from '../../../components/templates/template3/edit/Template3'
import Template4 from '../../../components/templates/template4/edit/Template4'
import FourZeroFourPage from '../../404'

const EditResume = () => {
  const router = useRouter()
  const { id } = router.query
  if (!router.isReady) {
    return <h1>loading</h1>
  }
  return (
    <>
      {id === "1" ? (
        <Template1 />
      ) : id === "2" ? (
        <Template2 />
      ) : id === "3" ? (
        <Template3 />
      ) : id === "4" ? (
        <Template4 />
      ) : (
        <FourZeroFourPage />
      )}
      <Footer />
    </>
  )
}

export default EditResume