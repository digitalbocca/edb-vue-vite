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

## ✨ FUNCIONALIDADES INCLUÍDAS

Este template inclui componentes demonstrando diferentes funcionalidades:

### 🌟 Animações de Texto Avançadas

- Componente `RotatingText` com transições suaves usando `motion-v`
- Múltiplas opções de animação: spring, easing, stagger
- Configurações de divisão por caracteres, palavras ou linhas
- Integração com Vue Bits para componentes premium
- Texto rotativo na barra superior exibindo tecnologias configuradas

### Exemplo de Uso do RotatingText

```vue
<script setup>
  import RotatingText from '@/blocks/text-animations/rotating-text/rotating-text.vue'
</script>

<template>
  <RotatingText
    :texts="['Vue','Vite','Vitest']"
    :rotation-interval="3000"
  />
  </template>
```

### 🔧 Ferramentas de Desenvolvimento

- **z-vue-scan v0.0.35**: Plugin de debugging que destaca componentes Vue durante atualizações
- Componentes ficam com borda vermelha quando são re-renderizados
- Compatível com Vue 2 e Vue 3
- Útil para identificar re-renders desnecessários
- Ferramenta de otimização de performance

### 📱 Vue Bits Integration

- Integração com a biblioteca Vue Bits para componentes avançados
- Configuração via `jsrepo.json` para download de componentes
- Componentes premium prontos para uso
- Sistema de animações baseado em `motion-v`

## 🚀 INSTRUÇÕES DE INSTALAÇÃO

Utilize o create-edb-app:

### Com Bun (Recomendado)

```bash
bunx @digitalbocca/create-edb-app vue-vite ./caminho/do/projeto
```

### NPM/Node

```bash
npm init @digitalbocca/edb-app vue-vite ./caminho/do/projeto
```

### Deno

```bash
deno run -A npm:@digitalbocca/create-edb-app vue-vite ./caminho/do/projeto
```

- Entre na pasta.
- Instale as dependências com Bun: `bun install`
- Modifique para sua necessidade.

⚠️ **ATENÇÃO:**

- Este projeto utiliza **Bun** como gerenciador de pacotes e runtime
- O Bun fornece melhor performance e experiência de desenvolvimento

## 🔧 CONFIGURAÇÃO INICIAL

### REQUISITOS DO SISTEMA

- **Bun**: Versão 1.0.0 ou superior
- **Node.js**: Versão 22.0.0 ou superior

### VARIÁVEIS DE AMBIENTE

Crie o arquivo `.env` baseado no `sample.env`:

```bash
cp sample.env .env
```

Configure as seguintes variáveis:

- `VITE_API_BASE_URL`: URL base da sua API (sem barra no final)
- `VITE_ENV_EXAMPLE`: Texto de exemplo exibido na home

### CONFIGURAÇÃO DE COMPONENTES EXTERNOS

Este projeto está configurado para usar componentes do Vue Bits através do JSRepo:

#### JSRepo Configuration

O arquivo `jsrepo.json` está configurado para baixar componentes do Vue Bits:

```json
{
  "repos": ["https://vue-bits.dev/ui"],
  "includeTests": false,
  "includeDocs": false,
  "watermark": true,
  "formatter": "prettier",
  "paths": {
    "*": "./src/blocks"
  }
}
```

#### Adicionando Componentes Vue Bits

Para adicionar novos componentes:

```bash
# Instalar um componente específico
bunx jsrepo install <component-name>

# Exemplo: componente de texto rotativo
bunx jsrepo install rotating-text
```

Os componentes são instalados automaticamente na pasta `src/blocks/`.

## 📦 COMANDOS DISPONÍVEIS

### Desenvolvimento

```bash
bun run dev          # Inicia o servidor de desenvolvimento (mais rápido com Bun)
bun run build        # Gera build de produção
```

### Testes

```bash
bun run test         # Executa os testes com interface gráfica
bun run coverage     # Executa testes e gera relatório de cobertura
```

### Manutenção

```bash
bun run update     # Lista dependências desatualizadas
bun run upgrade    # Inicia o modo interativo de atualização
bun run md        # Verifica boas práticas no código
bun run lint      # Executa linter ESLint
```

### Componentes Externos

```bash
bunx jsrepo install <component>  # Instala componente do Vue Bits
bunx jsrepo list                # Lista componentes disponíveis
bunx jsrepo update              # Atualiza componentes instalados
```

## 🎯 COMPONENTES E FUNCIONALIDADES

Este template inclui diversos componentes e funcionalidades prontos para uso:

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

### 📈 Barras de Progresso Circulares

- Integração com `vue-ellipse-progress` para indicadores visuais
- Animações suaves e configuráveis
- Múltiplos estilos de progresso circular
- Ideal para dashboards e métricas

### 🍟 Animações de Listas

