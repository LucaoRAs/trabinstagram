@echo off
echo Instalando dependencias do Instagram Clone (Expo SDK 54)...
echo.

echo Instalando dependencias principais...
npm install

echo.
echo Instalando Expo CLI globalmente (se necessario)...
npm install -g @expo/cli

echo.
echo Instalacao concluida!
echo.
echo IMPORTANTE: Certifique-se de que o Expo Go esta atualizado para SDK 54
echo.
echo Para executar o projeto:
echo   npx expo start
echo.
echo Para executar no Android:
echo   npx expo start --android
echo.
echo Para executar no iOS:
echo   npx expo start --ios
echo.
pause

