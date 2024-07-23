---
title: Setup Solana Development Environment
authors: leopham
tags: [solana, beginner]
---

### Introduction

This guide will walk you through setting up your development environment, from installing essential tools like Rust and the Solana CLI to harnessing the power of Anchor and its shiny new AVM (Anchor Version Manager).

<!-- truncate -->

### Prerequisites

Before we get started, make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Rust

Rust is a systems programming language that is blazingly fast and memory-efficient. It is also known for its safety features, which make it a great choice for writing smart contracts on Solana.

To install Rust, you can follow the instructions on the [official Rust website](https://www.rust-lang.org/tools/install) or use the following command:

For Linux and macOS:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

For Windows: Access the [official Rust website](https://www.rust-lang.org/tools/install) and download the installer.

After installing Rust, you can check the version by running:

```bash
rustc --version
```

### Solana CLI

The Solana Command Line Interface (CLI) is a powerful tool that allows you to interact with the Solana blockchain. You can use it to create a new project, deploy a program, and interact with the blockchain.

To install the Solana CLI you can follow the instructions on the [official Solana website](https://docs.solana.com/cli/installation) or use the following command:

```bash
sh -c "$(curl -sSfL https://release.solana.com/v1.18.18/install)"
```

Currently, the latest version of the Solana CLI is `v1.18.18`. You can check the latest version by visiting the [official Solana website](https://docs.solana.com/cli/installation)

After installing the Solana CLI, you can check the version by running:

```bash
solana --version
```

Run the following command to setup a development wallet keypair:

```bash
solana-keygen new
```

### Anchor

Anchor is a framework for Solana that makes it easy to build, test, and deploy smart contracts. It provides a higher-level API for writing programs on Solana and handles many of the low-level details for you.

To install Anchor, you can use the following command:

For Linux users your need to install some dependencies:

```bash
sudo apt-get install build-essential
```

Then install AVM (Anchor Version Manager):

```bash
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
```

Install lastest version of Anchor:

```bash
avm install latest
avm use latest
```

After installing Anchor, you can check the version by running:

```bash
anchor --version
```
