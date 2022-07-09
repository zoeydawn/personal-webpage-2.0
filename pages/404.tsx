import Link from 'next/link'
import PageWrapper from '../components/PageWrapper'
import Image from 'next/image'

export default function Custom404() {
  return (
    <PageWrapper title="404">
      <>
        <h1>404 - That page does not seem to exist...</h1>
        <Link href="/">
          <a className="btn btn-ghost">Go home</a>
        </Link>
        <Image
          className="my-2"
          src="/confused_travolta_loop.gif"
          width={490}
          height="476"
        />
      </>
    </PageWrapper>
  )
}
