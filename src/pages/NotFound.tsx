import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>Página no encontrada | Cavadia Lab</title>
        <meta name="robots" content="noindex,follow" />
        <meta name="googlebot" content="noindex,follow" />
        <meta name="bingbot" content="noindex,follow" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Esta página no existe.</p>
        <a href="/" className="text-primary hover:opacity-90 underline">
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
