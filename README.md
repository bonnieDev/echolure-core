# EchoLure Dev Library

A lightweight, expressive library for representing emotional and sensory glyphs in JavaScript.

# 🧪 How to Use

Import the library:

import EchoLure from 'echolure';

# Play a glyph with modifiers:
EchoLure.glyph('human-help')
  .pitch('low')
  .velocity('weak')
  .fall()
  .echo()
  .play();

# Play a basic glyph sound:
  EchoLure.playSound('heartbeat');

# Access all glyphs:
  const allGlyphs = EchoLure.all();

# Get similar glyphs:
  const similar = EchoLure.getSimilar('water-drip');