import React from 'react';
import { Container, List, ListItem, Text, Left, Right, Icon } from 'native-base';

export default function Tab1() {
    return (
        <Container>
            <List>
                <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                    <Left>
                        <Text>Simon Mignolet</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>

                <ListItem >
                    <Left>
                        <Text>Nathaniel Clyne</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>

                <ListItem>
                    <Left>
                        <Text>Dejan Lovren</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>
        </Container>
    )
}
