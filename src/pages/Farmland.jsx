import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';
import DropDownactive from '../components/DropDownactive';

function useFarmlands() {
  const [farmlands, setFarmlands] = useState([]);

  useEffect(() => {
    const fetchFarmlands = async () => {
      try {
        const response = await fetch('https://agro-admin-dashboard-api.vercel.app/api/crops?crop_type_id=1');
        const data = await response.json();
        setFarmlands(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFarmlands();
  }, []);

  return farmlands;
}

function Farmland() {
  const [statusFilter, setStatusFilter] = useState('All');
  const farmlands = useFarmlands();

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredFarmlands = statusFilter === 'All'
    ? farmlands
    : farmlands.filter(farmland => farmland.status.toLowerCase() === statusFilter.toLowerCase());

  return (
    <>
      <div className="dropactive">
        <DropDownactive onChange={handleFilterChange} />
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Type Name</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {filteredFarmlands.map((farmland, index) => (
            <tr key={farmland.id}>
              <td>{index + 1}</td>
              <td>{farmland.id}</td>
              <td>{farmland.name}</td>
              <td>{farmland.crop_type.name}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Farmland;
