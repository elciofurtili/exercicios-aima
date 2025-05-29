# Busca Gulosa e A* — Exercício de Dobreta

Este repositório contém a resolução de dois algoritmos clássicos de busca informada aplicados ao **problema das cidades da Romênia**, com ponto de partida em **Dobreta** e objetivo em **Bucharest**.

## Enunciado

> Exercício 1: Busca gulosa de Dobreta  
> Exercício 2: Busca A* de Dobreta

Conforme solicitado no slide 26 do tópico 03c da disciplina, a resolução segue o modelo dos slides anteriores e do projeto [AIMA-JavaScript](http://aimacode.github.io/aima-javascript/3-Solving-Problems-By-Searching/).

## Sobre os algoritmos

### Busca Gulosa (Greedy Best-First Search)

Este algoritmo utiliza apenas a **heurística h(n)** — uma estimativa da distância até o objetivo — para guiar sua escolha. Ele escolhe o nó mais promissor segundo essa estimativa, ignorando o custo real acumulado.

- **Vantagem:** rápido e simples.
- **Desvantagem:** não garante o caminho mais curto.

### Busca A* (A-Star)

O A* combina o custo acumulado do caminho até o momento **g(n)** com a heurística **h(n)**, usando a fórmula:

```
f(n) = g(n) + h(n)
```

- **Vantagem:** garante o menor caminho se a heurística for admissível.
- **Desvantagem:** pode ser mais custoso computacionalmente.

## Grafo usado: cidades da Romênia

A estrutura segue o modelo clássico com cidades, distâncias e uma heurística que representa a distância em linha reta até Bucharest.

- O grafo é representado como objeto JavaScript.
- A heurística é baseada nos dados fornecidos pelo livro **Artificial Intelligence: A Modern Approach (AIMA)**.

## Arquivos

- `greedySearch.js` — implementação da busca gulosa.
- `aStarSearch.js` — implementação da busca A*.
- `data.js` — grafo e heurística.
- `README.md` — este arquivo.

## Execução

Para executar os exemplos, use qualquer ambiente JavaScript (como Node.js):

```bash
node greedySearch.js
node aStarSearch.js
```

## 🧠 Exemplo de Saída

```bash
Greedy Path: [ 'Dobreta', 'Craiova', 'Pitesti', 'Bucharest' ]
A* Path:     [ 'Dobreta', 'Craiova', 'Pitesti', 'Bucharest' ]
```

## Créditos

Este exercício foi proposto na disciplina de Inteligência Artificial com base no material do livro **AIMA** (Russell & Norvig) e no projeto [aima-javascript](https://github.com/aimacode/aima-javascript).
