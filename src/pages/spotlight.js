import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function Spotlight() {
    const [spotlightData, setSpotlightData] = useState([]); // Ensure it's initialized as an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpotlightData = async () => {
            try {
                const response = await axiosInstance.get('/spotlights');
                console.log(response.data); // Log the response for debugging
                setSpotlightData(response.data || []); // Fallback to an empty array if undefined
            } catch (err) {
                setError('Error fetching data'); // Handle error
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchSpotlightData();
    }, []);

    return (
        <div className='w-100 spotlight'>
            <div className='container'>
                <div className='section-heading'>
                    <h2>SpotLight</h2>
                </div>
                <div className='action-button d-flex mb-3'>
                    <div className='add-post'>
                        <Link to='/add-spotlight'>
                            <button type="button" className="btn btn-success"> Add SpotLight</button>
                        </Link>
                    </div>
                    <div className='back-button'>
                        <Link to='/'>
                            <button type="button" className="btn btn-primary"> Back</button>
                        </Link>
                    </div>
                </div>
                <div className='spotlight-content'>
                    {loading ? (
                        <p>Loading...</p> // Loading state
                    ) : error ? (
                        <p>{error}</p> // Error state
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. Number</th>
                                    <th scope="col">SpotLight Image</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {spotlightData.length > 0 ? ( // Check if data exists
                                    spotlightData.map((item, index) => (
                                        <tr key={item._id}>
                                            <th scope="row">{index + 1}</th>
                                            {/* Display the first image or a placeholder if there are no images */}
                                            <td>
                                                {item.images.length > 0 ? (
                                                    <img
                                                        src={item.images[0]} // Display the first image
                                                        alt={item.title}
                                                        style={{ width: '100px', height: 'auto' }} // Adjust size as needed
                                                    />
                                                ) : (
                                                    'No Image'
                                                )}
                                            </td>
                                            <td>{item.content}</td>
                                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Spotlight;
