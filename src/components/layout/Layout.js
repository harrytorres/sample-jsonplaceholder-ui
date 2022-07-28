
import Header from "../partials/Header"


export default function Layout(props){
    return(
        <div>
           <Header/>
            <main>
                {props.children}
            </main>
            

        </div>
    )
}