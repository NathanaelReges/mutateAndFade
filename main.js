const mutateAndFade = scripts['mutateAndFade/mutateAndFade.js']






const buttonWrapper = document.querySelector('.button-wrapper')






buttonWrapper.addEventListener('click', function () {
    mutateAndFade(buttonWrapper, (ele)=>{
        ele.firstElementChild.classList.toggle('mybutton_on')
    }, {duration: 250, timingFunction: 'ease-in'})
})



