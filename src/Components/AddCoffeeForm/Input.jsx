
function Input({ label ,placeholder}) {

  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-base  font-semibold">{label}</span>
        </div>
        <input
        placeholder={placeholder}
          type="text"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
}

export default Input;
