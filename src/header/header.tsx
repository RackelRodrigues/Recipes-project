import { BiSolidHomeAlt2 } from 'react-icons/bi';
import {Routes, Route, Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './style-header.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'




const Header = () =>{

    return(
    <>

  <div>
      <header>
        <div className='home'>
        <Link to="/" id='home' className="svg"><BiSolidHomeAlt2 size={40} color="#f97316"/></Link>

        </div>


      <div id='conteiner'>
      

      <li>
      <Link to="/by-name" className='svg itens-centro'>Pesquisa por Receitas</Link>
      </li>
      <li>
        <Link to="/by-letter" className='svg itens-centro'>Receitas por Letra</Link>
       
      </li>
      <li>
        <Link to="/by-ingredients" className='svg itens-centro'>Receitas por ingredientes</Link>
      </li>
   
      </div>
      </header>
      </div>
      <div>
        
   
      </div>

      <main>
      <Outlet/>
      </main>
    </>
    )
}

export default Header;