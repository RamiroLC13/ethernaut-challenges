import { info } from "console";
import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x8e80FFe6Dc044F4A766Afd6e5a8732Fe0977A493";
const PLAYER_ADDRESS = "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec";

async function main() {

  const signer = await ethers.getSigner(PLAYER_ADDRESS);
  const contract = await ethers.getContractAt("Instance", CONTRACT_ADDRESS, signer);
  
  const info = await contract.info();
  console.log(info);
  const info1 = await contract.info1();
  console.log(info1);
  const info2 = await contract.info2("hello");
  console.log(info2);
  const infoNum = await contract.infoNum();
  console.log(infoNum);
  const info42 = await contract.info42();
  console.log(info42);
  const theMethodName = await contract.theMethodName();
  console.log(theMethodName);
  const method = await contract.method7123949();
  console.log(method);
  const passwd = await contract.password();
  console.log(passwd);
  const auth = await contract.authenticate("ethernaut0")
  console.log(auth);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
