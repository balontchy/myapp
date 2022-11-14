import React from 'react'
import style from '../../styles/objectifsStyles/sectionThree.module.css'
import Image from 'next/image'
function SectionThree() {
  return (
    <div className={style.sectionThree+ " sectionThree"}>
    <div className={style.text3}>
        <h3>BUSINESSPLACE</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, odit non, perspiciatis quia recusandae dignissimos debitis assumenda, repellat sed nisi enim au<br/> </p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.</p>
    </div>
    <div className={style.image4}>
      <Image className={style.imagelink} src={'/woman.jpg'} width={600} height={500} />

    </div>
    <div className={style.text5}>

        <h3>BUSINESSPLACE</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, odit non, perspiciatis quia recusandae dignissimos debitis assumenda, repellat sed nisi enim au<br/> </p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.</p>
    </div>
    <div className={style.image6}>
      <Image className={style.imagelink} src={'/men.jpg'} width={600 } height={500} />

    </div>

  </div>
  )
}

export default SectionThree