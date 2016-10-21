import React from "react";
import renderer from "react-test-renderer";
import TodoItem from "./todo-item";

test("Not completed item", () => {
  const component = renderer.create(
    <TodoItem id={1} text="Not completed" completed={false} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Completed item", () => {
  const component = renderer.create(
    <TodoItem id={2} text="Completed" completed={true} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
