import React, { useState } from 'react'
import Link from 'next/link'
import style from '../styles/interface/Navbar.module.css'


const Navbar = () => {
  return (
    <div className={style.container + " navbar"}>
      <div className={style.logo}>
        <h3>BUSINESSPALACE</h3>
      </div>
      <Navbarr>
        <Link className={style.link} href={'/'} >Accueil</Link>
        <Link className={style.link} href={'/objectifs'} >Objectifs</Link>
        <Link className={style.link} href={'/avantages'} >Avantages</Link>
        <NavbarItem>
          {/* <DropDownMenu /> */}
        </NavbarItem>
        <Link className={style.link} href={'/inscription'} >Inscription</Link>
        <Link className={`${style.link} ${style.espace}`} href={'/objectifs'} >Mon espace</Link>

      </Navbarr>
    </div>
  )
}
const Navbarr = (props) => {
  return (<nav>
    <ul>
      {props.children}
    </ul>
  </nav>)
}
const NavbarItem = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <Link className={style.link} href={'/comment_ca_marche'} onClick={() =>setOpen(!open)}>
      Comment ca marche?
      {open === true ?props.children : ''}
    </Link>
  )
}


const DropDownMenu = () => {
  const DropDownItem = (props) => {
    return (

      <Link className={style.drop} href={''} >
        {props.children}
      </Link>
    )
  }
  return (
    <>
    <DropDownItem>itemOne</DropDownItem>
    <DropDownItem>itemTwo</DropDownItem>
    <DropDownItem>itemTree</DropDownItem>
    </>
  )
}

export default Navbar