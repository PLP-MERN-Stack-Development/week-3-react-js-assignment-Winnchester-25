const Card = ({ title, children }) => (
  <div className="bg-white p-6 rounded shadow-md">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div>{children}</div>
  </div>
);
export default Card;
