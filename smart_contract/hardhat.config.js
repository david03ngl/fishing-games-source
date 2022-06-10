require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'https://speedy-nodes-nyc.moralis.io/f0f63c8546e049fba94813b5/eth/ropsten',
      accounts: [ 'ed647d64cfcea633b14d75c79af8800d9561b9426234a440fb6bc94174387411' ]
    }
  }
};
