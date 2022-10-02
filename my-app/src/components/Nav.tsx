import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar navbar-expand-lg bg-green-300 p-3' >
      <ul className="container d-flex justify-content-around mt-4   ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">CATEGORY</Link>
        </li>
        <li>
          <Link to="/createproduct">Create Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
