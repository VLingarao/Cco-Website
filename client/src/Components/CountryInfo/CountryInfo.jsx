import { useState } from 'react';
import './CountryInfo.css';

const countryData = [
  {
    countryName: 'Australia',
    image: 'https://edgetechedu.in/wp-content/uploads/2022/01/AUs-300x300.png',
    Description01: "A massive country, and a huge part of the Oceania continent, Australia is a jewel in the Eastern hemisphere. Spanning 7.6M Square kilometers, Australia is home to a bustling flora and fauna with urban settlements mostly relegated to the coastal regions of the country.",
    Description02: "Cloud Career Oversease is extremely keen on guiding aspiring students willing to make a mark academically in Australia. Australian universities are well-known for their employability as well as the adaptability it instills in the students.",
    Question01: "Why Choose Australia",
    Answer01: "Australia is a glaring choice for people willing to move overseas to study or live and work, especially from India. The proximity of the country to the subcontinent alongside relatively easier access to study makes it a possible destination for academic aspirants.",
    Question02: "Innovation",
    Answer02: "Australian educational institutions are widely regarded as the stronghold for practical skills and innovation. Creative boosts and simultaneously, exceptional innovative ideas flow through from Australian universities more often than other places in comparison.",
    Question03: "Globally Ranked Institutions",
    Answer03: "Pristine training facilities paired with immaculate teaching methods will lead you to study in Globally ranked universities in Australia. The student support facilities are another phenomenal reason to stay on top of your craft without any worry.",
    Question04: "Employment Opportunities",
    Answer04: "An Australian educational qualification will not only yield impressive job opportunities in Australia but also worldwide without any possible hesitation. The degree that you’re going to earn will carry a lot of weight and land you in great spots without hassles.",
  },
  {
    countryName: 'United States',
    image: 'https://edgetechedu.in/wp-content/uploads/2022/01/united-flag.png',
    Description01: "The United States of America, commonly known as the United States or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and some minor possessions. ",
    Description02: "At 3.8 million square miles, it is the world’s third- or fourth-largest country by total are",
    Question01: "Why Choose The United States",
    Answer01: "As expressed above, the US has a plethora of highly ranked universities that offer many programs for students interested in gaining knowledge and making a living out of the same.",
    Question02: "Life Styles",
    Answer02: "A very open and welcoming environment, the USA is predominantly made possible by immigrants since its inception. The multicultural hub of the world is an example of pluralism and holds its head high as the world leader!",
    Question03: "Law & Rules",
    Answer03: "Generally, a safe haven for everyone, safety, security, and freedom is given utmost importance in the US. As far as universities are concerned, your presence is safeguarded throughout with appropriate rules and regulations.",
    Question04: "Beautiful Cities",
    Answer04: "Apart from the breathtaking countryside, the US is also home to some of the most powerful and winsome urban settlements in the 21st century.",
  },
  {
    countryName: 'Canada',
    image: 'https://edgetechedu.in/wp-content/uploads/2022/01/Canada-300x300.png',
    Description01: "Canada makes up the upper half of the North American continent with a massive land and water area makeup. It is regarded as the second largest country in the world, only behind Russia. A country with cold winters and warm summers, it’s a place worth exploring.",
    Description02: "Considering the academic situation, Canada boasts an extremely impressive academic track record with incredibly popular educational institutions and courses alike for students all over the world. Management, Administration, and Research are the most sought-after courses in Canada.",
    Question01: "Why Choose Canada",
    Answer01: "Having started late as a country that invited immigrants, Canada has quickly risen to the ranks as a popular place to settle in after education. Even job and living aspirations aside, the educational opportunities in Canada are breathtaking!",
    Question02: "High Quality of Life",
    Answer02: "There’s a good reason why you must move to Canada via Cloud Career Overseas. The exceptionally high quality of life alongside all the laws and regulations safeguarding your presence is more than enough reason.",
    Question03: "Adaptable Educational Options",
    Answer03: "High-quality education with careers in multiple disciplines is extremely possible with universities all across Canada at a high success rate! Study in the greatest universities in the world right now!",
    Question04: "A Pluralistic Society",
    Answer04: "Being led by cultures and ethnicities all over the world, Canada is a modern-day example of exceptional inclusivity that every country must replicate for an unbiased life, in general. Study and live in peace in the haven that Canada is.",
  },
  {
    countryName: 'United Kingdom',
    image: 'https://edgetechedu.in/wp-content/uploads/2022/01/Uk-300x300.png',
    Description01: "The United Kingdom, also regarded as the UK, is an island nation comprising four countries named England, Wales, Scotland, and Northern Ireland. The entirety of the UK is made up of 82 metropolitan and non-metropolitan counties. Spanning 243,610 km², the UK is considerably smaller as a country area-wise.",
    Description02: "However, even with the smaller land area, the UK is filled to the brim with exceptional educational institutions that provide impeccable education to students all across the world, particularly aspirants from India. Computer Science and Management are the most preferred courses to study in the UK.",
    Question01: "Why Choose the United Kingdom",
    Answer01: "As with any region, the UK has a bunch of positives that led to the influx of immigrants from all across the planet. Particularly for students, the UK is a favorable destination. Cloud Career Oversease specializes in handling UK Study Visa matters for years now. Here are some of the reasons why you must choose the UK to study.",
    Question02: "Globally Recognized Universities & Teaching Quality",
    Answer02: "Leading the world of education, the UK is significantly popular when it comes to the high level of education, teaching quality, and globally recognized universities. This is the biggest reason for students from all over the world to flock to the UK & pursue their academic goals!",
    Question03: "Employability Factors",
    Answer03: "As a UK graduate, your employability increases multiple times comparatively. 3 universities from the UK have ranked in the top 20 for employability and the students from these universities have a considerable competitive advantage over their peers from other countries.",
    Question04: "Working & Living in the UK",
    Answer04: "Right after your education, your chances of working and living in the UK improve substantially. You can stay for up to 2 years after your education, except for Ph.D. candidates who can stay for 3 years.",
  },

];

function CountryInfo() {
  const [selectedCountry, setSelectedCountry] = useState('Australia');  // Default country
  const filteredCountryData = countryData.filter(country => country.countryName === selectedCountry);

  return (
    <div className="countryinfo-main">
      <h1 className="countryinfo-main-head">Countries We Serve</h1>

      <div className="button-group">
        {['Australia', 'United Kingdom', 'Canada','United States', ].map((country) => (
          <button
            key={country}
            className={selectedCountry === country ? 'active' : ''}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="country-info">
        {filteredCountryData.length > 0 ? (
          filteredCountryData.map((country, index) => (
            <div key={index} className="country-detail">
              <div className="country-main">
                <div className="country-image">
                  <img src={country.image} alt={country.countryName} />
                </div>
                <div className="country-description">
                  <h2>{country.countryName}</h2>
                  <p>{country.Description01}</p>
                  <p>{country.Description02}</p>
                </div>
              </div>
              <div className="country-qa">
                <div className="qa-item">
                  <h3>{country.Question01}</h3>
                  <p>{country.Answer01}</p>
                </div>
                <div className="qa-item">
                  <h3>{country.Question02}</h3>
                  <p>{country.Answer02}</p>
                </div>
                <div className="qa-item">
                  <h3>{country.Question03}</h3>
                  <p>{country.Answer03}</p>
                </div>
                <div className="qa-item">
                  <h3>{country.Question04}</h3>
                  <p>{country.Answer04}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No country information available.</p>
        )}
      </div>
    </div>
  );
}

export default CountryInfo;
