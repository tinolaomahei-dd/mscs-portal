import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Settings extends Component {
    render() {
        return (
            <Container>
                <Header as='h5' attached='top'>Settings</Header>
                <Segment attached>
                    <Grid divided columns='equal'>
                        <Grid.Column>
                            <Form>
                                <Form.Field>
                                    <label>Base Uri</label>
                                    <input placeholder='Base Uri' value='https://westus.api.cognitive.microsoft.com/face/v1.0' />
                                </Form.Field>
                                <Form.Field>
                                    <label>API Key</label>
                                    <input placeholder='API Key' />
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        );
    }
}

export default Settings;
