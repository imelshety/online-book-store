import { useRouteError } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.statusText || error?.message || 'Unknown error'}</p>
    </div>
  );
};

export default ErrorPage;
