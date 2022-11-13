import React from 'react'
import style from '../styles/interface/Home.module.css'
import Image from 'next/image'

function index() {
  return (
    <>
    {/* 1 section */}
      <div className={style.firstContainer + " sectionOne"}>


        <div className={style.textContainer}>

            <h3 className={style.text}>Vos prochains projets </h3>
            <h3 className={style.text}>commencent ici </h3>

            <div className={style.buttonContainer}>

              <div className="button-white">
                <h3>Inscription</h3>
              </div>

              <div className="button-purple">
                <h3>Trouver un mession</h3>

            </div>
          </div>
        </div>
        <Image className={style.image} src={'/work-team.jpg'} width={500} height={500} />
      </div>

      {/* 2 section */}

      <div className={style.scondContainer + " sectionTwo"}>
        <Image className={style.scondImage} src={'/x.webp'} width={600} height={500} />
        <div className={style.secondText}>
          <h3>BUSINESSPLACE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, odit non, perspiciatis quia recusandae dignissimos debitis assumenda, repellat sed nisi enim au<br/> </p>

        </div>
      </div>



      {/* 3 section */}

      <div className={style.thirdContainer + " sectionTree"}>
        <div className={style.thirdText}>
          <h3>BUSINESSPLACE</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.
            Inventore es.</p>
        </div>
        <Image className={style.image} src={'/femme.jpg'} width={500} height={500} />
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

export default index