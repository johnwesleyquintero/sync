import "@testing-library/jest-dom";
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.document = {
  createElement: (tagName) => {
    const element = {
      tagName: tagName,
      style: {},
      setAttribute: () => {},
      appendChild: () => {},
      classList: {
        add: () => {},
        remove: () => {},
      },
      addEventListener: () => {},
      removeEventListener: () => {},
    };
    return element;
  },
  head: {
    appendChild: () => {},
  },
};
import React from "react";
