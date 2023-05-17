import * as React from "react";
const SvgPhonebooth = ({ title, titleId, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 365.086 365.086'
    width='1em'
    height='1em'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d='M170.092 214.583h24.905v136.95h-24.905z'
      style={{
        fill: "#1e252b"
      }}
    />
    <path
      d='M123.684 0h102.424c12.25 0 22.273 10.024 22.273 22.274v180.865c0 12.25-10.023 22.273-22.273 22.273H123.684a6.98 6.98 0 0 1-6.979-6.979V6.98A6.98 6.98 0 0 1 123.684 0z'
      style={{
        fill: "#005cb9"
      }}
    />
    <path
      d='M134.162 359.277c0 3.195 2.614 5.809 5.809 5.809h85.145c3.195 0 5.809-2.614 5.809-5.809v-7.745c0-3.193-2.614-5.807-5.809-5.807h-85.145c-3.195 0-5.809 2.614-5.809 5.807v7.745z'
      style={{
        fill: "#333e48"
      }}
    />
    <path
      d='M189.807 61.386c5.313-.577 11.363-.229 18.485 6.144 7.123 6.373 12.103 24.799-1.707 53.087-13.545 27.747-28.065 34.928-40.983 34.734-10.498-.158-17.436-5.876-18.229-7.469-.794-1.593-1.832-2.982.641-5.759 2.471-2.778 9.582-10.739 10.904-12.086s2.864-4.142 6.288-2.52c3.424 1.623 6.376 2.895 8.005 3.542 1.628.647 7.97 3.346 17.774-16.193 9.805-19.541 6.551-20.881 3.518-22.074-3.032-1.192-5.521-2.148-6.698-3.02-1.178-.872-2.503-1.664-2.455-4.126.049-2.464.226-20.333.24-21.304.015-.97 1.115-2.62 4.217-2.956z'
      style={{
        fill: "#fff"
      }}
    />
    <path
      d='M116.705 187.992h131.676v11.583H116.705z'
      style={{
        fill: "#61b4e4"
      }}
    />
    <circle
      cx={182.543}
      cy={29.997}
      r={4.957}
      style={{
        fill: "#1e252b"
      }}
    />
    <circle
      cx={153.533}
      cy={29.997}
      r={4.957}
      style={{
        fill: "#1e252b"
      }}
    />
    <circle
      cx={211.553}
      cy={29.997}
      r={4.957}
      style={{
        fill: "#1e252b"
      }}
    />
  </svg>
);
export default SvgPhonebooth;
