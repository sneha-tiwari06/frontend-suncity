import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function HomeAbout() {
    const [aboutData, setAboutData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await axiosInstance.get('/about/');
                setAboutData(response.data.data); // Update state with the fetched data
            } catch (err) {
                setError('Error fetching data'); // Handle error
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchAboutData();
    }, []);

    return (
        <div className='w-100 about-us'>
            <div className='container'>
                <div className='section-heading'>
                    <h2>About Us</h2>
                </div>
                <div className='action-button d-flex mb-3'>
                    <div className='add-post'>
                        <Link to='/add-about-us'>
                            <button type="button" className="btn btn-success"> Add About Us</button>
                        </Link>
                    </div>
                    <div className='back-button'>
                        <Link to='/'>
                            <button type="button" className="btn btn-primary"> Back</button>
                        </Link>
                    </div>
                </div>
                <div className='home-about-content'>
                    {loading ? (
                        <p>Loading...</p> // Loading state
                    ) : error ? (
                        <p>{error}</p> // Error state
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. Number</th>
                                    <th scope="col">About Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aboutData.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.content}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
