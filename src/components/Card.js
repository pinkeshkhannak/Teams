export const Card = ({ data, admin }) => {
  const role = admin ? "admin" : "member";

  return (
    <div className="flex flex-wrap justify-center m-4 font-sans">
      {data &&
        data
          .filter((item) => item.role === role)
          .map((item) => (
            <div
              className="flex items-center m-2 bg-white rounded-lg p-2 shadow-md transition duration-300 hover:shadow-lg transform hover:scale-105"
              key={item.id}
              style={{ width: "calc(25% - 16px)" }} // Adjust width for 4 cards per row
            >
              <img
                src={item.img}
                alt="logo"
                className="w-16 h-16 rounded-full mr-2"
              />
              <div className="flex flex-col overflow-hidden text-black text-sm">
                <p className="font-bold mb-1">
                  {item.first_name} {item.last_name}
                </p>{" "}
                <p
                  className="text-gray-600 text-base truncate"
                  style={{ width: "100%" }}
                >
                  {item.email}
                </p>{" "}
              </div>
            </div>
          ))}
    </div>
  );
};
