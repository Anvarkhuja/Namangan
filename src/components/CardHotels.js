import React from 'react';


import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CardHotels = () => {
  const [hotels,setHotels] = useState([])

  useEffect(()=>{
      const fetchAllHotels = async ()=>{
          try{
             const res = await axios.get("https://namangan-api.vercel.app/hotels")
             setHotels(res.data);
          }catch(err){
              console.log(err)
          }
      }
      fetchAllHotels()
  },[])

// function CardHotels() {
  return (
    <div>
        <h1 className='head-title'>The best Hotels</h1>
        <div className="hotels">
            {hotels.map(hotel=>(
                <div className="hotel" key={hotel.id}>
                    {hotel.img && <img src={hotel.img} alt="" />}
                    <Link className="link" to={`/hotels/` + hotel.id}>
                    <h2 className='desc'>{hotel.desc}</h2>
            </Link>
                   
                    <p><i class="fa-solid fa-location-dot"></i>  {hotel.label}  </p>
                   <span><i class="link fa-solid fa-tag" > <a href={hotel.link}>book</a></i> </span> 
                </div>
               
            ))}
        </div>
   
    </div>
)

}
const style = document.createElement('style');
style.innerHTML = `
.hotels {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  
}
.desc{
  color: black;
  font-size: 18px
}

.hotel{
  max-width: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 1rem;
  background-color: #bfd9f1;
  border-radius: 20px;
  margin-bottom: 30px;
}

img{
  max-width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  background-color: rgb(158, 231, 207);
  
}

.delete{
  margin-right: 25px;
  border: none;
  padding: 3px 6px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid rgb(245, 191, 191);
  color: rgb(242, 100, 100);
}
.update{
  border: none;
  padding: 3px 6px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid rgb(204, 204, 243);
  color: rgb(139, 139, 234);
}

.form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input{
  width: 250px;
  padding: 10px;
  border: 1px solid grey;
}
.head-title{
  text-align: center;
  margin: 20px;
}


.formButton{
  border: none;
  padding: 10px;
  background-color: rgb(28, 14, 223);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.addButton{
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  text-decoration: none;
  
 margin-left: auto;
 margin-right: auto;
 
 padding: 7px;
 border-radius: 5px;
 background-color: rgb(79, 202, 141);
  
}
.span,
i{
  
  cursor: pointer;
}
.link{
  cursor: pointer;
  color: white;
  padding:5px;
  border-radius: 5px;
  background-color: green;
  font-size: 18px;
  
}
a{
  text-decoration: none;
  color: white;
}


.btnnon{
  text-decoration: none;
}
@media (min-width: 600px) {
  .hotels { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 900px) {
  .hotels { grid-template-columns: repeat(3, 1fr); }
}
    `;
document.head.appendChild(style);


export default CardHotels;
