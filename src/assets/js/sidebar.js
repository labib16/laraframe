        
        let sidebarCollapseButton = document.getElementById('sidebar-collapse-button')
        let collapseSidebar = document.getElementById('collapse-sidebar')
        let mainContent = document.querySelector('.main-content')
        let rootItem = document.querySelector('.root-item')
        let leftCollapse = document.querySelector('.left-collapse')
        let menuLogo = document.querySelectorAll('.menuLogo')
        let menuArrow = document.querySelectorAll('.menu-arrow')
        let menuTitle = document.querySelectorAll('.menu-title')
        let curveSVG = document.querySelectorAll('.curve-svg')

        let dropDownItem = document.querySelectorAll('.drop-down-item')
        let dropDownHeader = document.querySelectorAll('.drop-down-header')

        let ipadView = window.matchMedia("(max-width: 1024px)")

        let prevItems = []
        let l = ''

        window.addEventListener('resize',()=>{
            menuResponse()
        })

        window.addEventListener('load',()=>{
            menuResponse()
        })
        
        window.addEventListener('click',(e)=>{
            if(ipadView.matches){
                if(e.target != sidebarCollapseButton && !e.target.closest('#collapse-sidebar')){
                    collapseSidebar.classList.add('-left-full')
                    collapseSidebar.classList.remove('left-0')
                }
            }
        })

        sidebarCollapseButton.addEventListener('click',()=>{
            if(ipadView.matches){
                if(collapseSidebar.classList.contains('-left-full')){
                    collapseSidebar.classList.remove('-left-full')
                    collapseSidebar.classList.add('left-0')
                }else{
                    collapseSidebar.classList.add('-left-full')
                    collapseSidebar.classList.remove('left-0')
                }
            }
        })

       function  menuResponse(){
            if(ipadView.matches){

                leftCollapse.classList.remove('pl-280p') /*uniq*/
                leftCollapse.classList.remove('pl-120p') /*uniq*/

                collapseSidebar.classList.add('-left-full') /*uniq*/

                positionElement()
               
            }else{
                    collapseSidebar.classList.remove('-left-full')
                    if(!leftCollapse.classList.contains('pl-120p')){
                        leftCollapse.classList.add('pl-280p')
                    }
            }
       }


       function positionElement(){
        collapseSidebar.classList.add('h-screen','overflow-y-scroll')
        collapseSidebar.classList.remove('h-full')
        mainContent.classList.add('h-sidebar-height-res', '2xl:h-sidebar-height', 'overflow-y-scroll')

        
        collapseSidebar.classList.add('w-280p')
        collapseSidebar.classList.remove('w-120p')

        menuLogo[0].classList.remove('hidden')
        menuLogo[1].classList.add('hidden')
                
        rootItem.classList.add('ml-6')
        rootItem.classList.remove('mx-5')
        rootItem.classList.add('curve-design')
        rootItem.classList.remove('sider-arrow')

        curveSVG.forEach(r=>{
            r.classList.remove('hidden')
            r.nextElementSibling.classList.add('ml-3.5')
        })

        for (let i = 0; i < menuTitle.length; i++) {
            if(menuArrow[i]){
                menuArrow[i].classList.remove('hidden')
            }
            menuTitle[i].classList.remove('hidden')
            menuTitle[i].previousElementSibling.children[0].classList.add('w-7','h-7','p-1.5')
            menuTitle[i].previousElementSibling.children[0].classList.remove('w-10','h-10','p-2')

            let titleHeader = menuTitle[i].closest('.drop-down-header')

            if(titleHeader.nextElementSibling){
                titleHeader.nextElementSibling.classList.remove('absolute','w-[285px]', 'left-full','top-0','ml-8', 'px-4')
                titleHeader.nextElementSibling.children[0].classList.remove('px-4','pb-4','pt-1')
            }
            titleHeader.classList.add('py-3','pl-4','pr-18p')
            titleHeader.classList.remove('rounded-md','my-3','py-5','justify-center')
        }
       }

        sidebarCollapseButton.addEventListener('click',()=>{

            if(!ipadView.matches){

                if(collapseSidebar.classList.contains('w-280p')){

                     // remove array start
                     
                    prevItems.forEach(y=>{
                        y.nextElementSibling.style.height = 0 + 'px'
                        y.nextElementSibling.setAttribute('data-collapse', 'false')

                        if(y.children[1]){
                            y.children[1].classList.remove('rotate-90')
                        }

                        if(!y.classList.contains('active')){
                            y.classList.add('opacity-80')
                            y.classList.remove('bg-white' , 'bg-opacity-10', 'opacity-100')
                       }
                    })
                    

                    prevItems = []

                    // remove array end

                    collapseSidebar.classList.remove('h-screen','overflow-y-scroll')
                    collapseSidebar.classList.add('h-full')
                    mainContent.classList.remove('h-sidebar-height-res', '2xl:h-sidebar-height', 'overflow-y-scroll')

                    leftCollapse.classList.remove('pl-280p')
                    leftCollapse.classList.add('pl-120p')
                    collapseSidebar.classList.remove('w-280p')
                    collapseSidebar.classList.add('w-120p')
                    
                    menuLogo[0].classList.add('hidden')
                    menuLogo[1].classList.remove('hidden')
                    rootItem.classList.remove('ml-6')
                    rootItem.classList.add('mx-5')
                    rootItem.classList.remove('curve-design')
                    rootItem.classList.add('sider-arrow')

                    curveSVG.forEach(r=>{
                        r.classList.add('hidden')
                        r.nextElementSibling.classList.remove('ml-3.5')
                    })

                        for (let i = 0; i < menuTitle.length; i++) {
                            if(menuArrow[i]){
                                menuArrow[i].classList.add('hidden')
                            }
                            menuTitle[i].classList.add('hidden')
                            menuTitle[i].previousElementSibling.children[0].classList.remove('w-7','h-7','p-1.5')
                            menuTitle[i].previousElementSibling.children[0].classList.add('w-10','h-10','p-2')

                            let titleHeader = menuTitle[i].closest('.drop-down-header')

                            if(titleHeader.nextElementSibling){
                                titleHeader.nextElementSibling.classList.add('absolute','w-[285px]', 'left-full','top-0','ml-8', 'px-4')
                                titleHeader.nextElementSibling.children[0].classList.add('px-4','pb-4','pt-1')
                            }

                            titleHeader.classList.remove('py-3','pl-4','pr-18p')
                            titleHeader.classList.add('rounded-md','my-3','py-5','justify-center')
                            
                        }

                     }else{

                        leftCollapse.classList.add('pl-280p')
                        leftCollapse.classList.remove('pl-120p')

                        positionElement()
                }
               
            }
        })

        window.addEventListener('click',(e)=>{
            if(!ipadView.matches && collapseSidebar.classList.contains('w-120p') ){
                if(e.target != sidebarCollapseButton && !e.target.closest('#collapse-sidebar')){
                    prevItems.forEach(y=>{
                        y.nextElementSibling.style.height = 0 + 'px'
                        y.nextElementSibling.setAttribute('data-collapse', 'false')
                        if(y.children[1]){
                            y.children[1].classList.remove('rotate-90')
                        }
                        if(!y.classList.contains('active')){
                            y.classList.add('opacity-80')
                            y.classList.remove('bg-white' , 'bg-opacity-10', 'opacity-100')
                       }
                    })
        
                    prevItems = []
                }
            }
        })

        window.addEventListener('load',()=>{
            dropDownHeader.forEach(r=>{
                let currentUrl = window.location.href.split("/")[window.location.href.split("/").length - 1]
                if(r.getAttribute('href') == currentUrl){
                    r.classList.remove('opacity-80')
                    r.classList.add('bg-white' , 'bg-opacity-10', 'opacity-100')

                    if(!r.parentElement.parentElement.parentElement.classList.contains('root-item')){
                        l = r.parentElement.parentElement.parentElement
                        prevItems.push(l.previousElementSibling)
                        l.previousElementSibling.classList.remove('opacity-80')
                        l.previousElementSibling.classList.add('bg-white' , 'bg-opacity-10', 'opacity-100')
                    }

                    if(l != ''){
                        function getParent(){
                            if(!l.parentElement.parentElement.parentElement.classList.contains('root-item')){
                                l = l.parentElement.parentElement.parentElement
                                prevItems.push(l.previousElementSibling)
                                l.previousElementSibling.classList.remove('opacity-80')
                                l.previousElementSibling.classList.add('bg-white' , 'bg-opacity-10', 'opacity-100')
                                getParent()
                            }
                        }
                        getParent()
                    }

                    prevItems.forEach(w=>{
                        w.nextElementSibling.setAttribute('data-collapse','true')
                        w.nextElementSibling.style.height = null
                        w.classList.add('active')
                        if(w.children[1]){
                            w.children[1].classList.add('rotate-90')
                        }
                    })

                }
            })
        })

        let isprocess = true

        dropDownHeader.forEach(el=>{
            el.addEventListener('click',(e)=>{
                sunMenuFunc(el,e)
            })
        })

        function sunMenuFunc(data,evnt){
            if(isprocess){
                if(data.nextElementSibling && data.children[1]){
                    isprocess = false
                    if(data.nextElementSibling.getAttribute('data-collapse') == 'true'){
            
                        prevItems.forEach(y=>{
                            if(prevItems.length>0){
                                
                                if(y == data){
                                    isprocess = false
                                    let underCollapes = y.parentElement.parentElement.querySelectorAll('.drop-down-item')
                                    underCollapes.forEach(el=>{
                                            el.setAttribute('data-collapse', 'false')
                                            let xScrollHeights = el.scrollHeight
                                            let elementTransitions = el.style.transition;
                                            el.style.transition = '';
                                            
                                        requestAnimationFrame(function() {
                                            el.style.height = xScrollHeights + 'px';
                                            el.style.transition = elementTransitions;
                                            requestAnimationFrame(function() {
                                                el.style.height = 0 + 'px';
                                            });
                                        });
                                        
                                        if(!el.previousElementSibling.classList.contains('active')){
                                            el.previousElementSibling.classList.add('opacity-80')
                                            el.previousElementSibling.classList.remove('bg-white' , 'bg-opacity-10', 'opacity-100')
                                        }

                                        if(el.previousElementSibling.children[1]){
                                            el.previousElementSibling.children[1].classList.remove('rotate-90')
                                        }

                                        el.addEventListener('transitionend', function(e) {
                                            isprocess = true
                                        });

                                        if(prevItems.includes(el.previousElementSibling)){
                                            let k = prevItems.indexOf(el.previousElementSibling)
                                            prevItems.splice(k,1)
                                        }
                                    })
                            }
                        }
                    })

                    }else{
                            if(data.nextElementSibling.getAttribute('data-collapse') == 'false'){

                            let elementHeight = data.nextElementSibling.scrollHeight
                            data.nextElementSibling.style.height = elementHeight + 'px'
                            data.nextElementSibling.setAttribute('data-collapse', 'true')
                            if(data.children[1]){
                                    data.children[1].classList.add('rotate-90')
                                }

                                if(!data.classList.contains('active')){
                                    data.classList.remove('opacity-80')
                                    data.classList.add('bg-white' , 'bg-opacity-10', 'opacity-100')
                                }

                            data.nextElementSibling.addEventListener('transitionend', function(e) {
                                isprocess = true
                                data.nextElementSibling.removeEventListener('transitionend', arguments.callee);
                                data.nextElementSibling.style.height = null;
                            });

                            let underCollapesNew = data.closest('.drop-down-item').querySelectorAll('.drop-down-header')

                            underCollapesNew.forEach(o=>{
                                if(prevItems.includes(o)){
                                    if(o.nextElementSibling.getAttribute('data-collapse') == 'true'){
                                        isprocess = false
                                        o.nextElementSibling.setAttribute('data-collapse', 'false')
                                        let xScrollHeights = o.nextElementSibling.scrollHeight
                                        let elementTransitions = o.nextElementSibling.style.transition;
                                        o.nextElementSibling.style.transition = '';
                                    requestAnimationFrame(function() {
                                        o.nextElementSibling.style.height = xScrollHeights + 'px';
                                        o.nextElementSibling.style.transition = elementTransitions;
                                        requestAnimationFrame(function() {
                                            o.nextElementSibling.style.height = 0 + 'px';
                                        });
                                    });
                                    
                                   if(!o.classList.contains('active')){
                                        o.classList.add('opacity-80')
                                        o.classList.remove('bg-white' , 'bg-opacity-10', 'opacity-100')
                                   }

                                    if(o.children[1]){
                                        o.children[1].classList.remove('rotate-90')
                                    }

                                    o.nextElementSibling.addEventListener('transitionend', function(e) {
                                        isprocess = true
                                    });

                                        if(prevItems.includes(o)){
                                            let k = prevItems.indexOf(o)
                                            prevItems.splice(k,1)
                                        }
                                    }
                            
                                }
                            })

                        } 
                    }

                    if(!prevItems.includes(data)){
                        prevItems.push(data)
                    }

                    if(data.nextElementSibling.getAttribute('data-collapse') == 'false'){
                        let l = prevItems.indexOf(data)
                        prevItems.splice(l,1)
                    }
                }
            }
        }

    // header drop


