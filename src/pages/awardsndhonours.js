import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import Swal from 'sweetalert2'; // Import SweetAlert2

function Awards() {
    const [awardName, setAwardName] = useState('');
    const [awardby, setAwardBy] = useState('');
    const [awardyear, setAwardYear] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh
        try {
            const response = await axiosInstance.post('/awards', {
                awardName,
                awardby,
                awardyear,
            });
            console.log('Award content created:', response.data);

            // Show success message
            await Swal.fire({
                title: 'Success!',
                text: 'Award has been added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            // Reset the form fields
            setAwardName('');
            setAwardBy('');
            setAwardYear('');
        } catch (error) {
            console.error('Error creating award content:', error.response.data);
            // Optionally handle error feedback to the user
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add award. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className='w-100 awards-nd-honours'>
            <div className='container'>
                <div className='section-heading text-center'>
                    <h2>Awards & Honours</h2>
                </div>
                <div className='form-content'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="awardname" className="form-label">Award Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="awardname" 
                                value={awardName} 
                                onChange={(e) => setAwardName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="awardby" className="form-label">Award By</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="awardby" 
                                value={awardby} 
                                onChange={(e) => setAwardBy(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="awardyear" className="form-label">Award Year</label>
                            <input 
                                type="number" // Change to 'number' to ensure it only accepts numbers
                                className="form-control"
                                id="awardyear" 
                                value={awardyear} 
                                onChange={(e) => setAwardYear(e.target.value)} 
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

export default Awards;
