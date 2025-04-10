import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="w-full h-screen flex flex-col justify-center items-center space-y-12 text-white"
    >
      <h1 className="text-9xl">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-5xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
