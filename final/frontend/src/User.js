import React from "react";

import { Card, Button } from "react-bootstrap";

export default function User({username}) {

    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    <Button variant="link" onClick={(e) => {}}>{username}</Button>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}