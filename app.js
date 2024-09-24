let cardArr = [
  {
    name: "Petals of rose",
    image:
      "https://images.unsplash.com/photo-1601211230654-67f4c7d966c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals of town",
    image:
      "https://images.unsplash.com/photo-1611473292683-85ac7a3688cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFscyUyMG9mJTIwdG93bnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "The crowd of city",
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3Jvd2QlMjBvZiUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Plant fruits",
    image:
      "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0cyUyMG9mJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Orange peeled",
    image:
      "https://images.unsplash.com/photo-1677945720736-4a13839b8d97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlZWxlZCUyMG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
  },

];

function showCards() {
  let addCard = "";
  cardArr.forEach((obj) => {
    addCard += `<div class='box'>
            <img class='cursor-pointer' src="${obj.image}" alt="image">
        </div>`;
  });
  // console.log(addImg);
  document.querySelector(".container").innerHTML = addCard;
}
showCards();


// searchFeature();

function searchClick(){
    let input = document.querySelector('#searchinput');
    
    input
    .addEventListener('focus',()=>{
        document.querySelector('.overlay').style.display='block';
    })

    input
    .addEventListener('blur',()=>{
        document.querySelector('.overlay').style.display='none';
        document.querySelector('.searchdata').style.display='none';

    })

    input
    .addEventListener('input',()=>{
            // console.log(input.value);
            if(input.value!=''){
            const suggestions=cardArr.filter(val=>
                val.name.toLowerCase().startsWith(input.value));
            
            // console.log(suggestions);
            let clutter='';
            suggestions.forEach((obj)=>{
                clutter+=`<div class="res">
                            <i class="ri-search-line"></i>
                            <h3>${obj.name}</h3>
                        </div>`;
            })
            document.querySelector('.searchdata').innerHTML=clutter;
            console.log(clutter);
            document.querySelector('.searchdata').style.display='block';
        
}})


}
searchClick();
  
