import { useState } from 'react';
import GlobalModal from "./component/modal";

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({});
  const [open, setOpen] = useState(false);

  const deleteData = (id) => {
    let new_data = data.filter((item) => item.id !== id);
    setData([...new_data]);
  };

  const updateData = (item) => {
    setUpdate(item);
    setOpen(true);
  };

  return (
    <>
      <div className='container'>
        <GlobalModal open={open} toggle={() => setOpen(false)} data={data} setData={setData} update={update} />
        <div className='row my-3'>
          <div className='col-md-3 offset-1'>
            <button className='btn btn-success' onClick={() => setOpen(true)}>open modal</button>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-10 offset-1'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>
  <button onClick={() => deleteData(item.id)} className='btn btn-success me-2'>delete</button>
  <button onClick={() => updateData(item)} className='btn btn-info'>edit</button>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
