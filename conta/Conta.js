// Classes abstratas
//throw new Error --> vai fazer com que o programa pare de ser executado caso a classe "Conta" seja usada diretamente
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('você não deve instaciar um objeto do tipo Conta diretamente, pois esta é uma classe abstrata')
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    //método abstrato
    sacar(valor){
        throw new Error('O método sacar da conta é abstrato')
    }
    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }
    
    depositar(valor){
        if(valor <= 0){
            return;
        } this._saldo += valor;           
    }
    
    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}