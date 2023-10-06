import Header from './header/header'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'



const App = () =>{

  const [Ids, setIds] = useState([]);

const getId = async()=>{
           try{
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/randomselection.php");
              console.log(response);

           } catch(error){
            console.error(error);
           }
           
        }

        useEffect(() => {
          getId()
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
    <h3 className='subtitle'></h3>
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
  }


export default App
