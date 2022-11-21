
let parentRole = document.querySelectorAll('.parent-role')

parentRole.forEach(item=>{

    let roleTable = item.querySelector('.role-table')
    let roleALLInput = item.querySelectorAll('.role-allinput')
    let roleSubInput = item.querySelectorAll('.role-sub-input')
    let roleMainInput = item.querySelector('.role-main-input').querySelector('input')

    function allCheck(){

        if(roleMainInput.checked){
            roleSubInput.forEach(y=>{
                y.querySelector('input').checked = true
            })
            roleALLInput.forEach((el)=>{
                el.querySelector('input').checked = true
            })

        }else{

            roleSubInput.forEach(y=>{
                y.querySelector('input').checked = false
            })

            roleALLInput.forEach((el)=>{
                el.querySelector('input').checked = false
            })
        }
    }

    window.addEventListener('load',()=>{
        if(roleMainInput.checked){
            roleALLInput.forEach((el)=>{
                el.querySelector('input').checked = true
            })

            roleSubInput.forEach(y=>{
                y.querySelector('input').checked = true
            })
        }


        for (let i = 1; i < roleTable.rows.length; i++) {
            roleSubInput.forEach(x=>{

                    isall = true

                    roleALLInput.forEach(a=>{
                        if(a.querySelector('input').checked == false){
                            isall = false
                        }
                    })
        
                    if(isall == true){
                        roleMainInput.checked = true
                    }else{
                        roleMainInput.checked = false
                    }
        
            })
        }

        roleALLInput.forEach(el=>{
            let isall = true

            roleALLInput.forEach(a=>{
                if(a.querySelector('input').checked == false){
                    isall = false
                }
            })
            
            if(isall == true){

                roleMainInput.querySelector('input').checked = true

                roleSubInput.forEach(y=>{
                    y.querySelector('input').checked = true
                })
            }

            let isall2 = true
                
                for (let i = 1; i < roleTable.rows.length; i++) {
                    if(roleTable.rows[i].cells[el.cellIndex].querySelector('input').checked == false){
                        isall2 = false
                    }

                }

                if(isall2 == true){
                    roleSubInput[el.cellIndex-1].querySelector('input').checked = true
                }else{
                    roleSubInput[el.cellIndex-1].querySelector('input').checked = false
                }

        })

    })

    roleMainInput.addEventListener('click',()=>{
    allCheck()
    })

    roleALLInput.forEach(el=>{

        el.querySelector('input').addEventListener('click',()=>{

            let isall = true

            roleALLInput.forEach(a=>{
                if(a.querySelector('input').checked == false){
                    isall = false
                }
            })

            if(isall == true){
                roleMainInput.checked = true
            }else{
                roleMainInput.checked = false
            }

            let isall2 = true
                
                    for (let i = 1; i < roleTable.rows.length; i++) {

                    if(roleTable.rows[i].cells[el.cellIndex].querySelector('input').checked == false){
                        isall2 = false
                    }

                }

                if(isall2 == true){
                    roleSubInput[el.cellIndex-1].querySelector('input').checked = true
                }else{
                    roleSubInput[el.cellIndex-1].querySelector('input').checked = false
                }

        })
    })


    for (let i = 1; i < roleTable.rows.length; i++) {
        roleSubInput.forEach(x=>{
            x.querySelector('input').addEventListener('click',()=>{
                isall = true

                if(x.querySelector('input').checked){
                    roleTable.rows[i].cells[x.cellIndex].querySelector('input').checked = true
                }else{
                    roleTable.rows[i].cells[x.cellIndex].querySelector('input').checked = false
                }

                roleALLInput.forEach(a=>{
                    if(a.querySelector('input').checked == false){
                        isall = false
                    }
                })

                if(isall == true){
                    roleMainInput.checked = true
                }else{
                    roleMainInput.checked = false
                }

            })
        })
    }

})



let acdBtn = document.querySelectorAll('.acdBtn');
        let acdBdy = document.querySelectorAll('.acdBdy');
        let emty = ''

        acdBtn.forEach(ek=>{
            if(!ek.closest('thead').nextElementSibling.classList.contains('hidden')){
                emty = ek
            }
        })

        acdBtn.forEach(function(el,ind){
            el.addEventListener('click', function(){
                acdBdy.forEach(function(el2){
                    el2.classList.add('hidden');
                })
                acdBdy[ind].classList.remove('hidden')
                if(emty == el){
                    acdBdy[ind].classList.add('hidden')
                }
                emty = el;
                if(acdBdy[ind].classList.contains('hidden')){
                    emty = ''
                }
            })
        })