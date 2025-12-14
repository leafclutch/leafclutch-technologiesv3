import { Layout } from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center section-padding">
        <div className="container-padding mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-8xl font-bold gradient-text">404</h1>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
