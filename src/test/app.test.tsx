
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { expect } from 'chai'; // import the expect assertion from Chai

describe('App', () => {
  it('should render the correct initial state', () => {
    const { getByText } = render(<App />);
    const description = getByText(data[0].description);
    const name = getByText(data[0].name);
    const job = getByText(data[0].job);
    const image = getByAltText(data[0].image);
    expect(description).to.exist;
    expect(name).to.exist;
    expect(job).to.exist;
    expect(image).to.exist;
  });

  it('should render the correct state when the "next" button is clicked', () => {
    const { getByText, getByAltText } = render(<App />);
    const nextButton = getByText('next slid');
    fireEvent.click(nextButton);
    const description = getByText(data[1].description);
    const name = getByText(data[1].name);
    const job = getByText(data[1].job);
    const image = getByAltText(data[1].image);
    expect(description).to.exist;
    expect(name).to.exist;
    expect(job).to.exist;
    expect(image).to.exist;
  });

  it('should render the correct state when the "prev" button is clicked', () => {
    const { getByText, getByAltText } = render(<App />);
    const nextButton = getByText('next slid');
    fireEvent.click(nextButton);
    const prevButton = getByText('prev slid');
    fireEvent.click(prevButton);
    const description = getByText(data[0].description);
    const name = getByText(data[0].name);
    const job = getByText(data[0].job);
    const image = getByAltText(data[0].image);
    expect(description).to.exist;
    expect(name).to.exist;
    expect(job).to.exist;
    expect(image).to.exist;
  });
});