
import React from 'react'
import axios from 'axios'
// import AddUserModal from '../partials/AddUserModal'


class Posts extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }


  componentDidMount(){
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
    .then(response => {
      this.setState({ posts: response.data })
    })
  }


  
  
  render(){
    return (
            <div className="px-4 sm:px-6 lg:px-8 mt-5">
                 <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Posts</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit
                    </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add Post
                    </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="table-auto divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                    Post ID
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    User ID
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Posts
                                    </th>
                                    <th scope="col" className="py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white">
                                {this.state.posts.map((post, personIdx) => (
                                    <tr key={post.email} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                            
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.id}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.userId}</td>
                                    <td className="text-ellipsis overflow-hidden px-1 py-2 text-sm text-gray-500">{post.title}</td>
                                    <td className="text-ellipsis overflow-hidden px-1 py-2 text-sm text-gray-500">{post.body}</td>

                                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit<span className="sr-only">, {post.title}</span>
                                        </a>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
    
}

export default Posts