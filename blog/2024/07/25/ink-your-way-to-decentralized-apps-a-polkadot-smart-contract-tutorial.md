---
title: Ink! Your Way to Decentralized Apps, A Polkadot Smart Contract Tutorial
authors: leopham
tags: [blockchain, polkadot, beginner]
---

## Introduction {#introduction}

Polkadot is not just another blockchain; it's a paradigm shift in blockchain architecture. Unlike traditional monolithic blockchains, Polkadot envisions a future of interconnected chains, ushering in a new era of cross-chain interoperability.

Imagine a network where specialized blockchains, each optimized for specific tasks, seamlessly communicate and transact with one another. This is the essence of Polkadot.

Ready to dive into the world of decentralized applications on Polkadot? This tutorial will guide you through building your first dApp using **Ink!**, Polkadot's powerful smart contract language.

I'll walk you through every step, from writing your first smart contract to deploying it on the Polkadot network. Finally, I'll show you how to interact with your creation using a built-in UI.

- [What is Ink!?](#what-is-ink)
- [Setting Up Your Environment](#setting-up-your-environment)
- [Writing Your First Smart Contract](#writing-your-first-smart-contract)
- [Compiling and Deploying Your Smart Contract](#compiling-and-deploying-your-smart-contract)
- [Interacting with Your Smart Contract](#interacting-with-your-smart-contract)

Let's get started! 🚀

## What is Ink!? {#what-is-ink}

**Ink!** is a smart contract language developed by **Parity Technologies**. First introduced in 2018, Ink! has continued to evolve, with the latest version (as of this writing) being Ink! 5.0.

**Ink!** designed for **Substrate-based blockchains** comes with **Contract Pallet**, a runtime module that allows developers to deploy and execute smart contracts on the Polkadot network. It's based on **Rust**, a popular programming language known for its performance and safety features.

![schema](https://storage.googleapis.com/parity-io-parity-prod/eawzck7.png)

## Setting Up Your Environment {#setting-up-your-environment}

Before we start coding, we need to set up our development environment. Take it easy; it's not as complicated as it sounds. Here's what you need to do:

### 1. Install Rust

You can follow the official Rust installation guide [here](https://www.rust-lang.org/tools/install).

For Linux or macOS, you can use the following command:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

If you're using Windows, you can download the installer from the [official website](https://www.rust-lang.org/tools/install).

In addition to Rust, installation requires a C++ compiler that supports C++17

```bash
rustup component add rust-src
```

Check if Rust is installed correctly by running:

```bash
rustc --version
```

### 2. Install the ink! CLI

The **ink! CLI** is a command-line tool that helps you create, build, and deploy smart contracts. You can install it using **Cargo**, Rust's package manager:

```bash
cargo install --force --locked cargo-contract
```

Check if the installation was successful by running:

```bash
cargo contract -V
```

### 3. Setup local Substrate Node

To easy the development process, we will use **substrate-contracts-node** which is configured to include the Contract Pallet.

There are two ways to set up a local Substrate node:

- Use released binaries (recommended): You can download the latest release from the [official repository](https://github.com/paritytech/substrate-contracts-node/releases).

- Build from source: You will need to install all required dependencies for building Substrate. You can find the instructions [here](https://docs.substrate.io/install/). After that, you will run the following commands:

```bash
cargo install contracts-node
```

### 4. Install Subwallet Extension

**Subwallet** is a browser extension that allows you to interact with your smart contracts. You can install it from [here](https://www.subwallet.app/).

That's it! You're all set up and ready to start coding.
