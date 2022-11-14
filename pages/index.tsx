// import Head from 'next/head'
// import Image from 'next/image'
import dynamic from 'next/dynamic'

const Model = dynamic(
  () => import('../components/Model'),
  { ssr: false }
)

export default function Home() {
  return (
    <Model>

      <button slot="ar-button" id="ar-button">
        View in your space
      </button>

    </Model>
  )
}