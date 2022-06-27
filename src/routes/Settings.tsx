import protectedByHOC from "../protectedByHOC";

const SettingsComponent = () => {
  return (
    <div>
      <h2>Settings</h2>
    </div>
  );
};

const SettingsProtectedByHOC = protectedByHOC(SettingsComponent);

export default SettingsProtectedByHOC;
