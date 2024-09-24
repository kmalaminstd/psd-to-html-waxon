const full_nav_menu = document.querySelector('.full_nav_menu')

document.addEventListener('scroll', ()=>{
    if(window.scrollY > 60){
        full_nav_menu.classList.add('nav_scrolled')
    }else{
        full_nav_menu.classList.remove('nav_scrolled')
    }
})

const nav_bar = document.querySelector('.nav_bar')
const nav_links = document.querySelector('.nav_links')

nav_bar.addEventListener('click', ()=>{
    nav_links.classList.toggle('toggle_nav_links')
})

const element_item = document.querySelector('.inner_project .grid .element-item')
// console.log(element_item);


element_item.removeAttribute('style')

const bg_video = document.querySelector('.bg_video video')
const video_play_pause = document.querySelector('.bg_video .play_pause_icon')

video_play_pause.addEventListener('click', ()=>{
    

    if(bg_video.paused){
        bg_video.play()
    }else{
        bg_video.pause()
    }
    
})

bg_video.addEventListener('loadedmetadata' , ()=>{
    const vid_dur = bg_video.duration.toFixed(2)
    // const lastDur = Math.toFi
    const dur_arr = vid_dur.split('.')
    document.querySelector('.vid_min').textContent = dur_arr[0]
    document.querySelector('.vid_sec').textContent = dur_arr[1]
    
})


// counter up animation initialized
// const myCounter = document.querySelector('.myCounter')

const counterAnimation = (elm)=>{
    const target = +elm.getAttribute('data-count')
    // console.log(target);
    const duration = 200
    const increment = target / duration
    
    let currentCount = 0
    
    const updateCounter = ()=>{
        currentCount += increment
        
        if(currentCount < target){
            elm.textContent = Math.ceil(currentCount)

            requestAnimationFrame(updateCounter)
        }else{
            elm.textContent = target
        }
    }

    updateCounter()
    
    
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const counter = entry.target
            counterAnimation(counter)
            observer.disconnect()
        }
    })
}, {threshold: 0.9})

document.querySelectorAll('.counter-box h3').forEach(counter => {
    observer.observe(counter)
})