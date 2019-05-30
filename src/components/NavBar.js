import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  navOptions = [
    {
      route: '/',
      name: 'Home'
    }
    // ,
    // {
    //   route: '/about',
    //   name: 'About'
    // },
    // {
    //   route: '/ReadingOlympics',
    //   name: 'Reading Olympics'
    // },
    // {
    //   route: '/parents',
    //   name: 'For Parents'
    // },
    // {
    //   route: '/search',
    //   name: 'Search'
    // }
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
        <Navbar classname="navbar-light" expand="md" >
          <NavbarBrand href="/">
            Helena
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {this.navigationOptions.map(({ route, name }) => {
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