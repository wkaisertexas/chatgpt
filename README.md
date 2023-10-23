
<a href="https://www.npmjs.com/package/clack-chat-gpt">
  <h1 align="center">ChatGPT in Terminal</h1>
</a>

<p align="center">
Chat with ChatGPT without leaving your beloved command line interface
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#install"><strong>Install</strong></a> ·
  <a href="#setting-up-locally"><strong>Setting Up Locally</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#inspiration"><strong>Inspiration</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Introduction

`clack-chat-gpt` is a open-source AI chatbot ChatGPT wrapper which provides a beautiful user interface thanks to [Clack](https://github.com/natemoo-re/clack) and is available through `npm`.

<div align="center">

https://github.com/wkaisertexas/chatgpt/assets/27795014/663cfb31-a49e-46ee-af82-3d1202710316

</div>

## Install

Install via [NPM](https://www.npmjs.com/package/clack-chat-gpt)

```console
npm install -g clack-chat-gpt
```

After that, use like any CLI tool.

```console
chat What is the meaning of life?
```

## Setting Up Locally

To set up `clack-chat-gpt` locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))

```console
git clone https://wkaisertexas/chatgpt
cd chatgpt
node .
```

## Tech Stack

`clack-chat-gpt` is built on the following stack:

- [openai](https://www.npmjs.com/package/openai) - chat completitions
- [cleye](https://github.com/privatenumber/cleye) - command line interface parser
- [clack](https://github.com/natemoo-re/clack) - textual user interafce

## Inspiration

Project built as a project for [Machine Learning with TensorFlow JavaScript](https://wkaisertexas.github.io/ml-with-tfjs/) and inspired by [Builder.io](https://builder.io)'s [ai-shell](https://github.com/builderio/ai-shell).

## Author

- William Kaiser ([@williamdkaiser](https://linkedin.com/in/williamdkaiser))

## License

Licensed under the [MIT license](./license.md)[^1]

---

[^1]: Thanks to [Stephen Tey](https://twitter.com/steventey) as I took the readme template from [ChatHN](https://github.com/steven-tey/chathn)
