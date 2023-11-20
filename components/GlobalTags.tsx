import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Prefetch fonts */}

      <link
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/CrimsonPro-Regular.woff2")}
      />
      <link
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/CrimsonPro-MediumItalic.woff2")}
      />
      <link
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/CrimsonText-Bold.woff2")}
      />
      <link
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/CrimsonText-Bold.woff2")}
      />
      <link
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/PP-Hatton-Medium.woff2")}
      />
      <link
        as="font"
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/SFPRODISPLAYMEDIUM.woff2")}
      />
      <link
        as="font"
        rel="preload"
        type="font/woff2"
        href={asset("/fonts/SFPRODISPLAYREGULAR.woff2")}
      />

      <style

        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,400&display=swap');

          html {
            scroll-behavior: smooth;
          }

                @font-face {
                  font-family: 'PP Hatton';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url('${asset("/fonts/PP-Hatton-Medium.woff2")
            }') format('woff2');
                }
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url('${asset("/fonts/SFPRODISPLAYMEDIUM.woff2")
            }') format('woff2');
                }
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('${asset("/fonts/SFPRODISPLAYREGULAR.woff2")
            }') format('woff2');
                }
                .swiper-container {
                  width: 100%;
                  padding-top: 36px;
                  padding-bottom: 24px;
                  overflow: hidden;
                }
                .swiper-slide {
                  background-position: center;
                  background-size: cover;
                  width: 300px;
                  height: 300px;
                }
                .swiper-pagination-bullet {
                  width: 4px !important;
                  height: 4px !important;
                  background: #616161 !important;
                }
                .swiper-pagination-bullet-active {
                  width: 7.243px !important;
                  height: 7.243px !important;
                  background: #94B138 !important;
                }
                .swiper-pagination {
                  position: unset !important;
                  width: fit-content !important;
                  display: flex;
                  align-items: center;
                }
                .webkitzada {
                  display:-webkit-box; 
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp:3;
                  overflow:hidden;
                }
                .searchContent {
                  background:rgba(255, 255, 255, 0.05);
                }

                .searchContent:hover {
                  background:rgba(255, 255, 255, 0.1);
                }

                .fade-in {
                  opacity: 1;
                  transition: opacity 150ms;
                }
                
                .fade-out {
                  opacity: 0;
                  transition: opacity 150ms;
                }

                @media screen and (min-width: 744px) {
                  .swiper-pagination-bullet {
                    width: 8px !important;
                    height: 8px !important;
                  }
                  .swiper-pagination-bullet-active {
                    width: 14px !important;
                    height: 14px !important;
                  }
                  .webkitzada {
                    display:block;
                  }
                  .webkitzadaacc {
                    display:-webkit-box; 
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp:2;
                    overflow:hidden;
                  }
                }
                
                @media screen and (min-width: 1440px) {
                  .webkitzadaacc {
                    -webkit-line-clamp:3;
                  }
                }
            `,
        }}
      />
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
    </Head>
  );
}

export default GlobalTags;
