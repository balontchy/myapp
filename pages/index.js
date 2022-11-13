import React from 'react'
import style from '../styles/interface/Home.module.css'
import Image from 'next/image'

function index() {
  return (
    <>
    {/* 1 section */}
      <div className={style.firstContainer}>


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

      <div className={style.scondContainer}>
        <Image className={style.scondImage} src={'/x.webp'} width={600} height={500} />
        <div className={style.secondText}>
          <h3>BUSINESSPLACE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, odit non, perspiciatis nemo quibusdam distinctio eaque consequuntur natus ex animi vitae fugit possimus amet deserunt maxime aperiam autem? Dignissimos?
     <br/> Quia enim architecto provident placeat asperiores nulla, iste dolorem quod repellendus, laboriosam labore. Accusantium, consequuntur deserunt! Aspernatur veritatis architecto quidem autem quia magni, quam ad sequi eos ipsam reiciendis corrupti.
          Dolorum obcaecati in voluptates! Explicabo veritatis dolor officiis obcaecati commodi quia recusandae dignissimos debitis assumenda, repellat sed nisi enim au<br/> </p>
         
        </div>
      </div>



      {/* 3 section */}

      <div className={style.thirdContainer}>
        <div className={style.thirdText}>
          <h3>BUSINESSPLACE</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in mollitia, dolores omnis quo ut ipsum iure laboriosam nemo, explicabo sit voluptate eos corrupti autem asperiores quae amet enim eveniet.
            Inventore ex quia unde dolor saepe iure sit dignissimos iusto illo perferendis nulla facere, incidunt eius, velit nisi magnam nostrum modi maxime repellendus earum ducimus quibusdam officiis sunt? Pariatur, quasi.
            Porro, autem eius molestias ad nemo cupiditate accusamus quod id delectus repellendus deserunt blanditiis voluptate? A magni itaque quia, doloribus dicta accusamus tempora expedita nisi placeat veniam aspernatur fuga perspiciatis.
            Molestias sequi vel ipsa mollitia eius magni numquam? Corrupti quod atque inventore natus repellat dolorem pariatur placeat consequatur blanditiis in perferendis cum soluta incidunt enim unde, dolore eligendi quam voluptates.
            Reprehenderit minus quam magni odit delectus sed.</p>
        </div>
        <Image className={style.image} src={'/femme.jpg'} width={500} height={500} />
      </div>


      {/* footer */}

      <div className={style.footer}>
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