import {Cliente} from "./Cliente.js"
import { Gerente } from "./funcionarios/gerente.js"
import { Diretor } from "./funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 123456789000);
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Ricardo', 5000,123123123123);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Lais', 789456123000, '456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123')
const diretorEstaLogado = SistemaAutenticacao.login(diretor,'123456');

const clienteEstaLogado = SistemaAutenticacao.login(cliente,'456');

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


