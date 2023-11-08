import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data, reFecth} = useFetch("http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london")

  return (
    <div className="featured">
      {<><div className="featuredItem">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/03/11/fernsehturm.jpg"
          alt="featured photo"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <div>Berlin</div>
          <div>{data[0]} properties</div>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://static01.nyt.com/images/2023/02/25/travel/16hours-Madrid-lede-mkjg/16hours-Madrid-lede-mkjg-superJumbo.jpg"
          alt="featured photo"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <div>Madrid</div>
          <div>{data[1]} properties</div>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.goldentours.com/travelblog/wp-content/uploads/2015/07/shutterstock_555823393-973x649.jpg"
          alt="featured photo"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <div>London</div>
          <div>{data[2]} properties</div>
        </div>
      </div></>}
    </div>
  );
};

export default Featured;
