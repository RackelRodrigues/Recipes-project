import {FiSearch} from 'react-icons/fi';
import  Header  from "../header/header"
import {Link}  from "react-router-dom"
import'./style-ingredients.css';  


export const ByIngredients=()=>{

const URL_API3= 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

    return(
        <>
         <Header/>
         
     <main>
        <div className='conteinertitle3'>
        <h1 className='title1'>Ingredients</h1>
        </div>

<div className='conteinerinput'>
<div className='inputContainer'>
  <input type='text' placeholder='Search for ingredients'/>
  </div>
  <button className='buttonSearch'>
        <FiSearch size={25} color='#4b5563' />
  </button>
</div>
        
<div className='box_ing'>
  <Link to=''>
    <h3 className='properties'>chicken</h3>
</Link> 

</div>
</main>


        </>
    )
}