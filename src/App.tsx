import { useState } from 'react'
import Quotes from "./assets/images/pattern-quotes.svg"
import Curve from "./assets/images/pattern-curve.svg"
import BG from "./assets/images/pattern-bg.svg"
import Prev from "./assets/images/icon-prev.svg"
import Next from "./assets/images/icon-next.svg"
import { data } from './data/sliderItems'
import './App.css'

function App(){
  const [slide, setSlide] = useState<number>(0);
    
    const handlerClick=(move: number)=>{
        setSlide((e)=>e+move);
    }

  return (
    <div className="slider">
      <section className="slider__container">
        <div className="slider__left">
            <img src={Quotes} alt="quotes" className="text__qutes" />
            <div className="offer__slid">
            <div className="text text__description">{data[slide].description}</div>
            <div className="text text__initial">
                <span className="text text__name">
                {data[slide].name}
                </span>
                <span className="text text__job">
                {data[slide].job}
                </span>
            </div>
            </div>
            <img src={Curve} alt="curve" className="text__curve" />
        </div>
        <div className="slider__right">
            <div className="slider__ig slider__ig_1 offer__slide">
              <img src={`${data[slide].image}`}  alt="" className="slider__photo" />
            </div>
            <div className="slider__ig slider__ig_2">
            <img src={BG} alt="" className="slider__bg" />
            </div>
            <div className="slider__btn">
            {slide > 0 ? (<button className="slider__arrow slider__prev" onClick={()=> handlerClick(-1)}>
                <img src={Prev} alt="prev slid" />
            </button>) : null}
            {slide < data.length - 1 ? (<button className="slider__arrow slider__next" onClick={()=> handlerClick(1)}>
                <img src={Next} alt="next slid" />
            </button>) : null}
            </div>
        </div>
      </section>
    </div>
  )
}

export default App
