import * as React from "react";
const SvgProfile = ({ title, titleId, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width='1em'
    height='1em'
    viewBox='0 0 511.448 511.448'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d='M203.253 114.33v132.557c0 5.181-4.209 9.389-9.389 9.389h-8.937v-1.845c0-8.351-2.916-16.172-8.042-22.303 9.842-6.087 16.426-17 16.426-29.428a8.288 8.288 0 0 0-8.285-8.285c-5.181 0-9.389-4.209-9.389-9.389V171.77c0-26.5-21.551-48.052-48.052-48.052s-48.052 21.551-48.052 48.052v13.256c0 5.181-4.209 9.389-9.389 9.389-4.573 0-8.285 3.745-8.285 8.318 0 12.405 6.573 23.308 16.426 29.394-5.126 6.131-8.042 13.952-8.042 22.303v1.845h-8.937c-5.181 0-9.389-4.209-9.389-9.389V114.33c0-5.181 4.209-9.389 9.389-9.389h132.557c5.182 0 9.39 4.208 9.39 9.389z'
      style={{
        fill: "#fff"
      }}
    />
    <path
      d='M238.602 69.592v372.263H43.633c-14.924 0-27.064-12.14-27.064-27.064V96.656c0-14.924 12.14-27.064 27.064-27.064h194.969zm-18.779 177.295V114.33c0-14.316-11.643-25.959-25.959-25.959H61.307c-14.316 0-25.959 11.643-25.959 25.959v132.557c0 14.316 11.643 25.959 25.959 25.959h132.557c14.316 0 25.959-11.643 25.959-25.959zm0 53.022a8.288 8.288 0 0 0-8.285-8.285H43.633a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h167.905a8.288 8.288 0 0 0 8.285-8.285zm-35.348 35.349a8.288 8.288 0 0 0-8.285-8.285H43.633c-4.573 0-8.285 3.712-8.285 8.285s3.712 8.285 8.285 8.285H176.19a8.288 8.288 0 0 0 8.285-8.285zm0 35.348a8.288 8.288 0 0 0-8.285-8.285H96.656a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h79.534a8.288 8.288 0 0 0 8.285-8.285zm0 35.349a8.288 8.288 0 0 0-8.285-8.285H96.656c-4.573 0-8.285 3.712-8.285 8.285s3.712 8.285 8.285 8.285h79.534c4.573-.001 8.285-3.712 8.285-8.285zM69.592 370.606a8.288 8.288 0 0 0-8.285-8.285H43.633a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h17.674a8.288 8.288 0 0 0 8.285-8.285zm0 35.349a8.288 8.288 0 0 0-8.285-8.285H43.633c-4.573 0-8.285 3.712-8.285 8.285s3.712 8.285 8.285 8.285h17.674a8.288 8.288 0 0 0 8.285-8.285zM494.878 96.656v150.783H255.172V69.592h212.643c14.923 0 27.063 12.14 27.063 27.064zm-18.779 8.837a8.288 8.288 0 0 0-8.285-8.285H282.235a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h185.579a8.288 8.288 0 0 0 8.285-8.285zm-35.348 35.348a8.288 8.288 0 0 0-8.285-8.285H282.235a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h150.231a8.288 8.288 0 0 0 8.285-8.285zm0 35.349a8.288 8.288 0 0 0-8.285-8.285H282.235a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h150.231a8.288 8.288 0 0 0 8.285-8.285zm0 35.348a8.288 8.288 0 0 0-8.285-8.285H282.235a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h150.231a8.288 8.288 0 0 0 8.285-8.285z'
      style={{
        fill: "#fff"
      }}
    />
    <path
      d='M494.878 264.009v150.783c0 14.924-12.14 27.064-27.064 27.064H255.172V264.009h239.706zm-18.779 35.9a8.288 8.288 0 0 0-8.285-8.285H335.258a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h132.557a8.287 8.287 0 0 0 8.284-8.285zm0 70.697a8.288 8.288 0 0 0-8.285-8.285H335.258a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h132.557a8.288 8.288 0 0 0 8.284-8.285zm-35.348-35.348a8.288 8.288 0 0 0-8.285-8.285h-97.208c-4.573 0-8.285 3.712-8.285 8.285s3.712 8.285 8.285 8.285h97.208a8.288 8.288 0 0 0 8.285-8.285zm0 70.697a8.288 8.288 0 0 0-8.285-8.285h-97.208c-4.573 0-8.285 3.712-8.285 8.285s3.712 8.285 8.285 8.285h97.208c4.573-.001 8.285-3.712 8.285-8.285zM308.194 299.909a8.288 8.288 0 0 0-8.285-8.285h-17.674a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h17.674a8.287 8.287 0 0 0 8.285-8.285zm0 35.349a8.288 8.288 0 0 0-8.285-8.285h-17.674c-4.573 0-8.285 3.712-8.285 8.285s3.712 8.285 8.285 8.285h17.674a8.288 8.288 0 0 0 8.285-8.285zm0 35.348a8.288 8.288 0 0 0-8.285-8.285h-17.674a8.288 8.288 0 0 0-8.285 8.285 8.288 8.288 0 0 0 8.285 8.285h17.674a8.288 8.288 0 0 0 8.285-8.285zm0 35.349a8.288 8.288 0 0 0-8.285-8.285h-17.674c-4.573 0-8.285 3.712-8.285 8.285s3.712 8.285 8.285 8.285h17.674a8.288 8.288 0 0 0 8.285-8.285zM175.538 209.196c-2.596 6.716-9.124 11.499-16.757 11.499h-.265a8.283 8.283 0 0 0-8.064 6.385 8.272 8.272 0 0 0 4.363 9.312l3.469 1.745c6.219 3.104 10.074 9.345 10.074 16.293v1.845H86.814v-1.845c0-6.948 3.855-13.189 10.074-16.293l3.469-1.745a8.272 8.272 0 0 0 4.363-9.312 8.283 8.283 0 0 0-8.064-6.385h-.265c-7.622 0-14.15-4.772-16.757-11.51 9.632-3.789 16.47-13.189 16.47-24.158v-13.256c0-17.354 14.128-31.482 31.482-31.482s31.482 14.128 31.482 31.482v13.256c0 10.969 6.838 20.369 16.47 24.169z'
      style={{
        fill: "#c2e95d"
      }}
    />
    <path
      d='M511.448 96.656v318.136c0 24.059-19.574 43.633-43.633 43.633H43.633C19.574 458.425 0 438.851 0 414.792V96.656c0-24.059 19.574-43.633 43.633-43.633h424.181c24.059 0 43.634 19.574 43.634 43.633zm-16.57 318.136V264.009H255.172v177.847h212.643c14.923-.001 27.063-12.141 27.063-27.064zm0-167.353V96.656c0-14.924-12.14-27.064-27.064-27.064H255.172v177.847h239.706zM238.602 441.855V69.592H43.633c-14.924 0-27.064 12.14-27.064 27.064v318.136c0 14.924 12.14 27.064 27.064 27.064h194.969z'
      style={{
        fill: "#535757"
      }}
    />
    <path
      d='M467.814 97.208a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H282.235a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h185.579zM467.814 291.625a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H335.258a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h132.556zM467.814 362.321a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H335.258a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h132.556zM432.466 132.557a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H282.235a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h150.231zM432.466 167.905a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H282.235a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h150.231zM432.466 203.253a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H282.235a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h150.231zM432.466 326.973c4.573 0 8.285 3.712 8.285 8.285s-3.712 8.285-8.285 8.285h-97.208c-4.573 0-8.285-3.712-8.285-8.285s3.712-8.285 8.285-8.285h97.208zM432.466 397.67c4.573 0 8.285 3.712 8.285 8.285s-3.712 8.285-8.285 8.285h-97.208c-4.573 0-8.285-3.712-8.285-8.285s3.712-8.285 8.285-8.285h97.208zM299.909 291.625a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285h-17.674a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h17.674zM299.909 326.973c4.573 0 8.285 3.712 8.285 8.285s-3.712 8.285-8.285 8.285h-17.674c-4.573 0-8.285-3.712-8.285-8.285s3.712-8.285 8.285-8.285h17.674zM299.909 362.321a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285h-17.674a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h17.674zM299.909 397.67c4.573 0 8.285 3.712 8.285 8.285s-3.712 8.285-8.285 8.285h-17.674c-4.573 0-8.285-3.712-8.285-8.285s3.712-8.285 8.285-8.285h17.674zM219.823 114.33v132.557c0 14.316-11.643 25.959-25.959 25.959H61.307c-14.316 0-25.959-11.643-25.959-25.959V114.33c0-14.316 11.643-25.959 25.959-25.959h132.557c14.316 0 25.959 11.643 25.959 25.959zm-16.57 132.557V114.33c0-5.181-4.209-9.389-9.389-9.389H61.307c-5.181 0-9.389 4.209-9.389 9.389v132.557c0 5.181 4.209 9.389 9.389 9.389h8.937v-1.845c0-8.351 2.916-16.172 8.042-22.303-9.853-6.087-16.426-16.989-16.426-29.394 0-4.573 3.712-8.318 8.285-8.318 5.181 0 9.389-4.209 9.389-9.389v-13.256c0-26.5 21.551-48.052 48.052-48.052s48.052 21.551 48.052 48.052v13.256c0 5.181 4.209 9.389 9.389 9.389a8.288 8.288 0 0 1 8.285 8.285c0 12.427-6.584 23.341-16.426 29.428 5.126 6.131 8.042 13.952 8.042 22.303v1.845h8.937c5.18-.001 9.388-4.21 9.388-9.39zm-44.472-26.191c7.633 0 14.161-4.783 16.757-11.499-9.632-3.8-16.47-13.2-16.47-24.169v-13.256c0-17.354-14.128-31.482-31.482-31.482s-31.482 14.128-31.482 31.482v13.256c0 10.969-6.838 20.37-16.47 24.158 2.607 6.738 9.135 11.51 16.757 11.51h.265c3.844 0 7.18 2.64 8.064 6.385a8.272 8.272 0 0 1-4.363 9.312l-3.469 1.745c-6.219 3.104-10.074 9.345-10.074 16.293v1.845h81.544v-1.845c0-6.948-3.855-13.189-10.074-16.293l-3.469-1.745a8.272 8.272 0 0 1-4.363-9.312 8.283 8.283 0 0 1 8.064-6.385h.265zM211.538 291.625a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H43.633a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h167.905zM176.19 326.973c4.573 0 8.285 3.712 8.285 8.285s-3.712 8.285-8.285 8.285H43.633c-4.573 0-8.285-3.712-8.285-8.285s3.712-8.285 8.285-8.285H176.19zM176.19 362.321a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H96.656a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h79.534zM176.19 397.67c4.573 0 8.285 3.712 8.285 8.285s-3.712 8.285-8.285 8.285H96.656c-4.573 0-8.285-3.712-8.285-8.285s3.712-8.285 8.285-8.285h79.534zM61.307 362.321a8.288 8.288 0 0 1 8.285 8.285 8.288 8.288 0 0 1-8.285 8.285H43.633a8.288 8.288 0 0 1-8.285-8.285 8.288 8.288 0 0 1 8.285-8.285h17.674zM61.307 397.67c4.573 0 8.285 3.712 8.285 8.285s-3.712 8.285-8.285 8.285H43.633c-4.573 0-8.285-3.712-8.285-8.285s3.712-8.285 8.285-8.285h17.674z'
      style={{
        fill: "#535757"
      }}
    />
  </svg>
);
export default SvgProfile;
