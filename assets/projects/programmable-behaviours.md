# Programmable Behaviours

## About

A Unity framework that allows developers to expose the internal logic of game objects, enabling players to modify behaviour directly through code.

The project was designed around the idea of teaching programming concepts through gameplay. The example game we developed allows the players to disable or rewrite defence systems such as turrets using scripts written inside the game.

---

## The Language

See-- is a custom language designed specifically for the gameplay context. Rather than embedding a general-purpose language, a custom language lets us:

- Expose only safe, gameplay-relevant functions and variables
- Control what players can access (no filesystem, network, or engine internals)
- Optimize the learning experience with familiar syntax
- Maintain tight integration with game systems

Implemented from scratch with a complete pipeline:

- Lexer: tokenizes code  
- Parser: generates AST  
- Resolver: scope + static type checking  
- Interpreter: runtime execution  

---

## Unity Integration

A key part of the project is the connection between the custom scripting language and Unity gameplay systems.

The interpreter connects to Unity through an interface layer that exposes only safe, controlled functionality.

### Exposed API

Game objects expose a curated set of variables and functions to scripts. These are registered in the global scope, allowing scripts to interact with gameplay systems without accessing engine internals.

### Runtime Behaviour Modification

Variable changes and function calls trigger events that Unity components respond to, allowing scripts to modify game logic dynamically while keeping the underlying code stable and secure.

### External Function Framework

Each gameplay action (turret aim, defence disable, etc.) is a dedicated C# function class. These external functions act as a safe bridge between interpreted scripts and Unity behaviour, making the API easy to extend without modifying the interpreter.

---

## Showcase

### In-Game Code Editor

Players can interactively modify object logic using the embedded scripting language.

![In-Game Code Editor](/assets/images/programmable-behaviours-editor.png)

---

### Hackable Defence Systems

Defensive objects such as turrets expose programmable functions that players can override.

![Turret Behaviour Hacking](/assets/images/external.png)

---

### Runtime Feedback + Debugging

The editor provides syntax/runtime error reporting and visual feedback for learning.

![Console Output](/assets/images/error.png)

---

## Tech Stack

- Unity / C#  
- Custom scripting language (See--)  
- Lexer + Parser + Resolver + Interpreter architecture  
- Event-driven Unity integration via External Functions  
- In-game code editor with debugging tools
