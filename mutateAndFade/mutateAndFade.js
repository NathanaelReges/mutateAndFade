scripts['mutateAndFade/mutateAndFade.js'] = async function (ele, fun, {duration = 250, timingFunction = ''} = {}) {     
    
    /*  An element and a function with the changes, fade between both.
        
        The mutate function will be called with a clone of your element
            and then you do all the mutation that you want to do.
        //

        The module will fade between the two.
    */

    
    
    
    let myId = undefined
    let eleClone = undefined
    let previousFun = undefined
    let position = undefined
    
    const previousId = ele.dataset.mutateAndFadeId
    const isAlreadyMutating = previousId != undefined && previousId != ''

    
    if(previousId == 'clone') return
    

    ////Reading Phase

        eleClone = ele.cloneNode(true)
   

        if(!isAlreadyMutating) {
            myId = 0
            position = {
                width: ele.offsetWidth,
                height: ele.offsetHeight,
                left: ele.offsetLeft,
                top: ele.offsetTop,
            }   
        }
        else {
            myId = previousId + 1
            previousFun = ele.fun

            eleClone.style = ''
            previousFun(eleClone)
        }
    
        fun(eleClone)
        eleClone.dataset.mutateAndFadeId = 'clone'

        ele.fun = fun
        ele.dataset.mutateAndFadeId = myId

    ////Reading Phase


    await animationFramePromise()    
    if(anotherMutationHappend()) return


    ////Writing Phase

        if(!isAlreadyMutating){
            ele.style = 
                `width: ${position.width}px; 
                height: ${position.height}px;
                position: absolute;
                left: ${position.left}px;
                top: ${position.top}px;
                will-change: opacity;`
            //
        }
        else{
            const previusClone = ele.nextElementSibling
            previusClone.remove()

            previousFun(ele)
            ele.style.transition = ''
            ele.style.opacity = '1'
            

            //Assure that Styles were already updated
            await animationFramePromise()
            if(anotherMutationHappend()) return
        }
        


        ele.style.transition = `opacity ${duration/1000}s ${timingFunction}`
        ele.style.opacity = '0'

        ele.insertAdjacentElement('afterend', eleClone)
    
    ////Writing Phase


    await new Promise(resolve=>setTimeout(resolve, duration))
    if(anotherMutationHappend()) return
    
    //
        eleClone.remove()
        ele.style = ''
        fun(ele)
        
        ele.fun = undefined
        ele.dataset.mutateAndFadeId = ''
    //



    function animationFramePromise () {
        return new Promise(resolve=>requestAnimationFrame(resolve))
    }

    function anotherMutationHappend () {
        return ele.dataset.mutateAndFadeId != myId
    }
}