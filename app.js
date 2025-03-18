const express = require('express')
const app = express()
const port = 3000

app.get(`/`, (req,res) => {
    res.send (`Digite na URL: 
        /um para a questão 1, 
        /dois para a questão 2, tres para questao 3,
        /quatro para a questão 4, 
        /cinco para a questão 5. OBS.: OS RESULTADOS SERÃO APRESENTADOS NO CONSOLE.`)
})

app.get('/um', (req, res) => {
    function questaoUm() {
    const INDICE = 13
    let SOMA = 0
    let K = 0

    while (K < INDICE){
        { K = K + 1; SOMA = SOMA + K; }
        console.log(`soma = `+ SOMA);
        }
    }

questaoUm()})

app.get(`/dois`, (req,res) => {
    function questaoDois(num){
        let zero = 0 
        let um = 1
    
        while (zero < num) {
            let temp = zero + um;
            zero = um;
            um = temp;
        }
    
        return zero === num;
    }
    const numero = 6; // Altere este valor para verificar se o valor pertence à sequência de Fibonacci

    if (questaoDois(numero)) {
        console.log(`O número ${numero} pertence à sequência.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência.`);
    }

})

app.get('/tres', (req,res) => {
    const dados = [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]

        let auxMenor = 99999.99
        let diaMenor = 0
        let auxMaior = 0
        let diaMaior = 32

        dados.forEach((el) => {
            if(el.valor < auxMenor){
                   return(auxMenor = el.valor, 
                    diaMenor = el.dia)
                }
            if(el.valor > auxMaior){
                    return(auxMaior = el.valor, 
                    diaMaior = el.dia)
                }
        })
        console.log(`Menor faturamento foi ${auxMenor} no dia ${diaMenor}`)
        console.log(`Obs.: tem mais dias com faturamento 0, mas, devido ao tempo, optei por deixar apenas com um retorno apenas.`)

        console.log(`Maior faturamento foi ${auxMaior} no dia ${diaMaior}`)

    })

    app.get(`/quatro`, (req,res) => {

        const estados = {
            SP: 67836.43,
            RJ: 36678.66,
            MG: 29229.88,
            ES: 27165.48,
            Outros: 19849.53
        };
        
        const total = Object.values(estados).reduce((acc, val) => acc + val, 0);
        
        console.log("Percentual de representação sobre o valor total por estado:");
        for (const estado in estados) {
            const percentual = (estados[estado] / total) * 100;
            console.log(`${estado}: ${percentual.toFixed(2)}%`);
        }
    })

    app.get(`/cinco`, (req,res) => {
//alterar o texto abaixo conforme necessario para teste
        const texto = `Digite aqui o texto que quer inverter.`;
        function inverter(texto) {
            let invertida = "";
            
            for (let i = texto.length - 1; i >= 0; i--) {
                invertida += texto[i];
            }
        
            console.log(invertida);
        }

        inverter(texto);


    })

app.listen(port, () => {
  console.log(`Application run at: http://localhost:${port}`)
})