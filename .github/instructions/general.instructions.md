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

## Estrutura do Código
- Mantenha o código organizado em módulos ou pacotes lógicos
- Separe o código em funções ou métodos pequenos e coesos
- Use comentários somente para explicar trechos complexos ou não óbvios do código
- Evite comentários redundantes que apenas repetem o que o código já diz
- Respeite as regras de lint descritas no arquivo `eslint.config.js` na raiz do projeto

## Testes
- Escreva testes automatizados para novos componentes
- Mantenha os testes próximos ao código que testam
- Use nomes descritivos para os testes que expliquem o que estão verificando
- Use somente as ferramentas de teste aprovadas pelo projeto
- Mantenha os testes atualizados com as mudanças no código
- Não crie scripts de teste fora do padrão definido pelo projeto

## Documentação
- Documente o código usando apenas comentários no padrão JSDoc
- Mantenha a documentação atualizada com as mudanças no código
