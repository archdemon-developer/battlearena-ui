import { SignUpForm } from "../../components";

const SignUpPage: React.FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
