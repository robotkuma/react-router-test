import { Link } from 'react-router-dom';

function BrowserRouterTest() {
  return (
    <div>
      <h1>Browser Router</h1>
      <nav>
        <li>
          <Link to="/random-user">BrowserRouter Random User</Link>
        </li>
      </nav>
    </div>
  )
}

export default BrowserRouterTest;
