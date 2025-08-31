import React from "react";
import ResumeItem from "../resume-item/Resumeitem";

export default function Resume(props) {
    return (
       <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">{props.title}</h3>
          </div>

          <ol class="timeline-list">

          {props.items.map((item,index)=>{
            return <ResumeItem key={index} title={item.title} description={item.description}/>
          })}
            

          

          </ol>

        </section>
    )
}