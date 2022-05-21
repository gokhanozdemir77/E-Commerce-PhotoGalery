const Rate = ({ count }) => {
  return (
    <ul>
      {[...Array(count)].map((x, i) => (
        <li key={i}>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
      ))}
    </ul>
  );
};

export default Rate;


