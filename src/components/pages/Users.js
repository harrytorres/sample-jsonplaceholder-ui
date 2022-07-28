
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import React from 'react'
import axios from 'axios'


class User extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }


  componentDidMount(){
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users'
    })
    .then(response => {
      this.setState({ users: response.data })
    })
  }


  
  
  render(){
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-5">
          {this.state.users.map((person) => (
           <li key={person.name} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">

                  
                    <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                  

                    <p className="mt-1 text-gray-500 text-sm truncate">
                    Username: 
                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{person.username}</span>
                    </p>

                  <h3 className="text-gray-500 text-sm font-bold truncate mt-2">Personal Address: </h3>

                  <p className="mt-1 text-gray-500 text-sm truncate">
                    City: 
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {person['address']['city']}
                   </span>
                   
                   </p>
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Geo: 
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {person['address']['geo']['lat'] } , {person['address']['geo']['lat']}
                  </span>
                    
                  </p>
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Street: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person['address']['street']}
                    </span>
                  </p>
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Suite: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person['address']['suite']}
                    </span>
                  </p>
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Zip code: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person['address']['zipcode']}
                    </span>
                  </p>

                  <h3 className="text-gray-500 text-sm font-bold truncate mt-2">Other Info: </h3>

                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Phone: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.phone}
                    </span>
                  </p>

                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Website: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.website}
                    </span>
                  </p>

                  <h3 className="text-gray-500 text-sm font-bold truncate mt-2">Company Info: </h3>

                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Company name: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person['company']['name']}
                    </span>
                  </p>

                  <p className="mt-1 text-gray-500 text-sm truncate">
                    Phrase: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person['company']['catchPhrase']}
                    </span>
                  </p>

                  <p className="mt-1 text-gray-500 text-sm truncate">
                    BS: 
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person['company']['bs']}
                    </span>
                  </p>
                 
                </div>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <div
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Email</span>
                    </div>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <div
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Call</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
  )
  }
    
}

export default User