let hoverDropdownBox = document.querySelectorAll('.hover-dropdown-box')
let hoverDropdownShowBox = document.querySelectorAll('.hover-dropdown-show-box')
let lang = document.querySelectorAll('.language')
let angleStyleDiv = document.querySelector('.langParent').parentElement.previousElementSibling.children[0]
let b = '';
hoverDropdownBox.forEach(function(el,ind){
    el.addEventListener('click', function(ss){
        for(let i=0; i<hoverDropdownShowBox.length; i++){
            hoverDropdownShowBox[i].classList.add('hidden')
        }
        hoverDropdownShowBox[ind].classList.remove('hidden')
        if(b == hoverDropdownShowBox[ind]){
            hoverDropdownShowBox[ind].classList.add('hidden')
        }
        b = hoverDropdownShowBox[ind]
        if(hoverDropdownShowBox[ind].classList.contains('hidden')){
            b = ''
        }
    })
})

let langDiv = document.querySelectorAll('.langParent>li')
let langName = document.querySelector('.langName')
let m = true

window.addEventListener('load',()=>{
    document.querySelector('.country-flag').innerHTML = lang[0].children[0].children[0].innerHTML
    langName.innerHTML = lang[0].children[0].children[1].innerHTML  
})

lang.forEach(el=>{
    el.addEventListener('click',()=>{
        document.querySelector('.country-flag').innerHTML = el.children[0].children[0].innerHTML
        langName.innerHTML = el.children[0].children[1].innerHTML
        langDiv.forEach(el=>{
            el.classList.remove('bg-lara-primary','text-white')
            el.classList.add('bg-white','text-text-50')
        })
        el.classList.add('bg-lara-primary','text-white')
        el.classList.remove('bg-white','text-text-50')
        for(let i=0; i<hoverDropdownShowBox.length; i++){
            hoverDropdownShowBox[i].classList.add('hidden')
        }
        b = ''
        if(el == lang[0]){
            m = false
            angleStyleDiv.classList.remove('bg-white')
            angleStyleDiv.classList.add('bg-lara-primary')
        }else{
            angleStyleDiv.classList.add('bg-white')
            angleStyleDiv.classList.remove('bg-lara-primary')
            m = true
        }
    })
})

lang[0].addEventListener('mouseover',()=>{
    angleStyleDiv.classList.remove('bg-white')
    angleStyleDiv.classList.add('bg-lara-primary')
})
lang[0].addEventListener('mouseleave',()=>{
    if(m){
        angleStyleDiv.classList.add('bg-white')
        angleStyleDiv.classList.remove('bg-lara-primary')
    }
})

window.addEventListener('click', function(e){
    if(!e.target.classList.contains('hover-dropdown-box') && !e.target.closest('.hover-dropdown-show-box')){
        for(let i = 0; i < hoverDropdownBox.length; i++){
            hoverDropdownShowBox[i].classList.add('hidden')
            b = ''
        }
    }
})