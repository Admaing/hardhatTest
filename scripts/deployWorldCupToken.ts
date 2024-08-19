import { ethers } from "hardhat";

async function main() {

  const totalSupply = ethers.parseUnits('10000000', 18)
  console.log('totalSupply:', totalSupply);

  const FHTToken = await ethers.getContractFactory('WorldCupToken');
  const fht = await FHTToken.deploy("World Cup Token", "WCT", totalSupply);

  await fht.waitForDeployment();

  console.log(`new World Cup Token deployed to ${await fht.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x28924A7E1B7A3dcD1B6160F48167C85b4bdc9B5a contract address
// Which version label to use? (e.g. "v0.0.1"): v0.0.1
//   Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
//   Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
//   Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
//   Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
//   Skip migration: Bump mapping apiVersion from 0.0.5 to 0.0.6
//   Skip migration: Bump manifest specVersion from 0.0.1 to 0.0.2
//   Skip migration: Bump manifest specVersion from 0.0.2 to 0.0.4
// ✔ Apply migrations
// ✔ Load subgraph from subgraph.yaml
//   Compile data source: Worldcup => build/Worldcup/Worldcup.wasm
// ✔ Compile subgraph
//   Copy schema file build/schema.graphql
//   Write subgraph file build/Worldcup/Worldcup.json
//   Write subgraph manifest build/subgraph.yaml
// ✔ Write compiled subgraph to build/
//   Add file to IPFS build/schema.graphql
//                 .. QmXhvgAQagJPrdDci76jZy21gEcWHX88zGJGQ82knDJ6Qx
//   Add file to IPFS build/Worldcup/Worldcup.json
//                 .. QmVnnzjxDy4Ex3BfwPceauK94NwnB4GRyLReDEcsJaYh9f
//   Add file to IPFS build/Worldcup/Worldcup.wasm
//                 .. QmShKN3gpc2J4Vq2cPNqp5gd6xDgrciQzTaqTpdEYwwvtq
// ✔ Upload subgraph to IPFS

// Build completed: QmbbjjKD1pSKYwDXuumwLnATkDXBaiyvoSYGu3Cgy3pH9E

// Deployed to https://thegraph.com/studio/subgraph/sepoliagraph

// Subgraph endpoints:
// Queries (HTTP):     https://api.studio.thegraph.com/query/86860/sepoliagraph/v0.0.1