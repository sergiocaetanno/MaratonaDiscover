let Modal = {
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        //Fecha modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }

}

const transactions = [
    {
        id: 1,
        description:'Luz',
        amount: -50000,
        date: '23/01/2021'
    },

    {
        id: 2,
        description:'Website',
        amount: 500000,
        date: '23/01/2021'
    },

    {
        id: 3,
        description:'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
]

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses(){

    },
    total(){
        return this.incomes()-this.expenses()
    }
}

const DOM = {
    addTransaction(transactions, index){
        console.log('cheguei')
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },
    innerHTMLTransaction(){

        const html = `
                    <tr>
                        <td class="description">Luz</td>
                        <td class="expense">- R$ 500,00</td>
                        <td class="date">23/01/2021</td>
                        <td><img src="./assets/minus.svg" alt="Remover transação"></td>
                    </tr>
        `
        return html
    }
}

DOM.addTransaction()