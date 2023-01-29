const  temp = document.querySelector(".c-temp")
const container = document.querySelector(".container")
const searchInput = document.querySelector('#search')


let countries = []




fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
       const countries =  json.map(element => {
            const {name,capital,region,flags} = element;
            const card = temp.content.cloneNode(true).children[0]
            const countrtCard = card.querySelector(".card")
            const img = card.querySelector("img")
            const countrtName = card.querySelector('.name')
            const countrtCapital = card.querySelector('.capital')
            
            const continent = card.querySelector('.region')
            countrtName.textContent = name.common
            img.src = flags.png 
            continent.textContent = region
            countrtCapital.textContent = capital
            container.append(card)
            return {cName:name.common,cCapital:capital,box:card}
        });

        searchInput.addEventListener('keyup', e  =>{
            const value = e.target.value.toLowerCase()
            countries.forEach(countr => {
                const isVisible = countr.cName.toLowerCase().includes(value)
                countr.box.classList.toggle("hide" , !isVisible)
            });
        })        
      })