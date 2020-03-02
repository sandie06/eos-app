import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from './App';
/**

import { act } from "react-dom/test-utils";
import { create } from "react-test-renderer";

const blclass = () => null;
  
test("the className of the component includes EosService", () => {
  // [ 2 ] boilerplate code
  const root = create(<blcclass />).root;

  // [ 3 ] query for element
  const element = root.findByType("div");

  // [ 4 ] assert that className to include btn-group
  expect(element.props.className.includes("EosService")).toBe(true);
});
**/
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Load/i);
  expect(linkElement).toBeInTheDocument();
});
/** 
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});**/