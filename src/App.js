import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [activeIndex,setActiveIndex] =useState(0);
  const size = data.length;
  useEffect(()=>{
    var slider = setInterval(() => {
      setActiveIndex((activeIndex+1)%size);
    }, 3000);
    return ()=>{
      clearInterval(slider)
    }
  },[activeIndex])
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
    <div className="section-center">
      {
        data.map((person,index)=>{
        var position = "nextSlide";
        if(index === activeIndex)
          position= "activeSlide";
        else if((activeIndex-1+size)%size===index)
          position = "lastSlide";
        const {image,name,title,quote,id} = person;
        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
          );
      })} 
      <button className="prev" onClick={() => setActiveIndex((activeIndex - 1 + size)%size)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setActiveIndex((activeIndex + 1)%size)}>
          <FiChevronRight />
        </button>
    </div>
      </section>
  )
}

export default App;
