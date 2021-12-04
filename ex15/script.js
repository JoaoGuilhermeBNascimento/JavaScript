function verificar() {
    var idade = document.getElementById('txtage')
    var age = Number(idade.value)
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Sua idade é ${age}</p>`
    
}