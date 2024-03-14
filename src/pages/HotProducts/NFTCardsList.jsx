import React from 'react'
import NFTCard from './NFTCard'
import nfts from '../../../public/data/nfts'

function NFTCardsList() {

  return (
    <>
      {nfts.map((nft, idx) => {
        return (
          <div key={idx}>
            <NFTCard
              key={nft.title}
              img={nft.img}
              title={nft.title}
              price={nft.price}
              likes={nft.likes}
              sale={nft.sale}
            />
          </div>
        )
      })}
    </>
  )
}

export default NFTCardsList
