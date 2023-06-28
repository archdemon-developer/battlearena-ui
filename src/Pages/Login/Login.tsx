import { useState } from "react";

import { LoginForm, TabSwitch } from "../../components";

const LoginPage: React.FunctionComponent = () => {
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
        <LoginForm isUser={activeTab === "User"} />
      </div>
    </div>
  );
};

export default LoginPage;
