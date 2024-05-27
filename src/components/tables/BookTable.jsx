import React from 'react'
import Table from 'react-bootstrap/Table';

const BookTable = () => {
  return (
    <div>
        <div className="d-flex just-content-between mb-4">
            <div>
                30 Books Found 
            </div>

            <div><input type="text" className='form-control' /></div>
        </div>

        <hr />
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default BookTable
