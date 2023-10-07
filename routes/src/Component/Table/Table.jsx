import React from 'react'
import DataTable from 'react-data-table-component';
import ReactPaginate from 'react-paginate';
import Pagination from '../Pagination/Pagination';
import styles from '../../Component/Table/Table.module.scss'
import Loading from '../Loading/Loading';

const Table = (props) => {

    return (
        <>
            <DataTable
                {...props}
                className={styles.table}
                // progressComponent={<Loading />}
                pagination
                responsive
            />
            {/* <Pagination {...props?.paginationProps} /> */}
        </>
    )
}

export default Table