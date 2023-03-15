window.addEventListener('load', function(event){

    const tipos = [
        {name:"Quincena", type:"ingreso"},
        {name:"Dieta quicenal;", type:"ingreso"},
        {name:"Trabajos extras", type:"ingreso"},
        {name:"Otros", type:"ingreso"},
    ]
    const listadoIngreso = document.querySelector('#listado-tipos');
for (let i = 0; i < tipos.length; i++){
    const tipo = tipos[i];
    listadoIngreso.innerHTML = listadoIngreso.innerHTML +
    `
    <option value="">${tipo.name}</option>
    `
}

})