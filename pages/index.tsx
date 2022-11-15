// import Head from 'next/head'
// import Image from 'next/image'
import dynamic from 'next/dynamic'
import InSpace from '../components/ar/InSpace'

const Model = dynamic(
  () => import('../components/ar/Model'),
  { ssr: false }
)

export default function Home() {
  return (
    <Model>
      <InSpace>
        <button className="Hotspot" slot="hotspot-1" data-position="-0.1671122717532657m 1.36672853649147m 0.09473723496036213m" data-normal="0.028677921141896347m -0.8189170514849718m 0.573194940335432m" data-visibility-attribute="visible">
          <div className="HotspotAnnotation">test1</div>
        </button>
      </InSpace>
    </Model>
  )
}