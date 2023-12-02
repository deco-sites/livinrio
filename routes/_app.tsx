import { AppProps } from "$fresh/server.ts";
import GlobalTags from "../components/GlobalTags.tsx";
import Theme from "../sections/Theme.tsx";

export default function App(props: AppProps) {
  return (
    <>
      <Theme />

      <GlobalTags />
      <props.Component />
    </>
  );
}
