import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function AddHomeBanner() {
    const [videoFile, setVideoFile] = useState(null);
    const [videoText, setVideoText] = useState('');
    const navigate = useNavigate(); // Hook for navigation after successful submission

    // Handle file input change
    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]); // Get the first file from the input
    };

    // Handle text input change
    const handleTextChange = (event) => {
        setVideoText(event.target.value);
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData(); // Create a FormData object
        formData.append('video', videoFile); // Append the video file
        formData.append('alternateText', videoText); // Append the video text
        console.log('Video File:', videoFile); // Log the video file
        console.log('Form Data:', formData); // Check if the FormData is constructed properly

        try {
            const response = await axiosInstance.post('/banner-images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
                },
            });
            // If successful, navigate back to the home banner page
            console.log(response.data);
            navigate('/home-banner'); // Navigate to the home banner page or any other page you want
        } catch (error) {
            console.error('Error uploading video:', error);
            // Handle the error (show a message, etc.)
        }
    };

    return (
        <div className='w-100 content'>
            <div className='container'>
                <div className='home-banner-content'>
                    <div className='padding section-heading text-center mb-3'>
                        <h2>Add Home Banner Video</h2>
                    </div>

                    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                        <Link to='/home-banner'>
                            <button className="btn btn-primary" type="button">Back</button>
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='video-content'>
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Add Banner Video</label>
                                        <input 
                                            className="form-control" 
                                            type="file" 
                                            id="formFile" 
                                            accept="video/*" // Allow only video files
                                            onChange={handleFileChange} // Handle file change
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='video-tag'>
                                    <div className="mb-3">
                                        <label htmlFor="video-text" className="form-label">Video Text</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="video-text" 
                                            placeholder="Add Video Caption" 
                                            value={videoText} // Bind value to state
                                            onChange={handleTextChange} // Handle text change
                                        />
                                    </div>
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

export default AddHomeBanner;
