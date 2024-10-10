import React from 'react'
import { Link } from 'react-router-dom'

function HomeBanner() {
    return (
        <div className='w-100 home-banner'>
            <div className='container'>
                <div className='padding section-heading text-center'>
                    <h2>Website Banner</h2>
                </div>
                <div className='action-button d-flex mb-3'>
                    <div className='add-post'>
                    <Link to='/add-home-banner'><button type="button" className="btn btn-success"> Add Banner</button></Link>
                    </div>
                    <div className='back-button'>
                    <Link to ='/'><button type="button" className="btn btn-primary"> Back</button></Link>
                    </div>
                </div>
                <div className='home-banner-content'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr. Number</th>
                                <th scope="col">Banner Image</th>
                                <th scope="col">Alternate Text</th>
                                <th scope="col">Create At</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner