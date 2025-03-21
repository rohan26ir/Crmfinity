import React from 'react';

const DashCards = () => {
  const dashCards = [
    { id: 1, color: "bg-[#F44FD8]", title: 'OPENED APP', count: '0', link: "" },
    { id: 2, color: "bg-[#0080C0]", title: 'APP IN', count: '0', link: "" },
    { id: 3, color: "bg-[#E6805E]", title: 'APP OUT', count: '0', link: "" },
    { id: 4, color: "bg-[#0080C0]", title: 'DOCS IN', count: '0', link: "" },
    { id: 5, color: "bg-[#FF8000]", title: 'SUBMITTED', count: '0', link: "" },
    { id: 6, color: "bg-[#74CF7A]", title: 'APPROVED', count: '0', link: "" },
    { id: 7, color: "bg-[#6379E0]", title: 'CONTRACT OUT', count: '0', link: "" },
    { id: 8, color: "bg-[#65DED8]", title: 'CONTRACT IN', count: '0', link: "" },
    { id: 9, color: "bg-[#600650]", title: 'FOUNDED', count: '0', link: "" },
    { id: 10, color: "bg-[#EF547B]", title: 'DECLINED', count: '0', link: "" },
  ];

  return (
    <div className="overflow-x-auto scrollbar-hide flex gap-4 px-2 py-2">
      <div className="flex gap-4">
        {dashCards.map((item) => (
          <div key={item.id} className={`flex flex-col items-start justify-between gap-2 p-4 ${item.color} shadow-md rounded-md w-28 h-24`}>
            <h2 className="text-sm text-white">{item.title}</h2>
            <h2 className="text-2xl font-bold text-white">{item.count}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashCards;
