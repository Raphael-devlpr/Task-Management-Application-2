import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from './legend.jpg'; 

function Student() {
    const [student, setStudent] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8081/')     
            .then(res => setStudent(res.data))
            .catch(err => console.log(err)); 
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/student/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <div style={styles.logoContainer}>
                        <img src={logo} alt="Logo" style={styles.logo} />
                    </div>
                    <h2 style={styles.title}>Tasks</h2>
                    <Link to="/create" style={styles.addButton}> <b>Add +</b></Link>
                </div>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status

                             
                            </th>
                            <th>Due Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((data, i) => (
                            <tr key={i}>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{/* Status data */}</td>
                                <td>{/* */}</td>
                                <td>
                                    <Link to={`update/${data.ID}`} style={styles.updateButton}>Update</Link>
                                    <button style={styles.deleteButton} onClick={(e) => handleDelete(data.ID)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
    content: {
        width: '50%',
        background: '#fff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logoContainer: {
        margin: '10px',
    },
    logo: {
        width: '100px', 
        height: '60px',
         
    },
    title: {
        fontWeight: 'bold',
        marginRight: '10px',
    },
    addButton: {
        backgroundColor: 'black',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: '5px',
        textDecoration: 'none',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    updateButton: {
        backgroundColor: '#17a2b8',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '3px',
        textDecoration: 'none',
        marginRight: '5px',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '3px',
        border: 'none',
        cursor: 'pointer',
    },
};

export default Student;
