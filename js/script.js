let currentIndex = 0;
    const images = [
        "/imgs/bolochoc.jpg",
        "/imgs/bolodeco.jpg",
        "/imgs/cup.jpg",
        "/imgs/boloroxo.jpg"
    ];
    const sliderImage = document.getElementById("slider-image");

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    gsap.to(sliderImage, {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
            sliderImage.src = images[currentIndex];
            gsap.to(sliderImage, {
                opacity: 1,
                duration: .5
            });
        }
    });
}
setInterval(nextSlide, 3000);
lucide.createIcons();

const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)