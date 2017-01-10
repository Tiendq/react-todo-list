import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './todo-list';

describe('TodoList snapshot test', () => {
  it("should have 2 items", () => {
    const items = [{
      id: '1',
      text: "Item 1",
      completed: false
    }, {
      id: '2',
      text: "Item 2",
      completed: true
    }];

    let tree = renderer.create(
      <TodoList items={items} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
