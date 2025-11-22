import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  // 測試 1: 檢查是否有 "Orders" 連結
  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  // 測試 2: 檢查是否有 "Payments" 連結
  it('should render the Payments link', () => {
    render(<App />);
    expect(screen.getByText('Payments')).toBeInTheDocument();
  });

  // 測試 3: 檢查是否有 "Home" 連結
  it('should render the Home link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: "Home" })).toBeInTheDocument();
  });

  // 測試 4: 檢查是否有 "Home" 標題 (h2)
  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});