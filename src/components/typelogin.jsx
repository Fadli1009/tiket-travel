const TypeLogin = ({ icon, text, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-full p-2 border-2 border-black/20`}>
      <div className="flex gap-2 items-center justify-center mx-4">
        <span className="text-3xl">{icon}</span>
        <span className="font-bold text-lg">{text}</span>
      </div>
    </div>
  );
};

export default TypeLogin;
