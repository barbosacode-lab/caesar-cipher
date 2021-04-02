 <h1 align="center">Caesar Cipher</h1> 

 <h1 align="center">

![Caesar Cipher Logo](/assets/caesarCipherLogo.png)

</h1>

# 👀 Documentation  
- [Documentation](#-documentation)
- [Description](#description)
- [About](#about)
- [Development](#development)
- [Getting Started](#getting-started)
- [How to install](#how-to-install)
- [License](#license)
<br>
<br>

# Description   
Academic module to decrypt/encrypt with **Caesar Code**.
<br>
<br>

# About   
The **Caesar cipher** is one of the simplest and best known encryption techniques. 
It is a monoalphabetic monogametic substitution cipher.

The central idea is to make each letter of the original alphabet change position based on a fixed rotation or displacement value.

![Caesar Cipher Flow](/assets/caesarCipherFlow.png)

Its origin dates back to ancient times. It takes its name from 'Caesar' since it was created by Emperor Julius Caesar in order to communicate with his generals in times of war.  

**Although it does not provide any cryptographic security, it can be used to ensure some kind of difficulty in reading any electronic text**.

Avoiding accidental spoilers, for example. 😂💖

- [Learn more about the Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)<br><br>
# Development     
The project was developed based on the functional programming paradigm.
The goal was not to make the implementation simple but practice some of the concepts such as:

- Multidimensional Arrays
- Immutability
- Pure Functions
- High-order Functions
- Lazy Evaluation<br><br>

# Getting Started   
Requirements 
> node version >= v14.15.5
<br>
# How to install  
<details>
<summary>
Clone the repository
</summary>

```bash

    $ git clone https://github.com/lbarbosadata/caesar-cipher
    $ cd caesar-cipher
    $ yarn init
    $ yarn install 
``` 
</details>

<details>
<summary>
How to use caesar-cipher library 
</summary>

```javascript
    const caesarCipher = require('../lib/index.js');
    const myWord = caesarCipher('test'); // default rotation-13
    const myWord2 = caesarCipher('test', 20); // rotation arg 

    // for rotation-13
    console.log(myWord.encryptWord());
    output: { str: 'GRFG' }
    // for rotation-20
    console.log(myWord2.encryptWord());
    output: { str: 'NYMN' }
```  
</details>  

> :warning:   
The ***Caesar Cipher*** is designed to work in a local environment. 
Therefore, it has not been published to an NPM registry. 
If you want to work with this module in a pre-existing project and use it as a source module downloaded from NPM (node_modules), it is recommended that you link the lib 'caesar-cipher' to the current target project.

🤯*Oversimplifying, yarn-link and npm-link will work as symlinks*. 

- [Learn more Yarn Package](https://yarnpkg.com/cli/link)
- [Learn more NPM Package](https://docs.npmjs.com/cli/v7/commands/npm-link)

# License    
MIT © Leandro Barbosa