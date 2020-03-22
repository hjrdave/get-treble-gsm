import { Link } from "gatsby";
import React from "react";
import './_header.scss';
import Image from '../../images/register';
import MainNav from '../../widgets/main-nav';

const Header = ({ siteTitle }) => (
  <header className='p-lg-4 pl-0 py-4 d-flex justify-content-between align-content-center'>
    <div className='d-flex ml-4'>
      <div className='header-logo'>
        <Link to="/" ><Image name={'logoTrebleGsm'} /></Link>
      </div>
      <div className='header-title'>
      <Link to="/" ><h4 className='pl-2'>Treble</h4></Link>
      </div>
    </div>
    <MainNav />
  </header>
)

export default Header
