<div align="center">
  <img
    src="https://estudiodigitalbocca.com.br/edb-logo.svg"
    width="200px"
  >

  <h1 align="center">
    edb-vue-vite
  </h1>

  <h4 align="center">
    Inicie um projeto com vue 3 e vite.
  </h4>

  <p align="center">
    (c)2023-2025 Estúdio Digital Bocca
  </p>
</div>

---

# edb-vue-vite - README

---

## INSTRUÇÕES

Utilize o create-edb-app:

### NPM/Node

```bash
npm init @digitalbocca/edb-app vue-vite ./caminho/do/projeto
```

### Deno

```bash
deno run -A npm:@digitalbocca/create-edb-app vue-vite ./caminho/do/projeto
```

- Entre na pasta.
- Instale as dependências.
- Modifique para sua necessidade.

⚠️ **ATENÇÃO:** Caso tenha algum problema durante a instalação tente usar este comando:

```bash
npm i --legacy-peer-deps
```

### VARIÁVEIS DE AMBIENTE

Crie o arquivo `.env` baseado no `sample.env`

### VERIFICAR ATUALIZAÇÕES (DEPENDÊNCIAS)

```bash
npm run update
```

### INSTALAR ATUALIZAÇÕES (DEPENDÊNCIAS)

```bash
npm run upgrade
```

### VERIFICAR BOAS PRÁTICAS

```bash
npm run md
```

## FERRAMENTAS CONFIGURADAS

- Vite
- Vue 3
- Vitest (coverage, UI, Vue Test Utils)
- Vue Router
- Pinia
- Tailwind CSS v4
- tailwindcss-animated
- sass
- eslint
- Vite Vue devtools
- auto-animate
- Tabler Icons
- Vue Use
- Notivue
- vue countup
- axios
- neoconfetti
- husky
- @number-flow/vue
- apexcharts
- uuid
- z-vue-scan
