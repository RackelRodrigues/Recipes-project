

import './style_home.css'
import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import axios from 'axios'



interface Meals{
  idMeals : number;
  strMeal: string;
  strInstructions: string | number;
  strYoutube: string;
}



const Inicio = () => {  
   

  

  const API_URL= 'https//www.themealdb.com/api/json/v1/1/randomselection.php'

  const AllIds: React.FC = ()=>{
    const [Ids, setIds] = useState<number[]>([]);
            

     useEffect(() => {
        const fetchId = async()=>{
           try{
            const response = await axios.get(API_URL);
            const ids = response.data.map((post:any) => post.idMeal);
           setIds(ids);
           console.log(ids);
           } catch(error){
            console.error('kdkdkdk',error);
           }
           
        }
        fetchId();

     }, []);

    



  



    return(
    <>


     <Header/>

   <main>
  <div className='conteiner'>
    <h1 className='random_title'>Random Recipes</h1>


    <div className='boxing'>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture"/>
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdklllllllkoskacmkmdsc
    ckmdcsksmclkmslcmsdçc sclçmdspocdsjmcpsmclmfoieogrheunjr</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>
  

  
  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>


  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>

  <div className='conteiner_recipe'>
    <a>
      <img src='' alt="food picture" />
    </a>

    <div className='C-3'>
    <h3 className='subtitle'>Shrimp Chow Fun</h3>
    <h5 className='description'>llalaldkdoowwjwwododkdk</h5>

     <div className='button_you'>
      <a href='' className='button'>YouTube</a>
     </div>
    </div>
  </div>


  </div>
  </div>
  </main>
    </>
    )
  }}

export default Inicio;