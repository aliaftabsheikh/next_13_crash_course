import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
                <Link href='/'>Next.js 13</Link>
            </div>
            <div className="links">
                <Link href="/about">About</Link>
                <Link href="/about/team">Our Team</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header



// Advantages of React Server Side Components

// _ Load Faster _ Don't have to wait for the Javascript to load 
// _ Smaller client bundle size
// _ SEO friendly
// _ Access to resources the client can't access
// _ Hide sensitive data from the client 
// _ More secure against XSS attacks
// _ Improve Developer Experiene

// Just like with anything else, there are also disadvantages:

// _ Not as interactive
// _ No component state. We cannot use the `useState` hook.
// _ No component lifecycle methods. We cannot use the `useEffect` hook.
