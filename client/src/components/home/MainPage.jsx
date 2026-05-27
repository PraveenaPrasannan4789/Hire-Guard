import Review from "./Review";
import ManageJob from "./manageJob";
import Landjob from "./LandJob";
const MainPage = () => {
  return (
    <>
      <section>
        <ManageJob />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <Landjob />
      </section>
    </>
  );
};

export default MainPage;
