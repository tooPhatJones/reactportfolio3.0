import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phonenumber, setphonenumber] = useState("");

    function testfunc() {
        console.log(name)
        console.log(email)
        console.log(message)
        console.log(phonenumber)
    }

    function postSuggestion() {
        if (name == "") {
            alert("Please add your name");
        } else {
            axios
                .get(
                    'https://jzmjq2p2qe.execute-api.us-east-2.amazonaws.com/dev/?name="' + name + '" &email="' + email + '"&phonenumber="' + phonenumber + '" &message="' + message + '"&author="none"&title="none"'
                )
                .then(res => {
                    console.log('post fired');

                    setName('')
                    setEmail("")
                    setphonenumber("")
                    setMessage("")
                    alert("Thanks for contacting me!\rI will get your message soon.");
                });
        }
        props.onHide()
    };



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Jane Doe" onChange={(e) => setName(
                            e.target.value
                        )} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone #</Form.Label>
                        <Form.Control type="number" name='phonenumber' placeholder="(555)-555-5555" onChange={(e) => setphonenumber(
                            e.target.value
                        )} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="name@example.com" onChange={(e) => setEmail(
                            e.target.value
                        )} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write me a message</Form.Label>
                        <Form.Control as="textarea" name='message' rows="3" onChange={(e) => setMessage(
                            e.target.value
                        )} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={postSuggestion}>Send</Button>
                    <Button onClick={testfunc}>test</Button>
            </Modal.Footer>

        </Modal>
    );
}

export default MyVerticallyCenteredModal;