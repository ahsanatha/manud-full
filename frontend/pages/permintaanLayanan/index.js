import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import { FormControl } from 'react-bootstrap';


const submit = (e) => {
  return (
    <Alert variant="success">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This
      example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things
      nice and tidy.
    </p>
  </Alert>
  )
}
const reqLayanan = () => {
  return (
    <div>
      <div align="center">
        <h1 style={{paddingTop: "7%"}} align="center">
          Form Layanan Desa
        </h1>
        <Form style={{width: "40%"}}>
          <Form.Label>Jenis Layanan</Form.Label>
        <Form.Select>
          <option>Surat Pengantar</option>
          <option>Surat Izin</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama Pemohon</Form.Label>
          <Form.Control type="text" placeholder="Nama Pemohon" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NIK Pemohon</Form.Label>
          <Form.Control type="text" placeholder="NIK Pemohon" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email Pemohon" />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>File Pendukung</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

      
          <div>
            <a href="/permintaanLayanan">
            <Button onClick={submit} variant="primary" size="lg" active>
              Process
            </Button>
            </a>
            <a href="/">
              <Button variant="danger" size="lg" active>
                Cancel
              </Button>
            </a>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default reqLayanan