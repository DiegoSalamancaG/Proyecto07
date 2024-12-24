export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Algo Malio Sal!</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Volver a Intentar</button>
        </div>
    )
}