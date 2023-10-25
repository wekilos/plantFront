import React  from "react";
import "../pages/about.css"
import img1 from "../components/img/about-img-1.png"
import img2 from "../components/img/about-img-2.png"

const About =()=>{
    return(
        <div className="mainDiv">
            <div className="container1">
                <div className="container2">
                    <div className="miniContainers">
                        <h1>О растениях</h1>
                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore.</p>
                    </div>
                 
                    <div className="miniContainers">
                        <img style={{height:"370px", borderRadius:"5px"}} src={img1} alt="" />
                    </div>
                </div>
            </div>

            <div className="container1">
                <div className="container2">
                    <div className="miniContainers">
                        <img style={{height:"370px", borderRadius:"5px"}} src={img2} alt="" />
                    </div>

                    <div className="miniContainers">
                        <h1>О растениях</h1>
                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;