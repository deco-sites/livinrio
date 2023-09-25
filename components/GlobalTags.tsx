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
        href={asset("/fonts/SFPRODISPLAYMEDIUM.OTF")}
      />
      <link
        rel="preload"
        type="text/css"
        href={asset("/fonts/SFPRODISPLAYREGULAR.OTF")}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
                @font-face {
                  font-family: 'Crimson Pro';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('${("/fonts/CrimsonPro-Regular.ttf")
            }') format('truetype');
                }
                @font-face {
                  font-family: 'Crimson Text';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url('${("/fonts/CrimsonText-Bold.ttf")
            }') format('truetype');
                }
                @font-face {
                  font-family: 'PP Hatton';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url('${("/fonts/PP-Hatton-Medium.ttf")
            }') format('truetype');
                }
                @font-face {
                  font-family: 'SF Pro';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url('${("/fonts/SFPRODISPLAYMEDIUM.OTF")
            }') format('opentype');
                }
                @font-face {
                  font-family: 'SF Pro';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('${("/fonts/SFPRODISPLAYREGULAR.OTF")
            }') format('opentype');
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
