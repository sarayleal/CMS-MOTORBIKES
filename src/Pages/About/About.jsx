import './About.css';

import AboutCard from './AboutCard';

const About = () => {
  return (
    <main className="About">
      <h2>Our Team</h2>
      <div className="about-cards">
        <AboutCard
          name={'Laura Villareal '}
          git={'https://github.com/AuralVL'}
          linkedin={'https://www.linkedin.com/in/laura-villarreal-llesta-983990267/'}
          image={
            'https://res.cloudinary.com/dg2xjawnt/image/upload/v1677422925/motos/IMG_20230226_154507_dn250t.jpg'
          }
        />
        <AboutCard
          name={'Jesus Roman'}
          linkedin={'https://www.linkedin.com/in/jes%C3%BAs-rom%C3%A1n-juarez-582249266/'}
          git={'https://github.com/Shuss1988'}
          image={
            'https://res.cloudinary.com/dg2xjawnt/image/upload/v1677422332/motos/1677001858411_wtbusr.jpg'
          }
        />
        <AboutCard
          name={'Pablo Teijeiro'}
          linkedin={'https://www.linkedin.com/in/pablo-teijeiro-lopez-55a483191'}
          git={'https://github.com/PabloTei'}
          image={
            'https://res.cloudinary.com/dg2xjawnt/image/upload/v1677422646/My-Porfolio/1676019148994_1_dfsdgf.jpg'
          }
        />
        <AboutCard
          name={'Saray Leal'}
          git={'https://github.com/sarayleal'}
          linkedin={'https://www.linkedin.com/in/saray-vallecillo-leal-9861b0255/'}
          image={
            'https://res.cloudinary.com/dg2xjawnt/image/upload/v1677423181/motos/142075083_2923119701346999_774519053673826619_n_t0pq9p.jpg'
          }
        />
        <AboutCard
          name={'Sebastian R.'}
          git={'https://github.com/Sriballo93'}
          linkedin={'https://www.linkedin.com/in/sebastian-riballo-herrera-a862b5180/'}
          image={
            'https://res.cloudinary.com/dg2xjawnt/image/upload/v1677421823/motos/1677006417058_juuwh8.jpg'
          }
        />
      </div>
    </main>
  );
};
export default About;
