let getFile = document.querySelector('.getFile')
let uploadImage = document.querySelector('.uploadImage')
let getImage = document.querySelector('.getImage')

getImage.addEventListener('click',()=>{
    getFile.value = null
    getFile.click()
})

let file = ''
getFile.addEventListener('change',function(){
    file = this.files[0]
    let validFile = ['image/jpeg','image/jpg','image/png','image/svg','image/webp','image/webp']
    if(file && validFile.includes(file.type)){
        uploadImage.classList.remove('hidden')
        getImage.children[0].classList.add('hidden')
        const reader = new FileReader()
        reader.onload = function(){
            const result = reader.result
            uploadImage.src = result
        }
        reader.readAsDataURL(file)
    }
})
