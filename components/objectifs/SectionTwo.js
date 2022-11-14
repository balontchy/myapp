import React from 'react'
import style from '../../styles/objectifsStyles/sectionTwo.module.css'
import Image from 'next/image'
function SectionTwo() {
  return (
    <div className={style.sectionTwo+ " sectionTwo"}>
          <div className={style.image2}>
            <Image className={style.scondImage} src={'/x.webp'} width={600} height={500} />
          </div>
          <div className={style.text2}>
              <h3>BUSINESSPLACE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, odit non, perspiciatis quia recusandae dignissimos debitis assumenda, repellat sed nisi enim au<br/> </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.</p>
          </div>
        </div>
  )
}

export default SectionTwo   