import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../../Redux/Slice/UserSlice';
import { toast } from 'react-toastify'
const DeleteModal = (props) => {
    console.log(props)
    let dispatch = useDispatch()
    const handleClose = () => {
        props.setDeleteModalOpen(false)
    }
    const deleteuser = (id) => {
        console.log(id)
        dispatch(deleteUser(id))
        props.setDeleteModalOpen(false)
        toast.success('Deleted Successfully')
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        It will delete permenantly
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => deleteuser(props.deleteId)} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default DeleteModal
