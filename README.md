# ExpoFlix

App de filmes construído com Expo + expo-router.

## Pré-requisitos

- Node.js 18+
- npm ou yarn
- Expo Go instalado no celular (iOS ou Android)

## Como instalar e rodar

```bash
# 1. Entre na pasta do projeto
cd expoflix

# 2. Instale as dependências
npm install

# 3. Instale o babel-plugin-module-resolver (necessário para o alias @/)
npm install --save-dev babel-plugin-module-resolver

# 4. Inicie o servidor
npx expo start
```

Após rodar `npx expo start`, escaneie o QR Code com o **Expo Go** no celular.

## Login

- **Email:** boanoite.punpun@gmail.com
- **Senha:** BoanoitePunpun

## Estrutura

```
src/
  app/
    _layout.tsx          ← Stack root
    index.tsx            ← Tela de Login
    (tabs)/
      _layout.tsx        ← Tab bar (Filmes + Perfil)
      dashboard.tsx      ← Lista de filmes
      perfil.tsx         ← Perfil do usuário
  components/
    inputComponent.tsx   ← Input reutilizável
    movieCard.tsx        ← Card de filme
  services/
    movie.ts             ← Lista de filmes
  types/
    movie.type.ts        ← Tipo Movie
```
"# Expoflix---facul" 
