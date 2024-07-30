---
title: Polkadot DApp Development: Was dedot Easy to Use?
description: In this article, we will try to use `dedot` to build a Dapp on Polkadot and interact with it on Rococo Contract Testnet.
date: 2024-07-30
permalink: polkadot-dapp-development-was-dedot-easy-to-use
image: ./assets/dedot.png
authors: leopham
tags: [blockchain, polkadot, beginner]
---

// translate to english immediately i write vietnammese version

Recently, I started to learn about Polkadot and Substrate. One of the issues I faced was developing a decentralized application (DApp) on Polkadot. I learned how to develop a smart contract on a subtrate-based network using `ink!` and using [`useInkathon`](https://github.com/scio-labs/use-inkathon) to interact with the contract. However, I just found a new library that can help us interact with the polkadot network more easily. That is [`dedot`](https://github.com/dedotdev/dedot).

So, in this article, we will try to use `dedot` to build a Dapp on Polkadot and interact with it on Rococo Contract Testnet. Let's get started!

## What is `dedot`?

`dedot` is introduced as A delightful JavaScript/TypeScript client for Polkadot & Substrate. Basically, it is a new JavaScript/TypeScript client designed for a faster, leaner, and downright delightful development experience.

### Features of `dedot`

- ✅ Small bundle size, tree-shakable (no more bn.js or wasm-blob tight dependencies)
- ✅ Built-in metadata caching mechanism
- ✅ Types & APIs suggestions for each individual Substrate-based blockchain network ([@dedot/chaintypes](https://github.com/dedotdev/chaintypes))
- ✅ Familiar api style with `@polkadot/api`, easy & fast migration!
- ✅ Native TypeScript type system for scale-codec
- ✅ Compatible with `@polkadot/extension`-based wallets
- ✅ Support Metadata V14, V15 (latest)
- ✅ Build on top of both the [new](https://paritytech.github.io/json-rpc-interface-spec/introduction.html) & legacy (deprecated soon) JSON-RPC APIs
- ✅ Support light clients (e.g: [smoldot](https://www.npmjs.com/package/smoldot)) (_docs coming soon_)
- ✅ Typed Contract APIs (_docs coming soon_)
- ✅ Fully-typed low-level JSON-RPC client (_docs coming soon_)
- ⏳ [Compact Metadata](https://github.com/dedotdev/dedot/issues/45)

Because `dedot` supports Typed Contract APIs, so i think it will be a good choice for us to build a Dapp on Polkadot.
