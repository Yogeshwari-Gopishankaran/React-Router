import React,{useState} from 'react'
import NavbarComponent from './Components/NavbarComponent'
import All from './Components/All'
import Cyber from './Components/Cyber'
import FullStack from './Components/FullStack'
import Career from './Components/Career'
import DataScience from './Components/DataScience'
import Mern from './assets/mern.jpg'
import Mean from './assets/mean.jpg'
import Phython from './assets/phython.jpg'
import Java from './assets/java.jpg'
import Machine from './assets/machine.jpg'
import BigData from './assets/bigdata.jpg'
import Data from './assets/data.jpg'
import Rpro from './assets/rpro.jpg'
import CyberSec from './assets/cyber.jpg'
import Security from './assets/security.jpg'
import Az500 from './assets/az500.jpg'
import AWC from './assets/awc.jpg'


import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  let [data,setData]=useState([
    {
      image: Mern,
      title:'MERN FUllStack Development',
      type:'FSD'
    },
    {
      image: Mean,
      title:'MEAN FUllStack Development',
      type:'FSD'
    },
    {
      image: Phython,
      title:'PHYTHON FUllStack Development',
      type:'FSD'
    },
    {
      image: Java,
      title:'JAVA FUllStack Development',
      type:'FSD'
    },
    {
      image:  Machine ,
      title:'Machine Learning',
      type:'DS'
    },
    {
      image: BigData,
      title:'Introducation to Big Data',
      type:'DS'
    },
    {
      image: Data,
      title:'Data Analysis using Pandas',
      type:'DS'
    },
    {
      image: Rpro,
      title:'R Programming',
      type:'DS'
    },
    {
      image: CyberSec,
      title:'Introduction to Cyber Security',
      type:'CS'
    },
    {
      image: AWC,
      title:'AWC Security and Management',
      type:'CS'
    },
    {
      image: Az500,
      title:'AZ 500 Security Operation',
      type:'CS'
    },
    {
      image: Security,
      title:'cyber Security for Bearer',
      type:'CS'
    }
  ])

  
  return <>
<BrowserRouter>
  <NavbarComponent></NavbarComponent>
  <Routes>
<Route path="/" element={<All data={data} setData={setData}/>}></Route>
<Route path="/cyber" element={<Cyber data={data} setData={setData}/>}></Route>
<Route path="/full-stack" element={<FullStack data={data} setData={setData}/>}></Route>
<Route path="/career" element={<Career data={data} setData={setData}/>}></Route>
<Route path="/data-science" element={<DataScience data={data} setData={setData}/>}></Route>
<Route path="*" element ={<Navigate to='/'/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
}

export default App
