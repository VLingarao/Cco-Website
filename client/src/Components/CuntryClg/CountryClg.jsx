import { useState } from 'react';
import './CountryClg.css'; //Australia,Canada,US,UK

const colleges = [
  { name: 'University Of New Haven', country: 'US', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732510945/ccouniversitynewhaven_nbzoos.jpg' },
  { name: 'University Of Bridgeport', country: 'US', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732604079/university_of_bridgeport_ioekwt.jpg' },
  { name: 'Nova Southeastern University', country: 'US', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732604756/university_logo_01_hfl2mo.jpg' },
  { name: 'Shorelight', country: 'US', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732605087/university_logo_02_rkorux.jpg' },
  { name: 'Colorado State University', country: 'US', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732605219/university_logo_03_hcsoxp.jpg' },
  { name: 'Coventry University', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732605319/university_logo_04_smoyo2.jpg' },
  { name: 'Ravensbourne University', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732605415/university_logo_05_moos2n.jpg' },
  { name: 'University of Leicester', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732605603/university_logo_06_zntzmu.jpg' },
  { name: 'The University of Buckingham', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732605745/university_logo_07_j5dnd9.jpg' },
  { name: 'Ulster University', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732605819/university_logo_08_brrogv.jpg' },
  { name: 'University of East London', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732606078/university_logo_09_l7nbof.jpg' },
  { name: 'University of Portsmouth', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732606152/university_logo_10_vd5s2s.jpg' },
  { name: 'University of Greenwich', country: 'UK', image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732606233/university_logo_11_fsw1ft.jpg' },
  { name: 'University of Hertfordshire', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732608496/university_logo_12_ty3hbp.jpg'},
  { name: 'University of Roehampton London', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732608659/university_logo_1_qu0swr.jpg'},
  { name: 'Solent University Southampton', country:'', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732608850/university_logo_012_a8kerf.jpg'},
  { name: 'Teesside University', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732608965/university_logo_124_piwawq.jpg'},
  { name: 'University of Cardiff Metropolitan', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732609075/university_logo_0124_kbwvug.jpg'},
  { name: 'Northumbria University', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732609169/university_logo_012457_wnzp7z.jpg'},
  { name: 'Sheffield Hallam University', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732609287/university_logo_0124578_du1wjl.jpg'},
  { name: 'Anglia Ruskin University', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732609448/university_logo_satish_yyrss8.jpg'},
  { name: 'University of Bedfordshire', country:'UK', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732609593/university_logo_venkat_xrunhf.jpg'},
  { name: 'The Australian National University', country:'Australia', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732613199/university_logo_gayatri_y4ftjx.jpg'},
  { name: 'University of Niagara Falls', country:'Canada', image:'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732613144/university_logo_suman_cjnr1q.jpg'},
];

function CountryClg() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const filteredColleges = selectedCountry === 'All'
    ? colleges
    : colleges.filter(college => college.country === selectedCountry);

  return (
    <div className="cuntryclg-main">
        <h1 className='cuntryclg-main-head'>University Partners</h1>
      <div className="button-group">
        {['All', 'US', 'UK', 'Australia', 'Canada'].map((country) => (
          <button
            key={country}
            className={selectedCountry === country ? 'active' : ''}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="college-list">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, index) => (
            <div key={index} className="college-card">
              <img src={college.image} alt={college.name} className="college-image" />
              <div className="college-info">
                {/* <h3>{college.name}</h3> 
               <p>{college.country}</p> */}
              </div>
            </div>
          ))
        ) : (
          <p>No colleges found for {selectedCountry}</p>
        )}
      </div>
    </div>
  );
}

export default CountryClg;
