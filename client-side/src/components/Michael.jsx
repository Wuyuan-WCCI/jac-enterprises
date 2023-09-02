import Card from "./ui/Card";

const Michael = () => {
  return (
    <Card>
      <div className="column">
        <div className="card">
          {/* <img src="/w3images/team1.jpg" alt="Tion" style="width:100%" /> */}
          <div className="container">
            <h2>Michael Vythilengam</h2>
            <p className="title">Member</p>
            <p>
              I'm Michael Vythilengam, studying CS at New Jersey Institute of
              Technology while working a full time job at Amazon. I work to the
              best of my abilites and hope to be a software engineer within the
              next year.
            </p>
            <p>
              <b>
                <i>michaelvythilengam@hotmail.com</i>
              </b>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Michael;
