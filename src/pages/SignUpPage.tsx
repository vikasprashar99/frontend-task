import { Link } from 'react-router-dom';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <p className="text-gray-600">
          Sign up functionality is not implemented in this demo.
        </p>
        <Link to="/signin" className="font-medium text-blue-600 hover:underline">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}