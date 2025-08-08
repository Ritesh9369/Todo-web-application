import Styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div className={Styles["welcome-message"]}>
      <h1>Welcome to the Todo App!</h1>
      <p>Manage your tasks efficiently and stay organized.</p>
    </div>
  );
};

export default WelcomeMessage;
