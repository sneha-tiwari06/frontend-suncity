import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddSpotlight() {
    const [spotLightTitle, setSpotLightTitle] = useState('');
    const [spotlightDate, setSpotlightDate] = useState('');
    const [spotlightLocation, setSpotlightLocation] = useState('');
    const [spotlightContent, setSpotlightContent] = useState('');
    const [images, setImages] = useState([]);

    const navigate = useNavigate();

    // Handle file input change
    const handleFileChange = (e) => {
        setImages(e.target.files);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData to send file data
        const formData = new FormData();
        formData.append('title', spotLightTitle);
        formData.append('date', spotlightDate);
        formData.append('location', spotlightLocation);
        formData.append('content', spotlightContent);

        // Append multiple images to formData
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        try {
            const response = await axiosInstance.post('/spotlights', formData);
            
            if (response.status === 200) {
                // Show success alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Your form has been submitted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Redirect to the spotlight page
                        navigate('/spotlight');
                    }
                });
            }
        } catch (error) {
            // Handle error
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue with your submission. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className='w-100 spotlight-section'>
            <div className='container'>
                <div className='section-heading text-center'>
                    <h2>Spotlight</h2>
                </div>
                <div className='spotlight-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="spotLightTitle" className="form-label">Add Spotlight Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="spotLightTitle"
                                value={spotLightTitle}
                                onChange={(e) => setSpotLightTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="spotlightDate" className="form-label">Add Spotlight Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="spotlightDate"
                                value={spotlightDate}
                                onChange={(e) => setSpotlightDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="spotlightLocation" className="form-label">Add Spotlight Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="spotlightLocation"
                                value={spotlightLocation}
                                onChange={(e) => setSpotlightLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="spotlightContent" className="form-label">Add Spotlight Content</label>
                            <textarea
                                className="form-control"
                                id="spotlightContent"
                                value={spotlightContent}
                                onChange={(e) => setSpotlightContent(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photogallery" className="form-label">Add Photo Gallery</label>
                            <input
                                className="form-control"
                                type="file"
                                id="photogallery"
                                multiple
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddSpotlight;
