import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosInstance';

function BeingUnique() {
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/being-unique', { content });
            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/about-us'); // Redirect to the About Us page
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message || 'An error occurred while adding content.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className='w-100 about-section'>
            <div className='container'>
                <div className='section-heading'>
                    <h2>Add Content</h2>
                </div>
                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <Link to='/about-us'>
                        <button className="btn btn-primary" type="button">Back</button>
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="aboutusData" className="form-label">Add Content</label>
                        <textarea
                            className="form-control"
                            id="aboutusData"
                            rows="4"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BeingUnique;
