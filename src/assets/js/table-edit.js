let tableOptionButton = document.querySelectorAll('.tableOptionButton');
        let optionModal = document.querySelectorAll('.optionModal');
        let a = ''
        let tableBody = document.querySelectorAll('tbody')
        tableOptionButton.forEach(function(el,ind){
            el.addEventListener('click', function(ss){
                let tableClosest = el.closest('tbody')
                if(tableClosest.getBoundingClientRect().bottom-el.getBoundingClientRect().bottom<75){
                    optionModal[ind].classList.add('bottom-14')
                    optionModal[ind].classList.remove('top-14')
                }
                for(let i=0; i<optionModal.length; i++){
                    optionModal[i].classList.add('hidden')
                }
                optionModal[ind].classList.remove('hidden')
                if(a == optionModal[ind]){
                    optionModal[ind].classList.add('hidden')
                }
                a = optionModal[ind]
                if(optionModal[ind].classList.contains('hidden')){
                    a = ''
                }
            })
        })
        
        window.addEventListener('click', function(e){
            if(!e.target.classList.contains('tableOptionButton') && !e.target.closest('.optionModal')){
                for(let i = 0; i < tableOptionButton.length; i++){
                    optionModal[i].classList.add('hidden')
                    a = ''
                }
            }
        })

        optionModal.forEach(el=>{
            el.addEventListener('click',(e)=>{
                if(e.target.classList.contains('deleteBtn')){
                    el.parentElement.parentElement.remove()
                }

                if(e.target.classList.contains('noticeDeleteBtn')){
                    el.parentElement.parentElement.nextElementSibling.remove()
                    el.parentElement.parentElement.remove()
                }
            })
        })
        
