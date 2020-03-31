# GraphQL Test Suite

A proof of concept to demonstrate how Typescript can be used for writing the tests suit.

Typescript provides type hints and autocompletion and it will make it easier to maintain when file sizes increase significantly. It also provides an environment with possibility of automating tasks later.


**Running**

Clone this repository.
Then run.

```sh
cd GraphQL_Test_Suite

npm install
npm run start
```


**folder structure**

```
.
├── dist    //The files to be distributed to users. Autogenerated.
│   └── StarWars.yaml   // One of the file we generated.
├── src     // The automation script and all tests live here.
   ├── script.ts    // The script that currently creates dist/StartWars.yaml
   └── types.ts     // Type definitions that describe the shape of each test. 
```