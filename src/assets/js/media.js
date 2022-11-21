let allImages = document.querySelector('.allImages')
        
function uploadImgFunc(){
        let prevItem = ''
        let optionDropBtn = document.querySelectorAll('.optionDrop')
        let imgDeleteBtn = document.querySelectorAll('.imgDeleteBtn')

        if(optionDropBtn && imgDeleteBtn){
            optionDropBtn.forEach(el=>{
            el.addEventListener('click',()=>{
                if(prevItem == el){
                el.nextElementSibling.classList.add('hidden')
                }else{
                    el.nextElementSibling.classList.remove('hidden')
                    if(prevItem != ''){
                        prevItem.nextElementSibling.classList.add('hidden')
                    }
                }

                prevItem = el
                if(el.nextElementSibling.classList.contains('hidden')){
                    prevItem = ''
                }
            })
        })
        }

        window.addEventListener('click',(e)=>{
            if(!e.target.classList.contains('optionDrop') && !e.target.closest('.dropOptions')){
                if(prevItem != ''){
                    prevItem.nextElementSibling.classList.add('hidden')
                    prevItem = ''
                }
            }
        })

        imgDeleteBtn.forEach(el=>{
            el.addEventListener('click',(e)=>{
                let imgCon = e.target.closest('.imgBox')
                imgCon.remove()
            })
        })
}


window.addEventListener('load',()=>{
    uploadImgFunc()
})

let imageUpload = document.querySelector('#imageUpload')
let getFileInput = document.querySelector('.getFileInput')

imageUpload.addEventListener('click',()=>{
getFileInput.value = null;
getFileInput.click()
})

let file = ''
let uploadImageInnerHtml;

getFileInput.addEventListener('change',function(){
file = this.files
console.log(file);

let validFile = ['image/jpeg','image/jpg','image/png','image/svg+xml','image/webp']
for (let i = 0; i < file.length; i++) {
const singleFile = file[i];
if(singleFile && validFile.includes(singleFile.type)){

           
const reader = new FileReader()
reader.onload = function(){
    const result = reader.result
    uploadImageInnerHtml = `<div class="w-full aspect-custom-ratio">
                                    <div class="p-2 w-full h-full bg-white rounded-t overflow-hidden">
                                        <img class="object-cover object-center w-full h-full" src="${result}" alt="">
                                    </div>
                                    <div class="relative flex justify-between items-center text-white text-sm px-4 py-2 bg-lara-gray8">
                                        <div>Picture Name</div>
                                        <div class="optionDrop cursor-pointer w-4 h-4 flex items-center justify-center">
                                            <i class="fa fa-ellipsis-v pointer-events-none" aria-hidden="true"></i>
                                        </div>
                                        <div class="dropOptions hidden absolute top-full right-0.5 w-44 bg-lara-gray6 p-1.5 rounded-md">
                                            <span class="w-3 h-3 bg-lara-gray6 absolute top-0 right-4 rotate-45 -translate-y-1/2"></span>
                                            <ul class="">
                                                <li>
                                                    <a class="bg-white flex items-center px-4 py-2.5 mb-1 text-lara-gray9 text-sm hover:bg-lara-gray-light duration-300" href="javascript:;">
                                                        <span class="mr-5 text-lg"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                                                        View Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="bg-white flex items-center px-4 py-2.5 mb-1 text-lara-gray9 text-sm hover:bg-lara-gray-light duration-300" href="javascript:;">
                                                        <span class="mr-5 text-lg"><i class="fa fa-link" aria-hidden="true"></i></span>
                                                        Get Link
                                                    </a>
                                                </li>
                                                <li>
                                                    <button class="imgDeleteBtn w-full cursor-pointer bg-white flex items-center px-4 py-2.5 text-lara-gray9 text-sm hover:bg-lara-gray-light duration-300">
                                                        <span class="mr-5 text-lg"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                                                        Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`

                                let mainBox = document.createElement('div')

mainBox.className =  'imgBox w-full md:w-1/2 xl:w-1/3 2xl:w-1/5 px-4 mb-7'
mainBox.innerHTML =  uploadImageInnerHtml
allImages.children[0].insertAdjacentElement('afterEnd',mainBox)
uploadImgFunc()

}
reader.readAsDataURL(singleFile)
}
}
})