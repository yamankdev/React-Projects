import { Link } from "react-router-dom";

function Banners({ data }) {
  const month = new Date().toLocaleString("Default", { month: "long" });
  // console.log(month);
  return (
    <div className="flex flex-nowrap p-2 gap-2 overflow-x-scroll scrollbar-hide">
      {data &&
        data.banners.map((ban) => {
          if (ban.month === month)
            return (
              <Link key={ban.id} className="shrink-0">
                <img
                  src={ban.image}
                  alt={ban.title}
                  className="w-86 rounded-2xl"
                />
              </Link>
            );
        })}
    </div>
  );
}

export default Banners;
