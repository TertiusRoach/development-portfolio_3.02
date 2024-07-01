// Header.resume.tsx

import $ from 'jquery';
import React from 'react';
// import ButtonFade from '../../button/fade';
// import { buttonIcon } from '../../button/icon';
import { useMediaQuery } from 'react-responsive';

// import { activeButton, scrollToSection } from '../../main/default-main/default-main';

function defaultHeader(page: string | any, label: string | any, block: string | any) {
  // console.log('page');
  // console.log('label');
  // console.log('block');

  // console.log(page);
  // console.log(label);
  // console.log(block);
  const sectionHeader = (element: React.MouseEvent<HTMLElement>): void => {
    console.log(element);
    console.log(`${element} Hovered`);
  };

  /*
  const wrapperFunction = (element: React.MouseEvent<HTMLElement>): void => {
    // scrollSection(element, '<header>');
    // activeButton(element.target as HTMLButtonElement);
  };
  */

  return (
    <header style={{ zIndex: 4 }} id={`${page}-${block}`} className={`${label}-${block}`}>
      {
        //--|🠋 Desktop (Landscape) 🠋|--//
        useMediaQuery({ query: '(orientation: landscape) and (min-aspect-ratio: 16/9)' }) && (
          <>
            {/* <ButtonFade click={wrapperFunction} className="header-home" icon={buttonIcon.home} text="Home" state="active" />
            <ButtonFade click={wrapperFunction} className="header-skills" icon={buttonIcon.skills} text="Skills" />
            <ButtonFade click={wrapperFunction} className="header-contact" icon={buttonIcon.telephone} text="Contact" />
            <div>
              <img src={buttonIcon.logo} alt="Résumé Logo" />
            </div> */}
          </>
        )
      }
      {
        //--|🠋 Mobile (Portrait) 🠋|--//
        useMediaQuery({ query: '(orientation: portrait) and (max-aspect-ratio: 1/1)' }) && (
          <>
            {/* <div>
              <img src={buttonIcon.logo} alt="Résumé Logo" />
            </div> */}
          </>
        )
      }
      {
        //--|🠋 Tablet (Square) 🠋|--//
        useMediaQuery({ query: '(max-aspect-ratio: 16/9) and (min-aspect-ratio: 1/1)' }) && (
          <>
            {/* <ButtonFade className="header-projects" icon={buttonIcon.projects} text="Projects" /> */}
            {/* <div>
              <img src={buttonIcon.logo} alt="Résumé Logo" />
            </div> */}
          </>
        )
      }
    </header>
  );
  console.log(`//--|🠊 ${label}-${block}.tsx Loaded 🠈|--//`);
}
export default defaultHeader;
