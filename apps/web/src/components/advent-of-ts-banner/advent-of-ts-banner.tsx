import Image from 'next/image';
import './advent-of-ts-banner.css';
import { SnowCanvas } from './snow-canvas';

export function AdventofTSBanner() {
  return (
    <div className="container mt-11 flex min-h-[500px] justify-center md:mt-[128px] lg:mb-[148px]">
      <div className="content max-w-[900px] overflow-hidden rounded-3xl">
        <SnowCanvas />
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="flex flex-col p-10">
            <h1 className="text-6xl font-bold tracking-tighter text-white sm:text-8xl">
              <span>Advent</span> of <span className="text-red-600">TypeScript</span>
            </h1>
          </div>
          <div className="ground absolute bottom-0 h-[160px] w-full bg-[#f6f9fa]">
            <div className="pointer-events-none relative top-8 flex justify-center">
              <div className="z-10 h-[200px] w-[600px] rounded-[100%] bg-[#e8f2f6] bg-gradient-to-b from-[#dee8f1] to-[#f6f9fa] to-[60px]" />
              <div className="absolute right-[150px] top-[-120px] z-0 -rotate-6 items-center justify-center md:right-[210px] md:rotate-6">
                <Image
                  src="/santa-hat.png"
                  alt=""
                  height="200"
                  width="200"
                  className="absolute -right-[58px] -top-20"
                />
                <svg
                  width="171"
                  height="171"
                  viewBox="0 0 171 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20.25C0 9.06624 9.06623 0 20.25 0H150.75C161.934 0 171 9.06623 171 20.25V150.75C171 161.934 161.934 171 150.75 171H20.25C9.06624 171 0 161.934 0 150.75V20.25Z"
                    fill="#3178C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M70.6264 94.2049H90V81H36V94.2049H55.2789V153H70.6264V94.2049Z"
                    fill="white"
                  />
                  <path
                    d="M99 153V81H114.53V110.839H137.432V81H153V153H137.432V123.056H114.53V153H99Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                id="snowman"
                className="absolute bottom-[100px] left-[200px] z-30 -scale-x-100 md:scale-x-100"
              >
                <svg
                  width="212"
                  height="236"
                  viewBox="0 0 212 236"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="68.049"
                    cy="212.875"
                    rx="67.3645"
                    ry="17.6403"
                    fill="#A5A49E"
                    fill-opacity="0.24"
                  />
                  <path
                    d="M170.9 130.635L143.251 119.027C142.012 118.506 140.6 119.208 140.267 120.51V120.51C139.965 121.688 140.675 122.886 141.852 123.188L170.9 130.635ZM170.9 130.635L199.547 118.039M199.547 118.039L209 101.91M199.547 118.039L195.001 100.003"
                    stroke="#876B49"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                  <ellipse
                    cx="39.4732"
                    cy="18.0644"
                    rx="39.4732"
                    ry="18.0644"
                    transform="matrix(0.897153 -0.441719 0.444473 0.895792 44.4774 43.6939)"
                    fill="#3B4246"
                  />
                  <path
                    d="M57.6455 40.09L64.3425 45.0932L100.758 29.6556L90.5034 17.7989C80.7573 6.52986 65.4454 -2.4736 52.6088 5.08881C51.5134 5.73417 50.4832 6.46278 49.55 7.28535C39.181 16.4254 46.5719 31.817 57.6455 40.09Z"
                    fill="#3B4246"
                  />
                  <path
                    d="M154.558 182.857C154.558 251.489 48.5456 251.489 48.5456 182.857C48.5456 111.003 154.558 111.003 154.558 182.857Z"
                    fill="#F2F5FF"
                  />
                  <path
                    d="M154.058 182.857C154.058 199.874 147.492 212.603 137.667 221.084C127.831 229.574 114.701 233.831 101.552 233.831C88.4029 233.831 75.2723 229.574 65.4367 221.084C55.6115 212.603 49.0456 199.874 49.0456 182.857C49.0456 165.027 55.6177 151.692 65.4453 142.81C75.2814 133.921 88.409 129.466 101.552 129.466C114.695 129.466 127.822 133.921 137.658 142.81C147.486 151.692 154.058 165.027 154.058 182.857Z"
                    stroke="black"
                    stroke-opacity="0.1"
                  />
                  <path
                    d="M146.9 123.238C146.9 176.963 58.8357 176.963 58.8357 123.238C58.8357 66.9895 146.9 66.9895 146.9 123.238Z"
                    fill="#F2F5FF"
                  />
                  <path
                    d="M146.4 123.238C146.4 136.517 140.965 146.449 132.825 153.07C124.672 159.702 113.781 163.032 102.868 163.032C91.9551 163.032 81.064 159.702 72.9113 153.07C64.7708 146.449 59.3357 136.517 59.3357 123.238C59.3357 109.319 64.7779 98.9127 72.92 91.9788C81.0728 85.0356 91.9608 81.5516 102.868 81.5516C113.775 81.5516 124.663 85.0356 132.816 91.9788C140.958 98.9127 146.4 109.319 146.4 123.238Z"
                    stroke="black"
                    stroke-opacity="0.1"
                  />
                  <g filter="url(#filter0_d_2_51)">
                    <path
                      d="M139.721 68.3731C139.721 113.248 66.0149 113.248 66.0149 68.3731C66.0149 32.5408 139.721 13.4702 139.721 68.3731Z"
                      fill="#F2F5FF"
                    />
                    <path
                      d="M139.221 68.3731C139.221 79.4395 134.684 87.7115 127.889 93.227C121.083 98.7524 111.986 101.529 102.868 101.529C93.7497 101.529 84.6532 98.7524 77.8466 93.227C71.0523 87.7115 66.5149 79.4395 66.5149 68.3731C66.5149 59.5974 71.0267 51.8152 77.8583 45.914C84.6911 40.0117 93.812 36.0231 102.932 34.8433C112.054 33.6632 121.121 35.2977 127.898 40.5668C134.659 45.8246 139.221 54.7652 139.221 68.3731Z"
                      stroke="black"
                      stroke-opacity="0.1"
                    />
                  </g>
                  <path
                    d="M109.448 60.0988C110.259 62.378 107.5 60.7864 105.096 61.6347C102.692 62.4829 101.554 65.4498 100.743 63.1706C99.9328 60.8914 100.988 57.6904 103.391 56.8422C105.795 55.994 108.638 57.8196 109.448 60.0988Z"
                    fill="#3B4246"
                  />
                  <path
                    d="M124.808 52.4532C125.331 54.384 123.196 52.8863 121.208 53.4207C119.22 53.955 118.131 56.3189 117.608 54.3881C117.085 52.4573 118.12 49.895 120.108 49.3607C122.097 48.8264 124.285 50.5224 124.808 52.4532Z"
                    fill="#3B4246"
                  />
                  <path
                    d="M119.559 59.9739C124.961 58.5832 127.848 65.9984 122.953 68.6654V68.6654C122.084 69.1393 121.069 69.3591 120.156 68.9709C119.166 68.5498 117.921 67.7295 117.265 66.1613C116.069 63.3007 116.227 61.0446 117.863 60.4401C118.046 60.3725 118.643 60.2097 119.559 59.9739Z"
                    fill="#E0986B"
                  />
                  <path
                    d="M123.927 118.637C123.927 120.26 122.978 121.577 121.294 121.577C119.611 121.577 118.662 120.26 118.662 118.637C118.662 117.013 119.195 115.379 120.879 115.379C122.562 115.379 123.927 117.013 123.927 118.637Z"
                    fill="#3B4246"
                  />
                  <path
                    d="M128.474 129.841C128.474 131.464 127.525 132.781 125.841 132.781C124.158 132.781 123.209 131.464 123.209 129.841C123.209 128.217 123.742 126.583 125.426 126.583C127.109 126.583 128.474 128.217 128.474 129.841Z"
                    fill="#3B4246"
                  />
                  <path
                    d="M127.284 142.815C126.656 144.313 125.271 145.163 123.718 144.516C122.165 143.87 121.798 142.291 122.427 140.793C123.055 139.295 124.18 137.991 125.733 138.638C127.286 139.284 127.913 141.317 127.284 142.815Z"
                    fill="#3B4246"
                  />
                  <path
                    d="M134.815 86.6536C133.978 86.5344 126.321 100.939 110.406 100.939C92.1232 100.939 74.4603 92.7979 70.442 85.2233C66.1601 87.9231 67.69 90.5869 66.0149 97.1247C64.3397 103.662 85.92 112.16 108.851 112.16C131.781 112.16 138.883 99.2878 138.764 93.3283C138.644 87.3687 135.653 86.7728 134.815 86.6536Z"
                    fill="#3078C6"
                  />
                  <path
                    d="M153.601 95.5929C148.695 94.7586 137.926 91.6596 137.926 91.6596C133.579 92.4542 128.833 95.426 137.448 101.433C145.761 107.23 169.635 105.28 181.117 105.458C181.733 105.467 182.203 104.91 182.084 104.308L178.78 87.6553C178.621 86.8495 177.539 86.575 176.969 87.1682C174.997 89.2188 171.087 92.6608 166.164 93.805C158.985 95.4737 158.506 96.4272 153.601 95.5929Z"
                    fill="#3078C6"
                  />
                  <path
                    d="M142.913 106.666C140.232 103.5 135.032 95.7408 135.032 95.7408C131.827 93.9146 125.978 92.3774 128.23 100.837C130.401 108.995 143.618 122.586 150.642 129.01C151.05 129.383 151.687 129.327 152.03 128.893L162.486 115.665C163.042 114.961 162.387 113.846 161.49 113.908C159.019 114.076 155.228 113.957 151.902 112.267C146.415 109.479 145.594 109.831 142.913 106.666Z"
                    fill="#3078C6"
                  />
                  <path
                    d="M39.2126 133.972L67.683 116.787C69.5338 115.67 71.9381 116.656 72.4727 118.75V118.75C72.8822 120.355 72.0095 122.009 70.4538 122.576L39.2126 133.972ZM39.2126 133.972L19.4699 101.791M19.4699 101.791L16 82.2435M19.4699 101.791L29.9994 84.5082"
                    stroke="#876B49"
                    stroke-width="7"
                    stroke-linecap="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2_51"
                      x="62.0149"
                      y="33.9796"
                      width="81.7062"
                      height="76.0496"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_51"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_51"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="absolute bottom-[100px] right-[50px] z-30 mt-44 text-2xl font-semibold tracking-tighter text-red-600 md:text-4xl">
                Coming December 1st
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
