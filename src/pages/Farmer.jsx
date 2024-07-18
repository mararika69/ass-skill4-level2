import React from 'react';
import './../styles/Farmer.css';
import DropdownList from '../components/DropDownProvice';
function Farmers() {
  return (
    <>
  
   
    <DropdownList></DropdownList>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>IDCard</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Source</th>
              <th>Province</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>F123456</td>
              <td>John</td>
              <td>Doe</td>
              <td>Male</td>
              <td>+855 12 345 678</td>
              <td>Amru Rice</td>
              <td>Kampot</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>2</td>
              <td>F123456</td>
              <td>John</td>
              <td>Doe</td>
              <td>Female</td>
              <td>+855 12 345 678</td>
              <td>N/A</td>
              <td>Kampong Thom</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>3</td>
              <td>F123456</td>
              <td>John</td>
              <td>Doe</td>
              <td>Male</td>
              <td>+855 12 345 678</td>
              <td>N/A</td>
              <td>Kampong Cham</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </table>
        </>
      
)
}

export default Farmers;
