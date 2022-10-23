import { useRouter } from 'next/router'
import React from 'react'
import Template1 from '../../../components/templates/template1/view/Template1'
import Template2 from '../../../components/templates/template2/view/Template2'
import Template3 from '../../../components/templates/template3/view/Template3'
import Template4 from '../../../components/templates/template4/view/Template4'
import FourZeroFourPage from '../../404'

const ViewResume = () => {
  const router = useRouter()
  const { id } = router.query
  if (!router.isReady) {
    return <h1>Loading</h1>
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
    </>
  )
}

export default ViewResume
