import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const EmailSent = () => {
  const data = useSelector(state => state.user.details) || {}
  const movie = useSelector(state => state.movie.selected_movie) || {}
  const navigate = useNavigate();

  return (
    <div className="app gold" style={{marginTop: '140px'}}>
      <div>
        <h3 style={{marginTop: '40px'}}>{`Dear, ${data.first_name},`}</h3>
        <h3>{`The download link was sent to your email address:
        ${data.email}. `}</h3>
        <h3>{`Have fun watching the ${movie.Title} movie!`}</h3>
      </div>
      <button
        style={{marginTop: '40px'}}
        className="btn normal fill cardinal"
        type={"submit"}
        onClick={() => { navigate(`../`);
        }}
      >
        Go back to movies
      </button>
    </div>
  );
}

export default EmailSent