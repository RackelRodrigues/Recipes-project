import  Header  from "../header/header"
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./style-letter.css" 
import axios from 'axios'


interface letter{
  idMeal: number;
  
}
 
const Byletter = () =>{
   const [idsMeals, setidsMeals] = useState()
   const [changeapi, setchangeapi] = useState("")

   
   const mostrarmeals = (valor: string)=>{
     setchangeapi(valor);
   }
    

   const fetchApi = async()=>{
      try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=${changeapi}');
      const allMeals = response.data.meals;
      if(response.data.meals&& Array.isArray(response.data.meals)){
         const meallids = allMeals.map((meal:any)=> meal.idMeal)
      }
      const meallids = allMeals.map((meal:any)=> meal.idMeal)
      console.log('Meal IDs:', meallids);
      meallids(setidsMeals)  
   
   } catch (error) {
         console.error(error)
         
      }
   }

   useEffect(() => {
 
      fetchApi();
   }, [])

    return(
        <>
     <Header/>

<main>
   
   <div>
    <div className='conteiner-title'>
     <h1 className='title'>Recipes by letter</h1>
   </div>
   
   <div className='box'>
    <a className='alfa' onClick={()=>mostrarmeals('a')}>A</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('b')}>B</a>
    <a href="" className='alfa'onClick={()=>mostrarmeals('c')}>C</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('d')}>D</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('e')}>E</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('f')}>F</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('g')}>G</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('h')}>H</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('i')}>I</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('j')}>J</a>
    <a href=""className='alfa' onClick={()=>mostrarmeals('k')}>K</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('l')}>L</a>
    <a href=""className='alfa' onClick={()=>mostrarmeals('m')}>M</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('n')}>N</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('o')}>O</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('p')}>P</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('q')}>Q</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('r')}>R</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('s')}>S</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('t')}>T</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('u')}>U</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('v')}>V</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('w')}>W</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('x')}>X</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('y')}>Y</a>
    <a href="" className='alfa' onClick={()=>mostrarmeals('z')}>Z</a> 

    
   </div>

   <p className="P">Receitas não encontradas</p>
   </div>
      </main>  
        </>
    )
 }

 export default Byletter;