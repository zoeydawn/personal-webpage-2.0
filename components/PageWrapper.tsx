import Head from 'next/head'
import { fullName } from '../lib/names'

type PageWrapperProps = {
  title?: string
  children: JSX.Element
}

const PageWrapper = ({ title, children }: PageWrapperProps) => (
  <div className="flex flex-col items-center justify-center pt-16 pb-2">
    <Head>
      <title>{title ? `${title} - ${fullName}` : fullName}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      {children}
    </main>
  </div>
)

export default PageWrapper
