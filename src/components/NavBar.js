import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

export default class NavBar extends React.Component {
  navOptions = [
    {
      route: '/',
      name: 'Home'
    }
    ,
    {
      route: '/about',
      name: 'About'
    },
    {
      route: '/contact',
      name: 'Contact Me'
    },
    {
      route: '/projects',
      name: 'Projects'
    },
    {
      route: '/blog',
      name: 'Blog'
    }
  ];


  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Helena Chi</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.navOptions.map(( {route, name} ) => {
                return (
                  <NavItem key={name}>
                    <NavLink href={route}>{name}</NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}