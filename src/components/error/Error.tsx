interface ErrorProps {
  message: string;
}

function ErrorMessage({ message }: ErrorProps) {
  return (
    <div className="error-state" role="alert">
      <span className="error-state__icon" aria-hidden="true">
        !
      </span>
      <h2>Ops! Tivemos um problema.</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
