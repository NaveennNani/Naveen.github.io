import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", function(){

  test('Welcome to react', () => {
    render(<App />);
    const myData = screen.getByText("Welcome to react");
    expect(myData).toBeInTheDocument();
  });
  
  test('Checking for React message Testing in different method', () => {
    render(<App />);
    const myTest = screen.getByText(/checking react testing/i);
    expect(myTest).toBeInTheDocument();
  });
  

})
