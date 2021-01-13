const tab=document.getElementById('tab')
const tabTop=document.getElementById('priceCheck')
const Cards=document.querySelectorAll('.card')
const coll=document.querySelectorAll('#coll')
coll.forEach(c=>c.style.outline="none")
const subcoll=document.getElementById('sub-coll')
tabTop.addEventListener('click',()=>{
    Cards.forEach(card=>{
        card.classList.toggle('on')
        //card.style.visibility='hidden'
    })
    document.querySelectorAll('.back').forEach(card=>{
        //card.style.visibility='visible'
    })
})

coll.forEach(c=>{
    c.addEventListener('click',()=>{
        c.nextElementSibling.classList.toggle('active')
        c.childNodes[1].childNodes[0].style.transform=c.childNodes[1].childNodes[0].style.transform==="rotate(45deg)"?"rotate(0deg)":"rotate(45deg)";
    })
})

