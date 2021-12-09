import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

const dummyOnClose = jest.fn();

describe('Modal tests', () => {
  test('Modal is not in the document', () => {
    render(<Modal isOpen={false} onClose={dummyOnClose} />);
    const modalComponent = screen.queryByTestId('modal');
    expect(modalComponent).toBeNull();
  });

  test('Modal is in the document if it is open', () => {
    render(<Modal isOpen onClose={dummyOnClose} />);
    const modalComponent = screen.queryByTestId('modal');
    expect(modalComponent).toBeInTheDocument();
  });

  test('Click on backdrop calls onClose fn', () => {
    render(<Modal isOpen onClose={dummyOnClose} />);
    const backdrop = screen.queryByTestId('modal-backdrop');
    userEvent.click(backdrop);
    expect(dummyOnClose).toBeCalled();
  });

  test('Modal removes from the DOM on unmount', () => {
    const { unmount } = render(<Modal isOpen onClose={dummyOnClose} />);
    const modalComponent = screen.queryByTestId('modal');
    unmount();
    expect(modalComponent).not.toBeInTheDocument();
  });
});
