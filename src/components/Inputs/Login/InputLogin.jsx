import React from 'react'
import './InputLogin.css'

export default props => {

    return (
        <div>
            <div className="form-group">
                <label className="text-info">Username:</label><br />
                <input type="text" name="username" id="username" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-info">Password:</label><br />
                <input type="text" name="password" id="password" className="form-control" />
            </div>
        </div>
    )
}
   