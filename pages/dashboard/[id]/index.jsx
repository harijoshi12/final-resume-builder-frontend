import React from 'react'
import {useRouter} from 'next/router'
import Layout from '../../../UI/Layout'
import Template1 from '../../../components/resume-template/template1/Template1'

const Editor = () => {
  const router = useRouter()
  const resumeId = router.query.id
  return (
    <Layout>
      <main className='template-page'>
          <Template1/>
      </main>
    </Layout>
  )
}

export default Editor