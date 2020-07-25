const form = document.querySelector('#pokesubmit');
form.addEventListener('submit', pokesubmit);

function pokesubmit(evt) {
  evt.preventDefault();
  
  let val = document.querySelector('#pokenumber').value;
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${val}/`).then(
    (data) => {
      return data.json();
      //console.log(pokemon);
    }
    ).then(
      (pokemon) => {
        
        let img = document.querySelector('#front-image');
        img.src = pokemon.sprites.front_default;
        
        let name = document.querySelector('#pokename').innerHTML = "#" + pokemon.id + "  "+ pokemon.name; //Pokemon Name And ID Number.
        //name.innerText = pokemon.name;
        
        let id = document.querySelector('#pokeid'); //Pokemon ID
        //id.innerText = pokemon.id;
        
        let weight = document.querySelector('#pokeweight').innerHTML = "Weight  :  "+ pokemon.weight + "  hg"; //Weight is in hectograms.
        //weight.innerText = pokemon.weight;
        
        let height = document.querySelector('#pokeheight').innerHTML = "Height  :  "+ pokemon.height + "  dm"; //Height is in decimetres.
        //height.innerText = pokemon.height;
        
        let order = document.querySelector('#pokeorder').innerHTML = "Order  :  #"+ pokemon.order; //Pokemon's Order Of Sorting.
        //order.innerText = pokemon.order;
        
        let base_experience = document.querySelector('#pokebase_experience').innerHTML = "Base Experience  :  "+ pokemon.base_experience + "  Points";
        //base_experience.innerText = pokemon.base_experience; // Base Experience Gained For Defeating Other Pokemons.
        
      }
    )
  
}