- Componente `PotatoesKitchen` demonstrando animações em listas
- Utiliza `@formkit/auto-animate` para transições suaves
- Ícones SVG customizados
- Sistema de notificações integrado

### 🎛️ Componentes de Interface

- **Botões**: Variantes de cores, estados disabled, com ícones
- **Campos de Formulário**: Input com label animado e validação visual
- **Cards Containerizados**: Layout responsivo e consistente
- **Barras de Progresso**: Indicadores visuais circulares e animados

### 📈 Gráficos Interativos

- Integração com ApexCharts
- Tipos de gráficos: linha, barra, pizza e donut
- Configurações responsivas
- Temas customizados

### ✨ Animações Avançadas

- **Texto Rotativo**: Componente `RotatingText` com animações sofisticadas usando `motion-v`
- **Animações de Movimento**: Integração com `motion-v` para transições e animações fluidas
- **Auto Animate**: Animações automáticas em listas com `@formkit/auto-animate`
- **Confetti Animado**: Efeitos visuais com `@neoconfetti/vue`

### 🎉 Elementos Visuais

- Confetti animado com `@neoconfetti/vue`
- Ícones do Tabler Icons
- Animações CSS do Tailwind CSS Animated
- Barras de progresso circulares animadas
- Componentes de UI avançados do Vue Bits

## 🏗️ ARQUITETURA DO PROJETO

```text
src/
├── blocks/             # Componentes avançados e animações
│   └── TextAnimations/ # Animações de texto
│       └── RotatingText/
├── components/          # Componentes Vue
│   ├── base/           # Componentes base reutilizáveis
│   │   ├── custom-button/
│   │   └── input/
│   └── icons/          # Ícones SVG customizados
├── constants/          # Constantes da aplicação
├── plugins/           # Plugins e configurações
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

### Runtime & Package Management

- **Bun**: Runtime JavaScript ultrarrápido e gerenciador de pacotes moderno
- **Bun Upgrade**: Sistema interativo de atualização de dependências
- **Bun Install**: Instalação de dependências até 100x mais rápida que npm

### Build & Development

- **Vite com Rolldown**: Build tool ultrarrápido com bundler Rust-based para máxima performance
- **Vue 3.5.21**: Framework progressivo (versão mais recente)
- **Vue Router 4.5.1**: Roteamento SPA
- **Pinia 3.0.3**: Gerenciamento de estado

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
- **JSRepo**: Gerenciador de componentes para Vue Bits
- **z-vue-scan**: Plugin de debugging para visualizar re-renders de componentes

### Component Libraries

- **Vue Bits**: Biblioteca de componentes premium para Vue 3
- **JSRepo**: Ferramenta para integração de componentes externos
- **Motion-V**: Biblioteca de animações avançadas baseada em Framer Motion

### Libraries

- **@vueuse/core v13.9.0**: Composables utilitários
- **axios v1.11.0**: Cliente HTTP
- **uuid v13.0.0**: Geração de IDs únicos
- **Tabler Icons v3.34.1**: Biblioteca de ícones
- **Notivue v2.4.5**: Sistema de notificações
- **vue-ellipse-progress v2.2.0**: Barras de progresso circulares animadas
- **motion-v v1.7.1**: Biblioteca de animações avançadas para Vue 3
- **@number-flow/vue v0.4.8**: Animações numéricas modernas
- **vue3-apexcharts v1.8.0**: Gráficos interativos

### Development Tools

- **z-vue-scan v0.0.35**: Plugin de debugging para identificar re-renders

## 🚀 PERFORMANCE E OTIMIZAÇÕES

### Rolldown Bundler

Este projeto utiliza o **Rolldown**, um bundler escrito em Rust que oferece:

- **Build mais rápido**: Até 10x mais rápido que bundlers tradicionais
- **Hot Module Replacement (HMR) otimizado**: Atualizações instantâneas durante desenvolvimento
- **Tree-shaking aprimorado**: Eliminação mais eficiente de código não utilizado
- **Compatibilidade com Vite**: Totalmente compatível com o ecossistema Vite

### Configuração do Rolldown

O Rolldown é configurado através do override no package.json:

```json
{
  "overrides": {
    "vite": "npm:rolldown-vite@latest"
  }
}
```

### Benefícios de Performance

- **Desenvolvimento**: Início do servidor de desenvolvimento mais rápido
- **Build de Produção**: Tempo de build reduzido significativamente
- **Bundle Size**: Otimizações avançadas resultam em bundles menores

## 🚀 DEPLOY

### Build de Produção

```bash
bun run build
```

O build utiliza o Rolldown bundler via Bun para máxima performance e otimização.
Os arquivos de produção ficam na pasta `dist/`

### Vantagens do Build com Rolldown

- **Velocidade**: Build de produção até 10x mais rápido
- **Otimização**: Tree-shaking e code splitting avançados
- **Compatibilidade**: Totalmente compatível com todas as funcionalidades do Vite

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
