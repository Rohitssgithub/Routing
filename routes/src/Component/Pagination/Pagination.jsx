// import React, { cloneElement, memo, useEffect, useMemo, useState } from 'react'
// import styles from '../Table/Table.module.scss'
// import ReactPaginate from 'react-paginate';
// import classNames from 'classnames';
// import { PAGINATION } from '../../constant/constant.jsx';
// import PAGINATION_ARROW from '../../assets/arrow.png'

// const Pagination = (props) => {
//     console.log(props)
//     const [pageRange, setPageRange] = useState(3);

//     const [rowsPerPageValue, setRowsPerPageValue] = useState(props?.rowsPerPageValue || PAGINATION.DEFAULT_ROWS_PER_PAGE)
//     const [currentPage, setCurrentPage] = useState(props?.currentPage || PAGINATION.DEFAULT_CURRENT_PAGE)
//     const noOfPages = useMemo(() => Math.ceil(props?.totalCount / rowsPerPageValue), [rowsPerPageValue, props?.totalCount])

//     const endingData = useMemo(() => currentPage * rowsPerPageValue, [currentPage, rowsPerPageValue])
//     const startingData = useMemo(() => {
//         if (currentPage === 1) {
//             return 1
//         } else if (endingData > props?.totalCount) {
//             return ((noOfPages - 1) * rowsPerPageValue) + 1
//         } else {
//             return ((currentPage - 1) * rowsPerPageValue) + 1
//         }
//     }, [currentPage, rowsPerPageValue, endingData, props?.totalCount])



//     const handlePageClick = (e) => {
//         setCurrentPage(e?.selected + 1)
//         props?.setPageSelected(e?.selected + 1)

//     }

//     return (
//         <div className={styles.pagination}>
//             <p className={styles.dataRange}>
//                 {`${startingData} - ${endingData > props?.totalCount ? props?.totalCount : endingData} ${props?.tableName} out of ${props?.totalCount}`}
//             </p>
//             <div className={styles.paginationRightSide}>
//                 {/* <ReactPaginate
//                     breakLabel={null}
//                     breakClassName={styles.break}
//                     previousClassName={styles.arrowBox}
//                     previousLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.previousArrow)} />}
//                     nextClassName={styles.arrowBox}
//                     nextLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.nextArrow)} />}
//                     renderOnZeroPageCount={null}
//                     pageCount={props?.totalCount / rowsPerPageValue}
//                     containerClassName={styles.paginationContainer}
//                     activeClassName={styles.activePage}
//                     pageRangeDisplayed={2}
//                     marginPagesDisplayed={1}
//                     onPageChange={handlePageClick}
//                     disabledClassName={styles.disabled}
//                     pageClassName={styles.page}
//                     // forcePage={endingData > props?.totalCount ? Math.floor(noOfPages) : currentPage - 1}
//                 /> */}
//                 <ReactPaginate
//                     breakLabel={null}
//                     breakClassName={styles.break}
//                     previousClassName={styles.arrowBox}
//                     previousLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.previousArrow)} />}
//                     nextClassName={styles.arrowBox}
//                     nextLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.nextArrow)} />}
//                     renderOnZeroPageCount={null}
//                     pageCount={props?.totalCount / rowsPerPageValue}
//                     containerClassName={styles.paginationContainer}
//                     activeClassName={styles.activePage}
//                     pageRangeDisplayed={pageRange} // Set to 0 to only show the current page
//                     marginPagesDisplayed={0} // Set to 0 to hide neighbors
//                     onPageChange={handlePageClick}
//                     disabledClassName={styles.disabled}
//                     pageClassName={styles.page}
//                 // forcePage={0} // Force to show the first page
//                 />

//             </div>
//         </div>
//     )
// }

// export default memo(Pagination)

import React, { cloneElement, memo, useEffect, useMemo, useState } from 'react'
import styles from '../Table/Table.module.scss'
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import { PAGINATION } from '../../constant/constant.jsx';
import PAGINATION_ARROW from '../../assets/arrow.png'

const Pagination = (props) => {
    console.log(props)
    const [pageRange, setPageRange] = useState(3);

    const [rowsPerPageValue, setRowsPerPageValue] = useState(props?.rowsPerPageValue || PAGINATION.DEFAULT_ROWS_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(props?.currentPage || PAGINATION.DEFAULT_CURRENT_PAGE)
    const noOfPages = useMemo(() => Math.ceil(props?.totalCount / rowsPerPageValue), [rowsPerPageValue, props?.totalCount])

    const endingData = useMemo(() => currentPage * rowsPerPageValue, [currentPage, rowsPerPageValue])
    const startingData = useMemo(() => {
        if (currentPage === 1) {
            return 1
        } else if (endingData > props?.totalCount) {
            return ((noOfPages - 1) * rowsPerPageValue) + 1
        } else {
            return ((currentPage - 1) * rowsPerPageValue) + 1
        }
    }, [currentPage, rowsPerPageValue, endingData, props?.totalCount])

    const handlePageClick = (e) => {
        setCurrentPage(e?.selected + 1);

        // Update the page range based on the clicked page
        if (e?.selected === 0) {
            setPageRange(3); // Show 2, 3, 4
        } else {
            setPageRange(0); // Show only the selected page
        }

        props?.setPageSelected(e?.selected + 1)
    }


    return (
        <div className={styles.pagination}>
            <p className={styles.dataRange}>
                {`${startingData} - ${endingData > props?.totalCount ? props?.totalCount : endingData} ${props?.tableName} out of ${props?.totalCount}`}
            </p>
            <div className={styles.paginationRightSide}>
                <ReactPaginate
                    breakLabel={null}
                    breakClassName={styles.break}
                    previousClassName={styles.arrowBox}
                    previousLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.previousArrow)} />}
                    nextClassName={styles.arrowBox}
                    nextLabel={<img src={PAGINATION_ARROW} className={classNames(styles.arrow, styles.nextArrow)} />}
                    renderOnZeroPageCount={null}
                    pageCount={props?.totalCount / rowsPerPageValue}
                    containerClassName={styles.paginationContainer}
                    activeClassName={styles.activePage}
                    pageRangeDisplayed={pageRange}
                    marginPagesDisplayed={0}
                    onPageChange={handlePageClick}
                    disabledClassName={styles.disabled}
                    pageClassName={styles.page}
                />
            </div>
        </div>
    )
}

export default memo(Pagination)
