import React from "react";
import renderer from "react-test-renderer";
import ReactTestUtils from "react-addons-test-utils";
import TodoItem from "./todo-item";

test("There is 1 incomplete item", () => {
  const component = renderer.create(
    <TodoItem id={1} text="Not completed" completed={false} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("There is 1 completed item", () => {
  const component = renderer.create(
    <TodoItem id={2} text="Completed" completed={true} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Delete clicked", () => {
  let testRender = ReactTestUtils.createRenderer();
  testRender.render(
    <TodoItem id={3} text="Will be deleted" completed={false} />
  );

  let component = testRender.getRenderOutput();
});
