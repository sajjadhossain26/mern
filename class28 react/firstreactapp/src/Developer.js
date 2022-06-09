import { students } from "./Data";
import Singleclass from "./SingleClassDev";
import Singledev from "./SingleDeveloper";
const Developer = ({ title, content }) => {
  return (
    <>
      <section className="developer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <div className="heading">
                <h1>{title}</h1>
                <p>{content}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {students.map((data) => (
              //   <Singledev
              //     name={data.name}
              //     skill={data.skill}
              //     photo={data.photo}
              //     location={data.location}
              //   />
              <Singleclass
                name={data.name}
                skill={data.skill}
                photo={data.photo}
                location={data.location}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Developer;
