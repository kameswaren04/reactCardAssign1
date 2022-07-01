import React , {useState}  from 'react';
import '../App.css';

function Card() {

  const [isCard2, setIsCard1] = useState(false);
  const [isCard1, setIsCard2] = useState(false);
 
  const handleClick2 = () =>{
    setIsCard2 (current => !current);
  } 
  const handleClick1 = () => {
    setIsCard1 (current => !current);
  }

  return (
    <>
    <div className = 'cardone' onClick={handleClick1}
    style = {{ backgroundColor: isCard1 ? 'brown' : 'red'}}>

    </div>
     <div className = 'cardtwo' onClick={handleClick2} 
     style = {{backgroundColor: isCard2 ? 'blue' : 'grey'}} ></div>
    </>
    
  );
}

export default Card;


