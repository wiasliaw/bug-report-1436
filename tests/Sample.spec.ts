import hre from 'hardhat';
import { expect } from 'chai';

import FooJSON from '../dist/artifacts/contracts/Sample.sol/Foo.json';
import { Foo } from '../dist/types';

describe('Foo', () => {
  let contract: Foo;
  const [signer] = hre.waffle.provider.getWallets();

  before(async () => {
    contract = await hre.waffle.deployContract(signer, FooJSON) as any;
  });

  it('print balance', async () => {
    expect(await contract.printBalance()).to.be.eq(await signer.getBalance());
  });
});
