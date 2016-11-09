import React from "react";
import renderer from "react-test-renderer";
import TodoList from "./todo-list";

test("List has 2 items", () => {
  const items = [{
    id: 1,
    text: "Item 1",
    done: false
  }, {
    id: 2,
    text: "Item 2",
    done: true
  }];

  const component = renderer.create(
    <TodoList items={items} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
