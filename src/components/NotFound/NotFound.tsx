import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">404: Page Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
