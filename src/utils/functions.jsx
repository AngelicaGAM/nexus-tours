export const Looper = ({ children, times }) => {
    const keys = [...Array(times).keys()];
    return (
      <>
        {keys.map((item) => (
          <span className="star" key={item}>{children}</span>
        ))}
      </>
    );
  }