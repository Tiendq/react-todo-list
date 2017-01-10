import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from './todo-item';

describe('TodoItem', () => {
  it('should have 1 incomplete and 1 complete items', () => {
    let tree = renderer.create(
      <div>
        <TodoItem text="Not completed" completed={false} />
        <TodoItem text="Completed" completed={true} />
      </div>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
