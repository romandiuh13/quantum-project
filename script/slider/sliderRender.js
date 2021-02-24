import {users} from "./users.js";

export const sliderRender = () =>{

    const usersSlider = users.map(({srcImg, name, position,review}, index)=>{
        return(
            ` <div class="slider-main-item" data-slide=${index+1}>
                <div class="slider-main-item-profile">
                    <div class="slider-main-item-profile-icon">
                        <img class="slider-main-item-profile-icon-img" src=${srcImg} alt=${name}>
                    </div>
                    <div class="slider-main-item-description">
                        <h3 class="slider-main-item-description-name">${name}</h3>
                        <h3 class="slider-main-item-description-position">${position}</h3>
                    </div>
                </div>
                <p class="slider-main-item-review">${review}</p>
            </div>`
        )
    })

 return(
     `<div class="slider-container">
        <div class="started-title">
            <h2 class="started-title-first">People love Big</h2>
            <h2 class="started-title-second">Invest</h2>
        </div>
        <div class="slider-main">
            ${usersSlider.join('')}
            <div class="slider-main-number"></div>
        </div>
        <div class="slider-arrow">
            <button class="slider-arrow-icon left"> < </button>
            <button class="slider-arrow-icon right"> > </button>
        </div>
        <div class="slider-quotes">
            <img src="./img/quotes.png" alt="quotes">
        </div>
    </div>`
 )
}