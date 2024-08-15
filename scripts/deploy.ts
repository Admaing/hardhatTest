import { ethers } from "hardhat";

async function main() {
  const TWO_WEEKS_IN_SECS = 14 * 24 * 60 * 60;
  const timestamp = Math.floor(Date.now() / 1000)
  const deadline = timestamp + TWO_WEEKS_IN_SECS;
  console.log('deadline:', deadline)
  const WorldCup = await ethers.getContractFactory("Worldcup");
  const worldcup = await WorldCup.deploy(deadline);
  //老api失效
  // await worldcup.deployed();

  await worldcup.waitForDeployment();
  console.log(`new worldcup deployed to ${await worldcup.getAddress()}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });