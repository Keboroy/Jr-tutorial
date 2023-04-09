"use client"
import Banner from './Banner'
import Card from './Card'
import Ebok_card from './ebok_card'
import Headline from './headline'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='hidden md:block'>
        <Banner />
      </div>
      <div className=''>
        <div className='md:my-5 flex flex-col'>
          <Headline Title="Coureses" />
          <Card />
          <Headline Title="E-Books" />
          <Ebok_card />
        </div>
      </div>
    </main>
  )
}
