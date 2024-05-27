# [REStake](https://stake.shido-observer.com)

This repo is a fork of [EcoStake](https://github.com/eco-stake/restake-ui)

## How it works / Authz

Authz is a new feature for Tendermint chains which lets you grant permission to another wallet to carry out certain transactions for you. These transactions are sent by the grantee on behalf of the granter, meaning the validator will send and pay for the TX, but actions will affect your wallet (such as claiming rewards).

REStake specifically lets you grant a validator permission to send `Delegate` transactions for their validator only. The validator cannot send any other transaction types, and has no other access to your wallet. You authorize this using Keplr as normal. REStake no longer requires a `Withdraw` permission to autostake.


### Adding/updating a network

Network information is sourced from the [Chain Registry](https://github.com/cosmos/chain-registry) via the [registry.cosmos.directory](https://registry.cosmos.directory) API. Chains in the master branch are automatically added to REStake assuming enough basic information is provided.

The `networks.json` file defines which chains appear as 'supported' in REStake; so long as the chain name matches the directory name from the Chain Registry, all chain information will be sourced automatically. Alternatively chains _can_ be supported in `networks.json` alone, but this is not a documented feature.

To add or override a chain in REStake, add the required information to `networks.json` as follows:

```json
{
  "name": "osmosis",
  "prettyName": "Osmosis",
  "gasPrice": "0.025uosmo",
  "authzSupport": true
}
```

Note that most attributes from Chain Registry can be overridden by defining the camelCase version in networks.json.

### Running the UI

Run the UI using docker with one line:

```bash
npm start
```



### Deploy the UI

```bash
npm run build
```
```bash
sudo cp -r dist/* /path/to/your/folder/
```

