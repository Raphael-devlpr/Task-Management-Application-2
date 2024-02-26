import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/create', { name, email })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Add Task</h2>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Task Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              style={styles.input}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Task Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              style={styles.input}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Task Status</label>
            <input
              type="text"
              placeholder="Enter Status"
              className="form-control"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Due date</label>
            <input
              type="date"
              placeholder="Enter Due Date"
              className="form-control"
              style={styles.input}
            />
          </div>
          <button className="btn btn-success" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  },
  formContainer: {
    width: '50%',
    background: '#fff',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    color: '#333',
    boxSizing: 'border-box',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s',
  },
};

export default CreateStudent;
