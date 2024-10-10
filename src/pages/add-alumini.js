import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddAlumini() {
    const [aluminidesignation, setAluminidesignation] = useState('');
    const [aluminiuniversity, setAluminiuniversity] = useState('');
    const [images, setImages] = useState(null);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setImages(e.target.files);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData to send file data
        const formData = new FormData();
        formData.append('designation', aluminidesignation);
        formData.append('university', aluminiuniversity);

        // Append multiple images to formData
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        try {
            const response = await axiosInstance.post('/alumni', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                // Show success alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Your form has been submitted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Redirect to the spotlight page
                        navigate('/alumni');
                    }
                });
            }
        } catch (error) {
            // Handle error
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'There was an issue with your submission. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className='w-100 add-alumini'>
            <div className='container'>
                <div className='padding section-heading text-center'>
                    <h2>Add Alumini</h2>
                </div>
                <div className='alumini-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="alumniImage" className="form-label">Alumini Image</label>
                            <input
                                className="form-control"
                                type="file"
                                id="alumniImage"
                                multiple
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="aluminidesignation" className="form-label">Add Designation</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="aluminidesignation"
                                        value={aluminidesignation}
                                        onChange={(e) => setAluminidesignation(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="aluminiuniversity" className="form-label">Add University</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="aluminiuniversity"
                                        value={aluminiuniversity}
                                        onChange={(e) => setAluminiuniversity(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddAlumini;
