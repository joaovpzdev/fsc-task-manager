
# Task Manager 

Linguagem usada: React (JSX) JavaScript.
Estilização usada: Tailwind.

- Sobre a linguagem: O React foi escolhido pela modularidade e liberdade no uso de seus atributos.
- sobre a Estilização: O Tailwind foi escolhido pela praticidade e rapidez na construção do estilo dos componentes.

## Um gerenciador de tarefas com um layout intuitivo e design clean

Trabalhei com um viés forte de componentização para manter o projeto modular e de fácil manutenção.
O primeiro ponto que exigiu mais atenção e tomada de decisão usando uma visão mais minimalista em detrimento à performance foi com relação ao useState X useRef.
O useState foi usado para estruturar a renderização do componente "Dialog", devido ao tamanho da aplicação (relativamente pequena), não foi necessário fazer a troca pelo useRef mesmo este sendo mais performático, evitando assim o **"over engineering"** de algo que pode e deve ser simples.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
