import { cleanup, render, screen } from '@testing-library/react';
import { ConditionsTab } from '../ConditionsTab';
import { describe, expect, it, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

const mockConditions = [
  { title: 'Condition 1', description: 'Description of condition 1' },
  {
    title: 'Condition 2',
    description: 'Description of condition 2',
    secondDescription: 'Second description of condition 2',
  },
];

const mockConditionsWithoutSecondDescription = [
  { title: 'Condition 1', description: 'Description of condition 1' },
];

const mockConditionsWithSecondDescription = [
  {
    title: 'Condition 1',
    description: 'Description of condition 1',
    secondDescription: 'Second description of condition 1',
  },
  {
    title: 'Condition 2',
    description: 'Description of condition 2',
    secondDescription: 'Second description of condition 2',
  },
];

describe('ConditionsTab', () => {
  afterEach(cleanup);

  it('should render all conditions with titles and descriptions', () => {
    render(<ConditionsTab conditions={mockConditions} />);
    const titles = screen.getAllByText(/1/i);
    expect(titles).toHaveLength(2);
  });

  it('should not render second description if it does not exist', () => {
    render(
      <ConditionsTab conditions={mockConditionsWithoutSecondDescription} />,
    );

    expect(screen.queryByText(/Second description of condition 1/i)).toBeNull();
  });

  it('should render second description when it exists', () => {
    render(<ConditionsTab conditions={mockConditionsWithSecondDescription} />);

    expect(
      screen.getByText(/Second description of condition 1/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Second description of condition 2/i),
    ).toBeInTheDocument();
  });
});
