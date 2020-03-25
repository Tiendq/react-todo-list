import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent } from '@testing-library/react'
import TestRenderer from 'react-test-renderer';
import TodoItem from './todo-item';

describe('TodoItem', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should render correctly', () => {
    let renderedTree = TestRenderer.create(
      <div>
        <TodoItem text="Completed" completed={true} onToggleItem={() => {}} onRemoveItem={() => {}} />
        <TodoItem text="Not completed" completed={false} onToggleItem={() => {}} onRemoveItem={() => {}} />
      </div>
    );

    expect(renderedTree.toJSON()).toMatchSnapshot();
  });

  test('should be 1 completed item', () => {
    render(<TodoItem text="Completed" completed={true} onToggleItem={() => {}} onRemoveItem={() => {}} />, container);
    expect(container.querySelector('.form-check-input').checked).toBe(true);
  });

  test('should mark an item to be completed', () => {
    let onToggleItem = jest.fn();

    render(<TodoItem text="Open item" completed={false} onToggleItem={onToggleItem} onRemoveItem={() => {}} />, container);

    let checkbox = container.querySelector('.form-check-input');
    fireEvent.click(checkbox);

    expect(onToggleItem).toBeCalledTimes(1);
  });

  test('should remove an item', () => {
    let onRemoveItem = jest.fn();

    render(<TodoItem text="Open item" completed={false} onToggleItem={() => {}} onRemoveItem={onRemoveItem} />, container);
    fireEvent.click(container.querySelector('.btn-danger'));

    expect(onRemoveItem).toBeCalledTimes(1);
  });
});
