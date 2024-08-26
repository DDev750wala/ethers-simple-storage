const ethers = require("ethers");
require("dotenv").config();
const fs = require("fs")

// PASSWORD: dotenv

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encrpytedJsonKey = await wallet.encrypt("dev", process.env.PRIVATE_KEY);

    // console.log(encrpytedJsonKey);
    fs.writeFileSync("./.encryptedKey.json", encrpytedJsonKey);
}

main()
    // .then(() => {
    //     return 0;
    // })
    // .catch((err) => {
    //     console.log(err);
    //     return 1;
    // })