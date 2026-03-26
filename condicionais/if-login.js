//verifica se LOGIN e SENHA
// corespondem ao mesmo tempo ( && )

const LOGIN = 'cafe'
const SENHA = '12345'

if (LOGIN == 'cafe' && SENHA == '12345') {
    console.log('acesso permitido')
} else {
    console.warn('verifique seus dados')
}
