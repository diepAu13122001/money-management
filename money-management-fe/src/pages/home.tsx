import React from "react";
import { VNav } from "./../components/ver_nav";
import { HNav } from "./../components/hor_nav";
import { Card, CardProps } from "./../components/card";
import { Footer } from "./../components/footer";
import { Chart, ChartProps } from "./../components/chart";
import { Table, tableProps } from "./../components/table";


export const Home = () => {
    const cards: CardProps[] = [
        {
            title: "CAMPAIGN SENT",
            status_icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#52AC30]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            ),
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            ),
            amount: "$123.123",
        },

        {
            title: "ANNUAL PROFIT",
            status_icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#FF2D00]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            ),
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>),
            amount: "$489.4k",
        },
        {
            title: "CAMPAIGN SENT",
            status_icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            ),
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            ),
            amount: "$123.123",
        },

        {
            title: "ANNUAL PROFIT",
            status_icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            ),
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>),
            amount: "$489.4k",
        },
    ]
    const data01 = [
        {
            "name": "Group A",
            "value1": 1,
            "value2": 9,
            "value3": 4,
            "value4": 13,
            "fill": "#57c0e8",
        },

        {
            "name": "Group B",
            "value1": 15,
            "value2": 16,
            "value3": 5,
            "value4": 2,
            "fill": "purple",

        },

        {
            "name": "Group C",
            "value1": 10,
            "value2": 1,
            "value3": 16,
            "value4": 9,
            "fill": "#FFDA83",
        },

        {
            "name": "Group D",
            "value1": 1,
            "value2": 16,
            "value3": 0,
            "value4": 7,
            "fill": "#FF6565",
        },

    ];

    const charts: ChartProps[] = [
        {
            subCharts: [
                { type: "bar", name: "income", dataKey: "value2", color: "#FF5733" },
                { type: "line", name: "outcome", dataKey: "value3", color: "#8884d8" },
            ],
            data: data01,
            size: "col-span-3",
            title: "Balance sheet",
            sortBy: ["Apple", "Banana", "Orange"],
            overview_data: [
                { value: "$584k", subtext: "Revenue" },
                { value: "$584k", subtext: "Revenue" },
                { value: "$584k", subtext: "Revenue" },
            ]
        },
        {
            subCharts: [
                { type: "pie", name: "overview", dataKey: "value1", color: "#82ca9d" },
            ],
            data: data01,
            size: "col-span-1",
            title: "Balance sheet",
            sortBy: ["Apple", "Banana", "Orange"],
            overview_data: [
                { value: "$584k", subtext: "Revenue" },
                { value: "$584k", subtext: "Revenue" },
                { value: "$584k", subtext: "Revenue" },
            ]
        }
    ]

    const tableData: tableProps =
    {
        title: ["Customer", "Product", "Amount", "Vender"],
        data: [
            {
                cells: [
                    {
                        content: "Alex Smith",
                        subtext: "17 Jan 2021",
                        icon: (<img className="object-cover size-[30px] rounded-full" src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg" />),
                        tabColor: "",
                        textColor: "",
                    },
                    {
                        content: "6.8K",
                        subtext: "Price",
                        icon: (<></>),
                        tabColor: "",
                        textColor: "",
                    },
                    {
                        content: "32%",
                        subtext: "",
                        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        ),
                        tabColor: "",
                        textColor: "text-green-700",
                    },
                    {
                        content: "tab name",
                        subtext: "",
                        icon: "",
                        tabColor: "bg-green-200",
                        textColor: "text-green-700",
                    }
                ]
            },
            {
                cells: [
                    {
                        content: "Alex Smith",
                        subtext: "17 Jan 2021",
                        icon: (<img className="object-cover size-[30px] rounded-full" src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg" />),
                        tabColor: "",
                        textColor: "",
                    },
                    {
                        content: "6.8K",
                        subtext: "Price",
                        icon: (<></>),
                        tabColor: "",
                        textColor: "",
                    },
                    {
                        content: "32%",
                        subtext: "",
                        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>

                        ),
                        tabColor: "",
                        textColor: "text-red-700",
                    },
                    {
                        content: "tab name",
                        subtext: "",
                        icon: "",
                        tabColor: "bg-red-200",
                        textColor: "text-red-700",
                    }
                ]
            }
        ],
        name: "Recent Orders",
        sortBy: ["Today", "Yesterday", "Last 7 days", "Last 30 days"],
        size: "col-span-3"
    }

    const tableData1: tableProps =
    {
        title: ["Customer", "Product"],
        data: [
            {
                cells: [
                    {
                        content: "Alex Smith",
                        subtext: "17 Jan 2021",
                        icon: (<img className="object-cover size-[30px] rounded-full" src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg" />),
                        tabColor: "",
                        textColor: "",
                    },
                    {
                        content: "32%",
                        subtext: "",
                        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>

                        ),
                        tabColor: "",
                        textColor: "text-red-700",
                    },
                ]
            },
            {
                cells: [
                    {
                        content: "Alex Smith",
                        subtext: "17 Jan 2021",
                        icon: (<img className="object-cover size-[30px] rounded-full" src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg" />),
                        tabColor: "",
                        textColor: "",
                    },
                    {
                        content: "32%",
                        subtext: "",
                        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>

                        ),
                        tabColor: "",
                        textColor: "text-red-700",
                    },
                ]
            }
        ],
        name: "Recent Orders",
        sortBy: ["Today", "Yesterday", "Last 7 days", "Last 30 days"],
        size: "col-span-1"
    }

    return (
        <div className="flex">
            <VNav />
            <main className="h-screen overflow-scroll scroll-smooth scroll-m-0 col-span-4 bg-gray-100 container">
                <HNav />
                <section id="digits" className="p-[20px] pt-0 w-full">
                    <div className=" grid grid-flow-col gap-3">
                        {cards.map(item =>
                            <Card title={item.title} icon={item.icon} status_icon={item.status_icon} amount={item.amount} />
                        )}
                    </div>
                </section>

                <section id="main-data" className="p-[20px] pt-0 grid grid-cols-4 gap-3">
                    {charts.map((chart) =>
                        <Chart data={chart.data} overview_data={chart.overview_data} size={chart.size} sortBy={chart.sortBy} subCharts={chart.subCharts} title={chart.title} />
                    )}

                    <Table tableData={tableData1} />
                    <Table tableData={tableData} />
                </section>

                <Footer />
            </main>


        </div>

    );

};
