import React from 'react'
import style from '../styles/interface/objectifs.module.css'
import Image from 'next/image'
function objectifs() {
  return (
    <>
    {/* section one */}
      <div className={style.sectionOne + " sectionOne"}>
        <div className={style.text}>
          <h3 className={style.text}>Vos prochains projets </h3>
          <h2 className={style.text}>commencent ici </h2>
          <p>Nous aidons les grandes entreprises et les experts externes à faire équipe plus facilement que jamais</p>
        </div>
        <div className={style.button}>

          <div className="button-white">
            <p>Inscription</p>
          </div>

          <div className="button-purple">
            <p>Trouver un mession</p>
          </div>
        </div>

        <div className={style.image}>
          <Image className={style.image} src={'/work-team.jpg'} width={700} height={450} />

        </div>


      </div>

        {/* section two */}

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
        


        {/* section three */}
     
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
            <Image className={style.imagelink} src={'/men.jpg'} width={600} height={500} />

          </div>

        </div>
        
        {/* footer */}

           <div className={style.footer + " footer"} >
        <div className={style.logo}>
          <h3>BUSINESSPLACE</h3>
        </div>
        <div className={style.details}>
          <h3>Connection</h3>
          <p>Pourquoi BUSINESSPLACE?</p>
          <p>Qui somme-nous?</p>
          <p>On recrute</p>
          <p>Nos bureaux</p>
        </div>
        <div className={style.details}>
          <h3>Solustion Entreprises</h3>
          <p>BUSINESSPLACE Rise</p>
          <p>Nous services</p>
          <p>Connect</p>
          <p>Portage</p>
        </div>
        <div className={style.details}>
          <h3>Freelance</h3>
          <p>Nos solutions</p>
          <p>Communaute</p>
        </div>
      </div>

    </>
  )
}

export default objectifs