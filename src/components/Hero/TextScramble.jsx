import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import "../../css/TextScramble.css";

class TextScrambleEffect {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScramble = ({ phrases }) => {
  const textRef = useRef(null);
  const fxRef = useRef(null);
  const counterRef = useRef(0);

  useEffect(() => {
    if (textRef.current) {
      fxRef.current = new TextScrambleEffect(textRef.current);

      const next = () => {
        fxRef.current.setText(phrases[counterRef.current]).then(() => {
          setTimeout(next, 800);
        });
        counterRef.current = (counterRef.current + 1) % phrases.length;
      };

      next();
    }

    return () => {
      if (fxRef.current && fxRef.current.frameRequest) {
        cancelAnimationFrame(fxRef.current.frameRequest);
      }
    };
  }, [phrases]);

  return (
    <div className="container">
      <div className="text" ref={textRef}></div>
    </div>
  );
};

TextScramble.propTypes = {
  phrases: PropTypes.array.isRequired,
};

export default TextScramble;
