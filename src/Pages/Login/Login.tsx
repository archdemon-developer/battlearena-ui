import { LoginForm } from "../../components";

const LoginPage: React.FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
