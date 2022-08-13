import { Link } from 'react-router-dom';

import Card from '../ui/Card';

import classes from './UpdateProfile.module.css';
import UpdateProfileForm from './UpdateProfileForm';

const UpdateProfile = () => {
  return (
    <section className={classes.signup}>
      <Card>
        <h1>Update Profile</h1>
        <UpdateProfileForm />
      </Card>
      <div className={classes.link}>
        <Link to="/dashboard">Cancel</Link>
      </div>
    </section>
  );
};

export default UpdateProfile;
