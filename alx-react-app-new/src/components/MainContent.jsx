import { useState } from "react";
function MainContent() {
    const [name , setName]=useState('')
    const[count , setCount] = useState(1)
    const increaseCount =()=>{setCount(count+1)}
    console.log(useState(''))
    return (
        
      
            
            <main>
               <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
               <p>{name}</p>
               <button onClick={increaseCount()}>you clicked me {count} times</button>
            </main>
       
    );
}

export default MainContent;