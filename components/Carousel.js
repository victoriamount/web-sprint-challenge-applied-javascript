/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselSection = document.querySelector('.carousel-container')

function carouselMaker(){
  // create the elements 
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const img0 = document.createElement('img')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')
  const imgArr = [img0, img1, img2, img3];
  let imgNum = 0;
  const rightButton = document.createElement('div')


  // fill attributes
  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  img0.src = 'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg'
  img0.style.display = 'inline'
  img1.src = 'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg'
  img2.src = 'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg'
  img3.src = 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg'
  rightButton.classList.add('right-button')


  // build structure
  carousel.appendChild(leftButton)
  carousel.appendChild(img0)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)

  carousel.appendChild(rightButton)



  // Left and right buttons cycle us through adding and taking away display: inline and display: none to images stored in the image array
  rightButton.addEventListener('click', function(event){
    if (imgNum < 3){
      imgArr[imgNum].style.display = "none";
      imgNum += 1;
      imgArr[imgNum].style.display = 'inline';

    }
    else {
      imgNum = 0;
      imgArr[3].style.display = "none";
      // imgNum = 0;
      imgArr[imgNum].style.display = 'inline';
    }

  })

  leftButton.addEventListener('click', function(event){
    if (imgNum > 0){
      imgArr[imgNum].style.display = "none";
      imgNum -= 1;
      imgArr[imgNum].style.display = 'inline';
    }
    else {
      imgArr[imgNum].style.display = "none";
      imgNum = 3;
      imgArr[imgNum].style.display = 'inline';
    }
  })

  return carousel;
}

const newCarousel = carouselMaker();


carouselSection.appendChild(newCarousel);