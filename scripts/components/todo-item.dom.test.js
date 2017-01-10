import React from 'react';
import {shallow} from 'enzyme';
import TodoItem from './todo-item';

// Create a separate enzyme test due to this issue:
// https://github.com/facebook/jest/issues/1353

describe('Test TodoItem events', () => {
  it('should toggle state', () => {
    let onToggleItem = jest.fn();
    let component = shallow(
      <TodoItem text="Test toggle" completed={false} onToggleItem={onToggleItem} />
    );

    component.find("input").simulate("change");
    expect(onToggleItem).toBeCalled();
  });

  it('should be removed', () => {
    let onRemoveItem = jest.fn();
    let component = shallow(
      <TodoItem text="Test remove" completed={false} onRemoveItem={onRemoveItem} />
    );

    component.find("button").simulate("click");
    expect(onRemoveItem).toBeCalled();
  });
});
