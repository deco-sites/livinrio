import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Prefetch fonts */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          html {
            scroll-behavior: smooth;
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

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
    </Head>
  );
}

export default GlobalTags;
