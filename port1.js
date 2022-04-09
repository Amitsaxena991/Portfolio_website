document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{

    document.querySelector('.sidebar').classList.toggle('sidebargo');

if(document.querySelector('.sidebar').classList.contains('sidebargo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'

}
else{
    document.querySelector('.ham').style.display='none'
    setTimeout(()=>{

        document.querySelector('.cross').style.display='inline'

    },300);
    
}

})



const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    //   console.log(counter);
    counter.innerHTML= 0;
     const updatecounter= () =>{
         const targetcount = +counter.getAttribute('data-target');//(plus sign is to make it a number value)
        //  console.log(typeof targetcount);
        const startingcount = Number(counter.innerHTML);
        const incr = targetcount / 100;
        if(startingcount<targetcount){
            counter.innerHTML = `${Math.round(startingcount+incr)}`;
            setTimeout(updatecounter,100)
        }else{
            counter.innerHTML= targetcount;

        }


     }



    updatecounter();
})