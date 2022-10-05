import { useRouter } from 'next/router'
import React from 'react'
import Template1 from '../../../components/view/template1/Template1'
import Template2 from '../../../components/view/template2/Template2'
import Template3 from '../../../components/view/template3/Template3'
import Template4 from '../../../components/view/template4/Template4'
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
