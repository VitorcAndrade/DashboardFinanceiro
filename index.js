let totalEntrada = 0
let totalSaida = 0
let totalSaldo = 0

const transacoes = []


function alterarModo() {

    const tema = document.getElementById("tema").value

    document.documentElement.classList.toggle(
        "dark",
        tema === "dark"
    )
}


function addTransacao() {

    const desc = document.getElementById("desc").value
    const valor = Number(document.getElementById("valor").value)
    const tipo = document.getElementById("tipo").value

    const saldo = document.getElementById("saldo")
    const entrada = document.getElementById("entrada")
    const saida = document.getElementById("saida")

    const listaTransacoes = document.getElementById("listaTransacoes")


    if (desc === "" || valor <= 0) {
        return
    }


    const transacao = {
        descricao: desc,
        valor: valor,
        tipo: tipo
    }


    transacoes.push(transacao)


    if (tipo === "entrada") {

        totalEntrada += valor

    } else {

        totalSaida += valor

    }


    totalSaldo = totalEntrada - totalSaida


    entrada.innerHTML = `R$ ${totalEntrada.toFixed(2)}`
    saida.innerHTML = `R$ ${totalSaida.toFixed(2)}`
    saldo.innerHTML = `R$ ${totalSaldo.toFixed(2)}`


    listaTransacoes.innerHTML = ""


    transacoes.forEach(function(transacao) {

        const div = document.createElement("div")

        div.classList.add(
            "bg-white",
            "dark:bg-gray-700",
            "rounded-xl",
            "p-4",
            "shadow-md",
            "flex",
            "items-center",
            "justify-between"
        )


        const informacoes = document.createElement("div")


        const descricao = document.createElement("p")

        descricao.classList.add("font-semibold")

        descricao.innerHTML = transacao.descricao


        const tipoTransacao = document.createElement("span")

        tipoTransacao.classList.add(
            "text-sm",
            "text-gray-500",
            "dark:text-gray-300"
        )

        tipoTransacao.innerHTML = transacao.tipo


        informacoes.appendChild(descricao)
        informacoes.appendChild(tipoTransacao)


        const valorTransacao = document.createElement("span")

        valorTransacao.classList.add("font-bold")


        if (transacao.tipo === "entrada") {

            valorTransacao.classList.add("text-green-500")

            valorTransacao.innerHTML =
                `+ R$ ${transacao.valor.toFixed(2)}`

        } else {

            valorTransacao.classList.add("text-red-500")

            valorTransacao.innerHTML =
                `- R$ ${transacao.valor.toFixed(2)}`
        }


        div.appendChild(informacoes)
        div.appendChild(valorTransacao)

        listaTransacoes.appendChild(div)

    })


    document.getElementById("desc").value = ""
    document.getElementById("valor").value = ""

}