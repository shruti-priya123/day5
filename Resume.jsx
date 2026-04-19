import React, { useState } from 'react';

const Resume = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [name, setName] = useState('Shrut [Your Last Name]');
  const [about, setAbout] = useState('Software Engineer | Full Stack Developer | Passionate about building scalable web applications using React, Node.js, and modern tech stacks.');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePhoto(url);
    }
  };

  const education = [
    { degree: 'Bachelor of Engineering in Computer Science', school: 'University Name', year: '2020 - 2024' },
    { degree: 'High School', school: 'School Name', year: '2018 - 2020' },
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Bootstrap', level: 75 },
    { name: 'Git', level: 90 },
  ];

  const links = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'fab fa-linkedin' },
    { name: 'Portfolio', url: 'https://yourportfolio.com', icon: 'fas fa-globe' },
  ];

  return (
    <div className="resume-container">
      {/* Header */}
      <header className="text-center mb-5">
        <div className="photo-upload mb-4">
          <img src={profilePhoto || '/hero.png'} alt="Profile" className="profile-img rounded-circle mx-auto d-block mb-3" style={{width: '150px', height: '150px', objectFit: 'cover'}} />
          <input type="file" className="form-control" accept="image/*" onChange={handlePhotoUpload} />
        </div>
        <h1 className="display-4 fw-bold">{name}</h1>
        <p className="lead">{about}</p>
      </header>

      <div className="row">
        {/* Left Column - Skills & Links */}
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Skills</h5>
            </div>
            <div className="card-body">
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: `${skill.level}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">Links</h5>
            </div>
            <div className="card-body">
              {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100 mb-2">
                  <i className={link.icon}></i> {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Education & Experience */}
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Education</h5>
            </div>
            <div className="card-body">
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h6 className="fw-bold">{edu.degree}</h6>
                  <p className="text-muted mb-1">{edu.school}</p>
                  <small className="text-muted">{edu.year}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">Experience</h5>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <h6 className="fw-bold">Software Engineer Intern</h6>
                <p className="text-muted mb-1">Company Name, Remote</p>
                <small className="text-muted">June 2023 - Present</small>
                <ul className="mt-2">
                  <li>Developed React apps with Bootstrap</li>
                  <li>Implemented file upload features</li>
                  <li>Collaborated on team projects</li>
                </ul>
              </div>
              {/* Add more experiences */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

