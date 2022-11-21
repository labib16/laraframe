
                   let parentImgUploadDiv = document.querySelectorAll('.parentImgUploadDiv')

                   parentImgUploadDiv.forEach(itm=>{
                       let dropArea = itm.querySelector('.drop-area')
                       let uploadImgBtn = itm.querySelector('.uploadImgBtn')
                       let imgfiles
                   
                   dropArea.addEventListener('click',()=>{
                       uploadImgBtn.value = null
                       uploadImgBtn.click()
                   })
                   
                   uploadImgBtn.addEventListener('change',function(){
                       imgUploadFunc(this)
                   })
                   
                   
                   
                   function imgUploadFunc(e){
                       imgfiles = e.files[0]
                       let validFile = ['image/jpeg','image/jpg','image/png','image/svg','image/svg+xml']
                       if(imgfiles && validFile.includes(imgfiles.type)){
                           const reader = new FileReader()
                           reader.onload = function(){
                               const fileURL = reader.result
                               let imgTag = `<img class='w-full' src="${fileURL}" alt="">`
                   
                               dropArea.children[0].classList.add('hidden')
                               dropArea.children[1].classList.remove('hidden')
                               dropArea.children[1].innerHTML = imgTag
                           }
                           reader.readAsDataURL(imgfiles)
                       }
                   
                       dropArea.nextElementSibling.addEventListener('click',()=>{
                           dropArea.children[0].classList.remove('hidden')
                           dropArea.children[1].classList.add('hidden')
                           dropArea.children[1].innerHTML = ''
                       })
                   }
                   })