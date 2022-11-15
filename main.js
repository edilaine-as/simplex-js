function adicionarCamposFORes(tipo){
  let numVar = document.querySelector('#numVar').value;
  
  if(tipo == 0){
    for(let k=0; k<numVar; k++){
      document.querySelector('#fo').innerHTML += `
      <h2 class="font-semibold mt-3 mb-1">FO, X${k+1}</h2>
      <div class="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded w-full">
      <input id="fo-var-${k+1}" type="text" class="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none w-full">
      </div>`
    }

    document.querySelector('#fo').innerHTML += `
        <h2 class="font-semibold mt-3 mb-1">FO, valor de b</h2>
        <div class="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded w-full">
        <input id="fo-valor-b" type="text" class="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none w-full">
        </div>`
    
  }else{
    let numRes = document.querySelector('#numRes').value;
    
    for(let i=0; i<numRes; i++){
  
      for(let j=0; j<numVar; j++){
        document.querySelector('#restricoes').innerHTML += `
        <h2 class="font-semibold mt-3 mb-1">Restrição ${i + 1}, X${j+1}</h2>
        <div class="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded w-full">
        <input id="res-${i+1}-var-${j+1}" type="text" class="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none w-full">
        </div>`
      }
  
      document.querySelector('#restricoes').innerHTML += `
        <h2 class="font-semibold mt-3 mb-1">Restrição ${i + 1}, valor de b</h2>
        <div class="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded w-full">
        <input id="res-${i+1}-valor-b" type="text" class="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none w-full">
        </div>`
      
    }
  }
}




