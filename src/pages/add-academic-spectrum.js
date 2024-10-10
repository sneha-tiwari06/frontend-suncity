import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosInstance';

function AddAcademicSpectrum() {
    const [formData, setFormData] = useState({
        faculty: '',
        campusArea: '',
        ageRange: '',
        totalStudents: '',
        sports: '',
        averageStudents: {
            eyp: '',
            primary: '',
        },
        studentTeacherRatio: {
            eyp: '',
            primary: '',
            secondary: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested state updates for averageStudents and studentTeacherRatio
        if (name.startsWith('averageStudents') || name.startsWith('studentTeacherRatio')) {
            const group = name.split('.')[0];
            const field = name.split('.')[1];
            
            setFormData(prevState => ({
                ...prevState,
                [group]: {
                    ...prevState[group],
                    [field]: value,
                },
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Process studentTeacherRatio to create numerator and denominator
        const ratios = formData.studentTeacherRatio;
        const formattedRatios = {
            eyp: {
                numerator: Number(ratios.eyp.split(':')[0]),
                denominator: Number(ratios.eyp.split(':')[1]),
            },
            primary: {
                numerator: Number(ratios.primary.split(':')[0]),
                denominator: Number(ratios.primary.split(':')[1]),
            },
            secondary: {
                numerator: Number(ratios.secondary.split(':')[0]),
                denominator: Number(ratios.secondary.split(':')[1]),
            },
        };
    
        const dataToSubmit = {
            ...formData,
            studentTeacherRatio: formattedRatios,
        };
    
        try {
            // Submit form data to your API
            await axiosInstance.post('/academic-spectrum', dataToSubmit);
    
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Academic Spectrum entry created successfully!',
                confirmButtonText: 'OK',
            });

            // Reset form fields
            setFormData({
                faculty: '',
                campusArea: '',
                ageRange: '',
                totalStudents: '',
                sports: '',
                averageStudents: {
                    eyp: '',
                    primary: '',
                },
                studentTeacherRatio: {
                    eyp: '',
                    primary: '',
                    secondary: '',
                },
            });
        } catch (error) {
            console.error('Error creating Academic Spectrum entry:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to create entry. Please try again.',
                confirmButtonText: 'OK',
            });
        }
    };


    return (
        <div className='w-100 padding academic-spectrum'>
            <div className='container'>
                <div className='padding section-heading text-center'>
                    <h2>Academic Spectrum</h2>
                </div>
                <div className='academic-data-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="faculty" className="form-label">Faculty</label>
                                    <input type="text" className="form-control" id="faculty" name="faculty" value={formData.faculty} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="campusArea" className="form-label">Campus Area</label>
                                    <input type="text" className="form-control" id="campusArea" name="campusArea" value={formData.campusArea} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ageRange" className="form-label">Age Range</label>
                                    <input type="text" className="form-control" id="ageRange" name="ageRange" value={formData.ageRange} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="totalStudents" className="form-label">Total Students</label>
                                    <input type="text" className="form-control" id="totalStudents" name="totalStudents" value={formData.totalStudents} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="sports" className="form-label">Sports Played in Campus</label>
                                    <input type="text" className="form-control" id="sports" name="sports" value={formData.sports} onChange={handleChange} />
                                </div>
                                <div className='col-md-6'>
                                    <label className="form-label">Average No. of students</label>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="mb-3">
                                                <label htmlFor="averageStudents.eyp" className="form-label">EYP</label>
                                                <input type="text" className="form-control" id="averageStudents.eyp" name="averageStudents.eyp" value={formData.averageStudents.eyp} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="mb-3">
                                                <label htmlFor="averageStudents.primary" className="form-label">Primary</label>
                                                <input type="text" className="form-control" id="averageStudents.primary" name="averageStudents.primary" value={formData.averageStudents.primary} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <label className="form-label text-center">Student Teacher Ratio</label>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="mb-3">
                                            <label htmlFor="studentTeacherRatio.eyp" className="form-label">EYP (numerator:denominator)</label>
                                            <input type="text" className="form-control" id="studentTeacherRatio.eyp" name="studentTeacherRatio.eyp" value={formData.studentTeacherRatio.eyp} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="mb-3">
                                            <label htmlFor="studentTeacherRatio.primary" className="form-label">Primary (numerator:denominator)</label>
                                            <input type="text" className="form-control" id="studentTeacherRatio.primary" name="studentTeacherRatio.primary" value={formData.studentTeacherRatio.primary} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="mb-3">
                                            <label htmlFor="studentTeacherRatio.secondary" className="form-label">Secondary (numerator:denominator)</label>
                                            <input type="text" className="form-control" id="studentTeacherRatio.secondary" name="studentTeacherRatio.secondary" value={formData.studentTeacherRatio.secondary} onChange={handleChange} />
                                        </div>
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

export default AddAcademicSpectrum;
