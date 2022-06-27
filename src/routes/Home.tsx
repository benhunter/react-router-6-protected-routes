type HomeProps = {
  setLoggedIn: (value: boolean) => void;
};

const Home = ({ setLoggedIn }: HomeProps) => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
