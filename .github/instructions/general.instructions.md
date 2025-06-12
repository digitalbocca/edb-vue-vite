---
applyTo: "**"
---

# Padrões Gerais de Codificação

## Convenções de Nomenclatura
- Use nomes descritivos e significativos para variáveis, funções e classes
- Evite abreviações excessivas que possam dificultar a compreensão do código
- Use nomes consistentes em todo o projeto
- Use camelCase para variáveis e funções, PascalCase para classes e constantes em maiúsculas com sublinhados
- Use nomes de arquivos que reflitam o conteúdo do módulo ou componente
- Para componentes Vue, use kebab-case em nomes de arquivos (ex: `meu-componente.vue`)

## Estrutura do Código
- Mantenha o código organizado em módulos ou pacotes lógicos
- Separe o código em funções ou métodos pequenos e coesos
- Use comentários somente para explicar trechos complexos ou não óbvios do código
- Evite comentários redundantes que apenas repetem o que o código já diz
- Respeite as regras de lint descritas no arquivo `eslint.config.js` na raiz do projeto

## Testes
- Escreva testes automatizados para novos componentes
- Use **Vitest** como framework de testes (não Jest)
- Mantenha os testes próximos ao código que testam
- Use nomes descritivos para os testes que expliquem o que estão verificando
- Use somente as ferramentas de teste aprovadas pelo projeto
- Mantenha os testes atualizados com as mudanças no código
- Não crie scripts de teste fora do padrão definido pelo projeto

## Documentação
- Documente o código usando apenas comentários no padrão JSDoc
- Mantenha a documentação atualizada com as mudanças no código

## Dependências
- **NUNCA modifique o arquivo package.json diretamente**
- **SEMPRE solicite aprovação antes de adicionar novas dependências**
- Use apenas `npm install` para instalar dependências já aprovadas
- Para adicionar nova dependência, solicite aprovação indicando:
  - Nome da dependência
  - Versão específica
  - Justificativa de uso
  - Se é dependência de desenvolvimento ou produção
- Não use comandos como `npm install <package>` sem aprovação prévia
- Aguarde confirmação antes de instalar qualquer nova dependência

## Outros tipos de scripts
- Scripts de build, deploy e CI/CD devem seguir as convenções do projeto
- Scripts de migração de banco de dados são gerenciados pelo ORM e devem seguir as convenções do ORM utilizado
- Scripts de configuração do ambiente devem ser documentados e versionados
- Scripts de inicialização do projeto devem ser claros e fáceis de entender
- Scripts de limpeza ou manutenção não devem ser usados. Se preciso, devem ser aprovadas manualmente
- Scripts adicionados ao `package.json` devem ser documentados, aprovados e seguir as convenções de nomenclatura do projeto

## Environment Variables
- Use apenas variáveis de ambiente necessárias para o funcionamento do projeto
- Nomeie as variáveis de ambiente de forma clara e consistente
- Documente as variáveis de ambiente no arquivo `.env.example`
- Não armazene informações sensíveis diretamente no código, use variáveis de ambiente para isso
- Use o arquivo `.env` para armazenar as variáveis de ambiente locais, mas não versione este arquivo
- Use o arquivo `.env.example` para documentar as variáveis de ambiente necessárias para o projeto
- Use o arquivo `.env.local` para variáveis de ambiente específicas do ambiente local, que não devem ser versionadas
- Nunca apague dados do arquivo `.env` ou `.env.local`.
