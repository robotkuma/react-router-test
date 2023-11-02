import { Link } from 'react-router-dom';

function HashRouterTest() {
  return (
    <div>
      <h1>Hash Router</h1>
      <nav>
        <li>
          <Link to="/another-random-user">HashRouter Random User</Link>
        </li>
      </nav>
    </div>
  )
}

export default HashRouterTest;