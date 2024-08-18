import { useState } from "react";
function MainContent() {
    const [name , setName]=useState('')
    const[count , setCount] = useState(1)
    const increaseCount =()=>{setCount(count+1)}
    
    return (
        
      
            
            <main style={{backgroundColor:'red'}}>
               <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
               <p>"I love to visit New York, Paris, and Tokyo."</p>
               <button onClick={increaseCount}>you clicked me {count} times</button>
            </main>
       
    );
}

export default MainContent;