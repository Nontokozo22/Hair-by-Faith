

let hairstyles = document.querySelectorAll(`.hairstyle`);

hairstyles.forEach(hairstyle =>{
    let averageTime = hairstyle.getAttribute(`data-average-time`);
    let shortPrice = hairstyle.getAttribute(`data-short-price`);
    let longPrice = hairstyle.getAttribute(`data-long-price`);

    let hairstyleInfo = document.querySelectorAll(`div`);
    jairstyleInfo.classList.add(`hairstyle-info`)

    hairstyleInfo.innerHTML = `<p> Average Time:${averageTime}</p>
    <p>Short:${shortPrice}</p>
    <p>Long:${longPrice}</p>`;

    hairstyle.appendChild(hairstyleInfo);
})

