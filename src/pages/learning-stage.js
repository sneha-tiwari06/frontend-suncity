import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosInstance';

function LearningStage() {
    const [contentElementary, setContentElementary] = useState('');
    const [contentPrimary, setContentPrimary] = useState('');
    const [contentMiddle, setContentMiddle] = useState('');
    const [contentSecondary, setContentSecondary] = useState('');
    
    const [imagesElementary, setImagesElementary] = useState([]);
    const [imagesPrimary, setImagesPrimary] = useState([]);
    const [imagesMiddle, setImagesMiddle] = useState([]);
    const [imagesSecondary, setImagesSecondary] = useState([]);

    const handleImageChange = (e, setImageFunc) => {
        setImageFunc([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('contentElementary', contentElementary);
        formData.append('contentPrimary', contentPrimary);
        formData.append('contentMiddle', contentMiddle);
        formData.append('contentSecondary', contentSecondary);
        
        imagesElementary.forEach((image) => formData.append('imagesElementary', image));
        imagesPrimary.forEach((image) => formData.append('imagesPrimary', image));
        imagesMiddle.forEach((image) => formData.append('imagesMiddle', image));
        imagesSecondary.forEach((image) => formData.append('imagesSecondary', image));

        try {
            const response = await axiosInstance.post('/learning-stage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            Swal.fire('Success!', response.data.message, 'success');
            // Reset the form fields
            setContentElementary('');
            setContentPrimary('');
            setContentMiddle('');
            setContentSecondary('');
            setImagesElementary([]);
            setImagesPrimary([]);
            setImagesMiddle([]);
            setImagesSecondary([]);
        } catch (error) {
            Swal.fire('Error!', error.response?.data?.message || 'Failed to submit.', 'error');
        }
    };

    return (
        <div className='w-100 learning-stage'>
            <div className='container'>
                <div className='section-heading text-center'>
                    <h2>Learning Stage</h2>
                </div>
                <div className='form-content'>
                    <form onSubmit={handleSubmit}>
                        {/* Elementary Section */}
                        <div className="mb-3">
                            <label htmlFor="contentElementary" className="form-label">Add Elementary Year Content</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="contentElementary"
                                value={contentElementary}
                                onChange={(e) => setContentElementary(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageElementary" className="form-label">Add Elementary Images</label>
                            <input
                                className="form-control"
                                type="file"
                                id="imageElementary"
                                multiple
                                onChange={(e) => handleImageChange(e, setImagesElementary)}
                            />
                        </div>

                        {/* Primary Section */}
                        <div className="mb-3">
                            <label htmlFor="contentPrimary" className="form-label">Add Primary Year Content</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="contentPrimary"
                                value={contentPrimary}
                                onChange={(e) => setContentPrimary(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imagePrimary" className="form-label">Add Primary Images</label>
                            <input
                                className="form-control"
                                type="file"
                                id="imagePrimary"
                                multiple
                                onChange={(e) => handleImageChange(e, setImagesPrimary)}
                            />
                        </div>

                        {/* Middle Section */}
                        <div className="mb-3">
                            <label htmlFor="contentMiddle" className="form-label">Add Middle Year Content</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="contentMiddle"
                                value={contentMiddle}
                                onChange={(e) => setContentMiddle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageMiddle" className="form-label">Add Middle Year Images</label>
                            <input
                                className="form-control"
                                type="file"
                                id="imageMiddle"
                                multiple
                                onChange={(e) => handleImageChange(e, setImagesMiddle)}
                            />
                        </div>

                        {/* Secondary Section */}
                        <div className="mb-3">
                            <label htmlFor="contentSecondary" className="form-label">Add Secondary Year Content</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="contentSecondary"
                                value={contentSecondary}
                                onChange={(e) => setContentSecondary(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageSecondary" className="form-label">Add Secondary Images</label>
                            <input
                                className="form-control"
                                type="file"
                                id="imageSecondary"
                                multiple
                                onChange={(e) => handleImageChange(e, setImagesSecondary)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LearningStage;
