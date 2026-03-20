import { Link } from "react-router-dom";
import { useApiData } from "../../../context/ApiDataProvider";

function Banners() {
  const { data } = useApiData();
  const month = new Date().toLocaleString("Default", { month: "long" });
  // console.log(month);

  return (
    <div className="flex flex-nowrap gap-2 p-2 md:p-4 md:gap-5 lg:gap-8 lg:w-[80%] lg:mx-auto overflow-x-scroll">
      {data &&
        data.banners.map((ban) => {
          if (ban.month === month)
            return (
              <Link key={ban.id} className="shrink-0">
                <img
                  src={ban.image}
                  alt={ban.title}
                  className="w-86 md:w-100 lg:w-115 rounded-2xl"
                />
              </Link>
            );
        })}
    </div>
  );
}

export default Banners;
