import Link from 'next/link'

const HomePage = () => {
  const routes = [
    {
      id: 1,
      name: 'Home',
      route: '/'
    },
    {
      id: 2,
      name: 'About',
      route: '/about'
    },
    {
      id: 3,
      name: 'Team',
      route: '/about/team'
    },
  ]
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {routes.map((item)=>(
        <ul key={item.id}>
        <li><Link href={item.route}>{item.name}</Link></li>
      </ul>
      ))}
      
    </div>
  )
}

export default HomePage