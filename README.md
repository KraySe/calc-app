# Getting Started with Create React App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Resources

CSS Selectors: [https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors) 

HTML Elements: [https://developer.mozilla.org/es/docs/Web/HTML/Element](https://developer.mozilla.org/es/docs/Web/HTML/Element) 

FAQ Styling with React: [https://es.reactjs.org/docs/faq-styling.html](https://es.reactjs.org/docs/faq-styling.html) 

### SOLID 

- (Single Responsability => única responsabilidad)

### useState

- Retorna un estado y una función que permite modificarlo.

Se suele utilizar array destructuring para sus valores de retorno.

a) 
```javascript 
    const array = funcionQueRetornaUnArray();
    const primerElemento = array[0];
    const segundoElemento = array[1]
```

b)
```javascript
    const [ primerElemento, segundoElemento ] = funcionQueRetornaUnArray();

```

### Renderización en React

Render > App > Result, Numbers, Functions, MathOperations.                       ""

Evento > Button (onClick) > Functions (onClickNumber) > setStack(numero)

Render > App(ok) > Result(ok), Numbers(x), Functions(x), MathOperations(x)       9

Evento > Button (onClick) > Functions (onClickNumber) > setStack(numero)

Render > App(ok) > Result(ok), Numbers(x), Functions(x), MathOperations(x)       92


### Expresiones regulares

Expresiones regulares: [https://regexr.com/](https://regexr.com/) 

### issues

// TODO

- personalizar calculadora, colores, etc.
- guardar el historial de operaciones.
- añadir nuevas operaciones.
- añadir storybook
- refactorizar README.


## APUNTES

### Tipo de elementos JSX que TS distingue

Se distinguen dos tipos de elementos JSX: los intrínsecos y los creados por el desarrollador (value-based).

Los elementos intrínsecos estan definidos en la definición de tipos de React, mediante:

    ´interface IntrinsicElements´

Este tipo de elementos no es necesario realizar el *import* para que esten disponibles.
Algunos ejemplos son : 
    - div
    - span
    - a
    - input
    - main 
    - etc 

Además de los elementos definidos en forma "intrínseca" hay algunos atributos que se definen de esta misma manera, por ejemplo:

    - key
    - className

Cuando veamos un error que diga algo de "intrisec elements" o props, en realidad probablemente quiera decir que el elemento no existe dentro de los importados ni en los intrínsecos, o que la propiedad no existe ni en las declaradas ni en las intrínsecas.

