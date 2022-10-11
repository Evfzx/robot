gsap.fromTo('.rect',{rotate:0, width:"100%", height:"100vh", left:"0"},
{left:"32%",height:"730px",width:"730px",rotate:53, duration:2});
gsap.fromTo('.header',{y:"-100%", opacity:0},{y:0, duration:2, opacity:1})
gsap.fromTo('.sidebar',{x:"-100%", opacity:0},{x:0, duration:2, opacity:1})
gsap.fromTo('.content-intro',{opacity:0, y:10},{y:0,opacity:1, duration:2, delay:2})

const logo = document.querySelectorAll('#line');

console.log(logo.getTotalLenth)

var link = document.querySelector('.hover');

link.addEventListener('onmouseover', active());
link.addEventListener('onmouseout', inactive());

function active(){
    gsap.to('.sidebar',{backgroundColor:"#EEEEEE27"})
}

function inactive(){
    gsap.to('.sidebar',{backgroundColor:""})
}