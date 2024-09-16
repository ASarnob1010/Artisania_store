import { useState } from "react";
import Layout from "./Layout";

const Customers = () => {
    const [customers, setCustomers] = useState([
        {
            customerName: 'Arnob',
            email: 'ararnob1415@gmail.com',
            mobile: '+91 9472395194',
            date: '12-10-2024 10:15:14 AM',
            address: 'Jurain, Dhaka'
        },
    ]);

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Customers</h1>
                <div className="mt-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-teal-600 to-blue-500  text-white text-left">
                                <th className="px-6 py-3 border-b">Customer's Name</th>
                                <th className="px-6 py-3 border-b">Email</th>
                                <th className="px-6 py-3 border-b">Mobile</th>
                                <th className="px-6 py-3 border-b">Date</th>
                                <th className="px-6 py-3 border-b">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((item, index) => (
                                <tr
                                    key={index}
                                    className="text-left"
                                    style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : 'white'
                                    }}
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex gap-3 items-center">
                                            <img 
                                                src="/images/avt.avif" 
                                                alt="Avatar"
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold text-gray-800">{item.customerName}</h1>
                                                <small className="text-gray-600">{item.date}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{item.email}</td>
                                    <td className="px-6 py-4">{item.mobile}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4">{item.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default Customers;
