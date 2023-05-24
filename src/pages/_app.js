import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col gap-6">
      <Component {...pageProps} />
    </div>
  );
}
