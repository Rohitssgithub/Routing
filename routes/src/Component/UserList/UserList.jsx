import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from '../../Routing/routing';
import { Outlet } from 'react-router-dom';
import styles from '../../Component/sideBarNavigation/SidebarNavigation.module.scss'
import SidebarNavigation from '../../Component/sideBarNavigation/SidebarNavigation';
import Table from '../../Component/Table/Table';
import axios from 'axios'
import ModalFileUpload from '../Modal/ModalFileUpload';
import Modal from '../Modal/Modal'
import BasicModal from '../Modal/Modal';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../Redux/Slice/UserSlice';

import EditUserModal from '../Modal/EditUserModal';
import Loading from '../Loading/Loading';

const UserList = () => {
    let dispatch = useDispatch()

    const { allusers, loading } = useSelector((state) => state.users)
    console.log(allusers)



    const [modalOpen, setModalOpen] = useState(false)

    let [user, setUsers] = useState([])
    const [rowsPerPageValue, setRowsPerPageValue] = useState(10);
    const [count, setCount] = useState(0);
    const [pageSelected, setPageSelected] = useState(1);
    const [seletedData, setSelectedData] = useState({});


    const handleUpdate = (data) => {
        console.log(data)
        setSelectedData(data)
        setModalOpen(true)
    }
    const columns = [
        {
            name: 'Name',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'age',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'email',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label='Edit' className='btn btn-primary' onClick={() => handleUpdate(row)} />
                        <Button label='Delete' className='btn btn-danger' />
                    </>
                )
            },
        },
    ];

    const handleAddFunction = () => {
        setSelectedData({})
        setModalOpen(true)
    }

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    console.log(modalOpen)
    return (
        <>
            {
                modalOpen && <EditUserModal modalOpen={modalOpen} setModalOpen={setModalOpen} seletedData={seletedData} />
            }
            <Button label="Add User" className='btn btn-danger my-3' onClick={handleAddFunction} />
            <Table
                columns={columns}
                data={allusers}
                className={styles.candidatesTable}
                paginationProps={{
                    isPagination: true,
                    tableName: "Report",
                    currentPage: 1,
                    totalCount: count,
                    rowsPerPageValue: rowsPerPageValue,
                    setRowsPerPageValue: setRowsPerPageValue,
                    setPageSelected: setPageSelected,
                }}

            />
            {/* {loading && <Loading />} */}
        </>
    )
}

export default UserList