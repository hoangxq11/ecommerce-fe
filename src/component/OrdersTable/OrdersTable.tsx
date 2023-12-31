import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { Order } from "../../types/types";
import Spinner from "../Spinner/Spinner";

type PropsType = {
    orders: Array<Order>
    loading: boolean
};

const OrdersTable: FC<PropsType> = ({loading,orders}) => {
    return (
        <div className="container">
            {loading ? <Spinner/> :
            <>
                <h4>Danh sách đơn hàng</h4>
                <table className="table mt-4 border text-center">
                    <thead className="table-active">
                    <tr>
                        <th>STT</th>
                        <th>Ngày tạo</th>
                        <th>Khách hàng</th>
                        <th>Email</th>
                        <th>Số tiền</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order: Order) => {
                        return (
                            <tr key={order.id}>
                                <th>{order.id}</th>
                                <th>{order.date}</th>
                                <th>{order.firstName + " " + order.lastName}</th>
                                <th>{order.email}</th>
                                <th>{new Intl.NumberFormat().format(order.totalPrice)}</th>
                                <th>
                                    <Link to={{pathname: `/account/user/orders/${order.id}`, state: order}}>
                                        Xem thêm
                                    </Link>
                                </th>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </>
            }
        </div>
    );
};

export default OrdersTable;
