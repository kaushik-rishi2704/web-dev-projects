const value=document.querySelector('span')
const btn= document.querySelectorAll('.btn')
let count=0
console.log(btn)

// value.addEventListener('click',function(e){
//     console.log(e.currentTarget)
// })
btn.forEach(function(selcted){
    selcted.addEventListener('click',function(event){
        // const action=event.currentTarget.classlist;
        const action = event.currentTarget.textContent
        if (action=="Increase") {
            count++
            value.textContent=count
            
        }
        if (action=="Decrease") {
            count--
            value.textContent=count
            
        }
        if (action=="Reset") {
            count=0
            value.textContent=count
        }
        if (count<0) {
            value.style.color='red'
        }
        if (count>0) {
            value.style.color='green'
        }
        if (count==0) {
            value.style.color='black'
        }
    })

    
});