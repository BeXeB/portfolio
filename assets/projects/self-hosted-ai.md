# Self-Hosted AI

## About

This project explores running large language models locally as an alternative to cloud-based APIs, using tools like Ollama and LM Studio.

The goal was to evaluate whether locally hosted models can handle practical tasks on consumer hardware, while reducing reliance on third-party services.

## Setup

Local inference via Ollama and LM Studio
Tested on consumer hardware (RTX 3060 12GB, 64GB RAM, AMD Ryzen 9 7800X3D)

## Models Tested

- Qwen 3 14B
- Qwen 2.5 Coder

## Results

- Models performed well on basic tasks
- Search integration improved performance by providing up-to-date information

## Challenges

- Agent mode was not functional
- Small context window due to low VRAM
- Very slow inference times compared to cloud APIs, especially for larger models

## Next Steps

- Get agent mode working
- Host the server on a separate machine
- Create a simple web interface to interact with the locally hosted agent

## Tech Stack

- Ollama
- LM Studio
- Continue VS Code Extension
