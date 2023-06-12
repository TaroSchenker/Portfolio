import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('renders Footer component', () => {
    render(<Footer />)
    const githubIcon = screen.getByRole('img', {name: /github/i});
    const linkedinIcon = screen.getByRole('img', {name: /linkedin/i});
    const twitterIcon = screen.getByRole('img', {name: /twitter/i});
    
    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
  });
  test('displays copyright notice with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    const copyrightText = screen.getByText(new RegExp(`© ${currentYear} Taro Schenker. All rights reserved.`, 'i'))

    expect(copyrightText).toBeInTheDocument()
  })
})
