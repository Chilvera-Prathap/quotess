// let count=0
// const increment=document.querySelector('.incr');
// const decrement=document.querySelector('.decr');
// const reset=document.querySelector('.reset');
// const count1=document.querySelector('.count');

// count1.textContent = count;

// increment.addEventListener("click",()=>{   
//     count++;
//     count1.textContent = count;
    

// })
// decrement.addEventListener("click",()=>{
//     count--;
//     count1.textContent = count;
    

// })
// reset.addEventListener("click",()=>{
//     count=0;
//     count1.textContent = count;
    

// })


const get_quotes=document.querySelector('.get_quote')
get_quotes.addEventListener("click",()=>{
    let quotes=[{
        quotes:"The best way to get started is to quit talking and begin doing.",author:"Vince Lombardi"
    },
{
    quotes:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"
},
{
    quotes:"If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs"
},
{
    quotes:"Success is not in what you have, but who you are.",author:"Vince Lombardi"
}]

    let index=Math.floor(Math.random()*quotes.length)
    const select= quotes[index];
    const quotess=document.querySelector('.quotes')
    quotess.textContent=`${select.quotes}`
    const author=document.querySelector('.author')
    author.textContent=`_${select.author}`
    
   
})





