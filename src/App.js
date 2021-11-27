import React, { Component } from "react";

//import "semantic-ui-css/semantic.min.css";
import 'semantic-ui-less/semantic.less';
import DialpadItem from './Page/Components/Dialpad/index';

import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Menu,
  Message
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu inverted borderless fluid fixed="top">
            <Container>
              <Menu.Item header>SipPhone</Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Form>
                    <Form.Group inline>
                      <Form.Input placeholder="Email" type="text" />
                      <Form.Input placeholder="Password" type="password" />
                      <Form.Button content="Sign in" color="green" />
                    </Form.Group>
                  </Form>
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless fluid inverted fixed="top" size="huge">
            <Menu.Item header>SipPhone</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item>
                <Form>
                  <Form.Input placeholder="Email" type="text" />
                  <Form.Input placeholder="Password" type="password" />
                  <Form.Button content="Sign in" color="green" />
                </Form>
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
        <Message size="massive">
          <Container>
            <Header size="huge" as="h1">
              Hello, oncall Dialpad
            </Header>
          </Container>
        </Message>
        <Container>
          <Grid>
            <Grid.Column>
              <DialpadItem />
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Divider />
          <footer>&copy; 2021 FPT, Inc.</footer>
        </Container>
      </div>
    );
  }
}

export default App;