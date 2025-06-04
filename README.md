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

## 🚀 INSTRUÇÕES DE INSTALAÇÃO

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

## 🔧 CONFIGURAÇÃO INICIAL

### VARIÁVEIS DE AMBIENTE

Crie o arquivo `.env` baseado no `sample.env`:

```bash
cp sample.env .env
```

Configure as seguintes variáveis:
- `VITE_API_BASE_URL`: URL base da sua API (sem barra no final)
- `VITE_ENV_EXAMPLE`: Texto de exemplo exibido na home

## 📦 COMANDOS DISPONÍVEIS

### Desenvolvimento
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
```

### Testes
```bash
npm run test         # Executa os testes com interface gráfica
npm run coverage     # Executa testes e gera relatório de cobertura
```

### Manutenção
```bash
npm run update       # Verifica atualizações de dependências
npm run upgrade      # Instala atualizações de dependências
npm run md           # Verifica boas práticas no código
npm run lint         # Executa linter ESLint
```

## ✨ FUNCIONALIDADES INCLUÍDAS

Este template inclui componentes demonstrando diferentes funcionalidades:

### 🕒 Relógio em Tempo Real
- Componente `ClockBar` com atualização automática
- Utiliza `@vueuse/core` para formatação de data/hora
- Formatação localizada em português brasileiro

### 📊 Contadores Animados
- Componente `CounterWrapper` com duas bibliotecas de animação:
  - `vue-countup-v3`: Animações numéricas clássicas
  - `@number-flow/vue`: Animações numéricas modernas
- Gerenciamento de estado com Pinia
- Notificações toast integradas

### 🍟 Animações de Listas
- Componente `PotatoesKitchen` demonstrando animações em listas
- Utiliza `@formkit/auto-animate` para transições suaves
- Ícones SVG customizados
- Sistema de notificações integrado

### 🎛️ Componentes de Interface
- **Botões**: Variantes de cores, estados disabled, com ícones
- **Campos de Formulário**: Input com label animado e validação visual
- **Cards Containerizados**: Layout responsivo e consistente

### 📈 Gráficos Interativos
- Integração com ApexCharts
- Tipos de gráficos: linha, barra, pizza e donut
- Configurações responsivas
- Temas customizados

### 🎉 Elementos Visuais
- Confetti animado com `@neoconfetti/vue`
- Ícones do Tabler Icons
- Animações CSS do Tailwind CSS Animated

## 🏗️ ARQUITETURA DO PROJETO

```
src/
├── components/          # Componentes Vue
│   ├── base/           # Componentes base reutilizáveis
│   │   ├── custom-button/
│   │   └── input/
│   └── icons/          # Ícones SVG customizados
├── constants/          # Constantes da aplicação
│   └── http/          # Cliente HTTP (Axios)
├── plugins/           # Configuração de plugins Vue, cliente HTTP, etc.
├── router/            # Configuração de rotas
│   └── http/          # Cliente HTTP (Axios)
├── router/            # Configuração de rotas
├── stores/            # Gerenciamento de estado (Pinia)
├── styles/            # Estilos globais (Sass/CSS)
├── utils/             # Utilitários e helpers
└── views/             # Páginas da aplicação
```

## 🧪 TESTES

### Estrutura de Testes
- **Unitários**: Para componentes individuais
- **Cobertura**: Relatórios HTML gerados automaticamente
- **UI**: Interface gráfica para execução de testes

### Executando Testes
```bash
# Interface gráfica
npm run test

# Cobertura
npm run coverage
```

Os relatórios de cobertura ficam em `./tests/unit/coverage/`

### Exemplo de Teste
```javascript
// Teste do componente Button
describe('Button component', () => {
  it('Default primary button is created when variant prop is not set', () => {
    const wrapper = mount(Button)
    const buttonClasses = wrapper.classes()
    expect(buttonClasses).toContain('primary-button')
  })
})
```

## 🎨 SISTEMA DE DESIGN

### Cores CSS Variables
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #34495e;
  --success-color: #2ecc71;
  --warning-color: #e67e22;
  --danger-color: #e74c3c;
}
```

### Tipografia
- **Sans-serif**: Lato (corpo do texto)
- **Serif**: Vollkorn (textos especiais)
- **Monospace**: Courier Prime (código/números)
- **Display**: Montserrat (títulos)

### Responsividade
- Mobile-first approach
- Breakpoints do Tailwind CSS
- Componentes adaptáveis

## 🛠️ FERRAMENTAS CONFIGURADAS

### Build & Development
- **Vite**: Build tool ultrarrápido
- **Vue 3**: Framework progressivo
- **Vue Router**: Roteamento SPA
- **Pinia**: Gerenciamento de estado

### Styling
- **Tailwind CSS v4**: Framework CSS utilitário
- **Sass**: Pré-processador CSS
- **tailwindcss-animated**: Animações prontas

### Testing
- **Vitest**: Framework de testes
- **Vue Test Utils**: Utilitários para testes Vue
- **jsdom**: DOM virtual para testes
- **@vitest/ui**: Interface gráfica para testes

### Code Quality
- **ESLint**: Linter JavaScript/Vue
- **Husky**: Git hooks
- **Vue DevTools**: Debugging no browser

### Libraries
- **@vueuse/core**: Composables utilitários
- **axios**: Cliente HTTP
- **uuid**: Geração de IDs únicos
- **Tabler Icons**: Biblioteca de ícones
- **Notivue**: Sistema de notificações

## 📚 GUIAS DE USO

### Criando um Novo Componente
1. Crie o arquivo na pasta `src/components/`
2. Use a composition API (`<script setup>`)
3. Adicione testes em arquivo `.test.js`
4. Documente props com JSDoc se necessário

### Adicionando Nova Rota
```javascript
// src/router/routes.js
export default [
  {
    path: '/nova-rota',
    component: () => import('@/views/nova-pagina.vue'),
    name: 'NovaPagina'
  }
]
```

### Usando o Store (Pinia)
```javascript
// Em um componente
import { useSampleStore } from '@/stores/sample'

const store = useSampleStore()
store.increment(5)
console.log(store.getCounter)
```

### Fazendo Requisições HTTP
```javascript
// src/plugins/http/index.js já configurado
import http from '@/plugins/http'

const response = await http.get('/endpoint')
```

## 🔍 BOAS PRÁTICAS

### Nomenclatura
- **Nomes de Componentes (em `<script>` e `<template>`):** PascalCase (ex: `MyComponent`)
- **Nomes de Arquivos de Componentes (`.vue`):** kebab-case (ex: `my-component.vue`)
- **Variáveis**: camelCase (`myVariable`)
- **Constantes**: UPPER_SNAKE_CASE (`MY_CONSTANT`)

### Estrutura de Componentes
```vue
<script setup>
// Imports
// Props/Emits
// Composables
// Reactive data
// Computed
// Methods
// Lifecycle hooks
</script>

<template>
  <!-- Template -->
</template>

<style lang="sass" scoped>
// Estilos
</style>
```

### Commits
O projeto usa Husky para executar testes antes do push:
```bash
git add .
git commit -m "feat: adiciona novo componente"
git push # Executa testes automaticamente
```

## 🚀 DEPLOY

### Build de Produção
```bash
npm run build
```

Os arquivos de produção ficam na pasta `dist/`

### Variáveis de Ambiente
Certifique-se de configurar as variáveis `VITE_*` no ambiente de produção.

## 🤝 CONTRIBUIÇÃO

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 LICENÇA

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para detalhes.

---

**Desenvolvido com ❤️ pelo [Estúdio Digital Bocca](https://estudiodigitalbocca.com.br)**
