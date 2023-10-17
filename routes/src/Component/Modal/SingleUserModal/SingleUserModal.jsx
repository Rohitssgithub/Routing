import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleUser } from '../../../Redux/Slice/UserSlice';
import Loading from '../../Loading/Loading';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
};
export default function SingleUserModal({ setSingleUserModal, singleUserModal, singleUser, setSingleUser }) {
    let dispatch = useDispatch()
    let { singleUsers, loading } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchSingleUser(singleUser))
    }, [])

    const handleClose = () => {
        setSingleUserModal(false)
        setSingleUser([])
    }
    return (
        <>
            {loading && <Loading />}
            {
                singleUserModal &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div>
                            <p>Name : {singleUsers?.name}</p>
                            <p>Email : {singleUsers?.email}</p>
                            <p>Phone : {singleUsers?.phone}</p>
                            <p>Gender : {singleUsers?.gender}</p>
                        </div>
                    </Box>
                </Modal>
            }
        </>
    );
}