# Instagram Clone - React Native (Expo SDK 54)

Um clone da interface do Instagram desenvolvido em React Native com Expo SDK 54.

## 🚀 Como executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app no seu dispositivo móvel (versão compatível com SDK 54)

### Instalação

1. Clone ou baixe este projeto
2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npx expo start
```

4. Escaneie o QR code com o app Expo Go (Android) ou Camera (iOS)

**Importante**: Certifique-se de que seu app Expo Go está atualizado para suportar o SDK 54.

## 📱 Funcionalidades

- **Tela de Login**: Interface idêntica ao Instagram clássico
- **Feed Principal**: Stories + Posts com interações
- **Stories**: Carrossel horizontal com indicadores visuais
- **Posts**: Curtir, comentar, compartilhar e salvar
- **Navegação**: Bottom tabs com 5 abas
- **Responsivo**: Funciona em iPhone e Android

## 🏗️ Estrutura do Projeto

```
/src
  /components
    - titulo.js      # Header com logo e ícones
    - stories.js     # Carrossel de stories
    - story.js       # Item individual de story
    - foto.js        # Card de post completo
    - feed.js        # Lista de posts + stories
    - menu.js        # Bottom tab navigation
  /screens
    - LoginScreen.js # Tela de login
    - HomeScreen.js  # Tela principal
  /navigation
    - RootNavigator.js # Navegação principal
  - data.js          # Dados fake para stories e posts
  - theme.js         # Cores e estilos do Instagram
```

## 🎨 Características

- **Design Fiel**: Interface idêntica ao Instagram
- **Interações**: Curtir/descurtir, expandir legendas
- **Stories**: Anel colorido para não vistos, cinza para vistos
- **Pull-to-refresh**: Atualizar o feed
- **Acessibilidade**: Labels e hitSlop para melhor UX
- **Performance**: FlatList otimizada para scroll suave

## 📦 Dependências Principais

- `expo`: Framework React Native (SDK 54)
- `react`: 18.3.1
- `react-native`: 0.76.3
- `@react-navigation/native`: Navegação
- `@expo/vector-icons`: Ícones
- `react-native-screens`: Performance de navegação
- `react-native-safe-area-context`: Safe areas

## 🔧 Comandos Úteis

```bash
# Iniciar em modo desenvolvimento
npx expo start

# Iniciar no Android
npx expo start --android

# Iniciar no iOS
npx expo start --ios

# Limpar cache
npx expo start --clear
```

## 📝 Notas

- Os dados são simulados (fake data)
- Não há backend - todas as interações são locais
- As imagens usam URLs públicas (pravatar.cc e picsum.photos)
- O projeto está configurado para JavaScript (não TypeScript)

