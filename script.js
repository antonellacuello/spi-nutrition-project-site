$(document).ready(function () {                         //garante que o código dentro dela será executado apenas quando o DOM estiver completamente carregado
    const ctx = $(".column-chart")[0].getContext("2d"); //define o contexto de desenho do elemento "canvas", seleciona o primeiro elemento com a classe "column-chart" e define o contexto 2d para desenhar

    const columnChart = new Chart(ctx, { //cria o grafico
        type: "bar",                     //tipo do grafico
        data: {                          //dados do grafico
            labels: ["Produto A", "Produto B", "Produto C"], //categorias do eixo x
            datasets: [                                      //define o conjunto de dados que serão exibidos
                {
                    label: "Valores",
                    data: [35, 52, 20],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {                      //configurações do grafico
            responsive: true,           //garante que o gráfico se adapte ao tamanho da tela
            maintainAspectRatio: true,  //faz com que o gráfico respeite a proporção fixa de largura/altura
            scales: {                   //caso fosse false, o grafico preencheria o container pai sem respeitar a proporção fixa
                y: {                    
                    beginAtZero: true,  //faz o eixo y começar no valor 0
                },
            },
        },
    });

    const ctx1 = $(".pie-chart")[0].getContext("2d");

        const pieChart = new Chart(ctx1, {
          type: "pie",
          data: {
            labels: [
              "Categoria Pequena",
              "Categoria Média",
              "Categoria Grande",
            ],
            datasets: [
              {
                label: "Valores",
                data: [35, 52, 20],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
});