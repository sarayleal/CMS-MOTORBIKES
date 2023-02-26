import React from 'react';

const AboutCard = ({ name, linkedin, git, image }) => {
  return (
    <div>
      <div className="about">
        <div className="about-info">
          <div
            className="about-avatar"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="about-title">{name}</div>
          <div className="about-subtitle">Jr. Fullstack Developer</div>
        </div>
        <ul className="about-social">
          <li className="about-social__item">
            <a target="_blank" rel="noreferrer" href={git}>
              <img
                src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/github_imanj1.png"
                alt="logogit"
              />
            </a>
          </li>
          <li className="about-social__item">
            <a target="_blank" rel="noreferrer" href={linkedin}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
