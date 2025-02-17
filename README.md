# Social Media App

Este é um aplicativo de mídia social construído com React, Firebase e TypeScript.

## Funcionalidades

- Autenticação de usuários com Firebase
- Login com Google
- Criação e visualização de posts
- Perfil de usuário com foto e nome exibidos
- Navegação entre páginas

## Teste o Aplicativo

Caso queira ver o aplicativo, você pode acessá-lo no seguinte link: [\SocialMediaApp-react\]](https://socialmediaapp-react.web.app/)

## Foco do Projeto

O foco deste projeto foi principalmente na funcionalidade e nas características principais, em vez de CSS e estilização. O objetivo principal foi implementar funcionalidades essenciais e garantir uma experiência de usuário simples e suave.

## Estrutura do Projeto

/.firebase/ .github/ build/ public/ src/ components/ config/ pages/ App.css App.tsx index.tsx react-app-env.d.ts .gitignore .firebaserc firebase.json package.json README.md tsconfig.json

## Configuração do Firebase

Certifique-se de configurar o Firebase corretamente. O arquivo `src/config/firebase.ts` deve conter as configurações do seu projeto Firebase:

```ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const DB = getFirestore(app);
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\
Você também verá quaisquer erros de lint no console.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

### `npm test`

Inicia o executor de testes no modo de observação interativo.\
Veja a seção sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run eject`

**Nota: esta é uma operação unilateral. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência de construção única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por conta própria.

## Deploy

Para fazer o deploy do seu projeto no Firebase Hosting, siga os passos abaixo:

1. Build do Projeto:

   ```sh
   npm run build
   ```

2. Login do Firebase:

   ```sh
   firebase login
   ```

3. Inicializar o Firebase Hosting:

   ```sh
   firebase init hosting
   ```

4. Deploy para o Firebase Hosting:

   ```sh
   firebase deploy
   ```

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.


##  ENGLISH  ##

# Social Media App

This is a social media app built with React, Firebase, and TypeScript.

## Features

- User authentication with Firebase
- Google login
- Create and view posts
- User profile with photo and name displayed
- Navigation between pages

## Test the Application

If you want to test the application, you can access it at the following link: [\SocialMediaApp-react\]](https://socialmediaapp-react.web.app/)

## Project Focus

The focus of this project was mainly on functionality and core features rather than CSS and styling. The main goal was to implement essential functionalities and ensure a simple and smooth user experience.

## Project Structure

/.firebase/ .github/ build/ public/ src/ components/ config/ pages/ App.css App.tsx index.tsx react-app-env.d.ts .gitignore .firebaserc firebase.json package.json README.md tsconfig.json

## Firebase Configuration

Make sure to configure Firebase correctly. The file `src/config/firebase.ts` should contain your Firebase project settings:

```ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const DB = getFirestore(app);
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Deployment

To deploy your project on Firebase Hosting, follow these steps:

1. Build the Project:

   ```sh
   npm run build
   ```

2. Firebase Login:

   ```sh
   firebase login
   ```

3. Initialize Firebase Hosting:

   ```sh
   firebase init hosting
   ```

4. Deploy to Firebase Hosting:

   ```sh
   firebase deploy
   ```

## Contribution

Feel free to open issues and pull requests for improvements and fixes.
