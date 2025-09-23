# Instruções para Expo SDK 54

## ⚠️ Importante

Este projeto foi atualizado para funcionar com o **Expo SDK 54**. Certifique-se de seguir estas instruções para evitar problemas de compatibilidade.

## 📱 Pré-requisitos

1. **Node.js**: Versão 18 ou superior
2. **Expo CLI**: Instale globalmente com `npm install -g @expo/cli`
3. **Expo Go**: Atualize o app para a versão mais recente que suporta SDK 54

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# Limpar cache (recomendado)
npx expo start --clear
```

## 🚀 Execução

```bash
# Iniciar o projeto
npx expo start

# Ou com cache limpo
npx expo start --clear
```

## 📋 Versões Atualizadas

- **Expo**: ~54.0.0
- **React**: 18.3.1
- **React Native**: 0.76.3
- **React Navigation**: Compatível com SDK 54
- **Expo Vector Icons**: ^14.0.0

## 🔍 Solução de Problemas

### Erro de compatibilidade do Expo Go
Se você receber erros de compatibilidade:
1. Atualize o app Expo Go para a versão mais recente
2. Limpe o cache: `npx expo start --clear`
3. Reinicie o Metro bundler

### Erro de dependências
Se houver conflitos de dependências:
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules
npm install
```

### Erro de Metro
Se houver problemas com o Metro bundler:
```bash
# Limpar cache do Metro
npx expo start --clear
```

## 📝 Notas

- O projeto usa React Navigation v6 que é totalmente compatível com SDK 54
- Todos os ícones do Expo Vector Icons funcionam normalmente
- O projeto mantém todas as funcionalidades originais do Instagram clone

## 🆘 Suporte

Se encontrar problemas específicos do SDK 54, consulte:
- [Documentação oficial do Expo SDK 54](https://docs.expo.dev/versions/v54.0.0/)
- [Guia de migração](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/)
