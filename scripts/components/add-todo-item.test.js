import React from 'react';
import TestRenderer from 'react-test-renderer';
import AddTodoItem from './add-todo-item';

describe('AddTodoItem', () => {
  test.skip('should render correctly', () => {
    let renderedTree = TestRenderer.create(
      <AddTodoItem dispatch={() => {}} />
    );

    expect(renderedTree.toJSON()).toMatchSnapshot();
  });
});
