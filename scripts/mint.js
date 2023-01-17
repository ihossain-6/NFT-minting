const {ethers, getNamedAccounts} = require("hardhat")

async function main() {
    const {deployer} = await getNamedAccounts()
    const mint = await ethers.getContract("Mint", deployer)

    console.log(`Found student registration at ${mint.address}`)

    console.log("Minting your NFT.....")

    const address = "0x9f44dC0085f74Ee4C2319bFeB552CF0268C00122"
    const metadataURI = "https://ipfs.io/ipfs/QmcpauBbHgiEFjsYPnA1C4wZTS12rG7zsepPH1QzAu3vfY?filename=Metadata.json"

    const mintTx = await mint.mintToken(address, metadataURI)
    await mintTx.wait(1)

    console.log("NFT minted....")
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error)
      process.exit
   })