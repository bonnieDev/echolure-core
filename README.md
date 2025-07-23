<p align="center">
  <img src="assets/echoSignal.svg" alt="EchoLure logo" height="220" max-height="220">
</p>

# EchoLure Dev Library

A lightweight, expressive JavaScript library for representing emotional and sensory glyphs. EchoLure lets you compose sensations, motions, and emotions using a clear, sentence-like API that maps to sound — and eventually, visuals and haptics.

“EchoLure is a tool for human-centered design. Instead of pixels, it starts with feeling.”

# 🌟 Why EchoLure?

Modern UIs are visually overloaded. EchoLure offers an alternative: a compositional syntax for non-visual expression.

Whether you're building a meditation app, responsive art installation, emotional game mechanic, or inclusive UX — EchoLure gives you a way to “say more with less.”

# Potential Use Cases:

🎮 Gaming: Emotional or environmental state feedback through subtle sound/haptics

🧘 Mental wellness: Guide breathing, evoke calm, or reassure with expressive feedback

📊 Data sonification: “Hear” datasets using pitch, echo, and rhythm as metaphors

🎨 Creative tools: Give artists/devs a new, human medium for ambient storytelling

🔔 Ambient notifications: Replace jarring pings with nuanced, meaningful signals

# 📦 Installation

EchoLure will soon be available via npm. For now:

git clone https://github.com/bonnieDev/echolure-core.git

Then import it:

import EchoLure from './echolure.js';

# 🧪 How to Use

Play a glyph with modifiers:

EchoLure.glyph('human-help')
  .pitch('low')
  .velocity('weak')
  .fall()
  .echo()
  .play();

Play a basic glyph:

EchoLure.playSound('heartbeat');

Explore the system:

const allGlyphs = EchoLure.all();
const similar = EchoLure.getSimilar('water-drip');

# 🛠️ What’s Here

Core glyph schema + seed data

Audio/visual placeholder assets

Experimental fluent API

React component structure

Planning docs

# 🚧 Coming Soon

Compass-style UI for exploration

Community glyph voting + sharing

“Sounds like…” search (phonetic/semantic)

Accessibility-first logic for deaf/blind users

Visual composition tool for non-coders

# 🌍 License

Apache License 2.0 + DEI Clause

This project is distributed under the Apache License 2.0 with the following DEI commitment:

Diversity, Equity, and Inclusion Clause:EchoLure is built to foster inclusive, expressive technology. Use of this library to promote harm, discrimination, or exclusion based on race, gender, disability, sexuality, religion, or nationality is strongly discouraged.

By using EchoLure, you agree to uphold the spirit of inclusive innovation.

💬 Feedback Welcome

This project is just getting started. Suggestions, forks, creative use cases, and sound contributions are all welcome.

