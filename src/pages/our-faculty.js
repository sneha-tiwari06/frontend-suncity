import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosInstance';

function OurFaculty() {
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('content', content);
        images.forEach((image) => {
            formData.append('images', image);
        });

        try {
            const response = await axiosInstance.post('/faculty', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            Swal.fire('Success!', response.data.message, 'success');
            // Reset the form fields
            setContent('');
            setImages([]);
        } catch (error) {
            Swal.fire('Error!', error.response.data.message || 'Failed to create faculty.', 'error');
        }
    };

    return (
        <div className='w-100 our-faculty'>
            <div className='container'>
                <div className='section-heading'>
                    <h2>Our Faculty</h2>
                </div>
                <div className='form-content'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Add Content</label>
                            <textarea 
                                type="text" 
                                className="form-control" 
                                id="content" 
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Add Image</label>
                            <input 
                                className="form-control" 
                                type="file" 
                                id="formFile" 
                                multiple 
                                onChange={handleImageChange} 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OurFaculty;
