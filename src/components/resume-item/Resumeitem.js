import React from "react";

export default function ResumeItem(props) {
    return (<li  class="timeline-item">

        <h4 class="h4 timeline-item-title">{props.title}</h4>

        <span>{props.date}</span>

        <p class="timeline-text">
            {props.description}
        </p>

    </li>
    )
}