import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProduseScreen from './screens/ProduseScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ContactScreen from './screens/ContactScreen'
import ServicesScreen from './screens/ServicesScreen'
import ArmaniScreen from './screens/products/ArmaniScreen'
import ArtScreen from './screens/products/ArtScreen'
import BaldininiScreen from './screens/products/BaldininiScreen'
import BlumarineScreen from './screens/products/BlumarineScreen'
import BossScreen from './screens/products/BossScreen'
import BurberryScreen from './screens/products/BurberryScreen'
import BvlgariScreen from './screens/products/BvlgariScreen'
import CavalliScreen from './screens/products/CavalliScreen'
import DieselScreen from './screens/products/DieselScreen'
import DiorScreen from './screens/products/DiorScreen'
import EscadaScreen from './screens/products/EscadaScreen'
import FordScreen from './screens/products/FordScreen'
import FossilScreen from './screens/products/FossilScreen'
import FurlaScreen from './screens/products/FurlaScreen'
import GabbanaScreen from './screens/products/GabbanaScreen'
import GantScreen from './screens/products/GantScreen'
import GucciScreen from './screens/products/GucciScreen'
import HerreraScreen from './screens/products/HerreraScreen'
import HilfigerScreen from './screens/products/HilfigerScreen'
import KorsScreen from './screens/products/KorsScreen'
import LloydScreen from './screens/products/LloydScreen'
import MarcScreen from './screens/products/MarcScreen'
import MaxScreen from './screens/products/MaxScreen'
import MoschinoScreen from './screens/products/MoschinoScreen'
import PersolScreen from './screens/products/PersolScreen'
import PradaScreen from './screens/products/PradaScreen'
import PumaScreen from './screens/products/PumaScreen'
import RaybanScreen from './screens/products/RaybanScreen'
import RodenstockScreen from './screens/products/RodenstockScreen'
import SwarovskiScreen from './screens/products/SwarovskiScreen'
import ValentinoScreen from './screens/products/ValentinoScreen'
import VictoriaScreen from './screens/products/VictoriaScreen'
import VogueScreen from './screens/products/VogueScreen'




const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/services' component={ServicesScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/produse/page/:pageNumber' component={ProduseScreen} exact />
          <Route path='/armani/page/:pageNumber' component={ArmaniScreen} exact/>
          <Route path='/for-art-sake/page/:pageNumber' component={ArtScreen} exact/>
          <Route path='/baldinini/page/:pageNumber' component={BaldininiScreen} exact/>
          <Route path='/blumarine/page/:pageNumber' component={BlumarineScreen} exact />
          <Route path='/boss/page/:pageNumber' component={BossScreen} exact />
          <Route path='/burberry/page/:pageNumber' component={BurberryScreen} exact />
          <Route path='/bvlgari/page/:pageNumber' component={BvlgariScreen} exact />
          <Route path='/cavalli/page/:pageNumber' component={CavalliScreen} exact />
          <Route path='/diesel/page/:pageNumber' component={DieselScreen} exact />
          <Route path='/dior/page/:pageNumber' component={DiorScreen} exact />
          <Route path='/escada/page/:pageNumber' component={EscadaScreen} exact />
          <Route path='/tom-ford/page/:pageNumber' component={FordScreen} exact />
          <Route path='/fossil/page/:pageNumber' component={FossilScreen} exact />
          <Route path='/furla/page/:pageNumber' component={FurlaScreen} exact />
          <Route path='/gabbana/page/:pageNumber' component={GabbanaScreen} exact />
          <Route path='/gant/page/:pageNumber' component={GantScreen} exact />
          <Route path='/gucci/page/:pageNumber' component={GucciScreen} exact />
          <Route path='/carolina-herrera/page/:pageNumber' component={HerreraScreen} exact />
          <Route path='/hilfiger/page/:pageNumber' component={HilfigerScreen} exact />
          <Route path='/michael-kors/page/:pageNumber' component={KorsScreen} exact />
          <Route path='/henri-lloyd/page/:pageNumber' component={LloydScreen} exact />
          <Route path='/marc-jacobs/page/:pageNumber' component={MarcScreen} exact />
          <Route path='/max-and-co/page/:pageNumber' component={MaxScreen} exact />
          <Route path='/moschino/page/:pageNumber' component={MoschinoScreen} exact />
          <Route path='/persol/page/:pageNumber' component={PersolScreen} exact />
          <Route path='/prada/page/:pageNumber' component={PradaScreen} exact />
          <Route path='/puma/page/:pageNumber' component={PumaScreen} exact />
          <Route path='/rayban/page/:pageNumber' component={RaybanScreen} exact />
          <Route path='/rodenstock/page/:pageNumber' component={RodenstockScreen} exact />
          <Route path='/swarovski/page/:pageNumber' component={SwarovskiScreen} exact />
          <Route path='/valentino/page/:pageNumber' component={ValentinoScreen} exact />
          <Route path='/victoria-secret/page/:pageNumber' component={VictoriaScreen} exact />
          <Route path='/vogue/page/:pageNumber' component={VogueScreen} exact />    
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/produse' component={ProduseScreen} exact />
          <Route path='/armani' component={ArmaniScreen} exact />
          <Route path='/for-art-sake' component={ArtScreen} exact />
          <Route path='/baldinini' component={BaldininiScreen} exact />
          <Route path='/blumarine' component={BlumarineScreen} exact />
          <Route path='/boss' component={BossScreen} exact />
          <Route path='/burberry' component={BurberryScreen} exact />
          <Route path='/bvlgari' component={BvlgariScreen} exact />
          <Route path='/cavalli' component={CavalliScreen} exact />
          <Route path='/diesel' component={DieselScreen} exact />
          <Route path='/dior' component={DiorScreen} exact />
          <Route path='/escada' component={EscadaScreen} exact />
          <Route path='/tom-ford' component={FordScreen} exact />
          <Route path='/fossil' component={FossilScreen} exact />
          <Route path='/furla' component={FurlaScreen} exact />
          <Route path='/gabbana' component={GabbanaScreen} exact />
          <Route path='/gant' component={GantScreen} exact />
          <Route path='/gucci' component={GucciScreen} exact />
          <Route path='/carolina-herrera' component={HerreraScreen} exact />
          <Route path='/hilfiger' component={HilfigerScreen} exact />
          <Route path='/michael-kors' component={KorsScreen} exact />
          <Route path='/henri-lloyd' component={LloydScreen} exact />
          <Route path='/marc-jacobs' component={MarcScreen} exact />
          <Route path='/max-and-co' component={MaxScreen} exact />
          <Route path='/moschino' component={MoschinoScreen} exact />
          <Route path='/persol' component={PersolScreen} exact />
          <Route path='/prada' component={PradaScreen} exact />
          <Route path='/puma' component={PumaScreen} exact />
          <Route path='/rayban' component={RaybanScreen} exact />
          <Route path='/rodenstock' component={RodenstockScreen} exact />
          <Route path='/swarovski' component={SwarovskiScreen} exact />
          <Route path='/valentino' component={ValentinoScreen} exact />
          <Route path='/victoria-secret' component={VictoriaScreen} exact />
          <Route path='/vogue' component={VogueScreen} exact />    
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
