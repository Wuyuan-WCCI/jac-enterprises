import Card from "./ui/Card";
import RayI from "../img/Ray.avif"

const Ray = () => {
  return (
    <Card>
      <div className="column">
        <div className="card">
          {/* <img src="/w3images/team1.jpg" alt="Tion" style="width:100%" /> */}
          <div className="container">
            <h2>Raymond Samuel</h2>
            <p className="title">Member</p>
            <p>
              Hello, my name is Ray and I'm a Software Developer. Here are a
              couple of links to my networking sites: GitHub and LinkedIn.
              Currently a beginner level front end developer and in pursuit of
              becoming a software developer with a knowledge base in Java
              programming language.
            </p>
            <img src={RayI} alt="Ray" width={250} height={350} />
            <p><b><i>ray@amazon.com</i></b></p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Ray;
