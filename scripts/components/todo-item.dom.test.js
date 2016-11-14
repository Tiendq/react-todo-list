import React from "react";
import { shallow } from "enzyme";
import TodoItem from "./todo-item";

// Create a separate enzyme test due to this issue:
// https://github.com/facebook/jest/issues/1353

test("Complete clicked", () => {
  let onItemCompleted = jest.fn();
  let component = shallow(
    <TodoItem id={3} text="Will be completed" completed={false} onItemCompleted={onItemCompleted} />
  );

  component.find("input").simulate("change");
  expect(onItemCompleted).toBeCalled();
});

test("Delete clicked", () => {
  let onDeleteItem = jest.fn();
  let wrapper = shallow(
    <TodoItem id={4} text="Will be deleted" completed={false} onDeleteItem={onDeleteItem} />
  );

  expect(wrapper.find("button").isEmpty()).toBeFalsy();
  wrapper.find("button").simulate("click");
  expect(onDeleteItem).toBeCalled();
});
