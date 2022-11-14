import React from 'react'
import style from '../styles/interface/Footer.module.css'

function Footer() {
  return (
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
  )
}

export default Footer