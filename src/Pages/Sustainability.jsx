import React from "react";
import "../Pages/Sustainability.css";



function Sustainability(props) {
    return(
        <>
        <section className="whole">
            <div className="three">
                <img src={props.image} alt=""/>
                {/* <img src={props.image} alt="" height={"240px"} width={"100%"} /> */}
                <p className="sus1">{props.sus1}</p>
            </div>
            <p className="sus2">{props.sus2}</p>
            <p className="offer">{props.offer}</p>
            <button className="btn">{props.btn}</button>
        </section>
        </>
    )
}
export default Sustainability;