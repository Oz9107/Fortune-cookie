const UserCard = ({ data }) => {
  return (
    <article className="cuerpo">
      <section className="centro">
        <h3>{data.author}</h3>
        <p>{data.phrase}</p>
      </section>
    </article>
  );
};

export default UserCard;
