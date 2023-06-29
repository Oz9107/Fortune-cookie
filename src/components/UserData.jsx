const UserCard = ({ data }) => {
  return (
    <article className="cuerpo">
      <h3 className="Autor">{data.author}</h3>
      <section className="centro">
        <p>{data.phrase}</p>
      </section>
    </article>
  );
};

export default UserCard;
