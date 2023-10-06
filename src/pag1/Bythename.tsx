import{FiSearch} from'react-icons/fi';
import {useState} from 'react'
import "./style-byname.css";
import Header from "../header/header"


 const Bythename = () =>{

 const[valueinput, setValueinput] = useState(" ")

 //função para mudar valor
  const handlechange= (event: any)=>{
    setValueinput(event.target.value);
  }


const URL_API1 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
 

 return(
    <>

    <Header/>
    <main>
      <p>{valueinput}</p>
      <div>
    <div className='conteineroftitle'>
   <h1 className='title3' >Search meals by name</h1>
   </div>
   <div className='conteinerinput'>
   <input type="text"  onChange={handlechange}  placeholder='Seach for Meals' />
   <button className='buttonSearch'>
        <FiSearch size={25} color='#231942' />
       </button>
   </div>

    <p>Receitas não encontradas</p>
      </div>
    </main>
    </>
 )
}

export default Bythename;