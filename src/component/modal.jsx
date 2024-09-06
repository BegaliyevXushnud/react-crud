import { nanoid } from "nanoid";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";

const GlobalModal = (props) => {
  const { open, toggle, data, setData, update } = props;
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (update.id) {
      data.forEach((element) => {
        if (element.id === update.id) {
          element.name = form.name || update.name;
          element.age = form.age || update.age;
          element.phone = form.phone || update.phone;
          element.address = form.address || update.address;
        }
      });
    } else {
      let payload = { ...form, id: nanoid() };
      let new_data = [...data, { ...payload }];
      setData([...new_data]);
    }
    toggle();
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h2 className="text-center">Add Student</h2>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="form">
          <input type="text" defaultValue={update.name} onChange={handleChange} placeholder="name" name="name" className="form-control my-2" />
          <input type="text" defaultValue={update.age} onChange={handleChange} placeholder="age" name="age" className="form-control my-2" />
          <input type="text" defaultValue={update.phone} onChange={handleChange} placeholder="phone" name="phone" className="form-control my-2" />
          <input type="text" defaultValue={update.address} onChange={handleChange} placeholder="address" name="address" className="form-control my-2" />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" type="submit" form="form">Save</button>
      </ModalFooter>
    </Modal>
  );
};

export default GlobalModal;
