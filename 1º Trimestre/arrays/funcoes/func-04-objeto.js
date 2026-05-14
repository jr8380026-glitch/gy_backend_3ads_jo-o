// funções de retorno podem retornar objetos
// chamamos iso de 'função construtora'
// isso permite criarmos várias instâncias 
// do mesmo objeto de forma dinamica!

function fabricarCarros(marca,modelo,montadora, motor){
  return {
    marca: marca,
    modelo: modelo,
    montadora: montadora,
    motor: motor,
   }

}
const carro02 = {
  marca: 'bmw',
  modelo: 'X5',
  montadora: 'bmw s.A',
  motor: 'v6 6.0'
}
const camaro = fabricarCarros("camaro","camaro3000","camarov1945","v22")//tenho 1 problemas!!!
const bmw = fabricarCarros(carro02.marca,carro02.modelo,carro02.montadora,carro02.motor)
console.log(camaro)
console.log(bmw)