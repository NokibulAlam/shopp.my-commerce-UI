import React from 'react'
import Menu from '../Core/Menu/Menu';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import Css
import './AdminDashBoard.css';

const AdminDashBoard = ({children, className}) => {

  const adminSideBar = () => {
    return (
      <div className='card px-0'>
        <h4 className='card-header bg-dark text-light'>Admin dashboard</h4>
        <ul className='list-group'>
          <li className="list-group-item bg-secondary">
            <Link to="/create/category" className='sideBarLink link'>Create Category</Link>
          </li>
          <li className="list-group-item bg-secondary">
            <Link to="/create/product" className='sideBarLink link'>Create Product</Link>
          </li>
          <li className="list-group-item bg-secondary">
            <Link to="/admin/orders" className='sideBarLink link'>View Orders</Link>
          </li>
          <li className="list-group-item bg-secondary">
            <Link to="/admin/products" className='sideBarLink link'>Manage Products</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Menu />
      <Container fluid>
        <Row>

          <Col md={2}>
            {adminSideBar()}
          </Col>

          <Col md={8}>
          <div className={className}>
            {children}
          </div>
          </Col>

        </Row>
      </Container>
    </div >
  )
}

export default AdminDashBoard;