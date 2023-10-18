const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function pagetransition() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length > 0) {
                currentBtn[0].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        });
    }
    allsections.addEventListener('click', (e) =>{
        const id =e.target.dataset.id;
      if(id){
        sectBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
      }
    })
}

pagetransition();
