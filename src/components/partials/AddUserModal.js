import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import User from '../pages/Users';



const useStyles = theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
});





class AddUserModal extends Component{
   
   constructor(props){
    super(props)
    this.state = {
        setOpen: false,
        open: false,
        users: {},
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    
   }


   

   handleOpen = () => {
        this.setState({ 
            setOpen: true,
            open: true
        })
   }

   handleClose = () => {
        this.setState({ 
            setOpen: false,
            open: false,
        })
    }


    handleInputChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        }) 
    }

     
    addUser = (event) => {
        event.preventDefault();
        const userData = this.state.user;

       axios
            .post("http://jsonplaceholder.typicode.com/users", userData)
            .then(res => {
                this.setState({ users: res.data })
                this.setState({
                    setOpen: false,
                    open: false
                })

            })
            .catch(err => console.log(err));
    };
    

   render(){   
    const {classes} = this.props;
    return (
        <>
        <div>
            <Button variant="contained" color="secondary" onClick={this.handleOpen}>
                Add User
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={this.state.open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                <Fade in={this.state.open}>
                    <div className={classes.paper}>
                        <form className="space-y-8 divide-y divide-gray-500" onSubmit={this.addUser}>
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">

                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                    </div>

                                    <div className="space-y-6 sm:space-y-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">

                                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Full name
                                            </label>

                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <input
                                                    onChange={this.handleInputChange}
                                                    required
                                                    type="text"
                                                    name="fullname"
                                                    id="fullname"
                                                    autoComplete="given-name"
                                                    className="max-w-lg block w-full shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-gray-600 rounded-md"
                                                    />
                                            </div>

                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">

                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                User name
                                            </label>

                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <input
                                                    onChange={this.handleInputChange}
                                                    required
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    autoComplete="family-name"
                                                    className="max-w-lg block w-full shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-gray-600 rounded-md"
                                                    />
                                            </div>

                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Email address
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <input
                                                    onChange={this.handleInputChange}
                                                    required
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block max-w-lg w-full shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-600 rounded-md"
                                                    />
                                            </div>
                                        </div>

                                        <div className="pt-5">
                                            <div className="flex justify-end">
                                                    <Button variant="contained" color="secondary" onClick={this.handleClose}>
                                                           Cancel
                                                    </Button>

                                                    <button
                                                       
                                                        type="submit"
                                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                        Save
                                                    </button>
                                            </div>
                                        </div>
                                    </div>        
                                </div>                        

                            </div>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>

                <User newUser={this.state.users}/>
    </>
    );
   }
}



export default withStyles(useStyles, {withTheme: true})(AddUserModal)


