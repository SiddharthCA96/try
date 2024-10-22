
import './App.css'
import React, { useContext } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/Count';
function App() {
  
  return (
    <div>
      {/* wrap the compo that need recoil shit with recoilRoot*/}
      <RecoilRoot>
         <Count/>
      </RecoilRoot>
    </div>
  )
}
function Count(){
  return <div>
    <CountRenderer/>
    <Buttons />
  </div>
}
function CountRenderer(){
  //as only value chahiye we'll use useRecoilValue
  const count=useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons(){
  //here we need both cnt and setcnt 
  // const [count,setCount]=useRecoilState(countAtom);
  //if we waant button to not rerender
  const setCount=useSetRecoilState(countAtom);
  console.log("Button reredner");
  return <div>
    <button onClick={()=>{
        setCount(count=>count+1)
    }}>Increase the count</button>
    <button onClick={()=>{
        setCount(count=>count-1)
    }}>Decrease the count</button>
  </div>
}
export default App
