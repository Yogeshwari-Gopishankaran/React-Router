import React from 'react'
import Card from 'react-bootstrap/Card';
function FullStack({data, setData}) {
  return <>

<div className="container alignment">
  { 
      data.map((e)=>{
       if(e.type=="FSD"){
        return <card key={e.id}>
         
           <Card  style={{ width: '18rem',marginTop:'20px',height:'250px',borderCOlor:'white'}}>
      <Card.Img variant="top" src={`${e.image}`}style={{height:'150px'}}/>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
      </Card.Body>
    </Card>
    </card>   
       
       }
      })
      
      
    }
  </div>
  </>
}

export default FullStack
