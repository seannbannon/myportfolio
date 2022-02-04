import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href='add link here'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
                
                <div className='profile-details-name'>
                    <span className='primary-text'>
                    {" "}
                    Hello, I'M <span className='highlighted-text'>Sean</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                           {" "}
                           <Typical
                           loop = {Infinity}
                           steps = {[
                               "Ethusiastic Dev",
                               1000,
                               "Full Stack Developer 💻",
                               1000,
                               "MERN Stack Dev",
                               1000,
                               "Cross Platform Dev",
                               1000,
                               "React/React Native Dev",
                               1000,
                           ]}
                           /> 
                        </h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}
