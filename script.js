var pageViews = document.getElementById('pageviews');
var pricePerMonth = document.querySelectorAll('.monthly-price');
var slider = document.querySelector('.slider')
var sliderDiv = document.querySelector(".slidecontainer");
var toggleButton = document.querySelector('.toggle-btn')
// slider.addEventListener('input', updateValue()); 


function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('myRange')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }
  

slider.addEventListener('input', handleInputChange)




const updateSlider = (value) => {
    thumb.style.left = `${value}%`
    thumb.style.transform = `translate(-${value}%, -50%)`
    track.style.width = `${value}%`
  }
      
slider.oninput = function() {
        if(toggleButton.value == "OFF") {
            if (this.value == 20) {
                pageViews.innerHTML = "10K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$8"
                pricePerMonth[1].innerHTML = "$8"
            }
            if (this.value == 40) {
                pageViews.innerHTML = "50K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$12"
                pricePerMonth[1].innerHTML = "$12"
            }
            if (this.value == 60) {
                pageViews.innerHTML = "100K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$16"
                pricePerMonth[1].innerHTML = "$16"
            }
            if (this.value == 80) {
                pageViews.innerHTML = "500K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$24"
                pricePerMonth[1].innerHTML = "$24"
            }
            if (this.value == 100) {
                pageViews.innerHTML = "1M PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$36"
                pricePerMonth[1].innerHTML = "$36"
            }
        }
        
        if(toggleButton.value == "ON") {
            if (slider.value == 20) {
                pageViews.innerHTML = "10K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$6"
                pricePerMonth[1].innerHTML = "$6"
            }
            if (slider.value == 40) {
                pageViews.innerHTML = "50K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$9"
                pricePerMonth[1].innerHTML = "$9"
            }
            
            if (slider.value == 60) {
                pageViews.innerHTML = "100K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$12"
                pricePerMonth[1].innerHTML = "$12"
            }
            if (slider.value == 80) {
                pageViews.innerHTML = "500K PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$18"
                pricePerMonth[1].innerHTML = "$18"
            }
            if (slider.value == 100) {
                pageViews.innerHTML = "1M PAGEVIEWS";
                pricePerMonth[0].innerHTML = "$27"
                pricePerMonth[1].innerHTML = "$27"
            }
        }
 }
            

slider.oninput()


function toggle(button) {
    if (button.value == "OFF") {
        toggleButton.value = "ON";
        slider.oninput()
    } else {
        toggleButton.value = "OFF";
        slider.oninput()
    }
}