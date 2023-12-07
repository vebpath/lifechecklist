let checkboxes = document.querySelectorAll('input[type="checkbox"]')
let number = document.getElementById('number')
let bar = document.getElementById('bar')

let count = localStorage.getItem('count')||0
let barcount = localStorage.getItem('barcount')||0
loadCheckboxStatus()


function updateLocalStorage(e){
if(e.target.checked){
    count++
    barcount++
    updateData(count,barcount)
}else{
    count--
    barcount--
    updateData(count,barcount)

}

localStorage.setItem("count",count)
localStorage.setItem("barcount",barcount)

checkboxes.forEach(checkbox=>{
    localStorage.setItem(checkbox.id,checkbox.checked)
})
}

function loadCheckboxStatus(){

    checkboxes.forEach(checkbox=>{
        const ischecked = localStorage.getItem(checkbox.id)==="true"
        checkbox.checked = ischecked
    })

    updateData(count,barcount)
}


function updateData(count,width){
    number.innerHTML = count
    bar.style.width = `${width*1.515151515151515}%`
}





checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('change', updateLocalStorage)
})