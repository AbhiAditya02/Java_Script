// document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     console.log("google clicked");
    // }, false)

    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
    // click image and image is removed
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if( e.target.tagName == 'IMG'){
            // let removeIt = e.target.parentNode;
            // removeIt.remove();

            e.target.parentNode.remove();
        }
    })
    
    // removeIt.parentNode.removeChild(removeIt) it is the 2nd way to remove the element;