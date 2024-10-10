import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function Alumini() {
    const [alumniData, setAlumniData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlumniData = async () => {
            try {
                const response = await axiosInstance.get('/alumni/');
                setAlumniData(response.data); // Update state with the fetched data
            } catch (err) {
                setError('Error fetching data'); // Handle error
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchAlumniData();
    }, []);
    return (
        <div className='w-100 padding alumini-home'>
            <div className='container'>
                <div className='section-heading text-center'>
                    <h2>Alumini</h2>
                </div>
                <div className='action-button d-flex mb-3'>
                    <div className='add-post'>
                        <Link to='/add-alumni'><button type="button" className="btn btn-success"> Add Alumini</button></Link>
                    </div>
                    <div className='back-button'>
                        <Link to='/'><button type="button" className="btn btn-primary"> Back</button></Link>
                    </div>
                </div>
                <div className='alumini-content'>
                    {loading ? (
                        <p>Loading...</p> // Loading state
                    ) : error ? (
                        <p>{error}</p> // Error state
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. Number</th>
                                    <th scope="col">Alumini Image</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Create At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alumniData.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            {item.images.length > 0 && (
                                                <img 
                                                    src={item.images[0]} 
                                                    alt={item.designation} 
                                                    style={{ width: '100px', height: 'auto' }} 
                                                />
                                            )}
                                        </td>
                                        <td>{item.designation}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Alumini