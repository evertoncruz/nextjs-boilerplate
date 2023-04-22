import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Next App Boilerplate' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next App Boilerplate</h1>
      </main>
    </>
  )
}
