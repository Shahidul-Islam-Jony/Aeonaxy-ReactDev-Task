import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center text-center mt-20">
            <h4 className="text-2xl font-medium">Page is Under Working...</h4>
            <p className="text-xl">Go Back to Home</p>
            <Link to='/' className="bg-gray-400 w-fit mx-auto mt-5 px-4 py-2 rounded-md hover:bg-gray-600">Back To Home</Link>
        </div>
    );
};

export default ErrorPage;