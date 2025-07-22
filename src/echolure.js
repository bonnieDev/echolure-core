
import glyphs from './assets/glyphs.json';

class GlyphObject {
  constructor(base) {
    this.glyph = base;
    this.modifiers = {
      pitch: 'normal',
      velocity: 'normal',
      echo: false,
      fall: false,
    };
  }

  pitch(direction) {
    this.modifiers.pitch = direction;
    return this;
  }

  velocity(value) {
    this.modifiers.velocity = value;
    return this;
  }

  fall() {
    this.modifiers.fall = true;
    return this;
  }

  echo() {
    this.modifiers.echo = true;
    return this;
  }

  play() {
    // TODO: Implement pitch and effects using Web Audio API
    const audio = new Audio(`/audio/${this.glyph.sound}`);
    audio.play();
  }
}

const EchoLure = {
  all: () => glyphs,

  get: (id) => glyphs.find(g => g.id === id),

  glyph: (id) => {
    const g = EchoLure.get(id);
    if (!g) return null;
    return new GlyphObject(g);
  },

  playSound: (id) => {
    const glyph = EchoLure.get(id);
    if (glyph && glyph.sound) {
      const audio = new Audio(`/audio/${glyph.sound}`);
      audio.play();
    }
  },

  getSimilar: (id) => {
    const base = EchoLure.get(id);
    if (!base) return [];
    return glyphs.filter(g =>
      g.id !== id && g.name.split(' ')[0] === base.name.split(' ')[0]
    );
  }
};

export default EchoLure;
