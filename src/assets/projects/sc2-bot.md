# MontyBot

## About

MontyBot is a modular AI agent that plays full matches of StarCraft II using a hybrid of Monte Carlo Tree Search and neural combat prediction in a real-time, partially observable environment.

In order to achieve that goal we identified four main challenges:

1. Economy management
2. Army production
3. Combat execution
4. Scouting to gather data

---

## Architecture

MontyBot is made up of different components, each with their separate responsibility.

### Monte Carlo Tree Search

The MCTS plans build orders and production decisions over a rolling time horizon using a simplified forward model of resource income and unit production.

The state representation abstracts the game into resource counts, production pipelines, and observed unit compositions, trading off accuracy for fast forward simulation.

### Combat Prediction Neural Network

The Combat Prediction Neural Network replaces expensive forward simulations by estimating battle outcomes, enabling MCTS to evaluate combat decisions efficiently.

- Input: Unit Composition vectors + Encounter context
- Output: Win/Loss probabilities
- Dataset: ~18k combat rounds with outcomes per race
- Accuracy: ~86% across matchups

### Control Module

The Control Module executes high-level decisions from Monte Carlo Tree Search in real time in StarCraft II, acting as a reactive layer that adapts plans to the current game state.

It is composed of specialized managers that operate concurrently and coordinate through a shared state.

- Construction Manager: Responsible for executing production and build actions
- Worker Manager: Responsible for efficient distribution of workers through the bases
- Army Manager: Responsible for executing attacking and defending actions
- Scouting Manager: Responsible for gathering information about the enemy
- Information Manager: Responsible for storing, inferring and providing information for other modules

---

## Results

MontyBot was evaluated in matches against other agents on [AI Arena](https://aiarena.net/).

Achieved ~25% win rate against competitive community bots on AI Arena, placing MontyBot in the mid-tier of active agents.

---

## Challenges

- Handling partial observability required inference of enemy state from limited scouting data
- Balancing exploration vs exploitation in MCTS under real-time constraints
- Integrating learned combat evaluation with symbolic planning introduced consistency challenges

---

## Tech Stack

- C++
- Python
- PyTorch
- SC2 Api
