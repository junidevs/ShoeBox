import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Preloader from '../Preloader';
import { SignUpLink } from '../SignUp/SignUpPage';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import  {PasswordForgetLink}    from '../PasswordForget/PasswordForgetPage';
const LoginPage = () => (
  <div>
   
    <LoginForm />
 
  </div>
);
 


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class Login extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <div className="loginContainer">
      <Preloader />
 
       <div className="formContainer col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5">
           
       <form className="col-10" onSubmit={this.onSubmit}>
       <h1 className="col-xxl-12">Log In</h1>
<div className="col-12">
<label for="exampleInputEmail1" className="form-label ">Email address</label>
<input  name="email"   value={email} onChange={this.onChange} type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

</div>

<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Password</label>
<input name="password" value={password} onChange={this.onChange} type="password" required className="form-control passInput" id="exampleInputPassword1"/>
</div>

<div className="mb-3 col-12 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" for="exampleCheck1">Accept our terms and policy</label>

</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck2"/>
<label className="form-check-label" for="exampleCheck2">Accept to receive our newsletter</label>

</div>
<PasswordForgetLink />
<button disabled={isInvalid} type="submit" className="btn-custom col-6">
 Sign In
</button>
{error && <p>{error.message}</p>}

</form>
   
       </div>
        <div className="adsContainer col-1 col-sm-1 col-md-1 col-lg-6 col-xl-7 col-xxl-7">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active carouselBox" data-bs-interval="10000">
//<img className="customSliderImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.1zoom.me%2Fbig0%2F255%2FChickens_Black_background_Eggs_517999_1365x1024.jpg&f=1&nofb=1" className="d-block w-100" alt="..."/>
</div>
<div className="carousel-item carouselBox" data-bs-interval="2000">
<h1>Your data are save with us</h1>
//<img className="customSliderImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.funchap.net%2Fwp-content%2Fuploads%2F2014%2F03%2Fangry_birds_black_wallpaper.jpg&f=1&nofb=1" className="d-block w-100" alt="..."/>
</div>
<div className="carousel-item carouselBox">
<h1>We have special offer for our regular customers</h1>
//<img className="customSliderImage" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercrafter.com%2Fuploads%2Fposts%2F62754-___easter-egg.jpg&f=1&nofb=1" className="d-block w-100" alt="..."/>
</div>
</div>
<a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</a>
</div>
       </div>
   </div>
    );
  }
}
 
const LoginForm = compose(
  withRouter,
  withFirebase,
)(Login);

export { LoginForm };
export default LoginPage;
