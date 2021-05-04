# Bug Report 1436

## Test by Scripts

```bash
$ hardhat run ./scripts/scenario.ts --network <network-name>
```

| network | printBlance            | singer.getBalance      |
| ------- | -----------            | -----------------      |
| hardhat | 9999907162104000000000 | 9999999332280000000000 |
| rinkeby | 18749251185000000000   | 18749251185000000000   |
| goerli  | 48492180000000000      | 48492180000000000      |
| kovan   | 1999332280000000000    | 1999332280000000000    |

