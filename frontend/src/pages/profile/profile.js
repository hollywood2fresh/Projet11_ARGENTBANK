import './profile.scss'
import NavBar from '../../components/navBar/navBar'
import EditName from '../../containers/editName/editName'
import Account from '../../components/account/account'
import Footer from '../../components/footer/footer'
import { accountsData } from '../../data/accountsData'

export default function profile() {
  return (
    <>
        <NavBar/>
        <div className="user_container">
            <main className="main bg-dark">
                <div className="headerUser">
                    <EditName/>
                </div>
                <h2 className="sr-only">Accounts</h2>
                    {accountsData.map(item => (
                        <Account
                            key= { item.title }
                            title= { item.title }
                            amount= { item.amount }
                            description= { item.description }
                        />
                    ))}
            </main>
        </div>
        <Footer/>
    </>
  )
}
