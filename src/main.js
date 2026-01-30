
import './reset.css';
import './style.css';



// LIAME DNA ENOHP ELIBOM
const moi = 'ihatetoast';
const domain = 'gmail.com';
const email = moi+'@'+domain;

const ac = '512';
const three = '763';
const four = '6129';
const phone = '('+ac+') '+three+'-'+four;

document.getElementById("email").innerHTML= '<a href="mailto:'+email+'">'+email+'</a>';
document.getElementById('mob').innerHTML = '<a href="tel:+1'+ac+three+four+'">'+phone+'</a>';




// click btn or hover to show demo vid
const imgContainers = document.querySelectorAll(".img-container");

imgContainers.forEach(cont => {
  const vid = cont.querySelector('.project-video');
  const toggleBtn = cont.querySelector('.video-toggle');
  if(!vid) return;

  let isPlaying = false;
  if(toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (isPlaying) {
        vid.style.opacity = '0';
        vid.pause();
        vid.currentTime = 0;
        toggleBtn.textContent = '▶ Demo';
        isPlaying = false;
      } else {
        vid.style.opacity = '1';
        vid.play();
        toggleBtn.textContent = '⏸ Image';
        isPlaying = true;
      }
    })
  }
  if (window.innerWidth >= 820) {
    cont.addEventListener('mouseenter', () => {
      vid.style.opacity = '1';
      vid.play();
    });
    
    cont.addEventListener('mouseleave', () => {
      vid.style.opacity = '0';
      vid.pause();
      vid.currentTime = 0;
    });
  }
})


// about tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Add active to clicked
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
