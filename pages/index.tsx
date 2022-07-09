import type { NextPage } from 'next'
import PageWrapper from '../components/PageWrapper'
// import Image from 'next/image'
import { fullName } from '../lib/names'

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <h1>{fullName}</h1>
    </PageWrapper>
  )
}

export default Home
