import fs from 'fs';
import path from 'path';
import hre from 'hardhat';
import { Wallet } from 'ethers';
import { Foo, Foo__factory } from '../dist/types';

(async () => {
  // deploy contract
  const factory  = await hre.ethers.getContractFactory('Foo') as Foo__factory;
  const contract = await factory.deploy() as Foo;
  fs.appendFileSync(
    path.resolve(__dirname, '../logger'),
    `[${hre.network.name}] deploy contract<Foo> at ${contract.address}\n`,
    'utf8'
  );

  // trigger printBalance
  const [signer] = await hre.ethers.getSigners();
  const result1 = await contract.printBalance();
  const result2 = await signer.getBalance();
  fs.appendFileSync(
    path.resolve(__dirname, '../logger'),
    `[${hre.network.name}] print balance: ${result1.toString()} | account balance: ${result2}\n`,
    'utf8'
  );
})();
