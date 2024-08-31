import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to='/local-storage'>Local Storage Page</Link>
        </li>
        {/* Add more links here as needed */}
      </ul>
    </div>
  );
};
export default Home;
