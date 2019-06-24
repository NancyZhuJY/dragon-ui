import React from 'react';

const SvgMenu = props => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <path id="menu_svg__a" d="M13.432 14.222H0V.79h13.432z" />
      <path id="menu_svg__c" d="M13.467 14.222H.035V.79h13.432v13.432z" />
    </defs>
    <g stroke="none" fill="none" fillRule="evenodd">
      <path
        d="M11.896 13.432H1.536A1.536 1.536 0 0 1 0 11.896V1.536C0 .687.688 0 1.536 0h10.36c.849 0 1.536.688 1.536 1.535v10.361c0 .849-.687 1.536-1.536 1.536m17.812 0h-10.36a1.536 1.536 0 0 1-1.535-1.536V1.536C17.813.687 18.5 0 19.349 0h10.36c.848 0 1.535.688 1.535 1.535v10.361c0 .849-.687 1.536-1.536 1.536"
        fill="currentColor"
      />
      <g transform="translate(0 17.023)">
        <mask id="menu_svg__b" fill="#fff">
          <use xlinkHref="#menu_svg__a" />
        </mask>
        <path
          d="M11.896 14.223H1.536A1.536 1.536 0 0 1 0 12.687V2.326C0 1.478.688.79 1.536.79h10.36c.849 0 1.536.688 1.536 1.536v10.36c0 .848-.687 1.537-1.536 1.537"
          fill="currentColor"
          mask="url(#menu_svg__b)"
        />
      </g>
      <g transform="translate(17.778 17.023)">
        <mask id="menu_svg__d" fill="#fff">
          <use xlinkHref="#menu_svg__c" />
        </mask>
        <path
          d="M11.93 14.223H1.572a1.536 1.536 0 0 1-1.536-1.536V2.326A1.534 1.534 0 0 1 1.571.79h10.36c.848 0 1.536.688 1.536 1.536v10.36c0 .848-.688 1.537-1.536 1.537"
          fill="currentColor"
          mask="url(#menu_svg__d)"
        />
      </g>
    </g>
  </svg>
);

export default SvgMenu;