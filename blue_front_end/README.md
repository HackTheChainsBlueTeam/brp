## New React Next.js Bun frontend repo
Install bun. It's a drop in replacement for Node.js, but node.js should work too
```
curl -fsSL https://bun.sh/install | bash
```
now install packages
```
bun install
```
now run next.js dev server.
```
bun next dev
```
make sure you're also running an anvil server in the background
```
anvil
```
(foundry install instructions incase it's not installed): 
```
https://book.getfoundry.sh/getting-started/installation
```
and also the seperate backend repo from here
```
https://github.com/miguelmendez1208/nuked_defi_backend
```
to clone it do:
```
gh repo clone miguelmendez1208/nuked_defi_backend
```
```
bun index.ts
```
bun can run typescript files so you dont have to compile it down to javascript (isn't that nice?)
## Okay now you can go open localhost:3000
Click open app which leads you to the dashboard page.
It will retrieve the vaults from the backend repo and display them, and display buttons to connect your account as well as send transaction to the addresses.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO
Change naming conventions? probably check the exporting and importing of functions. It's """Best practice""" to have consistent naming convention but does it really matter? busy work.

## Learn More

To learn more about Next.js, take a look at the following resources:

I intend to make this repo as minimal as possible

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
anvil --fork-url https://arb-mainnet.g.alchemy.com/v2/ffO12FW4K0YUmN2B55pasKLzJX3a0j-q --auto-impersonate
```