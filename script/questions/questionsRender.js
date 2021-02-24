import {questions} from "./questions.js";

export const questionsRender= ()=>{
    const questionArr = questions.map(({question ,answer})=>{
        return(
            `<div class="questions-item">
            <div class="questions-item-heading">
                <h3 class="questions-item-heading-title">${question}</h3>
                <h3 class="questions-item-heading-icon">+</h3>
            </div>
            <p class="questions-item-answer">${answer}</p>
        </div>`
        )
    })
    return(
        `<div class="questions-container">
            <div class="started-title">
                <h2 class="started-title-first">Frequently asked</h2>
                <h2 class="started-title-second">questions</h2>
            </div>
            ${questionArr.join('')}
       
         </div>`
    )
}