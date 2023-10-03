import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Prefetch fonts */}

      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/CrimsonPro-Regular.ttf")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/CrimsonPro-MediumItalic.ttf")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/CrimsonText-Bold.ttf")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/CrimsonText-Bold.ttf")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/PP-Hatton-Medium.ttf")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/sfprodisplayDISPLAYMEDIUM.OTF")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/sfprodisplayDISPLAYREGULAR.OTF")}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          html {
            scroll-behavior: smooth;
          }
                @font-face {
                  font-family: 'Crimson Pro';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('${("/fonts/CrimsonPro-Regular.ttf")}') format('truetype');
                }
                @font-face {
                  font-family: 'Crimson Pro';
                  font-style: italic;
                  font-weight: 500;
                  font-display: swap;
                  src: url('${("/fonts/CrimsonPro-MediumItalic.ttf")}') format('truetype');
                }
                @font-face {
                  font-family: 'Crimson Text';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url('${("/fonts/CrimsonText-Bold.ttf")}') format('truetype');
                }
                @font-face {
                  font-family: 'PP Hatton';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url('${("/fonts/PP-Hatton-Medium.ttf")}') format('truetype');
                }
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url('${("/fonts/SFPRODISPLAYMEDIUM.OTF")}') format('opentype');
                }
                @font-face {
                  font-family: 'SF Pro Display';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('${("/fonts/SFPRODISPLAYREGULAR.OTF")}') format('opentype');
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
                @media screen and (min-width: 1024px) {
                  .webkitzada {
                    display:block;
                  }
                }
                .searchContent {
                  background:rgba(255, 255, 255, 0.05);
                }

                .searchContent:hover {
                  background:rgba(255, 255, 255, 0.1);
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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js">
      </script>

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
    </Head>
  );
}

export default GlobalTags;
