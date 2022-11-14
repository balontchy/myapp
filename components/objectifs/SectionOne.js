import React from 'react'
import style from '../../styles/objectifsStyles/sectionOne.module.css'
import Image from 'next/image'
function SectionOne() {
  return (
        <div className={style.sectionOne + " sectionOne"}>

        <div className={style.text}>
          <h3>Vos prochains projets </h3>
          <h2>commencent ici </h2>
          <p>Nous aidons les grandes entreprises et les experts externes à faire équipe plus facilement que jamais</p>
     
        <div className={style.button}>
    
          <div className="button-white">
            <h4>Inscription</h4>
          </div>
    
          <div className="button-purple">
            <h4>Trouver un mession</h4>
          </div>   </div>
        </div>
    
        <div className={style.image}>
          <Image className={style.image} src={'/work-team.jpg'} width={2400} height={1600}/>
    
        </div>
    
    
      </div>
  )
}

export default SectionOne