import React from 'react';

const SignUp: React.FC = () => {
    return (
        <div style={{ maxWidth: '500px', margin: 'auto', paddingTop: '100px' }}>
            <h1>Sign Up Page</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" style={{ maxWidth: '300px' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" style={{ maxWidth: '300px' }} />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;