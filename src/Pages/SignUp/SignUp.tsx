import { useState } from "react";
import { SignUpForm, TabSwitch } from "../../components";

const SignUpPage: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("User");

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <TabSwitch
          currentTab={activeTab}
          tabSwitchHandler={handleTabChange}
          tabTitles={["User", "Team"]}
        />
        <SignUpForm isUser={activeTab === "User"} />
      </div>
    </div>
  );
};

export default SignUpPage;
