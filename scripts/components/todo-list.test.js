import React from 'react';
import TestRenderer from 'react-test-renderer';
import TodoList from './todo-list';

describe('TodoList', () => {
  test("should have 2 items", () => {
    const items = [{
      id: '1',
      text: 'Item 1',
      completed: false
    }, {
      id: '2',
      text: 'Item 2',
      completed: true
    }];

    let renderedTree = TestRenderer.create(
      <TodoList items={items} onToggleItem={() => {}} onRemoveItem={() => {}} />
    );

    expect(renderedTree.toJSON()).toMatchSnapshot();
  });
});
