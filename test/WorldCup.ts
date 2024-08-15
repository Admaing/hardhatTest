import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import hre from "hardhat";
import { Worldcup } from "../typechain-types";

describe("Worldcup",function(){
    const TWO_WEEKS_IN_SECS = 14 * 24 * 60 * 60;
    async function deployWorldcupFixture() {
        const [owner,otherAccount] = await ethers.getSigners();
        // console.log(owner," otherAccount is ",otherAccount);
        const WorldCup = await ethers.getContractFactory("Worldcup");

        const deadline = (await time.latest()) +TWO_WEEKS_IN_SECS;
        const worldcup = await WorldCup.deploy(deadline);
        return {worldcup, deadline, owner, otherAccount}
    }
    let worldcupIns: Worldcup
    // let owner : SignerWithAddress
    // let otherAccount : SingerWithAddress

    let ownerAddr: string
    let otherAccountAddr: string
    let deadline1: number

    this.beforeEach(async () => {
        // 从内存中获取合约状态快照（仅用于测试），执行每个单元测试的时候，状态都会回到最初
      const { worldcup, owner, otherAccount, deadline } = await loadFixture(deployWorldcupFixture);
      worldcupIns = worldcup;
      ownerAddr = owner.address;
      otherAccountAddr = otherAccount.address;
      deadline1 = deadline;})
  describe("Deployment", function () {
    it("Should set the right deadline", async function () {
        // const { worldcup, deadline } = await loadFixture(deployWorldcupFixture);
        console.log('deadline:', deadline1);

        expect(await worldcupIns.deadline()).to.equal(deadline1);
    });

    it("Should set the right owner", async function () {
        const { worldcup, owner } = await loadFixture(deployWorldcupFixture);
        console.log("word",await worldcupIns.admin(),ownerAddr)
        expect(await worldcupIns.admin()).to.equal(ownerAddr);
    });

    it("Should fail if the deadline is not in the future", async function () {
        // We don't use the fixture here because we want a different deployment
        const latestTime = await time.latest();
        const WorldCup = await ethers.getContractFactory("Worldcup");
        console.log(await WorldCup);
        await expect(WorldCup.deploy(latestTime)).to.be.revertedWith(
            "WorldCupLottery: invalid deadline!"
        );
    });
});

})
