# Our Test Token

Our Test Token is an example token made for this repo, which demonstrates a simple Hardhat repo with some deployment scripts, and Typescript support.

## Development

### Set up the project

Use the correct version of `node`/`npm`

```sh
$ nvm use
```

Install dependencies

```sh
$ npm install
```

### Configure your environment

Create your own `.env` file

```sh
$ cp .env.example .env
```

For compiling code, you're good with the default `.env`.

For testing code, you need to update `HARDHAT_MAINNET_FORKING_URL` to include a free Alchemy key, which you can get at https://www.alchemy.com/. Or, if you have another way to access a mainnet archive node, replace the entire URL with that node's endpoint.

For deploying code, you need to also update `RINKEBY_PK` and `RINKEBY_PROVIDER` (or the `MAINNET` values), with a private key which is paying for deployment costs, and an endpoint to submit transactions to.

### Compile the contracts

An `npm run` script alisas for `npx hardhat compile` exists as

```sh
$ npm run compile
```

### Run the tests

An `npm run` script alisas for `npx hardhat test` exists as

```sh
$ npm run test
```

### Start a local node

An `npm run` script alisas for `npx hardhat node` exists as

```sh
$ npm run node
```
