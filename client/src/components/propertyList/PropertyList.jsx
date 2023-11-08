import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const {data, reFecth} = useFetch("http://localhost:8800/api/hotels/countByType")

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gyUKTzD-1YzbVzk_QgRe-1AIoL2mIaz6Ow&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ilQ1tajvef5mulD6Rt8gvg-rE2W_Kfo5xg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXdM6AzNwdJdogGDfAnK7ZDW1H7luWVV6Yw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiFG-fiscSH8mUg4ucFiOSlCgR6iwZ4A3zw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyN2S-9h1B4CJ8j4gWXLuyF6o85j9anynhBg&usqp=CAU",
  ];

  
  return (
    <div className="pList">
      {
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      }
    </div>
  );
};

export default PropertyList;
