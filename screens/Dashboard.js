import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../components/About';
import History from '../components/History';
import HomeScreen from '../components/HomeScreen';
import SignOut from './SignOut';
import Profile from '../components/Profile'
import CustomDrawer from '../components/CustomDrawer';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
const Drawer = createDrawerNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons'
import Messages from './Message/Messages';
import Settings from '../components/Settings';
import FontAwesome from'react-native-vector-icons/FontAwesome'
import AntDesign from'react-native-vector-icons/AntDesign'
import TabNavigator from '../Navigations/TabNavigator';

const Dashboard = ({ navigation }) => {
    return (
        <Drawer.Navigator drawerContent={props =><CustomDrawer {...props}/>}>
       
            <Drawer.Screen 
            name ="HomeScreen" 
            component={TabNavigator} 
            options={{
               drawerIcon:()=>(
                <Ionicons name='home-outline' size={22}  />

               )
            }}/>
            <Drawer.Screen name="Profile" component={Profile} 
            options={{
                drawerIcon:()=>(
                 <Ionicons name='person-outline' size={22}  />
 
                )
             }}/> 
             <Drawer.Screen name="Messages" component={Messages}
             options={{
                drawerIcon:()=>(
                 <Ionicons name='chatbox-ellipses-outline' size={22}  />
 
                )
             }} />
            <Drawer.Screen name="History" component={History} 
            options={{
                drawerIcon:()=>(
                 <FontAwesome name='history' size={22}  />
 
                )
             }}/> 
            <Drawer.Screen name="Settings" component={Settings} 
            options={{
                drawerIcon:()=>(
                 <Ionicons name='settings-outline' size={22} />
                )
             }}/>
             <Drawer.Screen name="About" component={About} 
            options={{
                drawerIcon:()=>(
                 <AntDesign name='info' size={22}  />
                )
             }}/>
        
        </Drawer.Navigator >
    );
}

export default Dashboard;