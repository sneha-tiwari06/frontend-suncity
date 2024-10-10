import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosInstance';

function DirectorsMsg() {
    const [heading, setHeading] = useState('');
    const [personName, setPersonName] = useState('');
    const [content, setContent] = useState('');
    const [designation, setDesignation] = useState('');
    const [images, setImages] = useState(null);

    // Handle file change for the director's image
    const handleFileChange = (e) => {
        setImages(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form data creation for file upload
        const formData = new FormData();
        formData.append('images', images);
        formData.append('heading', heading);
        formData.append('personName', personName);
        formData.append('content', content);
        formData.append('designation', designation);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
        try {
            const response = await axiosInstance.post('/director-msg', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Director created:', response.data);
  
            if (response.status === 200) {
                // Show success alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Your form has been submitted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                // Reset form fields after successful submission
                setHeading('');
                setPersonName('');
                setContent('');
                setDesignation('');
                setImages(null);

                // Optionally reset the file input element as well
                document.getElementById('images').value = '';
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
        <div className='w-100 directors-msg'>
            <div className='container'>
                <div className='section heading'>
                    <h2 className='text-center'>Directors Message</h2>
                </div>
                <div className='form-content'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="images" className="form-label">Add Image</label>
                            <input
                                className="form-control"
                                type="file"
                                id="images"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="heading" className="form-label">Add Heading</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="heading"
                                        value={heading}
                                        onChange={(e) => setHeading(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="personName" className="form-label">Add Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="personName"
                                        value={personName}
                                        onChange={(e) => setPersonName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="content" className="form-label">Add Content</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3">
                                <label htmlFor="designation" className="form-label">Add Designation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="designation"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DirectorsMsg;
