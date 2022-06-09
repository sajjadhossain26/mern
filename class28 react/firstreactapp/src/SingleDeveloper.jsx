const Singledev = ({ name, location, skill, photo }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="team-member s-dev text-black p-3 shadow">
        <img src={photo} alt="" />
        <h4>{name}</h4>
        <h6>{skill}</h6>
        <h6>{location}</h6>
      </div>
    </div>
  );
};
export default Singledev;
