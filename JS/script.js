class Pessoa {

  constructor(nome, nascimento, cpf, telefone, celular, pis, estuda) {
    this.nome = nome;
    this._nascimento = nascimento;
    this.cpf = cpf;
    this.telefone = telefone;
    this.celular = celular;
    this.pis = pis;
    this._estuda = estuda;
  }


  set nome(novoNome) {
    
    let nomeTratado = novoNome.replace( /(?:^|\s)\S/g , (primeiraMaiuscula) => primeiraMaiuscula.toUpperCase())
    this._nome = nomeTratado

  }
   
  get nome() {
    return this._nome;
  }

  get nascimento() {
    return this._nascimento
  }

  set cpf(novoCpf) {

    let cpfTratado = novoCpf.replace( /\D/g , '')
    this._cpf = cpfTratado

  }

  get cpf() {

    let splited = this._cpf.split('')

    splited.splice(3,0,'.')
    splited.splice(7,0,'.')
    splited.splice(11,0,'-')

    return splited.join('')

  }

  set telefone(novoTelefone) {

    let telefoneTratado = novoTelefone.replace( /\D/g , '')
    this._telefone = telefoneTratado

  }

  get telefone() {

    let splited = this._telefone.split('')

    splited.splice(0,0,'(')
    splited.splice(3,0,')')
    splited.splice(8,0,'-')

    return splited.join('')

  }

  set celular(novoCelular) {

    let celularTratado = novoCelular.replace( /\D/g , '')
    this._celular = celularTratado

  }

  get celular() {

    let splited = this._celular.split('')

    splited.splice(0,0,'(')
    splited.splice(3,0,')')
    splited.splice(9,0,'-')

    return splited.join('')

  }

  set pis(novoPis) {

    let pisTratado = novoPis.replace( /\D/g , '')
    this._pis = pisTratado

  }

  get pis() {

    let splited = this._pis.split('')

    splited.splice(3,0,'.')
    splited.splice(8,0,'.')
    splited.splice(12,0,'-')

    return splited.join('')

  }

  get estuda() {
    return this._estuda
  }

}

let pessoaNova = ''

function mostrarResultado(str) {

  const resultado = document.getElementById('results')

  const resultadoParagrafo = document.createElement('p')
  resultadoParagrafo.innerText = str

  resultado.appendChild(resultadoParagrafo) 

}

const submitPessoa = document.getElementById('btnSubmit')
submitPessoa.addEventListener('click', (event) => {

  event.preventDefault()

  let nomeForm = document.getElementById('name').value
  let dataForm = document.getElementById('birthDate').value
  let cpfForm = document.getElementById('cpf').value
  let telefoneForm = document.getElementById('phone').value
  let celularForm = document.getElementById('cellphone').value
  let pisForm = document.getElementById('pis').value
  let estudaForm = document.getElementById('studies').checked

  let pessoa1 = new Pessoa(nomeForm, dataForm, cpfForm, telefoneForm, celularForm, pisForm, estudaForm)

  pessoaNova = pessoa1

  mostrarResultado(pessoaNova.nome)
  mostrarResultado(pessoaNova.nascimento)
  mostrarResultado(pessoaNova.cpf)
  mostrarResultado(pessoaNova.telefone)
  mostrarResultado(pessoaNova.celular)
  mostrarResultado(pessoaNova.pis)
  mostrarResultado(pessoaNova.estuda)

})  