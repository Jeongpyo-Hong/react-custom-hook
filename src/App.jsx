import useInput from "./hooks/useInput";

const App = () => {
  const [{ name, pw }, onChangeHandler] = useInput({
    name: "",
    pw: "",
  });

  return (
    <div onSubmit={(e) => e.preventDefault()}>
      아이디 :
      <input
        type="text"
        name="name"
        value={name || ""}
        onChange={onChangeHandler}
      />
      패스워드 :
      <input
        type="text"
        name="pw"
        value={pw || ""}
        onChange={onChangeHandler}
      />
      <button>로그인</button>
    </div>
  );
};

export default App;
