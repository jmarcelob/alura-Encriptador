window.addEventListener('load', ()=>{

    const text_desencript = localStorage.getItem('text').valueOf('text');

    document.getElementById('Texto-Desencriptado').innerHTML = text_desencript;
})