import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e:any) => {
        e.preventDefault();
        if (username && password) {
            navigate('/Kanbas/Dashboard');
        } else {
            alert('Please enter both username and password');
        }
    };

    const handleSignUp = (e:any) => {
        e.preventDefault();
        navigate('/signup');
    };

    return (
        <div id="wd-css-login-forms-2" style={{ maxWidth: '500px', margin: 'auto', paddingTop: '100px'}}>
            <h3><b>Northeastern University</b></h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="r1" className="form-label">
                        myNortheastern Username
                    </label>
                    <input type="username" className="form-control" id="r1" style={{ maxWidth: '300px'}}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="r2" className="form-label">
                        myNortheastern Password
                    </label>
                    <input type="password" className="form-control" id="r2" style={{ maxWidth: '300px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <fieldset className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="signin" id="r3" value="student" defaultChecked />
                        <label className="form-check-label" htmlFor="r3">
                            Student
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="signin" id="r4" value="faculty" />
                        <label className="form-check-label" htmlFor="r4">
                            Faculty
                        </label>
                    </div>
                </fieldset>
                <div className="d-flex justify-content-center" style={{ maxWidth: '300px' }}>
                    <button onClick={handleSignIn} className="btn btn-primary">
                        Sign in
                    </button>
                    <button onClick={handleSignUp} className="btn btn-danger ms-2">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}


